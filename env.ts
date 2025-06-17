export const env = {
  OPENROUTER_API_KEY: ensureEnv("OPENROUTER_API_KEY"),
  OPENROUTER_MODEL: ensureEnv("OPENROUTER_MODEL"),

  TELEGRAM_BOT_TOKEN: ensureEnv("TELEGRAM_BOT_TOKEN"),
  TELEGRAM_BOT_CHAT_ID: ensureEnv("TELEGRAM_BOT_CHAT_ID"),
};

function ensureEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`${key} is not set`);
  }
  return value;
}
