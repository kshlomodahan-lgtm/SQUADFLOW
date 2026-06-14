export interface ConnectorFieldDef {
  key:         string;
  label:       string;
  type:        'text' | 'password' | 'number' | 'boolean' | 'select' | 'textarea';
  required?:   boolean;
  default?:    string;
  placeholder?: string;
  options?:    string[];
  hint?:       string;
  ltr?:        boolean;
}

export interface ConnectorTypeDef {
  typeCode:    string;
  typeName:    string;
  icon:        string;
  category:    string;
  description?: string;
  fields:      ConnectorFieldDef[];
}

export interface ConnectorCategoryDef {
  id:     string;
  label:  string;
  icon:   string;
  color:  string;
  types:  ConnectorTypeDef[];
}

export const CONNECTOR_CATALOG: ConnectorCategoryDef[] = [

  // ── 1. Relational DB ────────────────────────────────────────
  {
    id: 'RELATIONAL_DB', label: 'בסיסי נתונים יחסיים', icon: '🗄️', color: '#3b82f6',
    types: [
      {
        typeCode: 'MSSQL', typeName: 'SQL Server', icon: '🔷', category: 'RELATIONAL_DB',
        description: 'Microsoft SQL Server — חיבור ישיר לנתונים עסקיים',
        fields: [
          { key: 'host',            label: 'שרת (Host)',        type: 'text',     required: true,  placeholder: 'localhost או IP', ltr: true },
          { key: 'port',            label: 'פורט',              type: 'number',   default: '1433' },
          { key: 'database',        label: 'שם מסד נתונים',     type: 'text',     required: true,  ltr: true },
          { key: 'user',            label: 'משתמש',             type: 'text',     required: true,  ltr: true },
          { key: 'password',        label: 'סיסמה',             type: 'password', required: true },
          { key: 'encrypt',         label: 'הצפנה (TLS)',       type: 'boolean',  default: 'true' },
          { key: 'trustServerCert', label: 'סמוך על אישור עצמי', type: 'boolean', default: 'false' },
        ],
      },
      {
        typeCode: 'MYSQL', typeName: 'MySQL', icon: '🐬', category: 'RELATIONAL_DB',
        description: 'MySQL / MariaDB — הנפוץ ביותר ב-web applications',
        fields: [
          { key: 'host',     label: 'שרת',          type: 'text',     required: true, ltr: true },
          { key: 'port',     label: 'פורט',          type: 'number',   default: '3306' },
          { key: 'database', label: 'מסד נתונים',   type: 'text',     required: true, ltr: true },
          { key: 'user',     label: 'משתמש',         type: 'text',     required: true, ltr: true },
          { key: 'password', label: 'סיסמה',         type: 'password', required: true },
          { key: 'ssl',      label: 'SSL',           type: 'boolean',  default: 'false' },
        ],
      },
      {
        typeCode: 'POSTGRESQL', typeName: 'PostgreSQL', icon: '🐘', category: 'RELATIONAL_DB',
        description: 'PostgreSQL — מסד נתונים יחסי פתוח ומתקדם',
        fields: [
          { key: 'host',     label: 'שרת',        type: 'text',     required: true, ltr: true },
          { key: 'port',     label: 'פורט',        type: 'number',   default: '5432' },
          { key: 'database', label: 'מסד נתונים', type: 'text',     required: true, ltr: true },
          { key: 'user',     label: 'משתמש',       type: 'text',     required: true, ltr: true },
          { key: 'password', label: 'סיסמה',       type: 'password', required: true },
          { key: 'sslMode',  label: 'SSL Mode',    type: 'select',   options: ['disable','require','verify-full'], default: 'require', ltr: true },
        ],
      },
      {
        typeCode: 'ORACLE', typeName: 'Oracle DB', icon: '🔴', category: 'RELATIONAL_DB',
        description: 'Oracle Database — Enterprise grade',
        fields: [
          { key: 'host',        label: 'שרת',           type: 'text',     required: true, ltr: true },
          { key: 'port',        label: 'פורט',           type: 'number',   default: '1521' },
          { key: 'serviceName', label: 'Service Name',  type: 'text',     required: true, placeholder: 'orcl', ltr: true },
          { key: 'user',        label: 'משתמש',          type: 'text',     required: true, ltr: true },
          { key: 'password',    label: 'סיסמה',          type: 'password', required: true },
        ],
      },
      {
        typeCode: 'SQLITE', typeName: 'SQLite', icon: '📦', category: 'RELATIONAL_DB',
        description: 'SQLite — קובץ מסד נתונים מקומי',
        fields: [
          { key: 'filePath', label: 'נתיב קובץ', type: 'text', required: true, placeholder: '/data/mydb.sqlite', ltr: true },
        ],
      },
      {
        typeCode: 'SUPABASE', typeName: 'Supabase', icon: '⚡', category: 'RELATIONAL_DB',
        description: 'Supabase — Firebase alternative עם PostgreSQL',
        fields: [
          { key: 'projectUrl',      label: 'Project URL',       type: 'text',     required: true, placeholder: 'https://xxx.supabase.co', ltr: true },
          { key: 'serviceRoleKey',  label: 'Service Role Key',  type: 'password', required: true, hint: 'ניהול מלא — שמור בסוד!' },
          { key: 'anonKey',         label: 'Anon Key',          type: 'password', hint: 'לגישה ציבורית' },
        ],
      },
    ],
  },

  // ── 2. NoSQL DB ─────────────────────────────────────────────
  {
    id: 'NOSQL_DB', label: 'NoSQL', icon: '🍃', color: '#10b981',
    types: [
      {
        typeCode: 'MONGODB', typeName: 'MongoDB', icon: '🍃', category: 'NOSQL_DB',
        description: 'MongoDB — Document database',
        fields: [
          { key: 'connectionString', label: 'Connection String', type: 'text', placeholder: 'mongodb+srv://...', ltr: true, hint: 'או מלא host/port/database בנפרד' },
          { key: 'host',     label: 'Host (חלופי)',    type: 'text',     ltr: true },
          { key: 'port',     label: 'פורט',            type: 'number',   default: '27017' },
          { key: 'database', label: 'Database',        type: 'text',     ltr: true },
          { key: 'user',     label: 'משתמש',           type: 'text',     ltr: true },
          { key: 'password', label: 'סיסמה',           type: 'password' },
        ],
      },
      {
        typeCode: 'REDIS', typeName: 'Redis', icon: '🔴', category: 'NOSQL_DB',
        description: 'Redis — In-memory data store',
        fields: [
          { key: 'host',     label: 'Host',          type: 'text',     required: true, default: 'localhost', ltr: true },
          { key: 'port',     label: 'פורט',          type: 'number',   default: '6379' },
          { key: 'password', label: 'סיסמה',         type: 'password' },
          { key: 'dbIndex',  label: 'DB Index',      type: 'number',   default: '0' },
          { key: 'tls',      label: 'TLS',           type: 'boolean',  default: 'false' },
        ],
      },
      {
        typeCode: 'ELASTICSEARCH', typeName: 'Elasticsearch', icon: '🔍', category: 'NOSQL_DB',
        description: 'Elasticsearch — חיפוש וניתוח נתונים',
        fields: [
          { key: 'host',    label: 'Host',     type: 'text',     required: true, placeholder: 'https://myhost:9200', ltr: true },
          { key: 'apiKey',  label: 'API Key',  type: 'password' },
          { key: 'user',    label: 'משתמש',    type: 'text',     ltr: true },
          { key: 'password',label: 'סיסמה',    type: 'password' },
        ],
      },
      {
        typeCode: 'FIRESTORE', typeName: 'Firestore', icon: '🔥', category: 'NOSQL_DB',
        description: 'Google Firestore — NoSQL document database',
        fields: [
          { key: 'projectId',          label: 'Project ID',         type: 'text',     required: true, ltr: true },
          { key: 'serviceAccountJson', label: 'Service Account JSON', type: 'textarea', required: true, hint: 'JSON מלא מ-Firebase Console' },
        ],
      },
      {
        typeCode: 'DYNAMODB', typeName: 'DynamoDB', icon: '☁️', category: 'NOSQL_DB',
        description: 'AWS DynamoDB — Serverless NoSQL',
        fields: [
          { key: 'region',    label: 'AWS Region',   type: 'select', required: true, options: ['us-east-1','us-west-2','eu-west-1','eu-central-1','ap-southeast-1','il-central-1'], ltr: true },
          { key: 'accessKey', label: 'Access Key ID',type: 'text',     required: true, ltr: true },
          { key: 'secretKey', label: 'Secret Key',   type: 'password', required: true },
        ],
      },
    ],
  },

  // ── 3. Data Warehouses ───────────────────────────────────────
  {
    id: 'DATA_WAREHOUSE', label: 'Data Warehouses', icon: '🏭', color: '#8b5cf6',
    types: [
      {
        typeCode: 'SNOWFLAKE', typeName: 'Snowflake', icon: '❄️', category: 'DATA_WAREHOUSE',
        fields: [
          { key: 'account',   label: 'Account',   type: 'text', required: true, placeholder: 'myorg-myaccount', ltr: true },
          { key: 'database',  label: 'Database',  type: 'text', required: true, ltr: true },
          { key: 'schema',    label: 'Schema',    type: 'text', default: 'PUBLIC', ltr: true },
          { key: 'warehouse', label: 'Warehouse', type: 'text', required: true, ltr: true },
          { key: 'user',      label: 'משתמש',     type: 'text', required: true, ltr: true },
          { key: 'password',  label: 'סיסמה',     type: 'password', required: true },
        ],
      },
      {
        typeCode: 'BIGQUERY', typeName: 'Google BigQuery', icon: '📊', category: 'DATA_WAREHOUSE',
        fields: [
          { key: 'projectId',          label: 'Project ID',       type: 'text',     required: true, ltr: true },
          { key: 'dataset',            label: 'Dataset',          type: 'text',     ltr: true },
          { key: 'serviceAccountJson', label: 'Service Account JSON', type: 'textarea', required: true },
        ],
      },
      {
        typeCode: 'REDSHIFT', typeName: 'AWS Redshift', icon: '🔴', category: 'DATA_WAREHOUSE',
        fields: [
          { key: 'host',     label: 'Host',     type: 'text',     required: true, ltr: true },
          { key: 'port',     label: 'פורט',     type: 'number',   default: '5439' },
          { key: 'database', label: 'Database', type: 'text',     required: true, ltr: true },
          { key: 'user',     label: 'משתמש',    type: 'text',     required: true, ltr: true },
          { key: 'password', label: 'סיסמה',    type: 'password', required: true },
        ],
      },
      {
        typeCode: 'DATABRICKS', typeName: 'Databricks', icon: '⚡', category: 'DATA_WAREHOUSE',
        fields: [
          { key: 'serverHostname', label: 'Server Hostname', type: 'text',     required: true, ltr: true },
          { key: 'httpPath',       label: 'HTTP Path',       type: 'text',     required: true, ltr: true },
          { key: 'token',          label: 'Access Token',    type: 'password', required: true },
        ],
      },
    ],
  },

  // ── 4. AI / LLM ─────────────────────────────────────────────
  {
    id: 'AI_LLM', label: 'AI ומודלי שפה', icon: '🤖', color: '#f59e0b',
    types: [
      {
        typeCode: 'OPENAI', typeName: 'OpenAI', icon: '🟢', category: 'AI_LLM',
        description: 'GPT-4, GPT-4o, DALL-E, Whisper',
        fields: [
          { key: 'apiKey',       label: 'API Key',      type: 'password', required: true },
          { key: 'orgId',        label: 'Organization', type: 'text',     placeholder: 'org-...', ltr: true },
          { key: 'defaultModel', label: 'מודל ברירת מחדל', type: 'select', options: ['gpt-4o','gpt-4o-mini','gpt-4-turbo','gpt-3.5-turbo'], default: 'gpt-4o', ltr: true },
          { key: 'baseUrl',      label: 'Base URL (Custom)', type: 'text', placeholder: 'https://api.openai.com/v1', ltr: true },
        ],
      },
      {
        typeCode: 'ANTHROPIC', typeName: 'Anthropic (Claude)', icon: '🧠', category: 'AI_LLM',
        description: 'Claude 4, Claude 3.5 Sonnet/Haiku',
        fields: [
          { key: 'apiKey',       label: 'API Key',      type: 'password', required: true },
          { key: 'defaultModel', label: 'מודל',         type: 'select', options: ['claude-sonnet-4-6','claude-opus-4-8','claude-haiku-4-5-20251001'], default: 'claude-sonnet-4-6', ltr: true },
        ],
      },
      {
        typeCode: 'GOOGLE_GEMINI', typeName: 'Google Gemini', icon: '💫', category: 'AI_LLM',
        fields: [
          { key: 'apiKey',    label: 'API Key',   type: 'password', required: true },
          { key: 'model',     label: 'מודל',      type: 'select', options: ['gemini-2.0-flash','gemini-1.5-pro','gemini-1.5-flash'], default: 'gemini-2.0-flash', ltr: true },
          { key: 'projectId', label: 'Project ID', type: 'text',   ltr: true },
        ],
      },
      {
        typeCode: 'AZURE_OPENAI', typeName: 'Azure OpenAI', icon: '☁️', category: 'AI_LLM',
        fields: [
          { key: 'endpoint',       label: 'Endpoint',       type: 'text',     required: true, placeholder: 'https://myresource.openai.azure.com/', ltr: true },
          { key: 'apiKey',         label: 'API Key',        type: 'password', required: true },
          { key: 'deploymentName', label: 'Deployment Name',type: 'text',     required: true, ltr: true },
          { key: 'apiVersion',     label: 'API Version',    type: 'text',     default: '2025-01-01-preview', ltr: true },
        ],
      },
      {
        typeCode: 'OLLAMA', typeName: 'Ollama (Local)', icon: '🦙', category: 'AI_LLM',
        description: 'מודלים מקומיים — llama3, mistral, codellama',
        fields: [
          { key: 'baseUrl', label: 'Base URL', type: 'text', required: true, default: 'http://localhost:11434', ltr: true },
          { key: 'model',   label: 'מודל',     type: 'text', default: 'llama3.2', placeholder: 'llama3.2, mistral, codellama', ltr: true },
        ],
      },
      {
        typeCode: 'HUGGINGFACE', typeName: 'Hugging Face', icon: '🤗', category: 'AI_LLM',
        fields: [
          { key: 'apiToken', label: 'API Token',  type: 'password', required: true },
          { key: 'modelId',  label: 'Model ID',   type: 'text',     placeholder: 'mistralai/Mistral-7B-v0.1', ltr: true },
          { key: 'endpoint', label: 'Endpoint URL', type: 'text',   hint: 'לנקודת קצה פרטית בלבד', ltr: true },
        ],
      },
      {
        typeCode: 'MISTRAL', typeName: 'Mistral AI', icon: '🌬️', category: 'AI_LLM',
        fields: [
          { key: 'apiKey', label: 'API Key', type: 'password', required: true },
          { key: 'model',  label: 'מודל',   type: 'select', options: ['mistral-large-latest','mistral-small-latest','codestral-latest'], default: 'mistral-large-latest', ltr: true },
        ],
      },
      {
        typeCode: 'COHERE', typeName: 'Cohere', icon: '⚙️', category: 'AI_LLM',
        fields: [
          { key: 'apiKey', label: 'API Key', type: 'password', required: true },
          { key: 'model',  label: 'מודל',   type: 'select', options: ['command-r-plus','command-r','command'], default: 'command-r-plus', ltr: true },
        ],
      },
    ],
  },

  // ── 5. Messaging ─────────────────────────────────────────────
  {
    id: 'MESSAGING', label: 'הודעות ושיחה', icon: '💬', color: '#06b6d4',
    types: [
      {
        typeCode: 'SLACK', typeName: 'Slack', icon: '💬', category: 'MESSAGING',
        fields: [
          { key: 'botToken',   label: 'Bot Token',   type: 'password', required: true, hint: 'xoxb-...' },
          { key: 'channel',    label: 'ערוץ ברירת מחדל', type: 'text', placeholder: '#general', ltr: true },
          { key: 'webhookUrl', label: 'Webhook URL', type: 'text', ltr: true },
        ],
      },
      {
        typeCode: 'TEAMS', typeName: 'Microsoft Teams', icon: '🟦', category: 'MESSAGING',
        fields: [
          { key: 'tenantId',     label: 'Tenant ID',     type: 'text',     required: true, ltr: true },
          { key: 'clientId',     label: 'Client ID',     type: 'text',     required: true, ltr: true },
          { key: 'clientSecret', label: 'Client Secret', type: 'password', required: true },
          { key: 'webhookUrl',   label: 'Webhook URL',   type: 'text',     ltr: true },
        ],
      },
      {
        typeCode: 'WHATSAPP', typeName: 'WhatsApp Business', icon: '🟢', category: 'MESSAGING',
        fields: [
          { key: 'phoneNumberId', label: 'Phone Number ID', type: 'text',     required: true, ltr: true },
          { key: 'accessToken',   label: 'Access Token',    type: 'password', required: true },
          { key: 'verifyToken',   label: 'Verify Token',    type: 'text',     ltr: true },
          { key: 'appSecret',     label: 'App Secret',      type: 'password' },
        ],
      },
      {
        typeCode: 'TELEGRAM', typeName: 'Telegram', icon: '✈️', category: 'MESSAGING',
        fields: [
          { key: 'botToken', label: 'Bot Token', type: 'password', required: true, hint: 'מ-@BotFather' },
          { key: 'chatId',   label: 'Chat ID',   type: 'text', ltr: true },
        ],
      },
      {
        typeCode: 'TWILIO', typeName: 'Twilio (SMS/Voice)', icon: '📱', category: 'MESSAGING',
        fields: [
          { key: 'accountSid', label: 'Account SID', type: 'text',     required: true, ltr: true },
          { key: 'authToken',  label: 'Auth Token',  type: 'password', required: true },
          { key: 'fromNumber', label: 'מספר שולח',   type: 'text',     required: true, placeholder: '+1xxxxxxxxxx', ltr: true },
        ],
      },
      {
        typeCode: 'DISCORD', typeName: 'Discord', icon: '🎮', category: 'MESSAGING',
        fields: [
          { key: 'botToken',   label: 'Bot Token',   type: 'password' },
          { key: 'webhookUrl', label: 'Webhook URL', type: 'text', ltr: true },
        ],
      },
    ],
  },

  // ── 6. Email ─────────────────────────────────────────────────
  {
    id: 'EMAIL', label: 'דוא"ל', icon: '📧', color: '#ef4444',
    types: [
      {
        typeCode: 'SMTP', typeName: 'SMTP (Generic)', icon: '📬', category: 'EMAIL',
        fields: [
          { key: 'host',        label: 'SMTP Host',    type: 'text',     required: true, ltr: true },
          { key: 'port',        label: 'פורט',         type: 'number',   default: '587' },
          { key: 'user',        label: 'משתמש',        type: 'text',     required: true, ltr: true },
          { key: 'password',    label: 'סיסמה',        type: 'password', required: true },
          { key: 'fromAddress', label: 'כתובת שולח',   type: 'text',     required: true, placeholder: 'noreply@company.com', ltr: true },
          { key: 'tls',         label: 'TLS/SSL',      type: 'boolean',  default: 'true' },
        ],
      },
      {
        typeCode: 'SENDGRID', typeName: 'SendGrid', icon: '📤', category: 'EMAIL',
        fields: [
          { key: 'apiKey',      label: 'API Key',      type: 'password', required: true },
          { key: 'fromAddress', label: 'כתובת שולח',   type: 'text',     required: true, ltr: true },
        ],
      },
      {
        typeCode: 'MAILGUN', typeName: 'Mailgun', icon: '🔫', category: 'EMAIL',
        fields: [
          { key: 'apiKey',      label: 'API Key',      type: 'password', required: true },
          { key: 'domain',      label: 'Domain',       type: 'text',     required: true, ltr: true },
          { key: 'region',      label: 'Region',       type: 'select',   options: ['US','EU'], default: 'US', ltr: true },
          { key: 'fromAddress', label: 'כתובת שולח',   type: 'text',     ltr: true },
        ],
      },
      {
        typeCode: 'AMAZON_SES', typeName: 'Amazon SES', icon: '☁️', category: 'EMAIL',
        fields: [
          { key: 'region',      label: 'AWS Region',   type: 'select', required: true, options: ['us-east-1','us-west-2','eu-west-1','eu-central-1'], ltr: true },
          { key: 'accessKey',   label: 'Access Key',   type: 'text',     required: true, ltr: true },
          { key: 'secretKey',   label: 'Secret Key',   type: 'password', required: true },
          { key: 'fromAddress', label: 'כתובת שולח',   type: 'text',     required: true, ltr: true },
        ],
      },
      {
        typeCode: 'BREVO', typeName: 'Brevo (Sendinblue)', icon: '💙', category: 'EMAIL',
        fields: [
          { key: 'apiKey',      label: 'API Key',    type: 'password', required: true },
          { key: 'fromAddress', label: 'כתובת שולח', type: 'text',     ltr: true },
        ],
      },
      {
        typeCode: 'POSTMARK', typeName: 'Postmark', icon: '📮', category: 'EMAIL',
        fields: [
          { key: 'serverToken', label: 'Server API Token', type: 'password', required: true },
        ],
      },
    ],
  },

  // ── 7. Push Notifications ────────────────────────────────────
  {
    id: 'PUSH_NOTIFY', label: 'Push Notifications', icon: '🔔', color: '#f97316',
    types: [
      {
        typeCode: 'FIREBASE_FCM', typeName: 'Firebase FCM', icon: '🔥', category: 'PUSH_NOTIFY',
        fields: [
          { key: 'projectId',          label: 'Project ID',         type: 'text',     required: true, ltr: true },
          { key: 'serviceAccountJson', label: 'Service Account JSON', type: 'textarea', required: true },
        ],
      },
      {
        typeCode: 'ONESIGNAL', typeName: 'OneSignal', icon: '🔔', category: 'PUSH_NOTIFY',
        fields: [
          { key: 'appId',      label: 'App ID',       type: 'text',     required: true, ltr: true },
          { key: 'restApiKey', label: 'REST API Key', type: 'password', required: true },
        ],
      },
      {
        typeCode: 'APPLE_APNS', typeName: 'Apple APNs', icon: '🍎', category: 'PUSH_NOTIFY',
        fields: [
          { key: 'teamId',     label: 'Team ID',      type: 'text',     required: true, ltr: true },
          { key: 'keyId',      label: 'Key ID',       type: 'text',     required: true, ltr: true },
          { key: 'privateKey', label: 'Private Key (.p8)', type: 'textarea', required: true },
          { key: 'bundleId',   label: 'Bundle ID',    type: 'text',     required: true, ltr: true },
        ],
      },
    ],
  },

  // ── 8. Cloud Storage ─────────────────────────────────────────
  {
    id: 'STORAGE', label: 'אחסון קבצים', icon: '☁️', color: '#64748b',
    types: [
      {
        typeCode: 'AWS_S3', typeName: 'AWS S3', icon: '🪣', category: 'STORAGE',
        fields: [
          { key: 'region',    label: 'Region',     type: 'select', required: true, options: ['us-east-1','us-west-2','eu-west-1','eu-central-1','ap-southeast-1','il-central-1'], ltr: true },
          { key: 'bucket',    label: 'Bucket',     type: 'text',     required: true, ltr: true },
          { key: 'accessKey', label: 'Access Key', type: 'text',     required: true, ltr: true },
          { key: 'secretKey', label: 'Secret Key', type: 'password', required: true },
          { key: 'endpoint',  label: 'Custom Endpoint', type: 'text', hint: 'לאחסון תואם S3 כמו MinIO', ltr: true },
        ],
      },
      {
        typeCode: 'AZURE_BLOB', typeName: 'Azure Blob Storage', icon: '🔷', category: 'STORAGE',
        fields: [
          { key: 'connectionString', label: 'Connection String', type: 'password', required: true },
          { key: 'container',        label: 'Container',         type: 'text', required: true, ltr: true },
        ],
      },
      {
        typeCode: 'GCS', typeName: 'Google Cloud Storage', icon: '📦', category: 'STORAGE',
        fields: [
          { key: 'projectId',          label: 'Project ID', type: 'text',     required: true, ltr: true },
          { key: 'bucket',             label: 'Bucket',     type: 'text',     required: true, ltr: true },
          { key: 'serviceAccountJson', label: 'Service Account JSON', type: 'textarea', required: true },
        ],
      },
      {
        typeCode: 'SFTP', typeName: 'SFTP', icon: '📂', category: 'STORAGE',
        fields: [
          { key: 'host',       label: 'Host',        type: 'text',     required: true, ltr: true },
          { key: 'port',       label: 'פורט',        type: 'number',   default: '22' },
          { key: 'user',       label: 'משתמש',       type: 'text',     required: true, ltr: true },
          { key: 'password',   label: 'סיסמה',       type: 'password' },
          { key: 'privateKey', label: 'Private Key', type: 'textarea', hint: 'במקום סיסמה' },
        ],
      },
      {
        typeCode: 'DROPBOX', typeName: 'Dropbox', icon: '📥', category: 'STORAGE',
        fields: [
          { key: 'accessToken', label: 'Access Token', type: 'password', required: true },
        ],
      },
      {
        typeCode: 'SHAREPOINT', typeName: 'SharePoint', icon: '🟦', category: 'STORAGE',
        fields: [
          { key: 'tenantId',     label: 'Tenant ID',     type: 'text',     required: true, ltr: true },
          { key: 'clientId',     label: 'Client ID',     type: 'text',     required: true, ltr: true },
          { key: 'clientSecret', label: 'Client Secret', type: 'password', required: true },
          { key: 'siteUrl',      label: 'Site URL',      type: 'text',     required: true, ltr: true },
        ],
      },
    ],
  },

  // ── 9. CRM ───────────────────────────────────────────────────
  {
    id: 'CRM', label: 'CRM', icon: '👥', color: '#0ea5e9',
    types: [
      {
        typeCode: 'SALESFORCE', typeName: 'Salesforce', icon: '☁️', category: 'CRM',
        fields: [
          { key: 'instanceUrl',  label: 'Instance URL',   type: 'text',     required: true, placeholder: 'https://myorg.salesforce.com', ltr: true },
          { key: 'clientId',     label: 'Client ID',      type: 'text',     required: true, ltr: true },
          { key: 'clientSecret', label: 'Client Secret',  type: 'password', required: true },
          { key: 'username',     label: 'Username',       type: 'text',     required: true, ltr: true },
          { key: 'password',     label: 'Password+Token', type: 'password', required: true },
        ],
      },
      {
        typeCode: 'HUBSPOT', typeName: 'HubSpot', icon: '🧡', category: 'CRM',
        fields: [
          { key: 'apiKey', label: 'API Key (Private App)', type: 'password', required: true },
        ],
      },
      {
        typeCode: 'PIPEDRIVE', typeName: 'Pipedrive', icon: '🟢', category: 'CRM',
        fields: [
          { key: 'apiToken',     label: 'API Token',     type: 'password', required: true },
          { key: 'companyDomain',label: 'Company Domain',type: 'text',     required: true, placeholder: 'mycompany', ltr: true },
        ],
      },
      {
        typeCode: 'ZOHO_CRM', typeName: 'Zoho CRM', icon: '🔴', category: 'CRM',
        fields: [
          { key: 'clientId',     label: 'Client ID',     type: 'text',     required: true, ltr: true },
          { key: 'clientSecret', label: 'Client Secret', type: 'password', required: true },
          { key: 'refreshToken', label: 'Refresh Token', type: 'password', required: true },
          { key: 'dcRegion',     label: 'DC Region',     type: 'select', options: ['com','eu','in','com.cn','com.au'], default: 'com', ltr: true },
        ],
      },
      {
        typeCode: 'ACTIVECAMPAIGN', typeName: 'ActiveCampaign', icon: '⚡', category: 'CRM',
        fields: [
          { key: 'apiUrl', label: 'API URL',  type: 'text',     required: true, placeholder: 'https://myaccount.api-us1.com', ltr: true },
          { key: 'apiKey', label: 'API Key',  type: 'password', required: true },
        ],
      },
    ],
  },

  // ── 10. ERP ──────────────────────────────────────────────────
  {
    id: 'ERP', label: 'ERP', icon: '🏢', color: '#7c3aed',
    types: [
      {
        typeCode: 'SAP', typeName: 'SAP', icon: '🔵', category: 'ERP',
        fields: [
          { key: 'host',   label: 'Host',          type: 'text',     required: true, ltr: true },
          { key: 'client', label: 'Client',        type: 'text',     required: true, ltr: true },
          { key: 'systemNumber', label: 'System Number', type: 'text', ltr: true },
          { key: 'user',   label: 'User',          type: 'text',     required: true, ltr: true },
          { key: 'password',label: 'Password',     type: 'password', required: true },
        ],
      },
      {
        typeCode: 'DYNAMICS365', typeName: 'Microsoft Dynamics 365', icon: '🔷', category: 'ERP',
        fields: [
          { key: 'tenantId',     label: 'Tenant ID',    type: 'text',     required: true, ltr: true },
          { key: 'clientId',     label: 'Client ID',    type: 'text',     required: true, ltr: true },
          { key: 'clientSecret', label: 'Client Secret',type: 'password', required: true },
          { key: 'resourceUrl',  label: 'Resource URL', type: 'text',     required: true, placeholder: 'https://myorg.crm.dynamics.com/', ltr: true },
        ],
      },
      {
        typeCode: 'ODOO', typeName: 'Odoo', icon: '🟣', category: 'ERP',
        fields: [
          { key: 'host',     label: 'Host',     type: 'text',     required: true, ltr: true },
          { key: 'database', label: 'Database', type: 'text',     required: true, ltr: true },
          { key: 'user',     label: 'User',     type: 'text',     required: true, ltr: true },
          { key: 'apiKey',   label: 'API Key',  type: 'password', required: true },
        ],
      },
      {
        typeCode: 'ERPNEXT', typeName: 'ERPNext / Frappe', icon: '🔧', category: 'ERP',
        fields: [
          { key: 'host',      label: 'Host',       type: 'text',     required: true, ltr: true },
          { key: 'apiKey',    label: 'API Key',    type: 'text',     required: true, ltr: true },
          { key: 'apiSecret', label: 'API Secret', type: 'password', required: true },
        ],
      },
    ],
  },

  // ── 11. Project Management ───────────────────────────────────
  {
    id: 'PROJECT_MGMT', label: 'ניהול פרויקטים', icon: '📋', color: '#0891b2',
    types: [
      {
        typeCode: 'JIRA', typeName: 'Jira', icon: '🔷', category: 'PROJECT_MGMT',
        fields: [
          { key: 'baseUrl',    label: 'Base URL',    type: 'text',     required: true, placeholder: 'https://mycompany.atlassian.net', ltr: true },
          { key: 'email',      label: 'Email',       type: 'text',     required: true, ltr: true },
          { key: 'apiToken',   label: 'API Token',   type: 'password', required: true },
          { key: 'projectKey', label: 'Project Key', type: 'text',     placeholder: 'PROJ', ltr: true },
        ],
      },
      {
        typeCode: 'GITHUB', typeName: 'GitHub', icon: '🐙', category: 'PROJECT_MGMT',
        fields: [
          { key: 'token', label: 'Personal Access Token', type: 'password', required: true },
          { key: 'org',   label: 'Organization',          type: 'text',     ltr: true },
          { key: 'repo',  label: 'Repository',            type: 'text',     ltr: true },
        ],
      },
      {
        typeCode: 'GITLAB', typeName: 'GitLab', icon: '🦊', category: 'PROJECT_MGMT',
        fields: [
          { key: 'token',     label: 'Access Token', type: 'password', required: true },
          { key: 'projectId', label: 'Project ID',   type: 'text',     ltr: true },
          { key: 'baseUrl',   label: 'Base URL',     type: 'text',     default: 'https://gitlab.com', ltr: true },
        ],
      },
      {
        typeCode: 'NOTION', typeName: 'Notion', icon: '⬛', category: 'PROJECT_MGMT',
        fields: [
          { key: 'integrationToken', label: 'Integration Token', type: 'password', required: true },
          { key: 'databaseId',       label: 'Database ID',       type: 'text',     ltr: true },
        ],
      },
      {
        typeCode: 'LINEAR', typeName: 'Linear', icon: '📐', category: 'PROJECT_MGMT',
        fields: [
          { key: 'apiKey', label: 'API Key', type: 'password', required: true },
        ],
      },
      {
        typeCode: 'ASANA', typeName: 'Asana', icon: '🎯', category: 'PROJECT_MGMT',
        fields: [
          { key: 'accessToken', label: 'Access Token', type: 'password', required: true },
          { key: 'workspaceId', label: 'Workspace ID', type: 'text',     ltr: true },
        ],
      },
      {
        typeCode: 'MONDAY', typeName: 'Monday.com', icon: '📅', category: 'PROJECT_MGMT',
        fields: [
          { key: 'apiToken', label: 'API Token', type: 'password', required: true },
          { key: 'boardId',  label: 'Board ID',  type: 'text',     ltr: true },
        ],
      },
    ],
  },

  // ── 12. Payments ─────────────────────────────────────────────
  {
    id: 'PAYMENTS', label: 'תשלומים', icon: '💳', color: '#059669',
    types: [
      {
        typeCode: 'STRIPE', typeName: 'Stripe', icon: '💳', category: 'PAYMENTS',
        fields: [
          { key: 'publishableKey', label: 'Publishable Key', type: 'text',     required: true, ltr: true },
          { key: 'secretKey',      label: 'Secret Key',      type: 'password', required: true },
          { key: 'webhookSecret',  label: 'Webhook Secret',  type: 'password' },
        ],
      },
      {
        typeCode: 'PAYPAL', typeName: 'PayPal', icon: '🅿️', category: 'PAYMENTS',
        fields: [
          { key: 'clientId',     label: 'Client ID',     type: 'text',     required: true, ltr: true },
          { key: 'clientSecret', label: 'Client Secret', type: 'password', required: true },
          { key: 'mode',         label: 'Mode',          type: 'select', options: ['sandbox','live'], default: 'sandbox', ltr: true },
        ],
      },
      {
        typeCode: 'CHARGEBEE', typeName: 'Chargebee', icon: '🔄', category: 'PAYMENTS',
        fields: [
          { key: 'siteName', label: 'Site Name', type: 'text',     required: true, ltr: true },
          { key: 'apiKey',   label: 'API Key',   type: 'password', required: true },
        ],
      },
      {
        typeCode: 'RAZORPAY', typeName: 'Razorpay', icon: '💰', category: 'PAYMENTS',
        fields: [
          { key: 'keyId',     label: 'Key ID',     type: 'text',     required: true, ltr: true },
          { key: 'keySecret', label: 'Key Secret', type: 'password', required: true },
        ],
      },
    ],
  },

  // ── 13. e-Signature ──────────────────────────────────────────
  {
    id: 'ESIGNATURE', label: 'חתימה דיגיטלית', icon: '✍️', color: '#7c3aed',
    types: [
      {
        typeCode: 'DOCUSIGN', typeName: 'DocuSign', icon: '📝', category: 'ESIGNATURE',
        fields: [
          { key: 'integrationKey', label: 'Integration Key', type: 'text',     required: true, ltr: true },
          { key: 'accountId',      label: 'Account ID',      type: 'text',     required: true, ltr: true },
          { key: 'userId',         label: 'User ID',         type: 'text',     required: true, ltr: true },
          { key: 'privateKey',     label: 'RSA Private Key', type: 'textarea', required: true },
          { key: 'baseUrl',        label: 'Base URL',        type: 'select', options: ['https://na4.docusign.net','https://eu.docusign.net'], default: 'https://na4.docusign.net', ltr: true },
        ],
      },
      {
        typeCode: 'HELLOSIGN', typeName: 'HelloSign / Dropbox Sign', icon: '✏️', category: 'ESIGNATURE',
        fields: [
          { key: 'apiKey', label: 'API Key', type: 'password', required: true },
        ],
      },
      {
        typeCode: 'PANDADOC', typeName: 'PandaDoc', icon: '🐼', category: 'ESIGNATURE',
        fields: [
          { key: 'apiKey', label: 'API Key', type: 'password', required: true },
        ],
      },
    ],
  },

  // ── 14. Auth Providers ───────────────────────────────────────
  {
    id: 'AUTH', label: 'זיהוי וכניסה', icon: '🔐', color: '#dc2626',
    types: [
      {
        typeCode: 'AUTH0', typeName: 'Auth0', icon: '🔐', category: 'AUTH',
        fields: [
          { key: 'domain',       label: 'Domain',       type: 'text',     required: true, placeholder: 'myapp.auth0.com', ltr: true },
          { key: 'clientId',     label: 'Client ID',    type: 'text',     required: true, ltr: true },
          { key: 'clientSecret', label: 'Client Secret',type: 'password', required: true },
          { key: 'audience',     label: 'Audience',     type: 'text',     ltr: true },
        ],
      },
      {
        typeCode: 'AZURE_AD', typeName: 'Azure AD / Entra ID', icon: '🔷', category: 'AUTH',
        fields: [
          { key: 'tenantId',     label: 'Tenant ID',     type: 'text',     required: true, ltr: true },
          { key: 'clientId',     label: 'Client ID',     type: 'text',     required: true, ltr: true },
          { key: 'clientSecret', label: 'Client Secret', type: 'password', required: true },
        ],
      },
      {
        typeCode: 'GOOGLE_OAUTH', typeName: 'Google OAuth 2.0', icon: '🔴', category: 'AUTH',
        fields: [
          { key: 'clientId',     label: 'Client ID',     type: 'text',     required: true, ltr: true },
          { key: 'clientSecret', label: 'Client Secret', type: 'password', required: true },
          { key: 'redirectUri',  label: 'Redirect URI',  type: 'text',     ltr: true },
        ],
      },
      {
        typeCode: 'OKTA', typeName: 'Okta', icon: '🔵', category: 'AUTH',
        fields: [
          { key: 'orgUrl',       label: 'Org URL',       type: 'text',     required: true, placeholder: 'https://myorg.okta.com', ltr: true },
          { key: 'clientId',     label: 'Client ID',     type: 'text',     required: true, ltr: true },
          { key: 'clientSecret', label: 'Client Secret', type: 'password', required: true },
        ],
      },
      {
        typeCode: 'KEYCLOAK', typeName: 'Keycloak', icon: '🔑', category: 'AUTH',
        fields: [
          { key: 'serverUrl',    label: 'Server URL',    type: 'text',     required: true, ltr: true },
          { key: 'realm',        label: 'Realm',         type: 'text',     required: true, ltr: true },
          { key: 'clientId',     label: 'Client ID',     type: 'text',     required: true, ltr: true },
          { key: 'clientSecret', label: 'Client Secret', type: 'password' },
        ],
      },
    ],
  },

  // ── 15. Analytics ────────────────────────────────────────────
  {
    id: 'ANALYTICS', label: 'אנליטיקה', icon: '📊', color: '#d97706',
    types: [
      {
        typeCode: 'GA4', typeName: 'Google Analytics 4', icon: '📈', category: 'ANALYTICS',
        fields: [
          { key: 'measurementId',      label: 'Measurement ID',  type: 'text',     required: true, placeholder: 'G-XXXXXXXXXX', ltr: true },
          { key: 'apiSecret',          label: 'API Secret',      type: 'password' },
          { key: 'serviceAccountJson', label: 'Service Account', type: 'textarea', hint: 'לגישה ל-Data API' },
        ],
      },
      {
        typeCode: 'MIXPANEL', typeName: 'Mixpanel', icon: '🟦', category: 'ANALYTICS',
        fields: [
          { key: 'projectToken', label: 'Project Token', type: 'text',     required: true, ltr: true },
          { key: 'apiSecret',    label: 'API Secret',    type: 'password', required: true },
        ],
      },
      {
        typeCode: 'POSTHOG', typeName: 'PostHog', icon: '🦔', category: 'ANALYTICS',
        fields: [
          { key: 'apiKey', label: 'API Key', type: 'password', required: true },
          { key: 'host',   label: 'Host',   type: 'text',     default: 'https://app.posthog.com', ltr: true },
        ],
      },
      {
        typeCode: 'SEGMENT', typeName: 'Segment', icon: '🔵', category: 'ANALYTICS',
        fields: [
          { key: 'writeKey', label: 'Write Key', type: 'password', required: true },
        ],
      },
    ],
  },

  // ── 16. Social Media ─────────────────────────────────────────
  {
    id: 'SOCIAL_MEDIA', label: 'רשתות חברתיות', icon: '📱', color: '#ec4899',
    types: [
      {
        typeCode: 'FACEBOOK', typeName: 'Facebook / Meta', icon: '🔵', category: 'SOCIAL_MEDIA',
        fields: [
          { key: 'appId',       label: 'App ID',      type: 'text',     required: true, ltr: true },
          { key: 'appSecret',   label: 'App Secret',  type: 'password', required: true },
          { key: 'accessToken', label: 'Access Token',type: 'password', required: true },
          { key: 'pageId',      label: 'Page ID',     type: 'text',     ltr: true },
        ],
      },
      {
        typeCode: 'TWITTER_X', typeName: 'Twitter / X', icon: '🐦', category: 'SOCIAL_MEDIA',
        fields: [
          { key: 'apiKey',       label: 'API Key',       type: 'text',     required: true, ltr: true },
          { key: 'apiSecret',    label: 'API Secret',    type: 'password', required: true },
          { key: 'accessToken',  label: 'Access Token',  type: 'password', required: true },
          { key: 'accessSecret', label: 'Access Secret', type: 'password', required: true },
        ],
      },
      {
        typeCode: 'LINKEDIN', typeName: 'LinkedIn', icon: '🔷', category: 'SOCIAL_MEDIA',
        fields: [
          { key: 'clientId',     label: 'Client ID',     type: 'text',     required: true, ltr: true },
          { key: 'clientSecret', label: 'Client Secret', type: 'password', required: true },
          { key: 'accessToken',  label: 'Access Token',  type: 'password' },
        ],
      },
    ],
  },

  // ── 17. E-Commerce ───────────────────────────────────────────
  {
    id: 'ECOMMERCE', label: 'מסחר אלקטרוני', icon: '🛒', color: '#10b981',
    types: [
      {
        typeCode: 'SHOPIFY', typeName: 'Shopify', icon: '🛍️', category: 'ECOMMERCE',
        fields: [
          { key: 'shopDomain',  label: 'Shop Domain',  type: 'text',     required: true, placeholder: 'myshop.myshopify.com', ltr: true },
          { key: 'apiKey',      label: 'API Key',      type: 'text',     required: true, ltr: true },
          { key: 'apiSecret',   label: 'API Secret',   type: 'password', required: true },
          { key: 'accessToken', label: 'Access Token', type: 'password', required: true },
        ],
      },
      {
        typeCode: 'WOOCOMMERCE', typeName: 'WooCommerce', icon: '🛒', category: 'ECOMMERCE',
        fields: [
          { key: 'siteUrl',     label: 'Site URL',      type: 'text',     required: true, ltr: true },
          { key: 'consumerKey',    label: 'Consumer Key',   type: 'text',     required: true, ltr: true },
          { key: 'consumerSecret', label: 'Consumer Secret',type: 'password', required: true },
        ],
      },
      {
        typeCode: 'MAGENTO', typeName: 'Magento / Adobe Commerce', icon: '🔷', category: 'ECOMMERCE',
        fields: [
          { key: 'baseUrl',     label: 'Base URL',     type: 'text',     required: true, ltr: true },
          { key: 'accessToken', label: 'Access Token', type: 'password', required: true },
        ],
      },
    ],
  },

  // ── 18. Accounting ───────────────────────────────────────────
  {
    id: 'ACCOUNTING', label: 'הנהלת חשבונות', icon: '💰', color: '#d97706',
    types: [
      {
        typeCode: 'QUICKBOOKS', typeName: 'QuickBooks Online', icon: '📒', category: 'ACCOUNTING',
        fields: [
          { key: 'clientId',     label: 'Client ID',     type: 'text',     required: true, ltr: true },
          { key: 'clientSecret', label: 'Client Secret', type: 'password', required: true },
          { key: 'realmId',      label: 'Realm ID',      type: 'text',     required: true, ltr: true },
        ],
      },
      {
        typeCode: 'XERO', typeName: 'Xero', icon: '💙', category: 'ACCOUNTING',
        fields: [
          { key: 'clientId',     label: 'Client ID',     type: 'text',     required: true, ltr: true },
          { key: 'clientSecret', label: 'Client Secret', type: 'password', required: true },
        ],
      },
      {
        typeCode: 'FRESHBOOKS', typeName: 'FreshBooks', icon: '🍃', category: 'ACCOUNTING',
        fields: [
          { key: 'clientId',     label: 'Client ID',     type: 'text',     required: true, ltr: true },
          { key: 'clientSecret', label: 'Client Secret', type: 'password', required: true },
          { key: 'accessToken',  label: 'Access Token',  type: 'password' },
        ],
      },
    ],
  },

  // ── 19. DevOps ───────────────────────────────────────────────
  {
    id: 'DEVOPS', label: 'DevOps ו-CI/CD', icon: '⚙️', color: '#475569',
    types: [
      {
        typeCode: 'JENKINS', typeName: 'Jenkins', icon: '🏗️', category: 'DEVOPS',
        fields: [
          { key: 'host',     label: 'Host',     type: 'text',     required: true, placeholder: 'https://jenkins.mycompany.com', ltr: true },
          { key: 'user',     label: 'User',     type: 'text',     required: true, ltr: true },
          { key: 'apiToken', label: 'API Token',type: 'password', required: true },
        ],
      },
      {
        typeCode: 'AWS_GENERAL', typeName: 'AWS (General)', icon: '☁️', category: 'DEVOPS',
        description: 'גישה כללית ל-AWS Services',
        fields: [
          { key: 'region',    label: 'Region',     type: 'select', required: true, options: ['us-east-1','us-west-2','eu-west-1','eu-central-1','ap-southeast-1','il-central-1'], ltr: true },
          { key: 'accessKey', label: 'Access Key', type: 'text',     required: true, ltr: true },
          { key: 'secretKey', label: 'Secret Key', type: 'password', required: true },
        ],
      },
      {
        typeCode: 'CIRCLECI', typeName: 'CircleCI', icon: '🔄', category: 'DEVOPS',
        fields: [
          { key: 'apiToken', label: 'API Token', type: 'password', required: true },
        ],
      },
      {
        typeCode: 'BITBUCKET', typeName: 'Bitbucket', icon: '🪣', category: 'DEVOPS',
        fields: [
          { key: 'username',    label: 'Username',    type: 'text',     required: true, ltr: true },
          { key: 'appPassword', label: 'App Password',type: 'password', required: true },
          { key: 'workspace',   label: 'Workspace',   type: 'text',     required: true, ltr: true },
        ],
      },
    ],
  },

  // ── 20. Message Queues ───────────────────────────────────────
  {
    id: 'MESSAGE_QUEUE', label: 'Message Queues', icon: '📨', color: '#0891b2',
    types: [
      {
        typeCode: 'RABBITMQ', typeName: 'RabbitMQ', icon: '🐰', category: 'MESSAGE_QUEUE',
        fields: [
          { key: 'host',     label: 'Host',  type: 'text',     required: true, default: 'localhost', ltr: true },
          { key: 'port',     label: 'פורט',  type: 'number',   default: '5672' },
          { key: 'user',     label: 'User',  type: 'text',     required: true, default: 'guest', ltr: true },
          { key: 'password', label: 'סיסמה', type: 'password', required: true },
          { key: 'vhost',    label: 'VHost', type: 'text',     default: '/', ltr: true },
        ],
      },
      {
        typeCode: 'KAFKA', typeName: 'Apache Kafka', icon: '📡', category: 'MESSAGE_QUEUE',
        fields: [
          { key: 'brokers',    label: 'Brokers',      type: 'text', required: true, placeholder: 'host1:9092,host2:9092', ltr: true },
          { key: 'topic',      label: 'Topic',        type: 'text', ltr: true },
          { key: 'groupId',    label: 'Group ID',     type: 'text', ltr: true },
          { key: 'saslMechanism', label: 'SASL',      type: 'select', options: ['NONE','PLAIN','SCRAM-SHA-256','SCRAM-SHA-512'], default: 'NONE', ltr: true },
          { key: 'saslUser',   label: 'SASL User',    type: 'text',     ltr: true },
          { key: 'saslPass',   label: 'SASL Password',type: 'password' },
        ],
      },
      {
        typeCode: 'AWS_SQS', typeName: 'AWS SQS', icon: '📬', category: 'MESSAGE_QUEUE',
        fields: [
          { key: 'region',    label: 'Region',    type: 'select', required: true, options: ['us-east-1','us-west-2','eu-west-1','eu-central-1'], ltr: true },
          { key: 'queueUrl',  label: 'Queue URL', type: 'text',     required: true, ltr: true },
          { key: 'accessKey', label: 'Access Key',type: 'text',     required: true, ltr: true },
          { key: 'secretKey', label: 'Secret Key',type: 'password', required: true },
        ],
      },
      {
        typeCode: 'AZURE_SERVICE_BUS', typeName: 'Azure Service Bus', icon: '🔷', category: 'MESSAGE_QUEUE',
        fields: [
          { key: 'connectionString', label: 'Connection String', type: 'password', required: true },
          { key: 'queueName',        label: 'Queue / Topic',     type: 'text',     ltr: true },
        ],
      },
    ],
  },

  // ── 21. HR / HRIS ────────────────────────────────────────────
  {
    id: 'HR', label: 'HR ומשאבי אנוש', icon: '👤', color: '#7c3aed',
    types: [
      {
        typeCode: 'BAMBOOHR', typeName: 'BambooHR', icon: '🎋', category: 'HR',
        fields: [
          { key: 'subdomain', label: 'Subdomain', type: 'text',     required: true, placeholder: 'mycompany', ltr: true },
          { key: 'apiKey',    label: 'API Key',   type: 'password', required: true },
        ],
      },
      {
        typeCode: 'WORKDAY', typeName: 'Workday', icon: '💼', category: 'HR',
        fields: [
          { key: 'tenant',   label: 'Tenant',   type: 'text',     required: true, ltr: true },
          { key: 'username', label: 'Username', type: 'text',     required: true, ltr: true },
          { key: 'password', label: 'Password', type: 'password', required: true },
          { key: 'wsdlUrl',  label: 'WSDL URL', type: 'text',     ltr: true },
        ],
      },
      {
        typeCode: 'GUSTO', typeName: 'Gusto', icon: '🏢', category: 'HR',
        fields: [
          { key: 'clientId',     label: 'Client ID',     type: 'text',     required: true, ltr: true },
          { key: 'clientSecret', label: 'Client Secret', type: 'password', required: true },
        ],
      },
    ],
  },

  // ── 22. Generic / Custom ─────────────────────────────────────
  {
    id: 'GENERIC', label: 'כללי / מותאם אישית', icon: '🔌', color: '#94a3b8',
    types: [
      {
        typeCode: 'REST_API', typeName: 'Generic REST API', icon: '🌐', category: 'GENERIC',
        description: 'כל REST API עם אימות גמיש',
        fields: [
          { key: 'baseUrl',  label: 'Base URL',    type: 'text',     required: true, ltr: true },
          { key: 'authType', label: 'סוג אימות',   type: 'select',   options: ['None','API Key','Bearer Token','Basic Auth','OAuth2'], default: 'Bearer Token', ltr: true },
          { key: 'authKey',  label: 'API Key / Token', type: 'password', hint: 'לפי סוג האימות שנבחר' },
          { key: 'authUser', label: 'Username (Basic Auth)', type: 'text', ltr: true },
          { key: 'headers',  label: 'Headers נוספים (JSON)', type: 'textarea', placeholder: '{"X-Custom-Header": "value"}', ltr: true },
        ],
      },
      {
        typeCode: 'GRAPHQL', typeName: 'GraphQL', icon: '🔮', category: 'GENERIC',
        fields: [
          { key: 'endpoint',  label: 'Endpoint',  type: 'text',     required: true, ltr: true },
          { key: 'authType',  label: 'אימות',     type: 'select',   options: ['None','Bearer Token','API Key'], default: 'Bearer Token', ltr: true },
          { key: 'authToken', label: 'Token',     type: 'password' },
          { key: 'headers',   label: 'Headers (JSON)', type: 'textarea', ltr: true },
        ],
      },
      {
        typeCode: 'WEBHOOK_INBOUND', typeName: 'Webhook (Inbound)', icon: '🎣', category: 'GENERIC',
        description: 'קבלת webhooks חיצוניים לפרויקט',
        fields: [
          { key: 'path',          label: 'Webhook Path', type: 'text', placeholder: '/webhook/my-service', ltr: true },
          { key: 'secret',        label: 'Secret',       type: 'password', hint: 'לאימות חתימת הבקשה' },
          { key: 'allowedEvents', label: 'Events מותרים', type: 'text', placeholder: 'push,pull_request', ltr: true },
        ],
      },
      {
        typeCode: 'MQTT', typeName: 'MQTT (IoT)', icon: '📡', category: 'GENERIC',
        fields: [
          { key: 'brokerHost', label: 'Broker Host', type: 'text',     required: true, ltr: true },
          { key: 'port',       label: 'פורט',        type: 'number',   default: '1883' },
          { key: 'topic',      label: 'Topic',       type: 'text',     ltr: true },
          { key: 'user',       label: 'User',        type: 'text',     ltr: true },
          { key: 'password',   label: 'Password',    type: 'password' },
          { key: 'tls',        label: 'TLS',         type: 'boolean',  default: 'false' },
        ],
      },
    ],
  },
];

export function getCategoryById(id: string): ConnectorCategoryDef | undefined {
  return CONNECTOR_CATALOG.find(c => c.id === id);
}

export function getTypeByCode(typeCode: string): ConnectorTypeDef | undefined {
  for (const cat of CONNECTOR_CATALOG) {
    const t = cat.types.find(t => t.typeCode === typeCode);
    if (t) return t;
  }
  return undefined;
}
