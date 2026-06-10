# SQUADFLOW Deploy Script
# Usage: Right-click → Run with PowerShell
# Or from terminal: .\deploy.ps1

$ErrorActionPreference = "Stop"
$Root    = "C:\Users\Administrator\SQUADFLOW"
$Node    = "C:\Program Files\nodejs\node.exe"
$NgCli   = "$Root\apps\portal\node_modules\@angular\cli\bin\ng.js"
$Backend = "$Root\backend\api\server.js"
$FrontDist = "$Root\apps\portal\dist\portal\browser"
$FrontDest = "$Root\backend\frontend"

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  SQUADFLOW Deploy" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 1. Build Angular
Write-Host "[1/3] Building Angular..." -ForegroundColor Yellow
Set-Location "$Root\apps\portal"
& $Node $NgCli build 2>&1 | Select-Object -Last 5
if ($LASTEXITCODE -ne 0) { Write-Host "Build failed!" -ForegroundColor Red; exit 1 }
Write-Host "Build done." -ForegroundColor Green

# 2. Copy dist to backend
Write-Host ""
Write-Host "[2/3] Deploying to backend..." -ForegroundColor Yellow
Copy-Item -Recurse -Force "$FrontDist\*" "$FrontDest\"
Write-Host "Deploy done." -ForegroundColor Green

# 3. Restart server
Write-Host ""
Write-Host "[3/3] Restarting server..." -ForegroundColor Yellow
Get-Process -Name "node" -ErrorAction SilentlyContinue | Stop-Process -Force
Start-Sleep -Milliseconds 600
$env:Path = "C:\Program Files\nodejs;" + $env:Path
Start-Process -FilePath $Node -ArgumentList $Backend `
              -WorkingDirectory "$Root\backend\api" -WindowStyle Hidden
Start-Sleep -Seconds 2

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "  Done!  http://localhost:3000" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
