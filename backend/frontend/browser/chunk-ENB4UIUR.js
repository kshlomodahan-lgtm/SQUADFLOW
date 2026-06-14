import {
  NeuralNetComponent
} from "./chunk-6BJOJE7S.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-ZG4ME4LP.js";
import {
  DialogActionsComponent,
  DialogComponent,
  DialogsModule,
  InputsModule
} from "./chunk-BYBLGOFY.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-AVTM4YYQ.js";
import {
  Dir
} from "./chunk-7BTXUMFJ.js";
import {
  ButtonComponent,
  ButtonsModule,
  IndicatorsModule,
  LoaderComponent
} from "./chunk-BV74N4V5.js";
import "./chunk-YZNXQPNO.js";
import {
  FormsModule,
  NgSelectOption,
  ReactiveFormsModule,
  ɵNgSelectMultipleOption
} from "./chunk-4FOUEPN2.js";
import {
  CommonModule,
  Component,
  HttpClient,
  __spreadProps,
  __spreadValues,
  computed,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-VR4UVLCZ.js";

// src/app/features/projects/workspace/ws-connectors/connector-catalog.ts
var CONNECTOR_CATALOG = [
  // ── 1. Relational DB ────────────────────────────────────────
  {
    id: "RELATIONAL_DB",
    label: "\u05D1\u05E1\u05D9\u05E1\u05D9 \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05D9\u05D7\u05E1\u05D9\u05D9\u05DD",
    icon: "\u{1F5C4}\uFE0F",
    color: "#3b82f6",
    types: [
      {
        typeCode: "MSSQL",
        typeName: "SQL Server",
        icon: "\u{1F537}",
        category: "RELATIONAL_DB",
        description: "Microsoft SQL Server \u2014 \u05D7\u05D9\u05D1\u05D5\u05E8 \u05D9\u05E9\u05D9\u05E8 \u05DC\u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05E2\u05E1\u05E7\u05D9\u05D9\u05DD",
        fields: [
          { key: "host", label: "\u05E9\u05E8\u05EA (Host)", type: "text", required: true, placeholder: "localhost \u05D0\u05D5 IP", ltr: true },
          { key: "port", label: "\u05E4\u05D5\u05E8\u05D8", type: "number", default: "1433" },
          { key: "database", label: "\u05E9\u05DD \u05DE\u05E1\u05D3 \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD", type: "text", required: true, ltr: true },
          { key: "user", label: "\u05DE\u05E9\u05EA\u05DE\u05E9", type: "text", required: true, ltr: true },
          { key: "password", label: "\u05E1\u05D9\u05E1\u05DE\u05D4", type: "password", required: true },
          { key: "encrypt", label: "\u05D4\u05E6\u05E4\u05E0\u05D4 (TLS)", type: "boolean", default: "true" },
          { key: "trustServerCert", label: "\u05E1\u05DE\u05D5\u05DA \u05E2\u05DC \u05D0\u05D9\u05E9\u05D5\u05E8 \u05E2\u05E6\u05DE\u05D9", type: "boolean", default: "false" }
        ]
      },
      {
        typeCode: "MYSQL",
        typeName: "MySQL",
        icon: "\u{1F42C}",
        category: "RELATIONAL_DB",
        description: "MySQL / MariaDB \u2014 \u05D4\u05E0\u05E4\u05D5\u05E5 \u05D1\u05D9\u05D5\u05EA\u05E8 \u05D1-web applications",
        fields: [
          { key: "host", label: "\u05E9\u05E8\u05EA", type: "text", required: true, ltr: true },
          { key: "port", label: "\u05E4\u05D5\u05E8\u05D8", type: "number", default: "3306" },
          { key: "database", label: "\u05DE\u05E1\u05D3 \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD", type: "text", required: true, ltr: true },
          { key: "user", label: "\u05DE\u05E9\u05EA\u05DE\u05E9", type: "text", required: true, ltr: true },
          { key: "password", label: "\u05E1\u05D9\u05E1\u05DE\u05D4", type: "password", required: true },
          { key: "ssl", label: "SSL", type: "boolean", default: "false" }
        ]
      },
      {
        typeCode: "POSTGRESQL",
        typeName: "PostgreSQL",
        icon: "\u{1F418}",
        category: "RELATIONAL_DB",
        description: "PostgreSQL \u2014 \u05DE\u05E1\u05D3 \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05D9\u05D7\u05E1\u05D9 \u05E4\u05EA\u05D5\u05D7 \u05D5\u05DE\u05EA\u05E7\u05D3\u05DD",
        fields: [
          { key: "host", label: "\u05E9\u05E8\u05EA", type: "text", required: true, ltr: true },
          { key: "port", label: "\u05E4\u05D5\u05E8\u05D8", type: "number", default: "5432" },
          { key: "database", label: "\u05DE\u05E1\u05D3 \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD", type: "text", required: true, ltr: true },
          { key: "user", label: "\u05DE\u05E9\u05EA\u05DE\u05E9", type: "text", required: true, ltr: true },
          { key: "password", label: "\u05E1\u05D9\u05E1\u05DE\u05D4", type: "password", required: true },
          { key: "sslMode", label: "SSL Mode", type: "select", options: ["disable", "require", "verify-full"], default: "require", ltr: true }
        ]
      },
      {
        typeCode: "ORACLE",
        typeName: "Oracle DB",
        icon: "\u{1F534}",
        category: "RELATIONAL_DB",
        description: "Oracle Database \u2014 Enterprise grade",
        fields: [
          { key: "host", label: "\u05E9\u05E8\u05EA", type: "text", required: true, ltr: true },
          { key: "port", label: "\u05E4\u05D5\u05E8\u05D8", type: "number", default: "1521" },
          { key: "serviceName", label: "Service Name", type: "text", required: true, placeholder: "orcl", ltr: true },
          { key: "user", label: "\u05DE\u05E9\u05EA\u05DE\u05E9", type: "text", required: true, ltr: true },
          { key: "password", label: "\u05E1\u05D9\u05E1\u05DE\u05D4", type: "password", required: true }
        ]
      },
      {
        typeCode: "SQLITE",
        typeName: "SQLite",
        icon: "\u{1F4E6}",
        category: "RELATIONAL_DB",
        description: "SQLite \u2014 \u05E7\u05D5\u05D1\u05E5 \u05DE\u05E1\u05D3 \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05DE\u05E7\u05D5\u05DE\u05D9",
        fields: [
          { key: "filePath", label: "\u05E0\u05EA\u05D9\u05D1 \u05E7\u05D5\u05D1\u05E5", type: "text", required: true, placeholder: "/data/mydb.sqlite", ltr: true }
        ]
      },
      {
        typeCode: "SUPABASE",
        typeName: "Supabase",
        icon: "\u26A1",
        category: "RELATIONAL_DB",
        description: "Supabase \u2014 Firebase alternative \u05E2\u05DD PostgreSQL",
        fields: [
          { key: "projectUrl", label: "Project URL", type: "text", required: true, placeholder: "https://xxx.supabase.co", ltr: true },
          { key: "serviceRoleKey", label: "Service Role Key", type: "password", required: true, hint: "\u05E0\u05D9\u05D4\u05D5\u05DC \u05DE\u05DC\u05D0 \u2014 \u05E9\u05DE\u05D5\u05E8 \u05D1\u05E1\u05D5\u05D3!" },
          { key: "anonKey", label: "Anon Key", type: "password", hint: "\u05DC\u05D2\u05D9\u05E9\u05D4 \u05E6\u05D9\u05D1\u05D5\u05E8\u05D9\u05EA" }
        ]
      }
    ]
  },
  // ── 2. NoSQL DB ─────────────────────────────────────────────
  {
    id: "NOSQL_DB",
    label: "NoSQL",
    icon: "\u{1F343}",
    color: "#10b981",
    types: [
      {
        typeCode: "MONGODB",
        typeName: "MongoDB",
        icon: "\u{1F343}",
        category: "NOSQL_DB",
        description: "MongoDB \u2014 Document database",
        fields: [
          { key: "connectionString", label: "Connection String", type: "text", placeholder: "mongodb+srv://...", ltr: true, hint: "\u05D0\u05D5 \u05DE\u05DC\u05D0 host/port/database \u05D1\u05E0\u05E4\u05E8\u05D3" },
          { key: "host", label: "Host (\u05D7\u05DC\u05D5\u05E4\u05D9)", type: "text", ltr: true },
          { key: "port", label: "\u05E4\u05D5\u05E8\u05D8", type: "number", default: "27017" },
          { key: "database", label: "Database", type: "text", ltr: true },
          { key: "user", label: "\u05DE\u05E9\u05EA\u05DE\u05E9", type: "text", ltr: true },
          { key: "password", label: "\u05E1\u05D9\u05E1\u05DE\u05D4", type: "password" }
        ]
      },
      {
        typeCode: "REDIS",
        typeName: "Redis",
        icon: "\u{1F534}",
        category: "NOSQL_DB",
        description: "Redis \u2014 In-memory data store",
        fields: [
          { key: "host", label: "Host", type: "text", required: true, default: "localhost", ltr: true },
          { key: "port", label: "\u05E4\u05D5\u05E8\u05D8", type: "number", default: "6379" },
          { key: "password", label: "\u05E1\u05D9\u05E1\u05DE\u05D4", type: "password" },
          { key: "dbIndex", label: "DB Index", type: "number", default: "0" },
          { key: "tls", label: "TLS", type: "boolean", default: "false" }
        ]
      },
      {
        typeCode: "ELASTICSEARCH",
        typeName: "Elasticsearch",
        icon: "\u{1F50D}",
        category: "NOSQL_DB",
        description: "Elasticsearch \u2014 \u05D7\u05D9\u05E4\u05D5\u05E9 \u05D5\u05E0\u05D9\u05EA\u05D5\u05D7 \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD",
        fields: [
          { key: "host", label: "Host", type: "text", required: true, placeholder: "https://myhost:9200", ltr: true },
          { key: "apiKey", label: "API Key", type: "password" },
          { key: "user", label: "\u05DE\u05E9\u05EA\u05DE\u05E9", type: "text", ltr: true },
          { key: "password", label: "\u05E1\u05D9\u05E1\u05DE\u05D4", type: "password" }
        ]
      },
      {
        typeCode: "FIRESTORE",
        typeName: "Firestore",
        icon: "\u{1F525}",
        category: "NOSQL_DB",
        description: "Google Firestore \u2014 NoSQL document database",
        fields: [
          { key: "projectId", label: "Project ID", type: "text", required: true, ltr: true },
          { key: "serviceAccountJson", label: "Service Account JSON", type: "textarea", required: true, hint: "JSON \u05DE\u05DC\u05D0 \u05DE-Firebase Console" }
        ]
      },
      {
        typeCode: "DYNAMODB",
        typeName: "DynamoDB",
        icon: "\u2601\uFE0F",
        category: "NOSQL_DB",
        description: "AWS DynamoDB \u2014 Serverless NoSQL",
        fields: [
          { key: "region", label: "AWS Region", type: "select", required: true, options: ["us-east-1", "us-west-2", "eu-west-1", "eu-central-1", "ap-southeast-1", "il-central-1"], ltr: true },
          { key: "accessKey", label: "Access Key ID", type: "text", required: true, ltr: true },
          { key: "secretKey", label: "Secret Key", type: "password", required: true }
        ]
      }
    ]
  },
  // ── 3. Data Warehouses ───────────────────────────────────────
  {
    id: "DATA_WAREHOUSE",
    label: "Data Warehouses",
    icon: "\u{1F3ED}",
    color: "#8b5cf6",
    types: [
      {
        typeCode: "SNOWFLAKE",
        typeName: "Snowflake",
        icon: "\u2744\uFE0F",
        category: "DATA_WAREHOUSE",
        fields: [
          { key: "account", label: "Account", type: "text", required: true, placeholder: "myorg-myaccount", ltr: true },
          { key: "database", label: "Database", type: "text", required: true, ltr: true },
          { key: "schema", label: "Schema", type: "text", default: "PUBLIC", ltr: true },
          { key: "warehouse", label: "Warehouse", type: "text", required: true, ltr: true },
          { key: "user", label: "\u05DE\u05E9\u05EA\u05DE\u05E9", type: "text", required: true, ltr: true },
          { key: "password", label: "\u05E1\u05D9\u05E1\u05DE\u05D4", type: "password", required: true }
        ]
      },
      {
        typeCode: "BIGQUERY",
        typeName: "Google BigQuery",
        icon: "\u{1F4CA}",
        category: "DATA_WAREHOUSE",
        fields: [
          { key: "projectId", label: "Project ID", type: "text", required: true, ltr: true },
          { key: "dataset", label: "Dataset", type: "text", ltr: true },
          { key: "serviceAccountJson", label: "Service Account JSON", type: "textarea", required: true }
        ]
      },
      {
        typeCode: "REDSHIFT",
        typeName: "AWS Redshift",
        icon: "\u{1F534}",
        category: "DATA_WAREHOUSE",
        fields: [
          { key: "host", label: "Host", type: "text", required: true, ltr: true },
          { key: "port", label: "\u05E4\u05D5\u05E8\u05D8", type: "number", default: "5439" },
          { key: "database", label: "Database", type: "text", required: true, ltr: true },
          { key: "user", label: "\u05DE\u05E9\u05EA\u05DE\u05E9", type: "text", required: true, ltr: true },
          { key: "password", label: "\u05E1\u05D9\u05E1\u05DE\u05D4", type: "password", required: true }
        ]
      },
      {
        typeCode: "DATABRICKS",
        typeName: "Databricks",
        icon: "\u26A1",
        category: "DATA_WAREHOUSE",
        fields: [
          { key: "serverHostname", label: "Server Hostname", type: "text", required: true, ltr: true },
          { key: "httpPath", label: "HTTP Path", type: "text", required: true, ltr: true },
          { key: "token", label: "Access Token", type: "password", required: true }
        ]
      }
    ]
  },
  // ── 4. AI / LLM ─────────────────────────────────────────────
  {
    id: "AI_LLM",
    label: "AI \u05D5\u05DE\u05D5\u05D3\u05DC\u05D9 \u05E9\u05E4\u05D4",
    icon: "\u{1F916}",
    color: "#f59e0b",
    types: [
      {
        typeCode: "OPENAI",
        typeName: "OpenAI",
        icon: "\u{1F7E2}",
        category: "AI_LLM",
        description: "GPT-4, GPT-4o, DALL-E, Whisper",
        fields: [
          { key: "apiKey", label: "API Key", type: "password", required: true },
          { key: "orgId", label: "Organization", type: "text", placeholder: "org-...", ltr: true },
          { key: "defaultModel", label: "\u05DE\u05D5\u05D3\u05DC \u05D1\u05E8\u05D9\u05E8\u05EA \u05DE\u05D7\u05D3\u05DC", type: "select", options: ["gpt-4o", "gpt-4o-mini", "gpt-4-turbo", "gpt-3.5-turbo"], default: "gpt-4o", ltr: true },
          { key: "baseUrl", label: "Base URL (Custom)", type: "text", placeholder: "https://api.openai.com/v1", ltr: true }
        ]
      },
      {
        typeCode: "ANTHROPIC",
        typeName: "Anthropic (Claude)",
        icon: "\u{1F9E0}",
        category: "AI_LLM",
        description: "Claude 4, Claude 3.5 Sonnet/Haiku",
        fields: [
          { key: "apiKey", label: "API Key", type: "password", required: true },
          { key: "defaultModel", label: "\u05DE\u05D5\u05D3\u05DC", type: "select", options: ["claude-sonnet-4-6", "claude-opus-4-8", "claude-haiku-4-5-20251001"], default: "claude-sonnet-4-6", ltr: true }
        ]
      },
      {
        typeCode: "GOOGLE_GEMINI",
        typeName: "Google Gemini",
        icon: "\u{1F4AB}",
        category: "AI_LLM",
        fields: [
          { key: "apiKey", label: "API Key", type: "password", required: true },
          { key: "model", label: "\u05DE\u05D5\u05D3\u05DC", type: "select", options: ["gemini-2.0-flash", "gemini-1.5-pro", "gemini-1.5-flash"], default: "gemini-2.0-flash", ltr: true },
          { key: "projectId", label: "Project ID", type: "text", ltr: true }
        ]
      },
      {
        typeCode: "AZURE_OPENAI",
        typeName: "Azure OpenAI",
        icon: "\u2601\uFE0F",
        category: "AI_LLM",
        fields: [
          { key: "endpoint", label: "Endpoint", type: "text", required: true, placeholder: "https://myresource.openai.azure.com/", ltr: true },
          { key: "apiKey", label: "API Key", type: "password", required: true },
          { key: "deploymentName", label: "Deployment Name", type: "text", required: true, ltr: true },
          { key: "apiVersion", label: "API Version", type: "text", default: "2025-01-01-preview", ltr: true }
        ]
      },
      {
        typeCode: "OLLAMA",
        typeName: "Ollama (Local)",
        icon: "\u{1F999}",
        category: "AI_LLM",
        description: "\u05DE\u05D5\u05D3\u05DC\u05D9\u05DD \u05DE\u05E7\u05D5\u05DE\u05D9\u05D9\u05DD \u2014 llama3, mistral, codellama",
        fields: [
          { key: "baseUrl", label: "Base URL", type: "text", required: true, default: "http://localhost:11434", ltr: true },
          { key: "model", label: "\u05DE\u05D5\u05D3\u05DC", type: "text", default: "llama3.2", placeholder: "llama3.2, mistral, codellama", ltr: true }
        ]
      },
      {
        typeCode: "HUGGINGFACE",
        typeName: "Hugging Face",
        icon: "\u{1F917}",
        category: "AI_LLM",
        fields: [
          { key: "apiToken", label: "API Token", type: "password", required: true },
          { key: "modelId", label: "Model ID", type: "text", placeholder: "mistralai/Mistral-7B-v0.1", ltr: true },
          { key: "endpoint", label: "Endpoint URL", type: "text", hint: "\u05DC\u05E0\u05E7\u05D5\u05D3\u05EA \u05E7\u05E6\u05D4 \u05E4\u05E8\u05D8\u05D9\u05EA \u05D1\u05DC\u05D1\u05D3", ltr: true }
        ]
      },
      {
        typeCode: "MISTRAL",
        typeName: "Mistral AI",
        icon: "\u{1F32C}\uFE0F",
        category: "AI_LLM",
        fields: [
          { key: "apiKey", label: "API Key", type: "password", required: true },
          { key: "model", label: "\u05DE\u05D5\u05D3\u05DC", type: "select", options: ["mistral-large-latest", "mistral-small-latest", "codestral-latest"], default: "mistral-large-latest", ltr: true }
        ]
      },
      {
        typeCode: "COHERE",
        typeName: "Cohere",
        icon: "\u2699\uFE0F",
        category: "AI_LLM",
        fields: [
          { key: "apiKey", label: "API Key", type: "password", required: true },
          { key: "model", label: "\u05DE\u05D5\u05D3\u05DC", type: "select", options: ["command-r-plus", "command-r", "command"], default: "command-r-plus", ltr: true }
        ]
      }
    ]
  },
  // ── 5. Messaging ─────────────────────────────────────────────
  {
    id: "MESSAGING",
    label: "\u05D4\u05D5\u05D3\u05E2\u05D5\u05EA \u05D5\u05E9\u05D9\u05D7\u05D4",
    icon: "\u{1F4AC}",
    color: "#06b6d4",
    types: [
      {
        typeCode: "SLACK",
        typeName: "Slack",
        icon: "\u{1F4AC}",
        category: "MESSAGING",
        fields: [
          { key: "botToken", label: "Bot Token", type: "password", required: true, hint: "xoxb-..." },
          { key: "channel", label: "\u05E2\u05E8\u05D5\u05E5 \u05D1\u05E8\u05D9\u05E8\u05EA \u05DE\u05D7\u05D3\u05DC", type: "text", placeholder: "#general", ltr: true },
          { key: "webhookUrl", label: "Webhook URL", type: "text", ltr: true }
        ]
      },
      {
        typeCode: "TEAMS",
        typeName: "Microsoft Teams",
        icon: "\u{1F7E6}",
        category: "MESSAGING",
        fields: [
          { key: "tenantId", label: "Tenant ID", type: "text", required: true, ltr: true },
          { key: "clientId", label: "Client ID", type: "text", required: true, ltr: true },
          { key: "clientSecret", label: "Client Secret", type: "password", required: true },
          { key: "webhookUrl", label: "Webhook URL", type: "text", ltr: true }
        ]
      },
      {
        typeCode: "WHATSAPP",
        typeName: "WhatsApp Business",
        icon: "\u{1F7E2}",
        category: "MESSAGING",
        fields: [
          { key: "phoneNumberId", label: "Phone Number ID", type: "text", required: true, ltr: true },
          { key: "accessToken", label: "Access Token", type: "password", required: true },
          { key: "verifyToken", label: "Verify Token", type: "text", ltr: true },
          { key: "appSecret", label: "App Secret", type: "password" }
        ]
      },
      {
        typeCode: "TELEGRAM",
        typeName: "Telegram",
        icon: "\u2708\uFE0F",
        category: "MESSAGING",
        fields: [
          { key: "botToken", label: "Bot Token", type: "password", required: true, hint: "\u05DE-@BotFather" },
          { key: "chatId", label: "Chat ID", type: "text", ltr: true }
        ]
      },
      {
        typeCode: "TWILIO",
        typeName: "Twilio (SMS/Voice)",
        icon: "\u{1F4F1}",
        category: "MESSAGING",
        fields: [
          { key: "accountSid", label: "Account SID", type: "text", required: true, ltr: true },
          { key: "authToken", label: "Auth Token", type: "password", required: true },
          { key: "fromNumber", label: "\u05DE\u05E1\u05E4\u05E8 \u05E9\u05D5\u05DC\u05D7", type: "text", required: true, placeholder: "+1xxxxxxxxxx", ltr: true }
        ]
      },
      {
        typeCode: "DISCORD",
        typeName: "Discord",
        icon: "\u{1F3AE}",
        category: "MESSAGING",
        fields: [
          { key: "botToken", label: "Bot Token", type: "password" },
          { key: "webhookUrl", label: "Webhook URL", type: "text", ltr: true }
        ]
      }
    ]
  },
  // ── 6. Email ─────────────────────────────────────────────────
  {
    id: "EMAIL",
    label: '\u05D3\u05D5\u05D0"\u05DC',
    icon: "\u{1F4E7}",
    color: "#ef4444",
    types: [
      {
        typeCode: "SMTP",
        typeName: "SMTP (Generic)",
        icon: "\u{1F4EC}",
        category: "EMAIL",
        fields: [
          { key: "host", label: "SMTP Host", type: "text", required: true, ltr: true },
          { key: "port", label: "\u05E4\u05D5\u05E8\u05D8", type: "number", default: "587" },
          { key: "user", label: "\u05DE\u05E9\u05EA\u05DE\u05E9", type: "text", required: true, ltr: true },
          { key: "password", label: "\u05E1\u05D9\u05E1\u05DE\u05D4", type: "password", required: true },
          { key: "fromAddress", label: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05E9\u05D5\u05DC\u05D7", type: "text", required: true, placeholder: "noreply@company.com", ltr: true },
          { key: "tls", label: "TLS/SSL", type: "boolean", default: "true" }
        ]
      },
      {
        typeCode: "SENDGRID",
        typeName: "SendGrid",
        icon: "\u{1F4E4}",
        category: "EMAIL",
        fields: [
          { key: "apiKey", label: "API Key", type: "password", required: true },
          { key: "fromAddress", label: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05E9\u05D5\u05DC\u05D7", type: "text", required: true, ltr: true }
        ]
      },
      {
        typeCode: "MAILGUN",
        typeName: "Mailgun",
        icon: "\u{1F52B}",
        category: "EMAIL",
        fields: [
          { key: "apiKey", label: "API Key", type: "password", required: true },
          { key: "domain", label: "Domain", type: "text", required: true, ltr: true },
          { key: "region", label: "Region", type: "select", options: ["US", "EU"], default: "US", ltr: true },
          { key: "fromAddress", label: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05E9\u05D5\u05DC\u05D7", type: "text", ltr: true }
        ]
      },
      {
        typeCode: "AMAZON_SES",
        typeName: "Amazon SES",
        icon: "\u2601\uFE0F",
        category: "EMAIL",
        fields: [
          { key: "region", label: "AWS Region", type: "select", required: true, options: ["us-east-1", "us-west-2", "eu-west-1", "eu-central-1"], ltr: true },
          { key: "accessKey", label: "Access Key", type: "text", required: true, ltr: true },
          { key: "secretKey", label: "Secret Key", type: "password", required: true },
          { key: "fromAddress", label: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05E9\u05D5\u05DC\u05D7", type: "text", required: true, ltr: true }
        ]
      },
      {
        typeCode: "BREVO",
        typeName: "Brevo (Sendinblue)",
        icon: "\u{1F499}",
        category: "EMAIL",
        fields: [
          { key: "apiKey", label: "API Key", type: "password", required: true },
          { key: "fromAddress", label: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05E9\u05D5\u05DC\u05D7", type: "text", ltr: true }
        ]
      },
      {
        typeCode: "POSTMARK",
        typeName: "Postmark",
        icon: "\u{1F4EE}",
        category: "EMAIL",
        fields: [
          { key: "serverToken", label: "Server API Token", type: "password", required: true }
        ]
      }
    ]
  },
  // ── 7. Push Notifications ────────────────────────────────────
  {
    id: "PUSH_NOTIFY",
    label: "Push Notifications",
    icon: "\u{1F514}",
    color: "#f97316",
    types: [
      {
        typeCode: "FIREBASE_FCM",
        typeName: "Firebase FCM",
        icon: "\u{1F525}",
        category: "PUSH_NOTIFY",
        fields: [
          { key: "projectId", label: "Project ID", type: "text", required: true, ltr: true },
          { key: "serviceAccountJson", label: "Service Account JSON", type: "textarea", required: true }
        ]
      },
      {
        typeCode: "ONESIGNAL",
        typeName: "OneSignal",
        icon: "\u{1F514}",
        category: "PUSH_NOTIFY",
        fields: [
          { key: "appId", label: "App ID", type: "text", required: true, ltr: true },
          { key: "restApiKey", label: "REST API Key", type: "password", required: true }
        ]
      },
      {
        typeCode: "APPLE_APNS",
        typeName: "Apple APNs",
        icon: "\u{1F34E}",
        category: "PUSH_NOTIFY",
        fields: [
          { key: "teamId", label: "Team ID", type: "text", required: true, ltr: true },
          { key: "keyId", label: "Key ID", type: "text", required: true, ltr: true },
          { key: "privateKey", label: "Private Key (.p8)", type: "textarea", required: true },
          { key: "bundleId", label: "Bundle ID", type: "text", required: true, ltr: true }
        ]
      }
    ]
  },
  // ── 8. Cloud Storage ─────────────────────────────────────────
  {
    id: "STORAGE",
    label: "\u05D0\u05D7\u05E1\u05D5\u05DF \u05E7\u05D1\u05E6\u05D9\u05DD",
    icon: "\u2601\uFE0F",
    color: "#64748b",
    types: [
      {
        typeCode: "AWS_S3",
        typeName: "AWS S3",
        icon: "\u{1FAA3}",
        category: "STORAGE",
        fields: [
          { key: "region", label: "Region", type: "select", required: true, options: ["us-east-1", "us-west-2", "eu-west-1", "eu-central-1", "ap-southeast-1", "il-central-1"], ltr: true },
          { key: "bucket", label: "Bucket", type: "text", required: true, ltr: true },
          { key: "accessKey", label: "Access Key", type: "text", required: true, ltr: true },
          { key: "secretKey", label: "Secret Key", type: "password", required: true },
          { key: "endpoint", label: "Custom Endpoint", type: "text", hint: "\u05DC\u05D0\u05D7\u05E1\u05D5\u05DF \u05EA\u05D5\u05D0\u05DD S3 \u05DB\u05DE\u05D5 MinIO", ltr: true }
        ]
      },
      {
        typeCode: "AZURE_BLOB",
        typeName: "Azure Blob Storage",
        icon: "\u{1F537}",
        category: "STORAGE",
        fields: [
          { key: "connectionString", label: "Connection String", type: "password", required: true },
          { key: "container", label: "Container", type: "text", required: true, ltr: true }
        ]
      },
      {
        typeCode: "GCS",
        typeName: "Google Cloud Storage",
        icon: "\u{1F4E6}",
        category: "STORAGE",
        fields: [
          { key: "projectId", label: "Project ID", type: "text", required: true, ltr: true },
          { key: "bucket", label: "Bucket", type: "text", required: true, ltr: true },
          { key: "serviceAccountJson", label: "Service Account JSON", type: "textarea", required: true }
        ]
      },
      {
        typeCode: "SFTP",
        typeName: "SFTP",
        icon: "\u{1F4C2}",
        category: "STORAGE",
        fields: [
          { key: "host", label: "Host", type: "text", required: true, ltr: true },
          { key: "port", label: "\u05E4\u05D5\u05E8\u05D8", type: "number", default: "22" },
          { key: "user", label: "\u05DE\u05E9\u05EA\u05DE\u05E9", type: "text", required: true, ltr: true },
          { key: "password", label: "\u05E1\u05D9\u05E1\u05DE\u05D4", type: "password" },
          { key: "privateKey", label: "Private Key", type: "textarea", hint: "\u05D1\u05DE\u05E7\u05D5\u05DD \u05E1\u05D9\u05E1\u05DE\u05D4" }
        ]
      },
      {
        typeCode: "DROPBOX",
        typeName: "Dropbox",
        icon: "\u{1F4E5}",
        category: "STORAGE",
        fields: [
          { key: "accessToken", label: "Access Token", type: "password", required: true }
        ]
      },
      {
        typeCode: "SHAREPOINT",
        typeName: "SharePoint",
        icon: "\u{1F7E6}",
        category: "STORAGE",
        fields: [
          { key: "tenantId", label: "Tenant ID", type: "text", required: true, ltr: true },
          { key: "clientId", label: "Client ID", type: "text", required: true, ltr: true },
          { key: "clientSecret", label: "Client Secret", type: "password", required: true },
          { key: "siteUrl", label: "Site URL", type: "text", required: true, ltr: true }
        ]
      }
    ]
  },
  // ── 9. CRM ───────────────────────────────────────────────────
  {
    id: "CRM",
    label: "CRM",
    icon: "\u{1F465}",
    color: "#0ea5e9",
    types: [
      {
        typeCode: "SALESFORCE",
        typeName: "Salesforce",
        icon: "\u2601\uFE0F",
        category: "CRM",
        fields: [
          { key: "instanceUrl", label: "Instance URL", type: "text", required: true, placeholder: "https://myorg.salesforce.com", ltr: true },
          { key: "clientId", label: "Client ID", type: "text", required: true, ltr: true },
          { key: "clientSecret", label: "Client Secret", type: "password", required: true },
          { key: "username", label: "Username", type: "text", required: true, ltr: true },
          { key: "password", label: "Password+Token", type: "password", required: true }
        ]
      },
      {
        typeCode: "HUBSPOT",
        typeName: "HubSpot",
        icon: "\u{1F9E1}",
        category: "CRM",
        fields: [
          { key: "apiKey", label: "API Key (Private App)", type: "password", required: true }
        ]
      },
      {
        typeCode: "PIPEDRIVE",
        typeName: "Pipedrive",
        icon: "\u{1F7E2}",
        category: "CRM",
        fields: [
          { key: "apiToken", label: "API Token", type: "password", required: true },
          { key: "companyDomain", label: "Company Domain", type: "text", required: true, placeholder: "mycompany", ltr: true }
        ]
      },
      {
        typeCode: "ZOHO_CRM",
        typeName: "Zoho CRM",
        icon: "\u{1F534}",
        category: "CRM",
        fields: [
          { key: "clientId", label: "Client ID", type: "text", required: true, ltr: true },
          { key: "clientSecret", label: "Client Secret", type: "password", required: true },
          { key: "refreshToken", label: "Refresh Token", type: "password", required: true },
          { key: "dcRegion", label: "DC Region", type: "select", options: ["com", "eu", "in", "com.cn", "com.au"], default: "com", ltr: true }
        ]
      },
      {
        typeCode: "ACTIVECAMPAIGN",
        typeName: "ActiveCampaign",
        icon: "\u26A1",
        category: "CRM",
        fields: [
          { key: "apiUrl", label: "API URL", type: "text", required: true, placeholder: "https://myaccount.api-us1.com", ltr: true },
          { key: "apiKey", label: "API Key", type: "password", required: true }
        ]
      }
    ]
  },
  // ── 10. ERP ──────────────────────────────────────────────────
  {
    id: "ERP",
    label: "ERP",
    icon: "\u{1F3E2}",
    color: "#7c3aed",
    types: [
      {
        typeCode: "SAP",
        typeName: "SAP",
        icon: "\u{1F535}",
        category: "ERP",
        fields: [
          { key: "host", label: "Host", type: "text", required: true, ltr: true },
          { key: "client", label: "Client", type: "text", required: true, ltr: true },
          { key: "systemNumber", label: "System Number", type: "text", ltr: true },
          { key: "user", label: "User", type: "text", required: true, ltr: true },
          { key: "password", label: "Password", type: "password", required: true }
        ]
      },
      {
        typeCode: "DYNAMICS365",
        typeName: "Microsoft Dynamics 365",
        icon: "\u{1F537}",
        category: "ERP",
        fields: [
          { key: "tenantId", label: "Tenant ID", type: "text", required: true, ltr: true },
          { key: "clientId", label: "Client ID", type: "text", required: true, ltr: true },
          { key: "clientSecret", label: "Client Secret", type: "password", required: true },
          { key: "resourceUrl", label: "Resource URL", type: "text", required: true, placeholder: "https://myorg.crm.dynamics.com/", ltr: true }
        ]
      },
      {
        typeCode: "ODOO",
        typeName: "Odoo",
        icon: "\u{1F7E3}",
        category: "ERP",
        fields: [
          { key: "host", label: "Host", type: "text", required: true, ltr: true },
          { key: "database", label: "Database", type: "text", required: true, ltr: true },
          { key: "user", label: "User", type: "text", required: true, ltr: true },
          { key: "apiKey", label: "API Key", type: "password", required: true }
        ]
      },
      {
        typeCode: "ERPNEXT",
        typeName: "ERPNext / Frappe",
        icon: "\u{1F527}",
        category: "ERP",
        fields: [
          { key: "host", label: "Host", type: "text", required: true, ltr: true },
          { key: "apiKey", label: "API Key", type: "text", required: true, ltr: true },
          { key: "apiSecret", label: "API Secret", type: "password", required: true }
        ]
      }
    ]
  },
  // ── 11. Project Management ───────────────────────────────────
  {
    id: "PROJECT_MGMT",
    label: "\u05E0\u05D9\u05D4\u05D5\u05DC \u05E4\u05E8\u05D5\u05D9\u05E7\u05D8\u05D9\u05DD",
    icon: "\u{1F4CB}",
    color: "#0891b2",
    types: [
      {
        typeCode: "JIRA",
        typeName: "Jira",
        icon: "\u{1F537}",
        category: "PROJECT_MGMT",
        fields: [
          { key: "baseUrl", label: "Base URL", type: "text", required: true, placeholder: "https://mycompany.atlassian.net", ltr: true },
          { key: "email", label: "Email", type: "text", required: true, ltr: true },
          { key: "apiToken", label: "API Token", type: "password", required: true },
          { key: "projectKey", label: "Project Key", type: "text", placeholder: "PROJ", ltr: true }
        ]
      },
      {
        typeCode: "GITHUB",
        typeName: "GitHub",
        icon: "\u{1F419}",
        category: "PROJECT_MGMT",
        fields: [
          { key: "token", label: "Personal Access Token", type: "password", required: true },
          { key: "org", label: "Organization", type: "text", ltr: true },
          { key: "repo", label: "Repository", type: "text", ltr: true }
        ]
      },
      {
        typeCode: "GITLAB",
        typeName: "GitLab",
        icon: "\u{1F98A}",
        category: "PROJECT_MGMT",
        fields: [
          { key: "token", label: "Access Token", type: "password", required: true },
          { key: "projectId", label: "Project ID", type: "text", ltr: true },
          { key: "baseUrl", label: "Base URL", type: "text", default: "https://gitlab.com", ltr: true }
        ]
      },
      {
        typeCode: "NOTION",
        typeName: "Notion",
        icon: "\u2B1B",
        category: "PROJECT_MGMT",
        fields: [
          { key: "integrationToken", label: "Integration Token", type: "password", required: true },
          { key: "databaseId", label: "Database ID", type: "text", ltr: true }
        ]
      },
      {
        typeCode: "LINEAR",
        typeName: "Linear",
        icon: "\u{1F4D0}",
        category: "PROJECT_MGMT",
        fields: [
          { key: "apiKey", label: "API Key", type: "password", required: true }
        ]
      },
      {
        typeCode: "ASANA",
        typeName: "Asana",
        icon: "\u{1F3AF}",
        category: "PROJECT_MGMT",
        fields: [
          { key: "accessToken", label: "Access Token", type: "password", required: true },
          { key: "workspaceId", label: "Workspace ID", type: "text", ltr: true }
        ]
      },
      {
        typeCode: "MONDAY",
        typeName: "Monday.com",
        icon: "\u{1F4C5}",
        category: "PROJECT_MGMT",
        fields: [
          { key: "apiToken", label: "API Token", type: "password", required: true },
          { key: "boardId", label: "Board ID", type: "text", ltr: true }
        ]
      }
    ]
  },
  // ── 12. Payments ─────────────────────────────────────────────
  {
    id: "PAYMENTS",
    label: "\u05EA\u05E9\u05DC\u05D5\u05DE\u05D9\u05DD",
    icon: "\u{1F4B3}",
    color: "#059669",
    types: [
      {
        typeCode: "STRIPE",
        typeName: "Stripe",
        icon: "\u{1F4B3}",
        category: "PAYMENTS",
        fields: [
          { key: "publishableKey", label: "Publishable Key", type: "text", required: true, ltr: true },
          { key: "secretKey", label: "Secret Key", type: "password", required: true },
          { key: "webhookSecret", label: "Webhook Secret", type: "password" }
        ]
      },
      {
        typeCode: "PAYPAL",
        typeName: "PayPal",
        icon: "\u{1F17F}\uFE0F",
        category: "PAYMENTS",
        fields: [
          { key: "clientId", label: "Client ID", type: "text", required: true, ltr: true },
          { key: "clientSecret", label: "Client Secret", type: "password", required: true },
          { key: "mode", label: "Mode", type: "select", options: ["sandbox", "live"], default: "sandbox", ltr: true }
        ]
      },
      {
        typeCode: "CHARGEBEE",
        typeName: "Chargebee",
        icon: "\u{1F504}",
        category: "PAYMENTS",
        fields: [
          { key: "siteName", label: "Site Name", type: "text", required: true, ltr: true },
          { key: "apiKey", label: "API Key", type: "password", required: true }
        ]
      },
      {
        typeCode: "RAZORPAY",
        typeName: "Razorpay",
        icon: "\u{1F4B0}",
        category: "PAYMENTS",
        fields: [
          { key: "keyId", label: "Key ID", type: "text", required: true, ltr: true },
          { key: "keySecret", label: "Key Secret", type: "password", required: true }
        ]
      }
    ]
  },
  // ── 13. e-Signature ──────────────────────────────────────────
  {
    id: "ESIGNATURE",
    label: "\u05D7\u05EA\u05D9\u05DE\u05D4 \u05D3\u05D9\u05D2\u05D9\u05D8\u05DC\u05D9\u05EA",
    icon: "\u270D\uFE0F",
    color: "#7c3aed",
    types: [
      {
        typeCode: "DOCUSIGN",
        typeName: "DocuSign",
        icon: "\u{1F4DD}",
        category: "ESIGNATURE",
        fields: [
          { key: "integrationKey", label: "Integration Key", type: "text", required: true, ltr: true },
          { key: "accountId", label: "Account ID", type: "text", required: true, ltr: true },
          { key: "userId", label: "User ID", type: "text", required: true, ltr: true },
          { key: "privateKey", label: "RSA Private Key", type: "textarea", required: true },
          { key: "baseUrl", label: "Base URL", type: "select", options: ["https://na4.docusign.net", "https://eu.docusign.net"], default: "https://na4.docusign.net", ltr: true }
        ]
      },
      {
        typeCode: "HELLOSIGN",
        typeName: "HelloSign / Dropbox Sign",
        icon: "\u270F\uFE0F",
        category: "ESIGNATURE",
        fields: [
          { key: "apiKey", label: "API Key", type: "password", required: true }
        ]
      },
      {
        typeCode: "PANDADOC",
        typeName: "PandaDoc",
        icon: "\u{1F43C}",
        category: "ESIGNATURE",
        fields: [
          { key: "apiKey", label: "API Key", type: "password", required: true }
        ]
      }
    ]
  },
  // ── 14. Auth Providers ───────────────────────────────────────
  {
    id: "AUTH",
    label: "\u05D6\u05D9\u05D4\u05D5\u05D9 \u05D5\u05DB\u05E0\u05D9\u05E1\u05D4",
    icon: "\u{1F510}",
    color: "#dc2626",
    types: [
      {
        typeCode: "AUTH0",
        typeName: "Auth0",
        icon: "\u{1F510}",
        category: "AUTH",
        fields: [
          { key: "domain", label: "Domain", type: "text", required: true, placeholder: "myapp.auth0.com", ltr: true },
          { key: "clientId", label: "Client ID", type: "text", required: true, ltr: true },
          { key: "clientSecret", label: "Client Secret", type: "password", required: true },
          { key: "audience", label: "Audience", type: "text", ltr: true }
        ]
      },
      {
        typeCode: "AZURE_AD",
        typeName: "Azure AD / Entra ID",
        icon: "\u{1F537}",
        category: "AUTH",
        fields: [
          { key: "tenantId", label: "Tenant ID", type: "text", required: true, ltr: true },
          { key: "clientId", label: "Client ID", type: "text", required: true, ltr: true },
          { key: "clientSecret", label: "Client Secret", type: "password", required: true }
        ]
      },
      {
        typeCode: "GOOGLE_OAUTH",
        typeName: "Google OAuth 2.0",
        icon: "\u{1F534}",
        category: "AUTH",
        fields: [
          { key: "clientId", label: "Client ID", type: "text", required: true, ltr: true },
          { key: "clientSecret", label: "Client Secret", type: "password", required: true },
          { key: "redirectUri", label: "Redirect URI", type: "text", ltr: true }
        ]
      },
      {
        typeCode: "OKTA",
        typeName: "Okta",
        icon: "\u{1F535}",
        category: "AUTH",
        fields: [
          { key: "orgUrl", label: "Org URL", type: "text", required: true, placeholder: "https://myorg.okta.com", ltr: true },
          { key: "clientId", label: "Client ID", type: "text", required: true, ltr: true },
          { key: "clientSecret", label: "Client Secret", type: "password", required: true }
        ]
      },
      {
        typeCode: "KEYCLOAK",
        typeName: "Keycloak",
        icon: "\u{1F511}",
        category: "AUTH",
        fields: [
          { key: "serverUrl", label: "Server URL", type: "text", required: true, ltr: true },
          { key: "realm", label: "Realm", type: "text", required: true, ltr: true },
          { key: "clientId", label: "Client ID", type: "text", required: true, ltr: true },
          { key: "clientSecret", label: "Client Secret", type: "password" }
        ]
      }
    ]
  },
  // ── 15. Analytics ────────────────────────────────────────────
  {
    id: "ANALYTICS",
    label: "\u05D0\u05E0\u05DC\u05D9\u05D8\u05D9\u05E7\u05D4",
    icon: "\u{1F4CA}",
    color: "#d97706",
    types: [
      {
        typeCode: "GA4",
        typeName: "Google Analytics 4",
        icon: "\u{1F4C8}",
        category: "ANALYTICS",
        fields: [
          { key: "measurementId", label: "Measurement ID", type: "text", required: true, placeholder: "G-XXXXXXXXXX", ltr: true },
          { key: "apiSecret", label: "API Secret", type: "password" },
          { key: "serviceAccountJson", label: "Service Account", type: "textarea", hint: "\u05DC\u05D2\u05D9\u05E9\u05D4 \u05DC-Data API" }
        ]
      },
      {
        typeCode: "MIXPANEL",
        typeName: "Mixpanel",
        icon: "\u{1F7E6}",
        category: "ANALYTICS",
        fields: [
          { key: "projectToken", label: "Project Token", type: "text", required: true, ltr: true },
          { key: "apiSecret", label: "API Secret", type: "password", required: true }
        ]
      },
      {
        typeCode: "POSTHOG",
        typeName: "PostHog",
        icon: "\u{1F994}",
        category: "ANALYTICS",
        fields: [
          { key: "apiKey", label: "API Key", type: "password", required: true },
          { key: "host", label: "Host", type: "text", default: "https://app.posthog.com", ltr: true }
        ]
      },
      {
        typeCode: "SEGMENT",
        typeName: "Segment",
        icon: "\u{1F535}",
        category: "ANALYTICS",
        fields: [
          { key: "writeKey", label: "Write Key", type: "password", required: true }
        ]
      }
    ]
  },
  // ── 16. Social Media ─────────────────────────────────────────
  {
    id: "SOCIAL_MEDIA",
    label: "\u05E8\u05E9\u05EA\u05D5\u05EA \u05D7\u05D1\u05E8\u05EA\u05D9\u05D5\u05EA",
    icon: "\u{1F4F1}",
    color: "#ec4899",
    types: [
      {
        typeCode: "FACEBOOK",
        typeName: "Facebook / Meta",
        icon: "\u{1F535}",
        category: "SOCIAL_MEDIA",
        fields: [
          { key: "appId", label: "App ID", type: "text", required: true, ltr: true },
          { key: "appSecret", label: "App Secret", type: "password", required: true },
          { key: "accessToken", label: "Access Token", type: "password", required: true },
          { key: "pageId", label: "Page ID", type: "text", ltr: true }
        ]
      },
      {
        typeCode: "TWITTER_X",
        typeName: "Twitter / X",
        icon: "\u{1F426}",
        category: "SOCIAL_MEDIA",
        fields: [
          { key: "apiKey", label: "API Key", type: "text", required: true, ltr: true },
          { key: "apiSecret", label: "API Secret", type: "password", required: true },
          { key: "accessToken", label: "Access Token", type: "password", required: true },
          { key: "accessSecret", label: "Access Secret", type: "password", required: true }
        ]
      },
      {
        typeCode: "LINKEDIN",
        typeName: "LinkedIn",
        icon: "\u{1F537}",
        category: "SOCIAL_MEDIA",
        fields: [
          { key: "clientId", label: "Client ID", type: "text", required: true, ltr: true },
          { key: "clientSecret", label: "Client Secret", type: "password", required: true },
          { key: "accessToken", label: "Access Token", type: "password" }
        ]
      }
    ]
  },
  // ── 17. E-Commerce ───────────────────────────────────────────
  {
    id: "ECOMMERCE",
    label: "\u05DE\u05E1\u05D7\u05E8 \u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9",
    icon: "\u{1F6D2}",
    color: "#10b981",
    types: [
      {
        typeCode: "SHOPIFY",
        typeName: "Shopify",
        icon: "\u{1F6CD}\uFE0F",
        category: "ECOMMERCE",
        fields: [
          { key: "shopDomain", label: "Shop Domain", type: "text", required: true, placeholder: "myshop.myshopify.com", ltr: true },
          { key: "apiKey", label: "API Key", type: "text", required: true, ltr: true },
          { key: "apiSecret", label: "API Secret", type: "password", required: true },
          { key: "accessToken", label: "Access Token", type: "password", required: true }
        ]
      },
      {
        typeCode: "WOOCOMMERCE",
        typeName: "WooCommerce",
        icon: "\u{1F6D2}",
        category: "ECOMMERCE",
        fields: [
          { key: "siteUrl", label: "Site URL", type: "text", required: true, ltr: true },
          { key: "consumerKey", label: "Consumer Key", type: "text", required: true, ltr: true },
          { key: "consumerSecret", label: "Consumer Secret", type: "password", required: true }
        ]
      },
      {
        typeCode: "MAGENTO",
        typeName: "Magento / Adobe Commerce",
        icon: "\u{1F537}",
        category: "ECOMMERCE",
        fields: [
          { key: "baseUrl", label: "Base URL", type: "text", required: true, ltr: true },
          { key: "accessToken", label: "Access Token", type: "password", required: true }
        ]
      }
    ]
  },
  // ── 18. Accounting ───────────────────────────────────────────
  {
    id: "ACCOUNTING",
    label: "\u05D4\u05E0\u05D4\u05DC\u05EA \u05D7\u05E9\u05D1\u05D5\u05E0\u05D5\u05EA",
    icon: "\u{1F4B0}",
    color: "#d97706",
    types: [
      {
        typeCode: "QUICKBOOKS",
        typeName: "QuickBooks Online",
        icon: "\u{1F4D2}",
        category: "ACCOUNTING",
        fields: [
          { key: "clientId", label: "Client ID", type: "text", required: true, ltr: true },
          { key: "clientSecret", label: "Client Secret", type: "password", required: true },
          { key: "realmId", label: "Realm ID", type: "text", required: true, ltr: true }
        ]
      },
      {
        typeCode: "XERO",
        typeName: "Xero",
        icon: "\u{1F499}",
        category: "ACCOUNTING",
        fields: [
          { key: "clientId", label: "Client ID", type: "text", required: true, ltr: true },
          { key: "clientSecret", label: "Client Secret", type: "password", required: true }
        ]
      },
      {
        typeCode: "FRESHBOOKS",
        typeName: "FreshBooks",
        icon: "\u{1F343}",
        category: "ACCOUNTING",
        fields: [
          { key: "clientId", label: "Client ID", type: "text", required: true, ltr: true },
          { key: "clientSecret", label: "Client Secret", type: "password", required: true },
          { key: "accessToken", label: "Access Token", type: "password" }
        ]
      }
    ]
  },
  // ── 19. DevOps ───────────────────────────────────────────────
  {
    id: "DEVOPS",
    label: "DevOps \u05D5-CI/CD",
    icon: "\u2699\uFE0F",
    color: "#475569",
    types: [
      {
        typeCode: "JENKINS",
        typeName: "Jenkins",
        icon: "\u{1F3D7}\uFE0F",
        category: "DEVOPS",
        fields: [
          { key: "host", label: "Host", type: "text", required: true, placeholder: "https://jenkins.mycompany.com", ltr: true },
          { key: "user", label: "User", type: "text", required: true, ltr: true },
          { key: "apiToken", label: "API Token", type: "password", required: true }
        ]
      },
      {
        typeCode: "AWS_GENERAL",
        typeName: "AWS (General)",
        icon: "\u2601\uFE0F",
        category: "DEVOPS",
        description: "\u05D2\u05D9\u05E9\u05D4 \u05DB\u05DC\u05DC\u05D9\u05EA \u05DC-AWS Services",
        fields: [
          { key: "region", label: "Region", type: "select", required: true, options: ["us-east-1", "us-west-2", "eu-west-1", "eu-central-1", "ap-southeast-1", "il-central-1"], ltr: true },
          { key: "accessKey", label: "Access Key", type: "text", required: true, ltr: true },
          { key: "secretKey", label: "Secret Key", type: "password", required: true }
        ]
      },
      {
        typeCode: "CIRCLECI",
        typeName: "CircleCI",
        icon: "\u{1F504}",
        category: "DEVOPS",
        fields: [
          { key: "apiToken", label: "API Token", type: "password", required: true }
        ]
      },
      {
        typeCode: "BITBUCKET",
        typeName: "Bitbucket",
        icon: "\u{1FAA3}",
        category: "DEVOPS",
        fields: [
          { key: "username", label: "Username", type: "text", required: true, ltr: true },
          { key: "appPassword", label: "App Password", type: "password", required: true },
          { key: "workspace", label: "Workspace", type: "text", required: true, ltr: true }
        ]
      }
    ]
  },
  // ── 20. Message Queues ───────────────────────────────────────
  {
    id: "MESSAGE_QUEUE",
    label: "Message Queues",
    icon: "\u{1F4E8}",
    color: "#0891b2",
    types: [
      {
        typeCode: "RABBITMQ",
        typeName: "RabbitMQ",
        icon: "\u{1F430}",
        category: "MESSAGE_QUEUE",
        fields: [
          { key: "host", label: "Host", type: "text", required: true, default: "localhost", ltr: true },
          { key: "port", label: "\u05E4\u05D5\u05E8\u05D8", type: "number", default: "5672" },
          { key: "user", label: "User", type: "text", required: true, default: "guest", ltr: true },
          { key: "password", label: "\u05E1\u05D9\u05E1\u05DE\u05D4", type: "password", required: true },
          { key: "vhost", label: "VHost", type: "text", default: "/", ltr: true }
        ]
      },
      {
        typeCode: "KAFKA",
        typeName: "Apache Kafka",
        icon: "\u{1F4E1}",
        category: "MESSAGE_QUEUE",
        fields: [
          { key: "brokers", label: "Brokers", type: "text", required: true, placeholder: "host1:9092,host2:9092", ltr: true },
          { key: "topic", label: "Topic", type: "text", ltr: true },
          { key: "groupId", label: "Group ID", type: "text", ltr: true },
          { key: "saslMechanism", label: "SASL", type: "select", options: ["NONE", "PLAIN", "SCRAM-SHA-256", "SCRAM-SHA-512"], default: "NONE", ltr: true },
          { key: "saslUser", label: "SASL User", type: "text", ltr: true },
          { key: "saslPass", label: "SASL Password", type: "password" }
        ]
      },
      {
        typeCode: "AWS_SQS",
        typeName: "AWS SQS",
        icon: "\u{1F4EC}",
        category: "MESSAGE_QUEUE",
        fields: [
          { key: "region", label: "Region", type: "select", required: true, options: ["us-east-1", "us-west-2", "eu-west-1", "eu-central-1"], ltr: true },
          { key: "queueUrl", label: "Queue URL", type: "text", required: true, ltr: true },
          { key: "accessKey", label: "Access Key", type: "text", required: true, ltr: true },
          { key: "secretKey", label: "Secret Key", type: "password", required: true }
        ]
      },
      {
        typeCode: "AZURE_SERVICE_BUS",
        typeName: "Azure Service Bus",
        icon: "\u{1F537}",
        category: "MESSAGE_QUEUE",
        fields: [
          { key: "connectionString", label: "Connection String", type: "password", required: true },
          { key: "queueName", label: "Queue / Topic", type: "text", ltr: true }
        ]
      }
    ]
  },
  // ── 21. HR / HRIS ────────────────────────────────────────────
  {
    id: "HR",
    label: "HR \u05D5\u05DE\u05E9\u05D0\u05D1\u05D9 \u05D0\u05E0\u05D5\u05E9",
    icon: "\u{1F464}",
    color: "#7c3aed",
    types: [
      {
        typeCode: "BAMBOOHR",
        typeName: "BambooHR",
        icon: "\u{1F38B}",
        category: "HR",
        fields: [
          { key: "subdomain", label: "Subdomain", type: "text", required: true, placeholder: "mycompany", ltr: true },
          { key: "apiKey", label: "API Key", type: "password", required: true }
        ]
      },
      {
        typeCode: "WORKDAY",
        typeName: "Workday",
        icon: "\u{1F4BC}",
        category: "HR",
        fields: [
          { key: "tenant", label: "Tenant", type: "text", required: true, ltr: true },
          { key: "username", label: "Username", type: "text", required: true, ltr: true },
          { key: "password", label: "Password", type: "password", required: true },
          { key: "wsdlUrl", label: "WSDL URL", type: "text", ltr: true }
        ]
      },
      {
        typeCode: "GUSTO",
        typeName: "Gusto",
        icon: "\u{1F3E2}",
        category: "HR",
        fields: [
          { key: "clientId", label: "Client ID", type: "text", required: true, ltr: true },
          { key: "clientSecret", label: "Client Secret", type: "password", required: true }
        ]
      }
    ]
  },
  // ── 22. Generic / Custom ─────────────────────────────────────
  {
    id: "GENERIC",
    label: "\u05DB\u05DC\u05DC\u05D9 / \u05DE\u05D5\u05EA\u05D0\u05DD \u05D0\u05D9\u05E9\u05D9\u05EA",
    icon: "\u{1F50C}",
    color: "#94a3b8",
    types: [
      {
        typeCode: "REST_API",
        typeName: "Generic REST API",
        icon: "\u{1F310}",
        category: "GENERIC",
        description: "\u05DB\u05DC REST API \u05E2\u05DD \u05D0\u05D9\u05DE\u05D5\u05EA \u05D2\u05DE\u05D9\u05E9",
        fields: [
          { key: "baseUrl", label: "Base URL", type: "text", required: true, ltr: true },
          { key: "authType", label: "\u05E1\u05D5\u05D2 \u05D0\u05D9\u05DE\u05D5\u05EA", type: "select", options: ["None", "API Key", "Bearer Token", "Basic Auth", "OAuth2"], default: "Bearer Token", ltr: true },
          { key: "authKey", label: "API Key / Token", type: "password", hint: "\u05DC\u05E4\u05D9 \u05E1\u05D5\u05D2 \u05D4\u05D0\u05D9\u05DE\u05D5\u05EA \u05E9\u05E0\u05D1\u05D7\u05E8" },
          { key: "authUser", label: "Username (Basic Auth)", type: "text", ltr: true },
          { key: "headers", label: "Headers \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD (JSON)", type: "textarea", placeholder: '{"X-Custom-Header": "value"}', ltr: true }
        ]
      },
      {
        typeCode: "GRAPHQL",
        typeName: "GraphQL",
        icon: "\u{1F52E}",
        category: "GENERIC",
        fields: [
          { key: "endpoint", label: "Endpoint", type: "text", required: true, ltr: true },
          { key: "authType", label: "\u05D0\u05D9\u05DE\u05D5\u05EA", type: "select", options: ["None", "Bearer Token", "API Key"], default: "Bearer Token", ltr: true },
          { key: "authToken", label: "Token", type: "password" },
          { key: "headers", label: "Headers (JSON)", type: "textarea", ltr: true }
        ]
      },
      {
        typeCode: "WEBHOOK_INBOUND",
        typeName: "Webhook (Inbound)",
        icon: "\u{1F3A3}",
        category: "GENERIC",
        description: "\u05E7\u05D1\u05DC\u05EA webhooks \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9\u05D9\u05DD \u05DC\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8",
        fields: [
          { key: "path", label: "Webhook Path", type: "text", placeholder: "/webhook/my-service", ltr: true },
          { key: "secret", label: "Secret", type: "password", hint: "\u05DC\u05D0\u05D9\u05DE\u05D5\u05EA \u05D7\u05EA\u05D9\u05DE\u05EA \u05D4\u05D1\u05E7\u05E9\u05D4" },
          { key: "allowedEvents", label: "Events \u05DE\u05D5\u05EA\u05E8\u05D9\u05DD", type: "text", placeholder: "push,pull_request", ltr: true }
        ]
      },
      {
        typeCode: "MQTT",
        typeName: "MQTT (IoT)",
        icon: "\u{1F4E1}",
        category: "GENERIC",
        fields: [
          { key: "brokerHost", label: "Broker Host", type: "text", required: true, ltr: true },
          { key: "port", label: "\u05E4\u05D5\u05E8\u05D8", type: "number", default: "1883" },
          { key: "topic", label: "Topic", type: "text", ltr: true },
          { key: "user", label: "User", type: "text", ltr: true },
          { key: "password", label: "Password", type: "password" },
          { key: "tls", label: "TLS", type: "boolean", default: "false" }
        ]
      }
    ]
  }
];
function getCategoryById(id) {
  return CONNECTOR_CATALOG.find((c) => c.id === id);
}

// src/app/features/projects/workspace/ws-connectors/ws-connectors.component.ts
var _c0 = () => [];
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.typeCode;
var _forTrack2 = ($index, $item) => $item.ConnectorKey;
var _forTrack3 = ($index, $item) => $item.key;
function WsConnectorsComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 23);
    \u0275\u0275listener("click", function WsConnectorsComponent_Conditional_15_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.testResult.set(null));
    });
    \u0275\u0275text(3, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("test-ok", ctx_r1.testResult().status === "OK")("test-fail", ctx_r1.testResult().status === "FAIL")("test-pending", ctx_r1.testResult().status === "PENDING");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.testResult().message, " ");
  }
}
function WsConnectorsComponent_For_21_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("has-enabled", ctx_r1.catEnabledCount(cat_r4.id) > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.catEnabledCount(cat_r4.id), "/", ctx_r1.catCount(cat_r4.id), " ");
  }
}
function WsConnectorsComponent_For_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function WsConnectorsComponent_For_21_Template_button_click_0_listener() {
      const cat_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeCategory.set(cat_r4.id));
    });
    \u0275\u0275elementStart(1, "span", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, WsConnectorsComponent_For_21_Conditional_5_Template, 2, 4, "span", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("--cat-color", cat_r4.color);
    \u0275\u0275classProp("active", ctx_r1.activeCategory() === cat_r4.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r4.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r4.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.catCount(cat_r4.id) > 0 ? 5 : -1);
  }
}
function WsConnectorsComponent_Conditional_23_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", t_r5.icon, " ", t_r5.typeName);
  }
}
function WsConnectorsComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "div", 30);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 31);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 32);
    \u0275\u0275repeaterCreate(9, WsConnectorsComponent_Conditional_23_For_10_Template, 2, 2, "span", 33, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r1.activeCatDef().color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.activeCatDef().icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.activeCatDef().label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.catCount(ctx_r1.activeCategory()), " \u05D7\u05D9\u05D1\u05D5\u05E8\u05D9\u05DD \u05DE\u05D5\u05D2\u05D3\u05E8\u05D9\u05DD \xB7 ", ctx_r1.activeCatDef().types.length, " \u05E1\u05D5\u05D2\u05D9 \u05D7\u05D9\u05D1\u05D5\u05E8 \u05D6\u05DE\u05D9\u05E0\u05D9\u05DD ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.activeCatDef().types);
  }
}
function WsConnectorsComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "kendo-loader", 34);
    \u0275\u0275elementEnd();
  }
}
function WsConnectorsComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function WsConnectorsComponent_Conditional_26_For_2_Conditional_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2014 ", c_r7.LastTestMsg);
  }
}
function WsConnectorsComponent_Conditional_26_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, WsConnectorsComponent_Conditional_26_For_2_Conditional_11_Conditional_2_Template, 2, 1, "span", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u05D1\u05D3\u05D9\u05E7\u05D4: ", ctx_r1.formatDate(c_r7.LastTestedAt), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r7.LastTestMsg ? 2 : -1);
  }
}
function WsConnectorsComponent_Conditional_26_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275listener("click", function WsConnectorsComponent_Conditional_26_For_2_Conditional_12_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const c_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.copyToken(c_r7.ConnectorToken));
    });
    \u0275\u0275elementStart(1, "span", 54);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 55);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", "UUID: " + c_r7.ConnectorToken);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r7.ConnectorToken);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.copiedToken() === c_r7.ConnectorToken ? "\u2713" : "\u2398");
  }
}
function WsConnectorsComponent_Conditional_26_For_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "kendo-loader", 48);
  }
}
function WsConnectorsComponent_Conditional_26_For_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u25B6 ");
  }
}
function WsConnectorsComponent_Conditional_26_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38)(2, "div", 39);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 40)(5, "div", 41);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 42);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 43);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(11, WsConnectorsComponent_Conditional_26_For_2_Conditional_11_Template, 3, 2, "div", 44);
    \u0275\u0275conditionalCreate(12, WsConnectorsComponent_Conditional_26_For_2_Conditional_12_Template, 5, 3, "div", 45);
    \u0275\u0275elementStart(13, "div", 46)(14, "button", 47);
    \u0275\u0275listener("click", function WsConnectorsComponent_Conditional_26_For_2_Template_button_click_14_listener() {
      const c_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.testConnection(c_r7));
    });
    \u0275\u0275conditionalCreate(15, WsConnectorsComponent_Conditional_26_For_2_Conditional_15_Template, 1, 0, "kendo-loader", 48)(16, WsConnectorsComponent_Conditional_26_For_2_Conditional_16_Template, 1, 0);
    \u0275\u0275text(17, " \u05D1\u05D3\u05D5\u05E7 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 49);
    \u0275\u0275listener("click", function WsConnectorsComponent_Conditional_26_For_2_Template_button_click_18_listener() {
      const c_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(c_r7));
    });
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 50);
    \u0275\u0275listener("click", function WsConnectorsComponent_Conditional_26_For_2_Template_button_click_20_listener() {
      const c_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmDelete(c_r7));
    });
    \u0275\u0275text(21, "\u2715");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "div", 51);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("--card-color", ctx_r1.catColor(c_r7.Category));
    \u0275\u0275classProp("enabled", c_r7.IsEnabled)("no-config", !c_r7.hasConfig);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r7.IconEmoji);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r7.ConnectorName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r7.Description);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.statusClass(c_r7.LastTestStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r7.hasConfig ? ctx_r1.statusLabel(c_r7.LastTestStatus) : "\u05DC\u05D0 \u05D4\u05D5\u05D2\u05D3\u05E8", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r7.hasConfig && c_r7.LastTestedAt ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r7.ConnectorToken ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.testRunning() === c_r7.ConnectorKey);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.testRunning() === c_r7.ConnectorKey ? 15 : 16);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" \u270E ", c_r7.hasConfig ? "\u05E2\u05E8\u05D5\u05DA" : "\u05D4\u05D2\u05D3\u05E8", " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("on", c_r7.IsEnabled);
    \u0275\u0275property("title", c_r7.IsEnabled ? "\u05E4\u05E2\u05D9\u05DC" : "\u05DE\u05D5\u05E9\u05D1\u05EA");
  }
}
function WsConnectorsComponent_Conditional_26_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 56);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 57);
    \u0275\u0275text(4, "\u05D0\u05D9\u05DF \u05D7\u05D9\u05D1\u05D5\u05E8\u05D9\u05DD \u05DE\u05D5\u05D2\u05D3\u05E8\u05D9\u05DD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 58);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 59);
    \u0275\u0275listener("click", function WsConnectorsComponent_Conditional_26_Conditional_3_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openAdd());
    });
    \u0275\u0275text(8, " + \u05D4\u05D5\u05E1\u05E3 \u05D7\u05D9\u05D1\u05D5\u05E8 \u05E8\u05D0\u05E9\u05D5\u05DF ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r1.activeCatDef()?.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.activeCatDef()?.icon, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1('\u05DC\u05D7\u05E5 "+ \u05D7\u05D9\u05D1\u05D5\u05E8 \u05D7\u05D3\u05E9" \u05DC\u05D4\u05D5\u05E1\u05D9\u05E3 \u05D7\u05D9\u05D1\u05D5\u05E8 \u05DE\u05E1\u05D5\u05D2 ', ctx_r1.activeCatDef()?.label);
  }
}
function WsConnectorsComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275repeaterCreate(1, WsConnectorsComponent_Conditional_26_For_2_Template, 23, 20, "div", 35, _forTrack2);
    \u0275\u0275conditionalCreate(3, WsConnectorsComponent_Conditional_26_Conditional_3_Template, 9, 4, "div", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.categorized());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.categorized().length === 0 ? 3 : -1);
  }
}
function WsConnectorsComponent_Conditional_27_Conditional_20_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 76);
    \u0275\u0275listener("click", function WsConnectorsComponent_Conditional_27_Conditional_20_For_5_Template_button_click_0_listener() {
      const cat_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectCat(cat_r12));
    });
    \u0275\u0275elementStart(1, "span", 77);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 78);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 79);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cat_r12 = ctx.$implicit;
    \u0275\u0275styleProp("--cc", cat_r12.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r12.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r12.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", cat_r12.types.length, " \u05E1\u05D5\u05D2\u05D9\u05DD");
  }
}
function WsConnectorsComponent_Conditional_27_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "p", 73);
    \u0275\u0275text(2, "\u05D1\u05D7\u05E8 \u05D0\u05EA \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D9\u05EA \u05D4\u05D7\u05D9\u05D1\u05D5\u05E8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 74);
    \u0275\u0275repeaterCreate(4, WsConnectorsComponent_Conditional_27_Conditional_20_For_5_Template, 7, 5, "button", 75, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.catalog);
  }
}
function WsConnectorsComponent_Conditional_27_Conditional_21_For_10_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(type_r15.description);
  }
}
function WsConnectorsComponent_Conditional_27_Conditional_21_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 85);
    \u0275\u0275listener("click", function WsConnectorsComponent_Conditional_27_Conditional_21_For_10_Template_button_click_0_listener() {
      const type_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectType(type_r15));
    });
    \u0275\u0275elementStart(1, "span", 86);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 87)(4, "div", 88);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, WsConnectorsComponent_Conditional_27_Conditional_21_For_10_Conditional_6_Template, 2, 1, "div", 89);
    \u0275\u0275elementStart(7, "div", 90);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const type_r15 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(type_r15.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(type_r15.typeName);
    \u0275\u0275advance();
    \u0275\u0275conditional(type_r15.description ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", type_r15.fields.length, " \u05E9\u05D3\u05D5\u05EA \u05D4\u05D2\u05D3\u05E8\u05D4");
  }
}
function WsConnectorsComponent_Conditional_27_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 68)(1, "div", 80)(2, "button", 81);
    \u0275\u0275listener("click", function WsConnectorsComponent_Conditional_27_Conditional_21_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.backToStep(1));
    });
    \u0275\u0275text(3, " \u2190 \u05D7\u05D6\u05D5\u05E8 \u05DC\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D5\u05EA ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 82);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 73);
    \u0275\u0275text(7, "\u05D1\u05D7\u05E8 \u05D0\u05EA \u05E1\u05D5\u05D2 \u05D4\u05D7\u05D9\u05D1\u05D5\u05E8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 83);
    \u0275\u0275repeaterCreate(9, WsConnectorsComponent_Conditional_27_Conditional_21_For_10_Template, 9, 4, "button", 84, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("background", ctx_r1.addSelCat().color + "22")("color", ctx_r1.addSelCat().color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.addSelCat().icon, " ", ctx_r1.addSelCat().label, " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.addSelCat().types);
  }
}
function WsConnectorsComponent_Conditional_27_Conditional_22_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.addError());
  }
}
function WsConnectorsComponent_Conditional_27_Conditional_22_For_20_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 95);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function WsConnectorsComponent_Conditional_27_Conditional_22_For_20_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 99);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(field_r17.hint);
  }
}
function WsConnectorsComponent_Conditional_27_Conditional_22_For_20_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 100)(1, "input", 106);
    \u0275\u0275listener("input", function WsConnectorsComponent_Conditional_27_Conditional_22_For_20_Conditional_6_Template_input_input_1_listener($event) {
      \u0275\u0275restoreView(_r18);
      const field_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setAddField(field_r17.key, $event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 107);
    \u0275\u0275listener("click", function WsConnectorsComponent_Conditional_27_Conditional_22_For_20_Conditional_6_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r18);
      const field_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleAddShow(field_r17.key));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const field_r17 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("type", ctx_r1.addShowPass[field_r17.key] ? "text" : "password")("value", ctx_r1.getAddField(field_r17.key))("placeholder", field_r17.placeholder || "")("dir", field_r17.ltr ? "ltr" : "rtl");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.addShowPass[field_r17.key] ? "\u{1F648}" : "\u{1F441}", " ");
  }
}
function WsConnectorsComponent_Conditional_27_Conditional_22_For_20_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 101)(1, "button", 108);
    \u0275\u0275listener("click", function WsConnectorsComponent_Conditional_27_Conditional_22_For_20_Conditional_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r19);
      const field_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setAddField(field_r17.key, true));
    });
    \u0275\u0275text(2, "\u2713 \u05DB\u05DF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 108);
    \u0275\u0275listener("click", function WsConnectorsComponent_Conditional_27_Conditional_22_For_20_Conditional_7_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r19);
      const field_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setAddField(field_r17.key, false));
    });
    \u0275\u0275text(4, "\u2717 \u05DC\u05D0");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const field_r17 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("seg-on", !!ctx_r1.getAddField(field_r17.key));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("seg-off", !ctx_r1.getAddField(field_r17.key));
  }
}
function WsConnectorsComponent_Conditional_27_Conditional_22_For_20_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 109);
    \u0275\u0275listener("input", function WsConnectorsComponent_Conditional_27_Conditional_22_For_20_Conditional_8_Template_input_input_0_listener($event) {
      \u0275\u0275restoreView(_r20);
      const field_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setAddField(field_r17.key, +$event.target.value));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r17 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", ctx_r1.getAddField(field_r17.key) || field_r17.default || "")("placeholder", field_r17.default || "");
  }
}
function WsConnectorsComponent_Conditional_27_Conditional_22_For_20_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 111);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r22 = ctx.$implicit;
    const field_r17 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", opt_r22)("selected", (ctx_r1.getAddField(field_r17.key) || field_r17.default) === opt_r22);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r22, " ");
  }
}
function WsConnectorsComponent_Conditional_27_Conditional_22_For_20_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 110);
    \u0275\u0275listener("change", function WsConnectorsComponent_Conditional_27_Conditional_22_For_20_Conditional_9_Template_select_change_0_listener($event) {
      \u0275\u0275restoreView(_r21);
      const field_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setAddField(field_r17.key, $event.target.value));
    });
    \u0275\u0275repeaterCreate(1, WsConnectorsComponent_Conditional_27_Conditional_22_For_20_Conditional_9_For_2_Template, 2, 3, "option", 111, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(field_r17.options || \u0275\u0275pureFunction0(0, _c0));
  }
}
function WsConnectorsComponent_Conditional_27_Conditional_22_For_20_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "textarea", 112);
    \u0275\u0275listener("input", function WsConnectorsComponent_Conditional_27_Conditional_22_For_20_Conditional_10_Template_textarea_input_0_listener($event) {
      \u0275\u0275restoreView(_r23);
      const field_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setAddField(field_r17.key, $event.target.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r17 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("dir", field_r17.ltr ? "ltr" : "rtl")("placeholder", field_r17.placeholder || "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getAddField(field_r17.key));
  }
}
function WsConnectorsComponent_Conditional_27_Conditional_22_For_20_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 113);
    \u0275\u0275listener("input", function WsConnectorsComponent_Conditional_27_Conditional_22_For_20_Conditional_11_Template_input_input_0_listener($event) {
      \u0275\u0275restoreView(_r24);
      const field_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setAddField(field_r17.key, $event.target.value));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r17 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", ctx_r1.getAddField(field_r17.key))("dir", field_r17.ltr ? "ltr" : "rtl")("placeholder", field_r17.placeholder || field_r17.default || "");
  }
}
function WsConnectorsComponent_Conditional_27_Conditional_22_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93)(1, "label", 94);
    \u0275\u0275text(2);
    \u0275\u0275conditionalCreate(3, WsConnectorsComponent_Conditional_27_Conditional_22_For_20_Conditional_3_Template, 2, 0, "span", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 96);
    \u0275\u0275conditionalCreate(5, WsConnectorsComponent_Conditional_27_Conditional_22_For_20_Conditional_5_Template, 2, 1, "span", 99);
    \u0275\u0275conditionalCreate(6, WsConnectorsComponent_Conditional_27_Conditional_22_For_20_Conditional_6_Template, 4, 5, "div", 100)(7, WsConnectorsComponent_Conditional_27_Conditional_22_For_20_Conditional_7_Template, 5, 4, "div", 101)(8, WsConnectorsComponent_Conditional_27_Conditional_22_For_20_Conditional_8_Template, 1, 2, "input", 102)(9, WsConnectorsComponent_Conditional_27_Conditional_22_For_20_Conditional_9_Template, 3, 1, "select", 103)(10, WsConnectorsComponent_Conditional_27_Conditional_22_For_20_Conditional_10_Template, 2, 3, "textarea", 104)(11, WsConnectorsComponent_Conditional_27_Conditional_22_For_20_Conditional_11_Template, 1, 3, "input", 105);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const field_r17 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", field_r17.label, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(field_r17.required ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(field_r17.hint ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(field_r17.type === "password" ? 6 : field_r17.type === "boolean" ? 7 : field_r17.type === "number" ? 8 : field_r17.type === "select" ? 9 : field_r17.type === "textarea" ? 10 : 11);
  }
}
function WsConnectorsComponent_Conditional_27_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69)(1, "div", 80)(2, "button", 81);
    \u0275\u0275listener("click", function WsConnectorsComponent_Conditional_27_Conditional_22_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.backToStep(2));
    });
    \u0275\u0275text(3, " \u2190 \u05D7\u05D6\u05D5\u05E8 \u05DC\u05E1\u05D5\u05D2\u05D9\u05DD ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 91);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, WsConnectorsComponent_Conditional_27_Conditional_22_Conditional_6_Template, 2, 1, "div", 92);
    \u0275\u0275elementStart(7, "div", 93)(8, "label", 94);
    \u0275\u0275text(9, "\u05E9\u05DD \u05D4\u05D7\u05D9\u05D1\u05D5\u05E8 ");
    \u0275\u0275elementStart(10, "span", 95);
    \u0275\u0275text(11, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 96)(13, "input", 97);
    \u0275\u0275listener("input", function WsConnectorsComponent_Conditional_27_Conditional_22_Template_input_input_13_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addName.set($event.target.value));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 93)(15, "label", 94);
    \u0275\u0275text(16, "\u05EA\u05D9\u05D0\u05D5\u05E8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 96)(18, "input", 98);
    \u0275\u0275listener("input", function WsConnectorsComponent_Conditional_27_Conditional_22_Template_input_input_18_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addDesc.set($event.target.value));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275repeaterCreate(19, WsConnectorsComponent_Conditional_27_Conditional_22_For_20_Template, 12, 4, "div", 93, _forTrack3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", ctx_r1.addSelType().icon, " ", ctx_r1.addSelType().typeName, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.addError() ? 6 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275property("value", ctx_r1.addName());
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.addDesc());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.addSelType().fields);
  }
}
function WsConnectorsComponent_Conditional_27_Conditional_25_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "kendo-loader", 115);
  }
}
function WsConnectorsComponent_Conditional_27_Conditional_25_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2713 ");
  }
}
function WsConnectorsComponent_Conditional_27_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 114);
    \u0275\u0275listener("click", function WsConnectorsComponent_Conditional_27_Conditional_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveAdd());
    });
    \u0275\u0275conditionalCreate(1, WsConnectorsComponent_Conditional_27_Conditional_25_Conditional_1_Template, 1, 0, "kendo-loader", 115)(2, WsConnectorsComponent_Conditional_27_Conditional_25_Conditional_2_Template, 1, 0);
    \u0275\u0275text(3, " \u05E6\u05D5\u05E8 \u05D7\u05D9\u05D1\u05D5\u05E8 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.addSaving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.addSaving() ? 1 : 2);
  }
}
function WsConnectorsComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "kendo-dialog", 60);
    \u0275\u0275listener("close", function WsConnectorsComponent_Conditional_27_Template_kendo_dialog_close_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addOpen.set(false));
    });
    \u0275\u0275elementStart(1, "div", 61)(2, "div", 62)(3, "div", 63)(4, "span", 64);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 65);
    \u0275\u0275text(7, "\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "div", 66);
    \u0275\u0275elementStart(9, "div", 63)(10, "span", 64);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 65);
    \u0275\u0275text(13, "\u05E1\u05D5\u05D2 \u05D7\u05D9\u05D1\u05D5\u05E8");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(14, "div", 66);
    \u0275\u0275elementStart(15, "div", 63)(16, "span", 64);
    \u0275\u0275text(17, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 65);
    \u0275\u0275text(19, "\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(20, WsConnectorsComponent_Conditional_27_Conditional_20_Template, 6, 0, "div", 67);
    \u0275\u0275conditionalCreate(21, WsConnectorsComponent_Conditional_27_Conditional_21_Template, 11, 6, "div", 68);
    \u0275\u0275conditionalCreate(22, WsConnectorsComponent_Conditional_27_Conditional_22_Template, 21, 5, "div", 69);
    \u0275\u0275elementStart(23, "kendo-dialog-actions")(24, "div", 70);
    \u0275\u0275conditionalCreate(25, WsConnectorsComponent_Conditional_27_Conditional_25_Template, 4, 2, "button", 71);
    \u0275\u0275elementStart(26, "button", 72);
    \u0275\u0275listener("click", function WsConnectorsComponent_Conditional_27_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addOpen.set(false));
    });
    \u0275\u0275text(27, "\u05D1\u05D9\u05D8\u05D5\u05DC");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("width", 680)("minWidth", 500);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("done", ctx_r1.addStep() > 1)("active", ctx_r1.addStep() === 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.addStep() > 1 ? "\u2713" : "1");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("done", ctx_r1.addStep() > 1);
    \u0275\u0275advance();
    \u0275\u0275classProp("done", ctx_r1.addStep() > 2)("active", ctx_r1.addStep() === 2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.addStep() > 2 ? "\u2713" : "2");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("done", ctx_r1.addStep() > 2);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.addStep() === 3);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.addStep() === 1 ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.addStep() === 2 && ctx_r1.addSelCat() ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.addStep() === 3 && ctx_r1.addSelType() ? 22 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.addStep() === 3 ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.addSaving());
  }
}
function WsConnectorsComponent_Conditional_28_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "kendo-loader", 115);
  }
}
function WsConnectorsComponent_Conditional_28_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2715 ");
  }
}
function WsConnectorsComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "kendo-dialog", 116);
    \u0275\u0275listener("close", function WsConnectorsComponent_Conditional_28_Template_kendo_dialog_close_0_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDelete());
    });
    \u0275\u0275elementStart(1, "div", 117)(2, "div", 118);
    \u0275\u0275text(3, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 119);
    \u0275\u0275text(5, "\u05D4\u05D0\u05DD \u05DC\u05DE\u05D7\u05D5\u05E7 \u05D0\u05EA \u05D4\u05D7\u05D9\u05D1\u05D5\u05E8 ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 120);
    \u0275\u0275text(10, "\u05E4\u05E2\u05D5\u05DC\u05D4 \u05D6\u05D5 \u05D0\u05D9\u05E0\u05D4 \u05E0\u05D9\u05EA\u05E0\u05EA \u05DC\u05D1\u05D9\u05D8\u05D5\u05DC.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "kendo-dialog-actions")(12, "div", 70)(13, "button", 121);
    \u0275\u0275listener("click", function WsConnectorsComponent_Conditional_28_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.doDelete());
    });
    \u0275\u0275conditionalCreate(14, WsConnectorsComponent_Conditional_28_Conditional_14_Template, 1, 0, "kendo-loader", 115)(15, WsConnectorsComponent_Conditional_28_Conditional_15_Template, 1, 0);
    \u0275\u0275text(16, " \u05DE\u05D7\u05E7 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 122);
    \u0275\u0275listener("click", function WsConnectorsComponent_Conditional_28_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDelete());
    });
    \u0275\u0275text(18, "\u05D1\u05D9\u05D8\u05D5\u05DC");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("width", 420);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.deleteConnector().ConnectorName);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.deleteInProgress());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.deleteInProgress() ? 14 : 15);
  }
}
function WsConnectorsComponent_Conditional_29_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 125);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.editError());
  }
}
function WsConnectorsComponent_Conditional_29_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "code", 134);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 135);
    \u0275\u0275listener("click", function WsConnectorsComponent_Conditional_29_Conditional_9_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.copyToken(ctx_r1.editToken()));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.editToken());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.copiedToken() === ctx_r1.editToken() ? "\u2713 \u05D4\u05D5\u05E2\u05EA\u05E7" : "\u2398 \u05D4\u05E2\u05EA\u05E7", " ");
  }
}
function WsConnectorsComponent_Conditional_29_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 130);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function WsConnectorsComponent_Conditional_29_For_12_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 95);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function WsConnectorsComponent_Conditional_29_For_12_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 100)(1, "input", 138);
    \u0275\u0275listener("input", function WsConnectorsComponent_Conditional_29_For_12_Conditional_5_Template_input_input_1_listener($event) {
      \u0275\u0275restoreView(_r29);
      const field_r30 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setField(field_r30.key, $event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 107);
    \u0275\u0275listener("click", function WsConnectorsComponent_Conditional_29_For_12_Conditional_5_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r29);
      const field_r30 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleShow(field_r30.key));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const field_r30 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("type", ctx_r1.editShowPass[field_r30.key] ? "text" : "password")("value", ctx_r1.getField(field_r30.key))("placeholder", field_r30.placeholder || "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.editShowPass[field_r30.key] ? "\u{1F648}" : "\u{1F441}", " ");
  }
}
function WsConnectorsComponent_Conditional_29_For_12_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 101)(1, "button", 108);
    \u0275\u0275listener("click", function WsConnectorsComponent_Conditional_29_For_12_Conditional_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r31);
      const field_r30 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setField(field_r30.key, true));
    });
    \u0275\u0275text(2, "\u2713 \u05DB\u05DF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 108);
    \u0275\u0275listener("click", function WsConnectorsComponent_Conditional_29_For_12_Conditional_6_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r31);
      const field_r30 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setField(field_r30.key, false));
    });
    \u0275\u0275text(4, "\u2717 \u05DC\u05D0");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const field_r30 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("seg-on", !!ctx_r1.getField(field_r30.key));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("seg-off", !ctx_r1.getField(field_r30.key));
  }
}
function WsConnectorsComponent_Conditional_29_For_12_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 139);
    \u0275\u0275listener("input", function WsConnectorsComponent_Conditional_29_For_12_Conditional_7_Template_input_input_0_listener($event) {
      \u0275\u0275restoreView(_r32);
      const field_r30 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setField(field_r30.key, +$event.target.value));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r30 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", ctx_r1.getField(field_r30.key) || field_r30.default || "");
  }
}
function WsConnectorsComponent_Conditional_29_For_12_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 111);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r34 = ctx.$implicit;
    const field_r30 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", opt_r34)("selected", (ctx_r1.getField(field_r30.key) || field_r30.default) === opt_r34);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r34, " ");
  }
}
function WsConnectorsComponent_Conditional_29_For_12_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 110);
    \u0275\u0275listener("change", function WsConnectorsComponent_Conditional_29_For_12_Conditional_8_Template_select_change_0_listener($event) {
      \u0275\u0275restoreView(_r33);
      const field_r30 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setField(field_r30.key, $event.target.value));
    });
    \u0275\u0275repeaterCreate(1, WsConnectorsComponent_Conditional_29_For_12_Conditional_8_For_2_Template, 2, 3, "option", 111, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r30 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(field_r30.options || \u0275\u0275pureFunction0(0, _c0));
  }
}
function WsConnectorsComponent_Conditional_29_For_12_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 140);
    \u0275\u0275listener("input", function WsConnectorsComponent_Conditional_29_For_12_Conditional_9_Template_input_input_0_listener($event) {
      \u0275\u0275restoreView(_r35);
      const field_r30 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setField(field_r30.key, $event.target.value));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r30 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", ctx_r1.getField(field_r30.key))("placeholder", field_r30.placeholder || field_r30.default || "");
  }
}
function WsConnectorsComponent_Conditional_29_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93)(1, "label", 94);
    \u0275\u0275text(2);
    \u0275\u0275conditionalCreate(3, WsConnectorsComponent_Conditional_29_For_12_Conditional_3_Template, 2, 0, "span", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 96);
    \u0275\u0275conditionalCreate(5, WsConnectorsComponent_Conditional_29_For_12_Conditional_5_Template, 4, 4, "div", 100)(6, WsConnectorsComponent_Conditional_29_For_12_Conditional_6_Template, 5, 4, "div", 101)(7, WsConnectorsComponent_Conditional_29_For_12_Conditional_7_Template, 1, 1, "input", 136)(8, WsConnectorsComponent_Conditional_29_For_12_Conditional_8_Template, 3, 1, "select", 103)(9, WsConnectorsComponent_Conditional_29_For_12_Conditional_9_Template, 1, 2, "input", 137);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const field_r30 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", field_r30.label, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(field_r30.required ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(field_r30.type === "password" ? 5 : field_r30.type === "boolean" ? 6 : field_r30.type === "number" ? 7 : field_r30.type === "select" ? 8 : 9);
  }
}
function WsConnectorsComponent_Conditional_29_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u05D2\u05D9\u05E9\u05D4 \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9\u05EA \u05DE\u05D9\u05D9\u05D3\u05D9\u05EA \u05E2\u05DD UUID+JWT ");
  }
}
function WsConnectorsComponent_Conditional_29_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u05D3\u05D5\u05E8\u05E9 \u05D0\u05D9\u05E9\u05D5\u05E8 \u05DE\u05E0\u05D4\u05DC \u05DE\u05E2\u05E8\u05DB\u05EA ");
  }
}
function WsConnectorsComponent_Conditional_29_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u05D7\u05E1\u05D5\u05DD \u05DC\u05D2\u05D9\u05E9\u05D4 \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9\u05EA ");
  }
}
function WsConnectorsComponent_Conditional_29_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "kendo-loader", 115);
  }
}
function WsConnectorsComponent_Conditional_29_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2713 ");
  }
}
function WsConnectorsComponent_Conditional_29_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "kendo-loader", 115);
  }
}
function WsConnectorsComponent_Conditional_29_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u25B6 ");
  }
}
function WsConnectorsComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "kendo-dialog", 123);
    \u0275\u0275listener("close", function WsConnectorsComponent_Conditional_29_Template_kendo_dialog_close_0_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEdit());
    });
    \u0275\u0275elementStart(1, "div", 124);
    \u0275\u0275conditionalCreate(2, WsConnectorsComponent_Conditional_29_Conditional_2_Template, 2, 1, "div", 125);
    \u0275\u0275elementStart(3, "div", 126);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 127)(6, "span", 128);
    \u0275\u0275text(7, "\u05DE\u05D6\u05D4\u05D4 \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9 (UUID)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 129);
    \u0275\u0275conditionalCreate(9, WsConnectorsComponent_Conditional_29_Conditional_9_Template, 4, 2)(10, WsConnectorsComponent_Conditional_29_Conditional_10_Template, 2, 0, "span", 130);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(11, WsConnectorsComponent_Conditional_29_For_12_Template, 10, 3, "div", 93, _forTrack3);
    \u0275\u0275elementStart(13, "div", 93)(14, "label", 94);
    \u0275\u0275text(15, "\u05E1\u05D8\u05D8\u05D5\u05E1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 96)(17, "div", 101)(18, "button", 108);
    \u0275\u0275listener("click", function WsConnectorsComponent_Conditional_29_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editEnabled.set(true));
    });
    \u0275\u0275text(19, "\u2713 \u05E4\u05E2\u05D9\u05DC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 108);
    \u0275\u0275listener("click", function WsConnectorsComponent_Conditional_29_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editEnabled.set(false));
    });
    \u0275\u0275text(21, "\u2717 \u05DE\u05D5\u05E9\u05D1\u05EA");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(22, "div", 93)(23, "label", 94);
    \u0275\u0275text(24, "\u05D4\u05E8\u05E9\u05D0\u05EA \u05D2\u05D9\u05E9\u05D4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 96)(26, "div", 131)(27, "button", 108);
    \u0275\u0275listener("click", function WsConnectorsComponent_Conditional_29_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editAccessMode.set("PUBLIC"));
    });
    \u0275\u0275text(28, "\u{1F310} \u05E6\u05D9\u05D1\u05D5\u05E8\u05D9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 108);
    \u0275\u0275listener("click", function WsConnectorsComponent_Conditional_29_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editAccessMode.set("APPROVAL_REQUIRED"));
    });
    \u0275\u0275text(30, "\u{1F514} \u05D8\u05E2\u05D5\u05DF \u05D0\u05D9\u05E9\u05D5\u05E8");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 108);
    \u0275\u0275listener("click", function WsConnectorsComponent_Conditional_29_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editAccessMode.set("PRIVATE"));
    });
    \u0275\u0275text(32, "\u{1F512} \u05E4\u05E8\u05D8\u05D9");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "span", 132);
    \u0275\u0275conditionalCreate(34, WsConnectorsComponent_Conditional_29_Conditional_34_Template, 1, 0);
    \u0275\u0275conditionalCreate(35, WsConnectorsComponent_Conditional_29_Conditional_35_Template, 1, 0);
    \u0275\u0275conditionalCreate(36, WsConnectorsComponent_Conditional_29_Conditional_36_Template, 1, 0);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(37, "kendo-dialog-actions")(38, "div", 70)(39, "button", 114);
    \u0275\u0275listener("click", function WsConnectorsComponent_Conditional_29_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveEdit());
    });
    \u0275\u0275conditionalCreate(40, WsConnectorsComponent_Conditional_29_Conditional_40_Template, 1, 0, "kendo-loader", 115)(41, WsConnectorsComponent_Conditional_29_Conditional_41_Template, 1, 0);
    \u0275\u0275text(42, " \u05E9\u05DE\u05D5\u05E8 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "button", 133);
    \u0275\u0275listener("click", function WsConnectorsComponent_Conditional_29_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.testConnection(ctx_r1.editConnector(), true));
    });
    \u0275\u0275conditionalCreate(44, WsConnectorsComponent_Conditional_29_Conditional_44_Template, 1, 0, "kendo-loader", 115)(45, WsConnectorsComponent_Conditional_29_Conditional_45_Template, 1, 0);
    \u0275\u0275text(46, " \u05D1\u05D3\u05D5\u05E7 \u05D7\u05D9\u05D1\u05D5\u05E8 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "button", 72);
    \u0275\u0275listener("click", function WsConnectorsComponent_Conditional_29_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEdit());
    });
    \u0275\u0275text(48, "\u05D1\u05D9\u05D8\u05D5\u05DC");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r1.editConnector().IconEmoji + " " + ctx_r1.editConnector().ConnectorName)("width", 520)("minWidth", 400);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.editError() ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.editConnector().Description);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.editToken() ? 9 : 10);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.editConnector().SchemaJSON);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("seg-on", ctx_r1.editEnabled());
    \u0275\u0275advance(2);
    \u0275\u0275classProp("seg-off", !ctx_r1.editEnabled());
    \u0275\u0275advance(7);
    \u0275\u0275classProp("seg-public", ctx_r1.editAccessMode() === "PUBLIC");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("seg-approval", ctx_r1.editAccessMode() === "APPROVAL_REQUIRED");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("seg-private", ctx_r1.editAccessMode() === "PRIVATE");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.editAccessMode() === "PUBLIC" ? 34 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.editAccessMode() === "APPROVAL_REQUIRED" ? 35 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.editAccessMode() === "PRIVATE" ? 36 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.editSaving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.editSaving() ? 40 : 41);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.testRunning() !== null);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.testRunning() === ctx_r1.editConnector()?.ConnectorKey ? 44 : 45);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.editSaving());
  }
}
var WsConnectorsComponent = class _WsConnectorsComponent {
  route;
  router;
  http;
  projectId = 0;
  loading = signal(
    true,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  error = signal(
    "",
    ...ngDevMode ? [{ debugName: "error" }] : (
      /* istanbul ignore next */
      []
    )
  );
  connectors = signal(
    [],
    ...ngDevMode ? [{ debugName: "connectors" }] : (
      /* istanbul ignore next */
      []
    )
  );
  activeCategory = signal(
    CONNECTOR_CATALOG[0].id,
    ...ngDevMode ? [{ debugName: "activeCategory" }] : (
      /* istanbul ignore next */
      []
    )
  );
  deleteOpen = signal(
    false,
    ...ngDevMode ? [{ debugName: "deleteOpen" }] : (
      /* istanbul ignore next */
      []
    )
  );
  deleteConnector = signal(
    null,
    ...ngDevMode ? [{ debugName: "deleteConnector" }] : (
      /* istanbul ignore next */
      []
    )
  );
  deleteInProgress = signal(
    false,
    ...ngDevMode ? [{ debugName: "deleteInProgress" }] : (
      /* istanbul ignore next */
      []
    )
  );
  editOpen = signal(
    false,
    ...ngDevMode ? [{ debugName: "editOpen" }] : (
      /* istanbul ignore next */
      []
    )
  );
  editConnector = signal(
    null,
    ...ngDevMode ? [{ debugName: "editConnector" }] : (
      /* istanbul ignore next */
      []
    )
  );
  editConfig = signal(
    {},
    ...ngDevMode ? [{ debugName: "editConfig" }] : (
      /* istanbul ignore next */
      []
    )
  );
  editEnabled = signal(
    false,
    ...ngDevMode ? [{ debugName: "editEnabled" }] : (
      /* istanbul ignore next */
      []
    )
  );
  editAccessMode = signal(
    "APPROVAL_REQUIRED",
    ...ngDevMode ? [{ debugName: "editAccessMode" }] : (
      /* istanbul ignore next */
      []
    )
  );
  editSaving = signal(
    false,
    ...ngDevMode ? [{ debugName: "editSaving" }] : (
      /* istanbul ignore next */
      []
    )
  );
  editError = signal(
    "",
    ...ngDevMode ? [{ debugName: "editError" }] : (
      /* istanbul ignore next */
      []
    )
  );
  editShowPass = {};
  testRunning = signal(
    null,
    ...ngDevMode ? [{ debugName: "testRunning" }] : (
      /* istanbul ignore next */
      []
    )
  );
  testResult = signal(
    null,
    ...ngDevMode ? [{ debugName: "testResult" }] : (
      /* istanbul ignore next */
      []
    )
  );
  copiedToken = signal(
    null,
    ...ngDevMode ? [{ debugName: "copiedToken" }] : (
      /* istanbul ignore next */
      []
    )
  );
  editToken = computed(
    () => this.editConnector()?.ConnectorToken ?? null,
    ...ngDevMode ? [{ debugName: "editToken" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // ── 3-step Add Connector ──────────────────────────────────────
  addOpen = signal(
    false,
    ...ngDevMode ? [{ debugName: "addOpen" }] : (
      /* istanbul ignore next */
      []
    )
  );
  addStep = signal(
    1,
    ...ngDevMode ? [{ debugName: "addStep" }] : (
      /* istanbul ignore next */
      []
    )
  );
  addSelCat = signal(
    null,
    ...ngDevMode ? [{ debugName: "addSelCat" }] : (
      /* istanbul ignore next */
      []
    )
  );
  addSelType = signal(
    null,
    ...ngDevMode ? [{ debugName: "addSelType" }] : (
      /* istanbul ignore next */
      []
    )
  );
  addForm = signal(
    {},
    ...ngDevMode ? [{ debugName: "addForm" }] : (
      /* istanbul ignore next */
      []
    )
  );
  addName = signal(
    "",
    ...ngDevMode ? [{ debugName: "addName" }] : (
      /* istanbul ignore next */
      []
    )
  );
  addDesc = signal(
    "",
    ...ngDevMode ? [{ debugName: "addDesc" }] : (
      /* istanbul ignore next */
      []
    )
  );
  addSaving = signal(
    false,
    ...ngDevMode ? [{ debugName: "addSaving" }] : (
      /* istanbul ignore next */
      []
    )
  );
  addError = signal(
    "",
    ...ngDevMode ? [{ debugName: "addError" }] : (
      /* istanbul ignore next */
      []
    )
  );
  addShowPass = {};
  // catalog
  catalog = CONNECTOR_CATALOG;
  // flat category list for tabs
  categories = CONNECTOR_CATALOG.map((c) => ({
    id: c.id,
    label: c.label,
    icon: c.icon,
    color: c.color
  }));
  categorized = computed(
    () => this.connectors().filter((c) => c.Category === this.activeCategory()),
    ...ngDevMode ? [{ debugName: "categorized" }] : (
      /* istanbul ignore next */
      []
    )
  );
  activeCatDef = computed(
    () => getCategoryById(this.activeCategory()),
    ...ngDevMode ? [{ debugName: "activeCatDef" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor(route, router, http) {
    this.route = route;
    this.router = router;
    this.http = http;
  }
  ngOnInit() {
    this.projectId = Number(this.route.snapshot.paramMap.get("projectId"));
    this.load();
  }
  load() {
    this.loading.set(true);
    this.error.set("");
    this.http.get(`/api/connectors?scope=PROJECT&projectId=${this.projectId}`).subscribe({
      next: (r) => {
        this.connectors.set(r.data ?? []);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05D8\u05E2\u05D9\u05E0\u05EA \u05D7\u05D9\u05D1\u05D5\u05E8\u05D9\u05DD");
        this.loading.set(false);
      }
    });
  }
  // ── Edit existing connector ───────────────────────────────────
  openEdit(c) {
    this.editError.set("");
    this.editShowPass = {};
    this.http.get(`/api/connectors/${c.ConnectorKey}?scope=PROJECT&projectId=${this.projectId}`).subscribe({
      next: (r) => {
        this.editConnector.set(c);
        this.editConfig.set(__spreadValues({}, r.data.config));
        this.editEnabled.set(!!c.IsEnabled);
        this.editAccessMode.set(c.AccessMode || "APPROVAL_REQUIRED");
        this.editOpen.set(true);
      },
      error: () => {
        this.editConnector.set(c);
        this.editConfig.set({});
        this.editEnabled.set(!!c.IsEnabled);
        this.editAccessMode.set(c.AccessMode || "APPROVAL_REQUIRED");
        this.editOpen.set(true);
      }
    });
  }
  closeEdit() {
    this.editOpen.set(false);
    this.editConnector.set(null);
  }
  getField(key) {
    return this.editConfig()[key] ?? "";
  }
  setField(key, value) {
    this.editConfig.update((cfg) => __spreadProps(__spreadValues({}, cfg), { [key]: value }));
  }
  toggleShow(key) {
    this.editShowPass[key] = !this.editShowPass[key];
  }
  saveEdit() {
    const c = this.editConnector();
    if (!c)
      return;
    this.editSaving.set(true);
    this.editError.set("");
    this.http.put(`/api/connector-access/connectors/${c.ConnectorID}/access-mode`, { accessMode: this.editAccessMode() }).subscribe();
    this.http.put(`/api/connectors/${c.ConnectorKey}?scope=PROJECT&projectId=${this.projectId}`, { config: this.editConfig(), isEnabled: this.editEnabled(), projectId: this.projectId }).subscribe({
      next: () => {
        this.editSaving.set(false);
        this.closeEdit();
        this.load();
      },
      error: (err) => {
        this.editSaving.set(false);
        this.editError.set(err.error?.message ?? "\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05E9\u05DE\u05D9\u05E8\u05D4");
      }
    });
  }
  // ── Test connection ───────────────────────────────────────────
  testConnection(c, fromDialog = false) {
    this.testRunning.set(c.ConnectorKey);
    this.testResult.set(null);
    this.http.post(`/api/connectors/${c.ConnectorKey}/test?scope=PROJECT&projectId=${this.projectId}`, { projectId: this.projectId }).subscribe({
      next: (r) => {
        this.testRunning.set(null);
        this.testResult.set(__spreadValues({ key: c.ConnectorKey }, r.data));
        this.load();
      },
      error: (err) => {
        this.testRunning.set(null);
        this.testResult.set({ key: c.ConnectorKey, status: "FAIL", message: err.error?.message ?? "\u05E9\u05D2\u05D9\u05D0\u05D4" });
      }
    });
  }
  // ── Add Connector — 3-step dialog ────────────────────────────
  openAdd() {
    this.addStep.set(1);
    this.addSelCat.set(null);
    this.addSelType.set(null);
    this.addForm.set({});
    this.addName.set("");
    this.addDesc.set("");
    this.addError.set("");
    this.addShowPass = {};
    this.addOpen.set(true);
  }
  selectCat(cat) {
    this.addSelCat.set(cat);
    this.addSelType.set(null);
    this.addStep.set(2);
  }
  selectType(type) {
    this.addSelType.set(type);
    const defaults = {};
    for (const f of type.fields) {
      if (f.default !== void 0)
        defaults[f.key] = f.type === "boolean" ? f.default === "true" : f.default;
    }
    this.addForm.set(defaults);
    this.addName.set(type.typeName);
    this.addDesc.set(type.description ?? "");
    this.addStep.set(3);
  }
  getAddField(key) {
    return this.addForm()[key] ?? "";
  }
  setAddField(key, value) {
    this.addForm.update((f) => __spreadProps(__spreadValues({}, f), { [key]: value }));
  }
  toggleAddShow(key) {
    this.addShowPass[key] = !this.addShowPass[key];
  }
  backToStep(step) {
    this.addStep.set(step);
  }
  saveAdd() {
    const type = this.addSelType();
    const cat = this.addSelCat();
    if (!type || !cat)
      return;
    if (!this.addName().trim()) {
      this.addError.set("\u05E9\u05DD \u05D7\u05D9\u05D1\u05D5\u05E8 \u05D4\u05D5\u05D0 \u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4");
      return;
    }
    const requiredMissing = type.fields.filter((f) => f.required && !this.getAddField(f.key));
    if (requiredMissing.length) {
      this.addError.set(`\u05E9\u05D3\u05D5\u05EA \u05D7\u05D5\u05D1\u05D4 \u05D7\u05E1\u05E8\u05D9\u05DD: ${requiredMissing.map((f) => f.label).join(", ")}`);
      return;
    }
    this.addSaving.set(true);
    this.addError.set("");
    this.http.post("/api/connectors", {
      connectorName: this.addName(),
      category: cat.id,
      typeCode: type.typeCode,
      iconEmoji: type.icon,
      description: this.addDesc(),
      config: this.addForm(),
      projectId: this.projectId
    }).subscribe({
      next: () => {
        this.addSaving.set(false);
        this.addOpen.set(false);
        this.activeCategory.set(cat.id);
        this.load();
      },
      error: (err) => {
        this.addSaving.set(false);
        this.addError.set(err.error?.message ?? "\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05D9\u05E6\u05D9\u05E8\u05EA \u05D7\u05D9\u05D1\u05D5\u05E8");
      }
    });
  }
  // ── Helpers ───────────────────────────────────────────────────
  statusClass(s) {
    return { OK: "status-ok", FAIL: "status-fail", PENDING: "status-pending" }[s ?? ""] ?? "status-none";
  }
  statusLabel(s) {
    return { OK: "\u2713 \u05EA\u05E7\u05D9\u05DF", FAIL: "\u2717 \u05DB\u05E9\u05DC", PENDING: "\u23F3 \u05DE\u05DE\u05EA\u05D9\u05DF" }[s ?? ""] ?? "\u05DC\u05D0 \u05E0\u05D1\u05D3\u05E7";
  }
  formatDate(d) {
    if (!d)
      return "\u2014";
    return new Date(d).toLocaleDateString("he-IL", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  catCount(id) {
    return this.connectors().filter((c) => c.Category === id).length;
  }
  catEnabledCount(id) {
    return this.connectors().filter((c) => c.Category === id && c.IsEnabled).length;
  }
  catColor(id) {
    return this.catalog.find((c) => c.id === id)?.color ?? "#64748b";
  }
  copyToken(token) {
    navigator.clipboard.writeText(token).then(() => {
      this.copiedToken.set(token);
      setTimeout(() => this.copiedToken.set(null), 2e3);
    });
  }
  confirmDelete(c) {
    this.deleteConnector.set(c);
    this.deleteOpen.set(true);
  }
  cancelDelete() {
    this.deleteOpen.set(false);
    this.deleteConnector.set(null);
  }
  doDelete() {
    const c = this.deleteConnector();
    if (!c)
      return;
    this.deleteInProgress.set(true);
    this.http.delete(`/api/connectors/${c.ConnectorKey}?scope=PROJECT&projectId=${this.projectId}`).subscribe({
      next: () => {
        this.deleteInProgress.set(false);
        this.cancelDelete();
        this.load();
      },
      error: (err) => {
        this.deleteInProgress.set(false);
        alert(err.error?.message ?? "\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05DE\u05D7\u05D9\u05E7\u05D4");
      }
    });
  }
  back() {
    this.router.navigate(["/app/projects", this.projectId]);
  }
  static \u0275fac = function WsConnectorsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WsConnectorsComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WsConnectorsComponent, selectors: [["app-ws-connectors"]], decls: 30, vars: 6, consts: [[1, "wc-root"], [1, "wc-toolbar"], [1, "wc-back", 3, "click"], [1, "wc-brand"], [1, "wc-brand-name"], [1, "wc-brand-sub"], [1, "wc-tools"], ["type", "button", 1, "btn-new-connector", 3, "click"], [1, "test-pill", 3, "test-ok", "test-fail", "test-pending"], ["aria-hidden", "true"], [1, "wc-body"], [1, "wc-layout"], [1, "cat-sidebar"], ["type", "button", 1, "cat-item", 3, "active", "--cat-color"], [1, "wc-main"], [1, "cat-header"], [1, "wc-loading"], [1, "wc-error"], [1, "conn-grid"], [3, "width", "minWidth"], ["title", "\u05D0\u05D9\u05E9\u05D5\u05E8 \u05DE\u05D7\u05D9\u05E7\u05D4", 3, "width"], [3, "title", "width", "minWidth"], [1, "test-pill"], [1, "pill-close", 3, "click"], ["type", "button", 1, "cat-item", 3, "click"], [1, "cat-emoji"], [1, "cat-name"], [1, "cat-count", 3, "has-enabled"], [1, "cat-count"], [1, "cat-hd-icon"], [1, "cat-hd-title"], [1, "cat-hd-sub"], [1, "cat-type-chips"], [1, "type-chip"], ["type", "pulsing", "size", "large", "themeColor", "primary"], [1, "conn-card", 3, "enabled", "no-config", "--card-color"], [1, "conn-empty"], [1, "conn-card"], [1, "card-top"], [1, "card-icon"], [1, "card-info"], [1, "card-name"], [1, "card-desc"], [1, "card-status"], [1, "card-meta"], [1, "card-uuid", 3, "title"], [1, "card-actions"], ["type", "button", 1, "btn-test", 3, "click", "disabled"], ["type", "pulsing", "size", "small", "themeColor", "primary"], ["type", "button", 1, "btn-edit", 3, "click"], ["type", "button", "title", "\u05DE\u05D7\u05E7", 1, "btn-delete-card", 3, "click"], [1, "enabled-dot", 3, "title"], [1, "card-meta-msg"], [1, "card-uuid", 3, "click", "title"], [1, "card-uuid-val"], [1, "card-uuid-copy"], [1, "conn-empty-icon"], [1, "conn-empty-title"], [1, "conn-empty-sub"], ["type", "button", 1, "btn-empty-add", 3, "click"], [3, "close", "width", "minWidth"], [1, "add-dialog-header"], [1, "add-steps"], [1, "add-step"], [1, "step-num"], [1, "step-lbl"], [1, "step-line"], [1, "add-body", "step1-body"], [1, "add-body", "step2-body"], [1, "add-body", "step3-body"], [1, "edit-footer"], ["kendoButton", "", 1, "btn-save", 3, "disabled"], ["kendoButton", "", "fillMode", "outline", 1, "btn-cancel", 3, "click", "disabled"], [1, "step-hint"], [1, "cat-grid"], ["type", "button", 1, "cat-card", 3, "--cc"], ["type", "button", 1, "cat-card", 3, "click"], [1, "cc-icon"], [1, "cc-label"], [1, "cc-count"], [1, "step-back-row"], ["type", "button", 1, "btn-back-step", 3, "click"], [1, "step-cat-badge"], [1, "type-grid"], ["type", "button", 1, "type-card"], ["type", "button", 1, "type-card", 3, "click"], [1, "tc-icon"], [1, "tc-info"], [1, "tc-name"], [1, "tc-desc"], [1, "tc-fields"], [1, "step-type-badge"], [1, "add-error"], [1, "edit-row"], [1, "edit-label"], [1, "req"], [1, "edit-field"], ["type", "text", "placeholder", "\u05E9\u05DD \u05DE\u05D6\u05D4\u05D4 \u05DC\u05D7\u05D9\u05D1\u05D5\u05E8", "dir", "rtl", 1, "edit-input", 3, "input", "value"], ["type", "text", "placeholder", "\u05EA\u05D9\u05D0\u05D5\u05E8 \u05E7\u05E6\u05E8", "dir", "rtl", 1, "edit-input", 3, "input", "value"], [1, "field-hint"], [1, "pass-wrap"], [1, "seg-ctrl"], ["type", "number", "dir", "ltr", 1, "edit-input", 3, "value", "placeholder"], [1, "edit-input", "edit-select"], ["rows", "4", 1, "edit-input", "edit-textarea", 3, "dir", "placeholder"], ["type", "text", 1, "edit-input", 3, "value", "dir", "placeholder"], [1, "edit-input", 3, "input", "type", "value", "placeholder", "dir"], ["type", "button", 1, "btn-eye", 3, "click"], ["type", "button", 1, "seg-btn", 3, "click"], ["type", "number", "dir", "ltr", 1, "edit-input", 3, "input", "value", "placeholder"], [1, "edit-input", "edit-select", 3, "change"], [3, "value", "selected"], ["rows", "4", 1, "edit-input", "edit-textarea", 3, "input", "dir", "placeholder"], ["type", "text", 1, "edit-input", 3, "input", "value", "dir", "placeholder"], ["kendoButton", "", 1, "btn-save", 3, "click", "disabled"], ["type", "pulsing", "size", "small"], ["title", "\u05D0\u05D9\u05E9\u05D5\u05E8 \u05DE\u05D7\u05D9\u05E7\u05D4", 3, "close", "width"], [1, "edit-body", 2, "text-align", "center", "padding", "20px"], [2, "font-size", "2rem", "margin-bottom", "12px"], [2, "margin", "0 0 8px", "font-size", ".9rem", "color", "#0f172a"], [2, "font-size", ".78rem", "color", "#94a3b8", "margin", "0"], ["kendoButton", "", 1, "btn-save", 2, "background", "#ef4444!important", 3, "click", "disabled"], ["kendoButton", "", "fillMode", "outline", 1, "btn-cancel", 3, "click"], [3, "close", "title", "width", "minWidth"], [1, "edit-body"], [1, "edit-error"], [1, "edit-desc"], [1, "token-row"], [1, "token-label"], [1, "token-field"], [1, "token-empty"], [1, "seg-ctrl", "access-ctrl"], [1, "access-hint"], ["kendoButton", "", 1, "btn-test-dialog", 3, "click", "disabled"], [1, "token-val"], ["type", "button", 1, "btn-copy", 3, "click"], ["type", "number", 1, "edit-input", 3, "value"], ["type", "text", 1, "edit-input", 3, "value", "placeholder"], [1, "edit-input", 3, "input", "type", "value", "placeholder"], ["type", "number", 1, "edit-input", 3, "input", "value"], ["type", "text", 1, "edit-input", 3, "input", "value", "placeholder"]], template: function WsConnectorsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
      \u0275\u0275listener("click", function WsConnectorsComponent_Template_button_click_2_listener() {
        return ctx.back();
      });
      \u0275\u0275elementStart(3, "mat-icon");
      \u0275\u0275text(4, "arrow_back");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span");
      \u0275\u0275text(6, "FLOWSPACE");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 3)(8, "span", 4);
      \u0275\u0275text(9, "CONNECTORS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "span", 5);
      \u0275\u0275text(11, "\u05D7\u05D9\u05D1\u05D5\u05E8\u05D9\u05DD \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9\u05D9\u05DD \u05DC\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 6)(13, "button", 7);
      \u0275\u0275listener("click", function WsConnectorsComponent_Template_button_click_13_listener() {
        return ctx.openAdd();
      });
      \u0275\u0275text(14, " + \u05D7\u05D9\u05D1\u05D5\u05E8 \u05D7\u05D3\u05E9 ");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(15, WsConnectorsComponent_Conditional_15_Template, 4, 7, "div", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(16, "app-neural-net", 9);
      \u0275\u0275elementStart(17, "div", 10)(18, "div", 11)(19, "nav", 12);
      \u0275\u0275repeaterCreate(20, WsConnectorsComponent_For_21_Template, 6, 7, "button", 13, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 14);
      \u0275\u0275conditionalCreate(23, WsConnectorsComponent_Conditional_23_Template, 11, 6, "div", 15);
      \u0275\u0275conditionalCreate(24, WsConnectorsComponent_Conditional_24_Template, 2, 0, "div", 16)(25, WsConnectorsComponent_Conditional_25_Template, 2, 1, "div", 17)(26, WsConnectorsComponent_Conditional_26_Template, 4, 1, "div", 18);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(27, WsConnectorsComponent_Conditional_27_Template, 28, 23, "kendo-dialog", 19);
      \u0275\u0275conditionalCreate(28, WsConnectorsComponent_Conditional_28_Template, 19, 4, "kendo-dialog", 20);
      \u0275\u0275conditionalCreate(29, WsConnectorsComponent_Conditional_29_Template, 49, 24, "kendo-dialog", 21);
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275conditional(ctx.testResult() ? 15 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.categories);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.activeCatDef() ? 23 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 24 : ctx.error() ? 25 : 26);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.addOpen() ? 27 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.deleteOpen() && ctx.deleteConnector() ? 28 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.editOpen() && ctx.editConnector() ? 29 : -1);
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    NgSelectOption,
    \u0275NgSelectMultipleOption,
    ReactiveFormsModule,
    MatIconModule,
    MatIcon,
    Dir,
    NeuralNetComponent,
    DialogsModule,
    DialogComponent,
    DialogActionsComponent,
    InputsModule,
    ButtonsModule,
    ButtonComponent,
    IndicatorsModule,
    LoaderComponent
  ], styles: ['\n.wc-root[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  background:\n    linear-gradient(\n      160deg,\n      #050d1a 0%,\n      #0a1628 50%,\n      #060e1c 100%);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  direction: rtl;\n  font-family:\n    "Noto Sans Hebrew",\n    "Segoe UI",\n    sans-serif;\n}\n.wc-toolbar[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 200;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 10px 24px;\n  background: rgba(5, 13, 26, 0.92);\n  border-bottom: 1px solid rgba(8, 145, 178, 0.2);\n  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.5);\n  direction: ltr;\n}\n.wc-back[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: rgba(6, 182, 212, 0.55);\n  padding: 6px 12px 6px 8px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n  transition: color 0.15s, background 0.15s;\n}\n.wc-back[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.wc-back[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-family: "Share Tech Mono", monospace;\n  letter-spacing: 0.08em;\n}\n.wc-back[_ngcontent-%COMP%]:hover {\n  color: #06b6d4;\n  background: rgba(6, 182, 212, 0.1);\n}\n.wc-brand[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1px;\n  pointer-events: none;\n}\n.wc-brand[_ngcontent-%COMP%]   .wc-brand-name[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #06b6d4;\n  letter-spacing: 0.2em;\n  text-shadow: 0 0 20px rgba(6, 182, 212, 0.4);\n}\n.wc-brand[_ngcontent-%COMP%]   .wc-brand-sub[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: rgba(255, 255, 255, 0.3);\n}\n.wc-tools[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-left: auto;\n}\n.btn-new-connector[_ngcontent-%COMP%] {\n  padding: 7px 18px;\n  border-radius: 8px;\n  border: 1px solid rgba(6, 182, 212, 0.5);\n  background: rgba(6, 182, 212, 0.12);\n  color: #06b6d4;\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  transition: background 0.15s, border-color 0.15s;\n}\n.btn-new-connector[_ngcontent-%COMP%]:hover {\n  background: rgba(6, 182, 212, 0.22);\n  border-color: #06b6d4;\n}\n.test-pill[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 5px 14px;\n  border-radius: 20px;\n  font-size: 0.78rem;\n  font-weight: 500;\n}\n.test-pill.test-ok[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.15);\n  border: 1px solid rgba(16, 185, 129, 0.4);\n  color: #34d399;\n}\n.test-pill.test-fail[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  border: 1px solid rgba(239, 68, 68, 0.4);\n  color: #f87171;\n}\n.test-pill.test-pending[_ngcontent-%COMP%] {\n  background: rgba(234, 179, 8, 0.15);\n  border: 1px solid rgba(234, 179, 8, 0.4);\n  color: #fbbf24;\n}\n.pill-close[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  cursor: pointer;\n  color: inherit;\n  opacity: 0.6;\n  font-size: 0.8rem;\n  padding: 0;\n}\n.pill-close[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.wc-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: hidden;\n  position: relative;\n  z-index: 10;\n  padding: 0;\n}\n.wc-layout[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n}\n.cat-sidebar[_ngcontent-%COMP%] {\n  width: 180px;\n  flex-shrink: 0;\n  background: rgba(5, 10, 20, 0.7);\n  border-left: 1px solid rgba(6, 182, 212, 0.1);\n  overflow-y: auto;\n  padding: 12px 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  scrollbar-width: thin;\n  scrollbar-color: rgba(6, 182, 212, 0.15) transparent;\n}\n.cat-sidebar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.cat-sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(6, 182, 212, 0.15);\n  border-radius: 2px;\n}\n.cat-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 8px 12px 8px 14px;\n  border: none;\n  background: transparent;\n  color: rgba(255, 255, 255, 0.35);\n  font-size: 0.76rem;\n  font-weight: 500;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  text-align: right;\n  direction: rtl;\n  transition: color 0.15s, background 0.15s;\n  border-right: 2px solid transparent;\n  width: 100%;\n}\n.cat-item[_ngcontent-%COMP%]:hover {\n  color: rgba(255, 255, 255, 0.7);\n  background: rgba(255, 255, 255, 0.04);\n}\n.cat-item.active[_ngcontent-%COMP%] {\n  color: var(--cat-color, #06b6d4);\n  border-right-color: var(--cat-color, #06b6d4);\n  background: rgba(255, 255, 255, 0.06);\n  font-weight: 700;\n}\n.cat-emoji[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  flex-shrink: 0;\n}\n.cat-name[_ngcontent-%COMP%] {\n  flex: 1;\n  line-height: 1.2;\n}\n.cat-count[_ngcontent-%COMP%] {\n  font-size: 0.64rem;\n  padding: 1px 5px;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.07);\n  color: rgba(255, 255, 255, 0.3);\n  flex-shrink: 0;\n}\n.cat-count.has-enabled[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.2);\n  color: #34d399;\n}\n.wc-main[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px 24px;\n  scrollbar-width: thin;\n  scrollbar-color: rgba(6, 182, 212, 0.2) transparent;\n}\n.wc-main[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.wc-main[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(6, 182, 212, 0.2);\n  border-radius: 3px;\n}\n.cat-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  margin-bottom: 18px;\n  padding: 14px 16px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 12px;\n}\n.cat-hd-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  flex-shrink: 0;\n  line-height: 1;\n}\n.cat-hd-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #fff;\n  margin-bottom: 2px;\n}\n.cat-hd-sub[_ngcontent-%COMP%] {\n  font-size: 0.73rem;\n  color: rgba(255, 255, 255, 0.4);\n}\n.cat-type-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n  margin-right: auto;\n}\n.type-chip[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  padding: 2px 8px;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: rgba(255, 255, 255, 0.5);\n  white-space: nowrap;\n}\n.wc-loading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 60px;\n}\n.wc-error[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border-radius: 8px;\n  background: rgba(239, 68, 68, 0.1);\n  border: 1px solid rgba(239, 68, 68, 0.3);\n  color: #f87171;\n  font-size: 0.85rem;\n}\n.conn-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 12px;\n}\n.conn-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 9px;\n  transition: border-color 0.2s, box-shadow 0.2s;\n  position: relative;\n}\n.conn-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 3px;\n  border-radius: 0 12px 12px 0;\n  background: var(--card-color, #64748b);\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n.conn-card[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.conn-card[_ngcontent-%COMP%]:hover {\n  border-color: #cbd5e1;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n}\n.conn-card.enabled[_ngcontent-%COMP%] {\n  border-color: #86efac;\n}\n.conn-card.enabled[_ngcontent-%COMP%]::before {\n  opacity: 1;\n  background: #10b981;\n}\n.conn-card.no-config[_ngcontent-%COMP%] {\n  opacity: 0.75;\n}\n.card-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n}\n.card-icon[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  flex-shrink: 0;\n  width: 38px;\n  height: 38px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f1f5f9;\n  border-radius: 9px;\n  border: 1px solid #e2e8f0;\n}\n.card-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.card-name[_ngcontent-%COMP%] {\n  font-size: 0.87rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 2px;\n}\n.card-desc[_ngcontent-%COMP%] {\n  font-size: 0.71rem;\n  color: #64748b;\n  line-height: 1.4;\n}\n.card-status[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 0.68rem;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 10px;\n}\n.card-status.status-ok[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n  border: 1px solid #6ee7b7;\n}\n.card-status.status-fail[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n  border: 1px solid #fca5a5;\n}\n.card-status.status-pending[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n  border: 1px solid #fcd34d;\n}\n.card-status.status-none[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #94a3b8;\n  border: 1px solid #e2e8f0;\n}\n.card-meta[_ngcontent-%COMP%] {\n  font-size: 0.69rem;\n  color: #94a3b8;\n}\n.card-meta-msg[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.btn-test[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 10px;\n  border-radius: 6px;\n  border: 1px solid #e2e8f0;\n  background: #f8fafc;\n  color: #64748b;\n  font-size: 0.72rem;\n  font-weight: 500;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-test[_ngcontent-%COMP%]   kendo-loader[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.btn-test[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #eff6ff;\n  border-color: #93c5fd;\n  color: #1d4ed8;\n}\n.btn-test[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.btn-edit[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 12px;\n  border-radius: 6px;\n  border: 1px solid #93c5fd;\n  background: #eff6ff;\n  color: #1d4ed8;\n  font-size: 0.72rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-edit[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n  color: #fff;\n  border-color: #1d4ed8;\n}\n.btn-delete-card[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  border-radius: 5px;\n  border: 1px solid #e2e8f0;\n  background: transparent;\n  color: #94a3b8;\n  font-size: 0.78rem;\n  font-weight: 700;\n  cursor: pointer;\n  margin-right: auto;\n  transition: all 0.15s;\n}\n.btn-delete-card[_ngcontent-%COMP%]:hover {\n  border-color: #ef4444;\n  color: #ef4444;\n  background: #fef2f2;\n}\n.enabled-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #e2e8f0;\n  transition: background 0.2s;\n}\n.enabled-dot.on[_ngcontent-%COMP%] {\n  background: #10b981;\n  box-shadow: 0 0 5px rgba(16, 185, 129, 0.4);\n}\n.conn-empty[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  text-align: center;\n  padding: 60px 20px;\n}\n.conn-empty-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 8px;\n  opacity: 0.5;\n}\n.conn-empty-title[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: rgba(255, 255, 255, 0.6);\n  font-weight: 600;\n  margin: 0 0 4px;\n}\n.conn-empty-sub[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: rgba(255, 255, 255, 0.25);\n  margin: 0 0 16px;\n}\n.btn-empty-add[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 20px;\n  border-radius: 8px;\n  border: 1px solid rgba(6, 182, 212, 0.5);\n  background: rgba(6, 182, 212, 0.12);\n  color: #06b6d4;\n  font-size: 0.82rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-empty-add[_ngcontent-%COMP%]:hover {\n  background: rgba(6, 182, 212, 0.22);\n}\n.card-uuid[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 7px;\n  background: rgba(6, 182, 212, 0.05);\n  border: 1px solid rgba(6, 182, 212, 0.15);\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.card-uuid[_ngcontent-%COMP%]:hover {\n  background: rgba(6, 182, 212, 0.12);\n}\n.card-uuid-val[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.62rem;\n  color: rgba(6, 182, 212, 0.65);\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.card-uuid-copy[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #06b6d4;\n  flex-shrink: 0;\n}\n.add-dialog-header[_ngcontent-%COMP%] {\n  padding: 16px 24px 0;\n  direction: rtl;\n}\n.add-steps[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  justify-content: center;\n  padding-bottom: 14px;\n}\n.add-step[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n}\n.step-num[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.8rem;\n  font-weight: 700;\n  background: rgba(255, 255, 255, 0.08);\n  color: rgba(255, 255, 255, 0.35);\n  border: 1.5px solid rgba(255, 255, 255, 0.12);\n  transition: all 0.2s;\n}\n.add-step.active[_ngcontent-%COMP%]   .step-num[_ngcontent-%COMP%] {\n  background: #06b6d4;\n  color: #fff;\n  border-color: #06b6d4;\n}\n.add-step.done[_ngcontent-%COMP%]   .step-num[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: #fff;\n  border-color: #10b981;\n  font-size: 0.9rem;\n}\n.step-lbl[_ngcontent-%COMP%] {\n  font-size: 0.67rem;\n  color: rgba(255, 255, 255, 0.35);\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n.add-step.active[_ngcontent-%COMP%]   .step-lbl[_ngcontent-%COMP%] {\n  color: #06b6d4;\n}\n.add-step.done[_ngcontent-%COMP%]   .step-lbl[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.step-line[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 1.5px;\n  background: rgba(255, 255, 255, 0.1);\n  min-width: 40px;\n  margin: 0 6px;\n  margin-bottom: 14px;\n  transition: background 0.2s;\n}\n.step-line.done[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n.add-body[_ngcontent-%COMP%] {\n  padding: 4px 20px 16px;\n  direction: rtl;\n  overflow-y: auto;\n  max-height: 55vh;\n  scrollbar-width: thin;\n  scrollbar-color: rgba(6, 182, 212, 0.2) transparent;\n}\n.step-hint[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: rgba(255, 255, 255, 0.4);\n  margin: 0 0 12px;\n}\n.cat-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));\n  gap: 8px;\n}\n.cat-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  padding: 12px 8px;\n  border-radius: 10px;\n  border: 1.5px solid rgba(255, 255, 255, 0.08);\n  background: rgba(255, 255, 255, 0.03);\n  cursor: pointer;\n  transition: all 0.15s;\n  direction: rtl;\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n.cat-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--cc, #06b6d4);\n  background: color-mix(in srgb, var(--cc, #06b6d4) 12%, transparent);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.cc-icon[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n}\n.cc-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.7);\n  text-align: center;\n  line-height: 1.3;\n}\n.cc-count[_ngcontent-%COMP%] {\n  font-size: 0.63rem;\n  color: rgba(255, 255, 255, 0.3);\n}\n.step-back-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 10px;\n}\n.btn-back-step[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  color: rgba(6, 182, 212, 0.7);\n  cursor: pointer;\n  font-size: 0.76rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  padding: 0;\n}\n.btn-back-step[_ngcontent-%COMP%]:hover {\n  color: #06b6d4;\n}\n.step-cat-badge[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 600;\n  padding: 2px 10px;\n  border-radius: 10px;\n}\n.step-type-badge[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.6);\n}\n.type-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.type-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 14px;\n  border-radius: 9px;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  background: rgba(255, 255, 255, 0.03);\n  cursor: pointer;\n  transition: all 0.15s;\n  direction: rtl;\n  text-align: right;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  width: 100%;\n}\n.type-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(6, 182, 212, 0.5);\n  background: rgba(6, 182, 212, 0.08);\n}\n.tc-icon[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  flex-shrink: 0;\n}\n.tc-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.tc-name[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.8);\n}\n.tc-desc[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: rgba(255, 255, 255, 0.35);\n  margin-top: 2px;\n}\n.tc-fields[_ngcontent-%COMP%] {\n  font-size: 0.66rem;\n  color: rgba(6, 182, 212, 0.5);\n  margin-top: 3px;\n}\n.add-error[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  color: #dc2626;\n  font-size: 0.8rem;\n  margin-bottom: 10px;\n}\n.field-hint[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: rgba(148, 163, 184, 0.7);\n  margin-bottom: 3px;\n  display: block;\n}\n.edit-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 72px;\n  line-height: 1.5;\n}\n[_nghost-%COMP%]     .k-dialog-actions {\n  direction: rtl !important;\n}\n.edit-body[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  direction: rtl;\n}\n.edit-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--sf-text-muted);\n  padding: 7px 10px;\n  background: var(--sf-bg-card);\n  border-radius: 7px;\n  border: 1px solid var(--sf-border);\n}\n.edit-error[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  color: #dc2626;\n  font-size: 0.8rem;\n}\n.edit-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 130px 1fr;\n  align-items: start;\n  gap: 10px;\n  direction: rtl;\n}\n.edit-label[_ngcontent-%COMP%] {\n  font-size: 0.77rem;\n  font-weight: 600;\n  color: var(--sf-text-secondary);\n  padding-top: 7px;\n  text-align: right;\n}\n.req[_ngcontent-%COMP%] {\n  color: var(--sf-danger);\n  margin-right: 2px;\n}\n.edit-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.edit-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 7px 10px;\n  border: 1px solid var(--sf-border);\n  border-radius: 7px;\n  background: var(--sf-bg-card);\n  color: var(--sf-text);\n  font-size: 0.84rem;\n  font-family: "Share Tech Mono", monospace;\n  direction: rtl;\n  text-align: right;\n  box-sizing: border-box;\n  transition: border-color 0.15s;\n}\n.edit-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--sf-primary);\n  box-shadow: 0 0 0 3px rgba(13, 71, 255, 0.1);\n}\ninput[type=number].edit-input[_ngcontent-%COMP%] {\n  direction: ltr;\n  text-align: left;\n}\nselect.edit-select[_ngcontent-%COMP%] {\n  appearance: auto;\n  direction: ltr;\n  text-align: left;\n  cursor: pointer;\n}\n.pass-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n}\n.pass-wrap[_ngcontent-%COMP%]   .edit-input[_ngcontent-%COMP%] {\n  flex: 1;\n  direction: ltr;\n  text-align: left;\n}\n.btn-eye[_ngcontent-%COMP%] {\n  border: 1px solid var(--sf-border);\n  background: var(--sf-bg-card);\n  border-radius: 7px;\n  padding: 5px 9px;\n  cursor: pointer;\n  font-size: 0.82rem;\n}\n.btn-eye[_ngcontent-%COMP%]:hover {\n  background: var(--sf-bg-hover);\n}\n.seg-ctrl[_ngcontent-%COMP%] {\n  display: inline-flex;\n  direction: rtl;\n  align-self: flex-start;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.seg-btn[_ngcontent-%COMP%] {\n  padding: 6px 15px;\n  font-size: 0.78rem;\n  font-weight: 500;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  border: none;\n  background: var(--sf-bg);\n  color: var(--sf-text-secondary);\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.seg-btn[_ngcontent-%COMP%]    + .seg-btn[_ngcontent-%COMP%] {\n  border-inline-start: 1px solid var(--sf-border);\n}\n.seg-btn[_ngcontent-%COMP%]:hover:not(.seg-on):not(.seg-off) {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.seg-btn.seg-on[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: #fff;\n  font-weight: 600;\n}\n.seg-btn.seg-off[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: #fff;\n  font-weight: 600;\n}\n.edit-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  direction: rtl;\n}\n.btn-save[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: #f97316 !important;\n  color: #fff !important;\n  border: none !important;\n  border-radius: 8px !important;\n  padding: 8px 18px !important;\n  font-size: 0.84rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.3);\n  cursor: pointer;\n}\n.btn-save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #ea6c0a !important;\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.btn-save[_ngcontent-%COMP%]   kendo-loader[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.btn-test-dialog[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 12px;\n  border-radius: 7px;\n  border: 1px solid var(--sf-primary) !important;\n  background: var(--sf-primary-light, #eff6ff) !important;\n  color: var(--sf-primary) !important;\n  font-size: 0.8rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n}\n.btn-test-dialog[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--sf-primary) !important;\n  color: #fff !important;\n}\n.btn-test-dialog[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.btn-test-dialog[_ngcontent-%COMP%]   kendo-loader[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  border-color: var(--sf-border) !important;\n  color: var(--sf-text-secondary) !important;\n}\n.token-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 6px 10px;\n  background: rgba(6, 182, 212, 0.05);\n  border: 1px solid rgba(6, 182, 212, 0.15);\n  border-radius: 7px;\n  direction: rtl;\n}\n.token-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: rgba(148, 163, 184, 0.7);\n  white-space: nowrap;\n}\n.token-field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  flex: 1;\n  direction: ltr;\n}\n.token-val[_ngcontent-%COMP%] {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.69rem;\n  color: #22d3ee;\n  flex: 1;\n}\n.btn-copy[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  border-radius: 4px;\n  border: 1px solid rgba(6, 182, 212, 0.35);\n  background: rgba(6, 182, 212, 0.08);\n  color: #22d3ee;\n  font-size: 0.68rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-copy[_ngcontent-%COMP%]:hover {\n  background: #06b6d4;\n  color: #050d1a;\n}\n.token-empty[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: rgba(255, 255, 255, 0.3);\n}\n.access-ctrl[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.seg-public[_ngcontent-%COMP%] {\n  background: #059669 !important;\n  color: #fff !important;\n  font-weight: 600 !important;\n}\n.seg-approval[_ngcontent-%COMP%] {\n  background: #d97706 !important;\n  color: #fff !important;\n  font-weight: 600 !important;\n}\n.seg-private[_ngcontent-%COMP%] {\n  background: #dc2626 !important;\n  color: #fff !important;\n  font-weight: 600 !important;\n}\n.access-hint[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: rgba(148, 163, 184, 0.6);\n  margin-top: 3px;\n  display: block;\n}\n/*# sourceMappingURL=ws-connectors.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WsConnectorsComponent, [{
    type: Component,
    args: [{ selector: "app-ws-connectors", standalone: true, imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      MatIconModule,
      NeuralNetComponent,
      DialogsModule,
      InputsModule,
      ButtonsModule,
      IndicatorsModule
    ], template: `<div class="wc-root">

  <!-- \u2500\u2500 Toolbar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="wc-toolbar">
    <button class="wc-back" (click)="back()">
      <mat-icon>arrow_back</mat-icon>
      <span>FLOWSPACE</span>
    </button>

    <div class="wc-brand">
      <span class="wc-brand-name">CONNECTORS</span>
      <span class="wc-brand-sub">\u05D7\u05D9\u05D1\u05D5\u05E8\u05D9\u05DD \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9\u05D9\u05DD \u05DC\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8</span>
    </div>

    <div class="wc-tools">
      <button class="btn-new-connector" (click)="openAdd()" type="button">
        + \u05D7\u05D9\u05D1\u05D5\u05E8 \u05D7\u05D3\u05E9
      </button>
      @if (testResult()) {
        <div class="test-pill" [class.test-ok]="testResult()!.status === 'OK'"
             [class.test-fail]="testResult()!.status === 'FAIL'"
             [class.test-pending]="testResult()!.status === 'PENDING'">
          {{ testResult()!.message }}
          <button class="pill-close" (click)="testResult.set(null)">\u2715</button>
        </div>
      }
    </div>
  </div>

  <!-- \u2500\u2500 Background \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <app-neural-net aria-hidden="true"></app-neural-net>

  <!-- \u2500\u2500 Body \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="wc-body">

    <!-- \u2500\u2500 Category Sidebar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="wc-layout">

      <nav class="cat-sidebar">
        @for (cat of categories; track cat.id) {
          <button class="cat-item" [class.active]="activeCategory() === cat.id"
                  [style.--cat-color]="cat.color"
                  (click)="activeCategory.set(cat.id)" type="button">
            <span class="cat-emoji">{{ cat.icon }}</span>
            <span class="cat-name">{{ cat.label }}</span>
            @if (catCount(cat.id) > 0) {
              <span class="cat-count" [class.has-enabled]="catEnabledCount(cat.id) > 0">
                {{ catEnabledCount(cat.id) }}/{{ catCount(cat.id) }}
              </span>
            }
          </button>
        }
      </nav>

      <!-- \u2500\u2500 Main Content \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
      <div class="wc-main">

        <!-- Category header -->
        @if (activeCatDef()) {
          <div class="cat-header">
            <span class="cat-hd-icon" [style.color]="activeCatDef()!.color">{{ activeCatDef()!.icon }}</span>
            <div>
              <div class="cat-hd-title">{{ activeCatDef()!.label }}</div>
              <div class="cat-hd-sub">
                {{ catCount(activeCategory()) }} \u05D7\u05D9\u05D1\u05D5\u05E8\u05D9\u05DD \u05DE\u05D5\u05D2\u05D3\u05E8\u05D9\u05DD
                \xB7 {{ activeCatDef()!.types.length }} \u05E1\u05D5\u05D2\u05D9 \u05D7\u05D9\u05D1\u05D5\u05E8 \u05D6\u05DE\u05D9\u05E0\u05D9\u05DD
              </div>
            </div>

            <!-- Type chips for this category -->
            <div class="cat-type-chips">
              @for (t of activeCatDef()!.types; track t.typeCode) {
                <span class="type-chip">{{ t.icon }} {{ t.typeName }}</span>
              }
            </div>
          </div>
        }

        <!-- Loading / Error -->
        @if (loading()) {
          <div class="wc-loading">
            <kendo-loader type="pulsing" size="large" themeColor="primary" />
          </div>
        } @else if (error()) {
          <div class="wc-error">{{ error() }}</div>
        } @else {

          <div class="conn-grid">
            @for (c of categorized(); track c.ConnectorKey) {
              <div class="conn-card" [class.enabled]="c.IsEnabled" [class.no-config]="!c.hasConfig"
                   [style.--card-color]="catColor(c.Category)">

                <div class="card-top">
                  <div class="card-icon">{{ c.IconEmoji }}</div>
                  <div class="card-info">
                    <div class="card-name">{{ c.ConnectorName }}</div>
                    <div class="card-desc">{{ c.Description }}</div>
                  </div>
                  <div class="card-status" [class]="statusClass(c.LastTestStatus)">
                    {{ c.hasConfig ? statusLabel(c.LastTestStatus) : '\u05DC\u05D0 \u05D4\u05D5\u05D2\u05D3\u05E8' }}
                  </div>
                </div>

                @if (c.hasConfig && c.LastTestedAt) {
                  <div class="card-meta">
                    \u05D1\u05D3\u05D9\u05E7\u05D4: {{ formatDate(c.LastTestedAt) }}
                    @if (c.LastTestMsg) { <span class="card-meta-msg">\u2014 {{ c.LastTestMsg }}</span> }
                  </div>
                }

                @if (c.ConnectorToken) {
                  <div class="card-uuid" (click)="copyToken(c.ConnectorToken)"
                       [title]="'UUID: ' + c.ConnectorToken">
                    <span class="card-uuid-val">{{ c.ConnectorToken }}</span>
                    <span class="card-uuid-copy">{{ copiedToken() === c.ConnectorToken ? '\u2713' : '\u2398' }}</span>
                  </div>
                }

                <div class="card-actions">
                  <button type="button" class="btn-test"
                          [disabled]="testRunning() === c.ConnectorKey"
                          (click)="testConnection(c)">
                    @if (testRunning() === c.ConnectorKey) {
                      <kendo-loader type="pulsing" size="small" themeColor="primary" />
                    } @else { \u25B6 }
                    \u05D1\u05D3\u05D5\u05E7
                  </button>
                  <button type="button" class="btn-edit" (click)="openEdit(c)">
                    \u270E {{ c.hasConfig ? '\u05E2\u05E8\u05D5\u05DA' : '\u05D4\u05D2\u05D3\u05E8' }}
                  </button>
                  <button type="button" class="btn-delete-card" (click)="confirmDelete(c)" title="\u05DE\u05D7\u05E7">\u2715</button>
                  <div class="enabled-dot" [class.on]="c.IsEnabled"
                       [title]="c.IsEnabled ? '\u05E4\u05E2\u05D9\u05DC' : '\u05DE\u05D5\u05E9\u05D1\u05EA'"></div>
                </div>

              </div>
            }

            <!-- Empty state -->
            @if (categorized().length === 0) {
              <div class="conn-empty">
                <div class="conn-empty-icon" [style.color]="activeCatDef()?.color">
                  {{ activeCatDef()?.icon }}
                </div>
                <p class="conn-empty-title">\u05D0\u05D9\u05DF \u05D7\u05D9\u05D1\u05D5\u05E8\u05D9\u05DD \u05DE\u05D5\u05D2\u05D3\u05E8\u05D9\u05DD</p>
                <p class="conn-empty-sub">\u05DC\u05D7\u05E5 "+ \u05D7\u05D9\u05D1\u05D5\u05E8 \u05D7\u05D3\u05E9" \u05DC\u05D4\u05D5\u05E1\u05D9\u05E3 \u05D7\u05D9\u05D1\u05D5\u05E8 \u05DE\u05E1\u05D5\u05D2 {{ activeCatDef()?.label }}</p>
                <button class="btn-empty-add" (click)="openAdd()" type="button">
                  + \u05D4\u05D5\u05E1\u05E3 \u05D7\u05D9\u05D1\u05D5\u05E8 \u05E8\u05D0\u05E9\u05D5\u05DF
                </button>
              </div>
            }
          </div>
        }
      </div>
    </div>
  </div>

</div>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
  \u2500\u2500 Add Connector \u2014 3-Step Dialog \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
@if (addOpen()) {
  <kendo-dialog [width]="680" [minWidth]="500" (close)="addOpen.set(false)">

    <!-- Header with steps -->
    <div class="add-dialog-header">
      <div class="add-steps">
        <div class="add-step" [class.done]="addStep() > 1" [class.active]="addStep() === 1">
          <span class="step-num">{{ addStep() > 1 ? '\u2713' : '1' }}</span>
          <span class="step-lbl">\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4</span>
        </div>
        <div class="step-line" [class.done]="addStep() > 1"></div>
        <div class="add-step" [class.done]="addStep() > 2" [class.active]="addStep() === 2">
          <span class="step-num">{{ addStep() > 2 ? '\u2713' : '2' }}</span>
          <span class="step-lbl">\u05E1\u05D5\u05D2 \u05D7\u05D9\u05D1\u05D5\u05E8</span>
        </div>
        <div class="step-line" [class.done]="addStep() > 2"></div>
        <div class="add-step" [class.active]="addStep() === 3">
          <span class="step-num">3</span>
          <span class="step-lbl">\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA</span>
        </div>
      </div>
    </div>

    <!-- \u2500\u2500 Step 1: Category \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    @if (addStep() === 1) {
      <div class="add-body step1-body">
        <p class="step-hint">\u05D1\u05D7\u05E8 \u05D0\u05EA \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D9\u05EA \u05D4\u05D7\u05D9\u05D1\u05D5\u05E8</p>
        <div class="cat-grid">
          @for (cat of catalog; track cat.id) {
            <button class="cat-card" type="button" (click)="selectCat(cat)"
                    [style.--cc]="cat.color">
              <span class="cc-icon">{{ cat.icon }}</span>
              <span class="cc-label">{{ cat.label }}</span>
              <span class="cc-count">{{ cat.types.length }} \u05E1\u05D5\u05D2\u05D9\u05DD</span>
            </button>
          }
        </div>
      </div>
    }

    <!-- \u2500\u2500 Step 2: Type \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    @if (addStep() === 2 && addSelCat()) {
      <div class="add-body step2-body">
        <div class="step-back-row">
          <button class="btn-back-step" type="button" (click)="backToStep(1)">
            \u2190 \u05D7\u05D6\u05D5\u05E8 \u05DC\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D5\u05EA
          </button>
          <span class="step-cat-badge" [style.background]="addSelCat()!.color + '22'" [style.color]="addSelCat()!.color">
            {{ addSelCat()!.icon }} {{ addSelCat()!.label }}
          </span>
        </div>
        <p class="step-hint">\u05D1\u05D7\u05E8 \u05D0\u05EA \u05E1\u05D5\u05D2 \u05D4\u05D7\u05D9\u05D1\u05D5\u05E8</p>
        <div class="type-grid">
          @for (type of addSelCat()!.types; track type.typeCode) {
            <button class="type-card" type="button" (click)="selectType(type)">
              <span class="tc-icon">{{ type.icon }}</span>
              <div class="tc-info">
                <div class="tc-name">{{ type.typeName }}</div>
                @if (type.description) {
                  <div class="tc-desc">{{ type.description }}</div>
                }
                <div class="tc-fields">{{ type.fields.length }} \u05E9\u05D3\u05D5\u05EA \u05D4\u05D2\u05D3\u05E8\u05D4</div>
              </div>
            </button>
          }
        </div>
      </div>
    }

    <!-- \u2500\u2500 Step 3: Form \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    @if (addStep() === 3 && addSelType()) {
      <div class="add-body step3-body">
        <div class="step-back-row">
          <button class="btn-back-step" type="button" (click)="backToStep(2)">
            \u2190 \u05D7\u05D6\u05D5\u05E8 \u05DC\u05E1\u05D5\u05D2\u05D9\u05DD
          </button>
          <span class="step-type-badge">
            {{ addSelType()!.icon }} {{ addSelType()!.typeName }}
          </span>
        </div>

        @if (addError()) { <div class="add-error">{{ addError() }}</div> }

        <!-- Name -->
        <div class="edit-row">
          <label class="edit-label">\u05E9\u05DD \u05D4\u05D7\u05D9\u05D1\u05D5\u05E8 <span class="req">*</span></label>
          <div class="edit-field">
            <input class="edit-input" type="text"
                   [value]="addName()" (input)="addName.set($any($event.target).value)"
                   placeholder="\u05E9\u05DD \u05DE\u05D6\u05D4\u05D4 \u05DC\u05D7\u05D9\u05D1\u05D5\u05E8" dir="rtl" />
          </div>
        </div>

        <!-- Description -->
        <div class="edit-row">
          <label class="edit-label">\u05EA\u05D9\u05D0\u05D5\u05E8</label>
          <div class="edit-field">
            <input class="edit-input" type="text"
                   [value]="addDesc()" (input)="addDesc.set($any($event.target).value)"
                   placeholder="\u05EA\u05D9\u05D0\u05D5\u05E8 \u05E7\u05E6\u05E8" dir="rtl" />
          </div>
        </div>

        <!-- Dynamic fields from type definition -->
        @for (field of addSelType()!.fields; track field.key) {
          <div class="edit-row">
            <label class="edit-label">
              {{ field.label }}
              @if (field.required) { <span class="req">*</span> }
            </label>
            <div class="edit-field">
              @if (field.hint) { <span class="field-hint">{{ field.hint }}</span> }

              @if (field.type === 'password') {
                <div class="pass-wrap">
                  <input [type]="addShowPass[field.key] ? 'text' : 'password'"
                         class="edit-input" [value]="getAddField(field.key)"
                         [placeholder]="field.placeholder || ''"
                         [dir]="field.ltr ? 'ltr' : 'rtl'"
                         (input)="setAddField(field.key, $any($event.target).value)" />
                  <button type="button" class="btn-eye" (click)="toggleAddShow(field.key)">
                    {{ addShowPass[field.key] ? '\u{1F648}' : '\u{1F441}' }}
                  </button>
                </div>
              } @else if (field.type === 'boolean') {
                <div class="seg-ctrl">
                  <button type="button" class="seg-btn" [class.seg-on]="!!getAddField(field.key)"
                          (click)="setAddField(field.key, true)">\u2713 \u05DB\u05DF</button>
                  <button type="button" class="seg-btn" [class.seg-off]="!getAddField(field.key)"
                          (click)="setAddField(field.key, false)">\u2717 \u05DC\u05D0</button>
                </div>
              } @else if (field.type === 'number') {
                <input type="number" class="edit-input" dir="ltr"
                       [value]="getAddField(field.key) || field.default || ''"
                       [placeholder]="field.default || ''"
                       (input)="setAddField(field.key, +$any($event.target).value)" />
              } @else if (field.type === 'select') {
                <select class="edit-input edit-select"
                        (change)="setAddField(field.key, $any($event.target).value)">
                  @for (opt of field.options || []; track opt) {
                    <option [value]="opt" [selected]="(getAddField(field.key) || field.default) === opt">
                      {{ opt }}
                    </option>
                  }
                </select>
              } @else if (field.type === 'textarea') {
                <textarea class="edit-input edit-textarea"
                          [dir]="field.ltr ? 'ltr' : 'rtl'"
                          [placeholder]="field.placeholder || ''"
                          rows="4"
                          (input)="setAddField(field.key, $any($event.target).value)">{{ getAddField(field.key) }}</textarea>
              } @else {
                <input type="text" class="edit-input"
                       [value]="getAddField(field.key)"
                       [dir]="field.ltr ? 'ltr' : 'rtl'"
                       [placeholder]="field.placeholder || field.default || ''"
                       (input)="setAddField(field.key, $any($event.target).value)" />
              }
            </div>
          </div>
        }
      </div>
    }

    <kendo-dialog-actions>
      <div class="edit-footer">
        @if (addStep() === 3) {
          <button kendoButton class="btn-save" (click)="saveAdd()" [disabled]="addSaving()">
            @if (addSaving()) { <kendo-loader type="pulsing" size="small" /> } @else { \u2713 }
            \u05E6\u05D5\u05E8 \u05D7\u05D9\u05D1\u05D5\u05E8
          </button>
        }
        <button kendoButton fillMode="outline" class="btn-cancel"
                (click)="addOpen.set(false)" [disabled]="addSaving()">\u05D1\u05D9\u05D8\u05D5\u05DC</button>
      </div>
    </kendo-dialog-actions>

  </kendo-dialog>
}

<!-- \u2500\u2500 Delete Confirm Dialog \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
@if (deleteOpen() && deleteConnector()) {
  <kendo-dialog title="\u05D0\u05D9\u05E9\u05D5\u05E8 \u05DE\u05D7\u05D9\u05E7\u05D4" [width]="420" (close)="cancelDelete()">
    <div class="edit-body" style="text-align:center;padding:20px;">
      <div style="font-size:2rem;margin-bottom:12px;">\u26A0\uFE0F</div>
      <p style="margin:0 0 8px;font-size:.9rem;color:#0f172a;">\u05D4\u05D0\u05DD \u05DC\u05DE\u05D7\u05D5\u05E7 \u05D0\u05EA \u05D4\u05D7\u05D9\u05D1\u05D5\u05E8 <strong>{{ deleteConnector()!.ConnectorName }}</strong>?</p>
      <p style="font-size:.78rem;color:#94a3b8;margin:0;">\u05E4\u05E2\u05D5\u05DC\u05D4 \u05D6\u05D5 \u05D0\u05D9\u05E0\u05D4 \u05E0\u05D9\u05EA\u05E0\u05EA \u05DC\u05D1\u05D9\u05D8\u05D5\u05DC.</p>
    </div>
    <kendo-dialog-actions>
      <div class="edit-footer">
        <button kendoButton class="btn-save" style="background:#ef4444!important;"
                (click)="doDelete()" [disabled]="deleteInProgress()">
          @if (deleteInProgress()) { <kendo-loader type="pulsing" size="small" /> } @else { \u2715 }
          \u05DE\u05D7\u05E7
        </button>
        <button kendoButton fillMode="outline" class="btn-cancel" (click)="cancelDelete()">\u05D1\u05D9\u05D8\u05D5\u05DC</button>
      </div>
    </kendo-dialog-actions>
  </kendo-dialog>
}

<!-- \u2500\u2500 Edit Dialog \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
@if (editOpen() && editConnector()) {
  <kendo-dialog
    [title]="editConnector()!.IconEmoji + ' ' + editConnector()!.ConnectorName"
    [width]="520" [minWidth]="400"
    (close)="closeEdit()">

    <div class="edit-body">
      @if (editError()) { <div class="edit-error">{{ editError() }}</div> }
      <div class="edit-desc">{{ editConnector()!.Description }}</div>

      <div class="token-row">
        <span class="token-label">\u05DE\u05D6\u05D4\u05D4 \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9 (UUID)</span>
        <div class="token-field">
          @if (editToken()) {
            <code class="token-val">{{ editToken() }}</code>
            <button type="button" class="btn-copy" (click)="copyToken(editToken()!)">
              {{ copiedToken() === editToken() ? '\u2713 \u05D4\u05D5\u05E2\u05EA\u05E7' : '\u2398 \u05D4\u05E2\u05EA\u05E7' }}
            </button>
          } @else {
            <span class="token-empty">\u2014</span>
          }
        </div>
      </div>

      @for (field of editConnector()!.SchemaJSON; track field.key) {
        <div class="edit-row">
          <label class="edit-label">
            {{ field.label }}
            @if (field.required) { <span class="req">*</span> }
          </label>
          <div class="edit-field">
            @if (field.type === 'password') {
              <div class="pass-wrap">
                <input [type]="editShowPass[field.key] ? 'text' : 'password'"
                       class="edit-input" [value]="getField(field.key)"
                       [placeholder]="field.placeholder || ''"
                       (input)="setField(field.key, $any($event.target).value)" />
                <button type="button" class="btn-eye" (click)="toggleShow(field.key)">
                  {{ editShowPass[field.key] ? '\u{1F648}' : '\u{1F441}' }}
                </button>
              </div>
            } @else if (field.type === 'boolean') {
              <div class="seg-ctrl">
                <button type="button" class="seg-btn" [class.seg-on]="!!getField(field.key)"
                        (click)="setField(field.key, true)">\u2713 \u05DB\u05DF</button>
                <button type="button" class="seg-btn" [class.seg-off]="!getField(field.key)"
                        (click)="setField(field.key, false)">\u2717 \u05DC\u05D0</button>
              </div>
            } @else if (field.type === 'number') {
              <input type="number" class="edit-input"
                     [value]="getField(field.key) || field.default || ''"
                     (input)="setField(field.key, +$any($event.target).value)" />
            } @else if (field.type === 'select') {
              <select class="edit-input edit-select"
                      (change)="setField(field.key, $any($event.target).value)">
                @for (opt of field.options || []; track opt) {
                  <option [value]="opt"
                          [selected]="(getField(field.key) || field.default) === opt">
                    {{ opt }}
                  </option>
                }
              </select>
            } @else {
              <input type="text" class="edit-input" [value]="getField(field.key)"
                     [placeholder]="field.placeholder || field.default || ''"
                     (input)="setField(field.key, $any($event.target).value)" />
            }
          </div>
        </div>
      }

      <div class="edit-row">
        <label class="edit-label">\u05E1\u05D8\u05D8\u05D5\u05E1</label>
        <div class="edit-field">
          <div class="seg-ctrl">
            <button type="button" class="seg-btn" [class.seg-on]="editEnabled()"
                    (click)="editEnabled.set(true)">\u2713 \u05E4\u05E2\u05D9\u05DC</button>
            <button type="button" class="seg-btn" [class.seg-off]="!editEnabled()"
                    (click)="editEnabled.set(false)">\u2717 \u05DE\u05D5\u05E9\u05D1\u05EA</button>
          </div>
        </div>
      </div>

      <div class="edit-row">
        <label class="edit-label">\u05D4\u05E8\u05E9\u05D0\u05EA \u05D2\u05D9\u05E9\u05D4</label>
        <div class="edit-field">
          <div class="seg-ctrl access-ctrl">
            <button type="button" class="seg-btn"
                    [class.seg-public]="editAccessMode() === 'PUBLIC'"
                    (click)="editAccessMode.set('PUBLIC')">\u{1F310} \u05E6\u05D9\u05D1\u05D5\u05E8\u05D9</button>
            <button type="button" class="seg-btn"
                    [class.seg-approval]="editAccessMode() === 'APPROVAL_REQUIRED'"
                    (click)="editAccessMode.set('APPROVAL_REQUIRED')">\u{1F514} \u05D8\u05E2\u05D5\u05DF \u05D0\u05D9\u05E9\u05D5\u05E8</button>
            <button type="button" class="seg-btn"
                    [class.seg-private]="editAccessMode() === 'PRIVATE'"
                    (click)="editAccessMode.set('PRIVATE')">\u{1F512} \u05E4\u05E8\u05D8\u05D9</button>
          </div>
          <span class="access-hint">
            @if (editAccessMode() === 'PUBLIC') { \u05D2\u05D9\u05E9\u05D4 \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9\u05EA \u05DE\u05D9\u05D9\u05D3\u05D9\u05EA \u05E2\u05DD UUID+JWT }
            @if (editAccessMode() === 'APPROVAL_REQUIRED') { \u05D3\u05D5\u05E8\u05E9 \u05D0\u05D9\u05E9\u05D5\u05E8 \u05DE\u05E0\u05D4\u05DC \u05DE\u05E2\u05E8\u05DB\u05EA }
            @if (editAccessMode() === 'PRIVATE') { \u05D7\u05E1\u05D5\u05DD \u05DC\u05D2\u05D9\u05E9\u05D4 \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9\u05EA }
          </span>
        </div>
      </div>
    </div>

    <kendo-dialog-actions>
      <div class="edit-footer">
        <button kendoButton class="btn-save" (click)="saveEdit()" [disabled]="editSaving()">
          @if (editSaving()) { <kendo-loader type="pulsing" size="small" /> } @else { \u2713 }
          \u05E9\u05DE\u05D5\u05E8
        </button>
        <button kendoButton class="btn-test-dialog"
                [disabled]="testRunning() !== null"
                (click)="testConnection(editConnector()!, true)">
          @if (testRunning() === editConnector()?.ConnectorKey) {
            <kendo-loader type="pulsing" size="small" />
          } @else { \u25B6 }
          \u05D1\u05D3\u05D5\u05E7 \u05D7\u05D9\u05D1\u05D5\u05E8
        </button>
        <button kendoButton fillMode="outline" class="btn-cancel"
                (click)="closeEdit()" [disabled]="editSaving()">\u05D1\u05D9\u05D8\u05D5\u05DC</button>
      </div>
    </kendo-dialog-actions>

  </kendo-dialog>
}
`, styles: ['/* src/app/features/projects/workspace/ws-connectors/ws-connectors.component.scss */\n.wc-root {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  background:\n    linear-gradient(\n      160deg,\n      #050d1a 0%,\n      #0a1628 50%,\n      #060e1c 100%);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  direction: rtl;\n  font-family:\n    "Noto Sans Hebrew",\n    "Segoe UI",\n    sans-serif;\n}\n.wc-toolbar {\n  position: relative;\n  z-index: 200;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 10px 24px;\n  background: rgba(5, 13, 26, 0.92);\n  border-bottom: 1px solid rgba(8, 145, 178, 0.2);\n  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.5);\n  direction: ltr;\n}\n.wc-back {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: rgba(6, 182, 212, 0.55);\n  padding: 6px 12px 6px 8px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n  transition: color 0.15s, background 0.15s;\n}\n.wc-back mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.wc-back span {\n  font-size: 0.78rem;\n  font-family: "Share Tech Mono", monospace;\n  letter-spacing: 0.08em;\n}\n.wc-back:hover {\n  color: #06b6d4;\n  background: rgba(6, 182, 212, 0.1);\n}\n.wc-brand {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1px;\n  pointer-events: none;\n}\n.wc-brand .wc-brand-name {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #06b6d4;\n  letter-spacing: 0.2em;\n  text-shadow: 0 0 20px rgba(6, 182, 212, 0.4);\n}\n.wc-brand .wc-brand-sub {\n  font-size: 0.7rem;\n  color: rgba(255, 255, 255, 0.3);\n}\n.wc-tools {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-left: auto;\n}\n.btn-new-connector {\n  padding: 7px 18px;\n  border-radius: 8px;\n  border: 1px solid rgba(6, 182, 212, 0.5);\n  background: rgba(6, 182, 212, 0.12);\n  color: #06b6d4;\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  transition: background 0.15s, border-color 0.15s;\n}\n.btn-new-connector:hover {\n  background: rgba(6, 182, 212, 0.22);\n  border-color: #06b6d4;\n}\n.test-pill {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 5px 14px;\n  border-radius: 20px;\n  font-size: 0.78rem;\n  font-weight: 500;\n}\n.test-pill.test-ok {\n  background: rgba(16, 185, 129, 0.15);\n  border: 1px solid rgba(16, 185, 129, 0.4);\n  color: #34d399;\n}\n.test-pill.test-fail {\n  background: rgba(239, 68, 68, 0.15);\n  border: 1px solid rgba(239, 68, 68, 0.4);\n  color: #f87171;\n}\n.test-pill.test-pending {\n  background: rgba(234, 179, 8, 0.15);\n  border: 1px solid rgba(234, 179, 8, 0.4);\n  color: #fbbf24;\n}\n.pill-close {\n  border: none;\n  background: none;\n  cursor: pointer;\n  color: inherit;\n  opacity: 0.6;\n  font-size: 0.8rem;\n  padding: 0;\n}\n.pill-close:hover {\n  opacity: 1;\n}\n.wc-body {\n  flex: 1;\n  overflow: hidden;\n  position: relative;\n  z-index: 10;\n  padding: 0;\n}\n.wc-layout {\n  display: flex;\n  height: 100%;\n}\n.cat-sidebar {\n  width: 180px;\n  flex-shrink: 0;\n  background: rgba(5, 10, 20, 0.7);\n  border-left: 1px solid rgba(6, 182, 212, 0.1);\n  overflow-y: auto;\n  padding: 12px 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  scrollbar-width: thin;\n  scrollbar-color: rgba(6, 182, 212, 0.15) transparent;\n}\n.cat-sidebar::-webkit-scrollbar {\n  width: 4px;\n}\n.cat-sidebar::-webkit-scrollbar-thumb {\n  background: rgba(6, 182, 212, 0.15);\n  border-radius: 2px;\n}\n.cat-item {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 8px 12px 8px 14px;\n  border: none;\n  background: transparent;\n  color: rgba(255, 255, 255, 0.35);\n  font-size: 0.76rem;\n  font-weight: 500;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  text-align: right;\n  direction: rtl;\n  transition: color 0.15s, background 0.15s;\n  border-right: 2px solid transparent;\n  width: 100%;\n}\n.cat-item:hover {\n  color: rgba(255, 255, 255, 0.7);\n  background: rgba(255, 255, 255, 0.04);\n}\n.cat-item.active {\n  color: var(--cat-color, #06b6d4);\n  border-right-color: var(--cat-color, #06b6d4);\n  background: rgba(255, 255, 255, 0.06);\n  font-weight: 700;\n}\n.cat-emoji {\n  font-size: 0.9rem;\n  flex-shrink: 0;\n}\n.cat-name {\n  flex: 1;\n  line-height: 1.2;\n}\n.cat-count {\n  font-size: 0.64rem;\n  padding: 1px 5px;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.07);\n  color: rgba(255, 255, 255, 0.3);\n  flex-shrink: 0;\n}\n.cat-count.has-enabled {\n  background: rgba(16, 185, 129, 0.2);\n  color: #34d399;\n}\n.wc-main {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px 24px;\n  scrollbar-width: thin;\n  scrollbar-color: rgba(6, 182, 212, 0.2) transparent;\n}\n.wc-main::-webkit-scrollbar {\n  width: 6px;\n}\n.wc-main::-webkit-scrollbar-thumb {\n  background: rgba(6, 182, 212, 0.2);\n  border-radius: 3px;\n}\n.cat-header {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  margin-bottom: 18px;\n  padding: 14px 16px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 12px;\n}\n.cat-hd-icon {\n  font-size: 2rem;\n  flex-shrink: 0;\n  line-height: 1;\n}\n.cat-hd-title {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #fff;\n  margin-bottom: 2px;\n}\n.cat-hd-sub {\n  font-size: 0.73rem;\n  color: rgba(255, 255, 255, 0.4);\n}\n.cat-type-chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n  margin-right: auto;\n}\n.type-chip {\n  font-size: 0.68rem;\n  padding: 2px 8px;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: rgba(255, 255, 255, 0.5);\n  white-space: nowrap;\n}\n.wc-loading {\n  display: flex;\n  justify-content: center;\n  padding: 60px;\n}\n.wc-error {\n  padding: 14px 16px;\n  border-radius: 8px;\n  background: rgba(239, 68, 68, 0.1);\n  border: 1px solid rgba(239, 68, 68, 0.3);\n  color: #f87171;\n  font-size: 0.85rem;\n}\n.conn-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 12px;\n}\n.conn-card {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 9px;\n  transition: border-color 0.2s, box-shadow 0.2s;\n  position: relative;\n}\n.conn-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 3px;\n  border-radius: 0 12px 12px 0;\n  background: var(--card-color, #64748b);\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n.conn-card:hover::before {\n  opacity: 1;\n}\n.conn-card:hover {\n  border-color: #cbd5e1;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n}\n.conn-card.enabled {\n  border-color: #86efac;\n}\n.conn-card.enabled::before {\n  opacity: 1;\n  background: #10b981;\n}\n.conn-card.no-config {\n  opacity: 0.75;\n}\n.card-top {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n}\n.card-icon {\n  font-size: 1.6rem;\n  flex-shrink: 0;\n  width: 38px;\n  height: 38px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f1f5f9;\n  border-radius: 9px;\n  border: 1px solid #e2e8f0;\n}\n.card-info {\n  flex: 1;\n  min-width: 0;\n}\n.card-name {\n  font-size: 0.87rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 2px;\n}\n.card-desc {\n  font-size: 0.71rem;\n  color: #64748b;\n  line-height: 1.4;\n}\n.card-status {\n  flex-shrink: 0;\n  font-size: 0.68rem;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 10px;\n}\n.card-status.status-ok {\n  background: #d1fae5;\n  color: #065f46;\n  border: 1px solid #6ee7b7;\n}\n.card-status.status-fail {\n  background: #fee2e2;\n  color: #991b1b;\n  border: 1px solid #fca5a5;\n}\n.card-status.status-pending {\n  background: #fef3c7;\n  color: #92400e;\n  border: 1px solid #fcd34d;\n}\n.card-status.status-none {\n  background: #f1f5f9;\n  color: #94a3b8;\n  border: 1px solid #e2e8f0;\n}\n.card-meta {\n  font-size: 0.69rem;\n  color: #94a3b8;\n}\n.card-meta-msg {\n  color: #64748b;\n}\n.card-actions {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.btn-test {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 10px;\n  border-radius: 6px;\n  border: 1px solid #e2e8f0;\n  background: #f8fafc;\n  color: #64748b;\n  font-size: 0.72rem;\n  font-weight: 500;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-test kendo-loader {\n  display: inline-flex;\n}\n.btn-test:hover:not(:disabled) {\n  background: #eff6ff;\n  border-color: #93c5fd;\n  color: #1d4ed8;\n}\n.btn-test:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.btn-edit {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 12px;\n  border-radius: 6px;\n  border: 1px solid #93c5fd;\n  background: #eff6ff;\n  color: #1d4ed8;\n  font-size: 0.72rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-edit:hover {\n  background: #1d4ed8;\n  color: #fff;\n  border-color: #1d4ed8;\n}\n.btn-delete-card {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  border-radius: 5px;\n  border: 1px solid #e2e8f0;\n  background: transparent;\n  color: #94a3b8;\n  font-size: 0.78rem;\n  font-weight: 700;\n  cursor: pointer;\n  margin-right: auto;\n  transition: all 0.15s;\n}\n.btn-delete-card:hover {\n  border-color: #ef4444;\n  color: #ef4444;\n  background: #fef2f2;\n}\n.enabled-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #e2e8f0;\n  transition: background 0.2s;\n}\n.enabled-dot.on {\n  background: #10b981;\n  box-shadow: 0 0 5px rgba(16, 185, 129, 0.4);\n}\n.conn-empty {\n  grid-column: 1/-1;\n  text-align: center;\n  padding: 60px 20px;\n}\n.conn-empty-icon {\n  font-size: 2.5rem;\n  margin-bottom: 8px;\n  opacity: 0.5;\n}\n.conn-empty-title {\n  font-size: 0.9rem;\n  color: rgba(255, 255, 255, 0.6);\n  font-weight: 600;\n  margin: 0 0 4px;\n}\n.conn-empty-sub {\n  font-size: 0.78rem;\n  color: rgba(255, 255, 255, 0.25);\n  margin: 0 0 16px;\n}\n.btn-empty-add {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 20px;\n  border-radius: 8px;\n  border: 1px solid rgba(6, 182, 212, 0.5);\n  background: rgba(6, 182, 212, 0.12);\n  color: #06b6d4;\n  font-size: 0.82rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-empty-add:hover {\n  background: rgba(6, 182, 212, 0.22);\n}\n.card-uuid {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 7px;\n  background: rgba(6, 182, 212, 0.05);\n  border: 1px solid rgba(6, 182, 212, 0.15);\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.card-uuid:hover {\n  background: rgba(6, 182, 212, 0.12);\n}\n.card-uuid-val {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.62rem;\n  color: rgba(6, 182, 212, 0.65);\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.card-uuid-copy {\n  font-size: 0.72rem;\n  color: #06b6d4;\n  flex-shrink: 0;\n}\n.add-dialog-header {\n  padding: 16px 24px 0;\n  direction: rtl;\n}\n.add-steps {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  justify-content: center;\n  padding-bottom: 14px;\n}\n.add-step {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n}\n.step-num {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.8rem;\n  font-weight: 700;\n  background: rgba(255, 255, 255, 0.08);\n  color: rgba(255, 255, 255, 0.35);\n  border: 1.5px solid rgba(255, 255, 255, 0.12);\n  transition: all 0.2s;\n}\n.add-step.active .step-num {\n  background: #06b6d4;\n  color: #fff;\n  border-color: #06b6d4;\n}\n.add-step.done .step-num {\n  background: #10b981;\n  color: #fff;\n  border-color: #10b981;\n  font-size: 0.9rem;\n}\n.step-lbl {\n  font-size: 0.67rem;\n  color: rgba(255, 255, 255, 0.35);\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n.add-step.active .step-lbl {\n  color: #06b6d4;\n}\n.add-step.done .step-lbl {\n  color: #10b981;\n}\n.step-line {\n  flex: 1;\n  height: 1.5px;\n  background: rgba(255, 255, 255, 0.1);\n  min-width: 40px;\n  margin: 0 6px;\n  margin-bottom: 14px;\n  transition: background 0.2s;\n}\n.step-line.done {\n  background: #10b981;\n}\n.add-body {\n  padding: 4px 20px 16px;\n  direction: rtl;\n  overflow-y: auto;\n  max-height: 55vh;\n  scrollbar-width: thin;\n  scrollbar-color: rgba(6, 182, 212, 0.2) transparent;\n}\n.step-hint {\n  font-size: 0.8rem;\n  color: rgba(255, 255, 255, 0.4);\n  margin: 0 0 12px;\n}\n.cat-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));\n  gap: 8px;\n}\n.cat-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  padding: 12px 8px;\n  border-radius: 10px;\n  border: 1.5px solid rgba(255, 255, 255, 0.08);\n  background: rgba(255, 255, 255, 0.03);\n  cursor: pointer;\n  transition: all 0.15s;\n  direction: rtl;\n  font-family: "Noto Sans Hebrew", sans-serif;\n}\n.cat-card:hover {\n  border-color: var(--cc, #06b6d4);\n  background: color-mix(in srgb, var(--cc, #06b6d4) 12%, transparent);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.cc-icon {\n  font-size: 1.4rem;\n}\n.cc-label {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.7);\n  text-align: center;\n  line-height: 1.3;\n}\n.cc-count {\n  font-size: 0.63rem;\n  color: rgba(255, 255, 255, 0.3);\n}\n.step-back-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 10px;\n}\n.btn-back-step {\n  border: none;\n  background: none;\n  color: rgba(6, 182, 212, 0.7);\n  cursor: pointer;\n  font-size: 0.76rem;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  padding: 0;\n}\n.btn-back-step:hover {\n  color: #06b6d4;\n}\n.step-cat-badge {\n  font-size: 0.72rem;\n  font-weight: 600;\n  padding: 2px 10px;\n  border-radius: 10px;\n}\n.step-type-badge {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.6);\n}\n.type-grid {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.type-card {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 14px;\n  border-radius: 9px;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  background: rgba(255, 255, 255, 0.03);\n  cursor: pointer;\n  transition: all 0.15s;\n  direction: rtl;\n  text-align: right;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  width: 100%;\n}\n.type-card:hover {\n  border-color: rgba(6, 182, 212, 0.5);\n  background: rgba(6, 182, 212, 0.08);\n}\n.tc-icon {\n  font-size: 1.3rem;\n  flex-shrink: 0;\n}\n.tc-info {\n  flex: 1;\n}\n.tc-name {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.8);\n}\n.tc-desc {\n  font-size: 0.7rem;\n  color: rgba(255, 255, 255, 0.35);\n  margin-top: 2px;\n}\n.tc-fields {\n  font-size: 0.66rem;\n  color: rgba(6, 182, 212, 0.5);\n  margin-top: 3px;\n}\n.add-error {\n  padding: 9px 12px;\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  color: #dc2626;\n  font-size: 0.8rem;\n  margin-bottom: 10px;\n}\n.field-hint {\n  font-size: 0.7rem;\n  color: rgba(148, 163, 184, 0.7);\n  margin-bottom: 3px;\n  display: block;\n}\n.edit-textarea {\n  resize: vertical;\n  min-height: 72px;\n  line-height: 1.5;\n}\n:host ::ng-deep .k-dialog-actions {\n  direction: rtl !important;\n}\n.edit-body {\n  padding: 16px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  direction: rtl;\n}\n.edit-desc {\n  font-size: 0.78rem;\n  color: var(--sf-text-muted);\n  padding: 7px 10px;\n  background: var(--sf-bg-card);\n  border-radius: 7px;\n  border: 1px solid var(--sf-border);\n}\n.edit-error {\n  padding: 9px 12px;\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  color: #dc2626;\n  font-size: 0.8rem;\n}\n.edit-row {\n  display: grid;\n  grid-template-columns: 130px 1fr;\n  align-items: start;\n  gap: 10px;\n  direction: rtl;\n}\n.edit-label {\n  font-size: 0.77rem;\n  font-weight: 600;\n  color: var(--sf-text-secondary);\n  padding-top: 7px;\n  text-align: right;\n}\n.req {\n  color: var(--sf-danger);\n  margin-right: 2px;\n}\n.edit-field {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.edit-input {\n  width: 100%;\n  padding: 7px 10px;\n  border: 1px solid var(--sf-border);\n  border-radius: 7px;\n  background: var(--sf-bg-card);\n  color: var(--sf-text);\n  font-size: 0.84rem;\n  font-family: "Share Tech Mono", monospace;\n  direction: rtl;\n  text-align: right;\n  box-sizing: border-box;\n  transition: border-color 0.15s;\n}\n.edit-input:focus {\n  outline: none;\n  border-color: var(--sf-primary);\n  box-shadow: 0 0 0 3px rgba(13, 71, 255, 0.1);\n}\ninput[type=number].edit-input {\n  direction: ltr;\n  text-align: left;\n}\nselect.edit-select {\n  appearance: auto;\n  direction: ltr;\n  text-align: left;\n  cursor: pointer;\n}\n.pass-wrap {\n  display: flex;\n  gap: 5px;\n}\n.pass-wrap .edit-input {\n  flex: 1;\n  direction: ltr;\n  text-align: left;\n}\n.btn-eye {\n  border: 1px solid var(--sf-border);\n  background: var(--sf-bg-card);\n  border-radius: 7px;\n  padding: 5px 9px;\n  cursor: pointer;\n  font-size: 0.82rem;\n}\n.btn-eye:hover {\n  background: var(--sf-bg-hover);\n}\n.seg-ctrl {\n  display: inline-flex;\n  direction: rtl;\n  align-self: flex-start;\n  border: 1px solid var(--sf-border);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.seg-btn {\n  padding: 6px 15px;\n  font-size: 0.78rem;\n  font-weight: 500;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  border: none;\n  background: var(--sf-bg);\n  color: var(--sf-text-secondary);\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.seg-btn + .seg-btn {\n  border-inline-start: 1px solid var(--sf-border);\n}\n.seg-btn:hover:not(.seg-on):not(.seg-off) {\n  background: var(--sf-bg-hover);\n  color: var(--sf-text);\n}\n.seg-btn.seg-on {\n  background: #10b981;\n  color: #fff;\n  font-weight: 600;\n}\n.seg-btn.seg-off {\n  background: #ef4444;\n  color: #fff;\n  font-weight: 600;\n}\n.edit-footer {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  direction: rtl;\n}\n.btn-save {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: #f97316 !important;\n  color: #fff !important;\n  border: none !important;\n  border-radius: 8px !important;\n  padding: 8px 18px !important;\n  font-size: 0.84rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.3);\n  cursor: pointer;\n}\n.btn-save:hover:not(:disabled) {\n  background: #ea6c0a !important;\n}\n.btn-save:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.btn-save kendo-loader {\n  display: inline-flex;\n}\n.btn-test-dialog {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 12px;\n  border-radius: 7px;\n  border: 1px solid var(--sf-primary) !important;\n  background: var(--sf-primary-light, #eff6ff) !important;\n  color: var(--sf-primary) !important;\n  font-size: 0.8rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n}\n.btn-test-dialog:hover:not(:disabled) {\n  background: var(--sf-primary) !important;\n  color: #fff !important;\n}\n.btn-test-dialog:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.btn-test-dialog kendo-loader {\n  display: inline-flex;\n}\n.btn-cancel {\n  border-color: var(--sf-border) !important;\n  color: var(--sf-text-secondary) !important;\n}\n.token-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 6px 10px;\n  background: rgba(6, 182, 212, 0.05);\n  border: 1px solid rgba(6, 182, 212, 0.15);\n  border-radius: 7px;\n  direction: rtl;\n}\n.token-label {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: rgba(148, 163, 184, 0.7);\n  white-space: nowrap;\n}\n.token-field {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  flex: 1;\n  direction: ltr;\n}\n.token-val {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 0.69rem;\n  color: #22d3ee;\n  flex: 1;\n}\n.btn-copy {\n  padding: 2px 8px;\n  border-radius: 4px;\n  border: 1px solid rgba(6, 182, 212, 0.35);\n  background: rgba(6, 182, 212, 0.08);\n  color: #22d3ee;\n  font-size: 0.68rem;\n  font-weight: 600;\n  font-family: "Noto Sans Hebrew", sans-serif;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-copy:hover {\n  background: #06b6d4;\n  color: #050d1a;\n}\n.token-empty {\n  font-size: 0.78rem;\n  color: rgba(255, 255, 255, 0.3);\n}\n.access-ctrl {\n  width: 100%;\n}\n.seg-public {\n  background: #059669 !important;\n  color: #fff !important;\n  font-weight: 600 !important;\n}\n.seg-approval {\n  background: #d97706 !important;\n  color: #fff !important;\n  font-weight: 600 !important;\n}\n.seg-private {\n  background: #dc2626 !important;\n  color: #fff !important;\n  font-weight: 600 !important;\n}\n.access-hint {\n  font-size: 0.7rem;\n  color: rgba(148, 163, 184, 0.6);\n  margin-top: 3px;\n  display: block;\n}\n/*# sourceMappingURL=ws-connectors.component.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WsConnectorsComponent, { className: "WsConnectorsComponent", filePath: "src/app/features/projects/workspace/ws-connectors/ws-connectors.component.ts", lineNumber: 38 });
})();
export {
  WsConnectorsComponent
};
//# sourceMappingURL=chunk-ENB4UIUR.js.map
