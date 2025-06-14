export const env = {
  OPENROUTER_API_KEY: ensureEnv(process.env.OPENROUTER_API_KEY),
  OPENROUTER_MODEL: ensureEnv(process.env.OPENROUTER_MODEL),
};

function ensureEnv(env: string | undefined): string {
  if (!env) {
    throw new Error(`${env} is not set`);
  }
  return env;
}
