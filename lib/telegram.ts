import { env } from "@/env";
import { Telegraf } from "telegraf";

export const getTelegramClient = () => {
  return new Telegraf(env.TELEGRAM_BOT_TOKEN);
};

export const sendMessageViaTelegram = async ({
  message,
}: {
  message: string;
}) => {
  const client = getTelegramClient();

  return await client.telegram.sendMessage(env.TELEGRAM_BOT_CHAT_ID, message);
};

export const reportErrorViaTelegram = async ({
  context,
  error,
}: {
  context: string;
  error: unknown;
}) => {
  const client = getTelegramClient();

  let message = "";
  if (error instanceof Error) {
    message = [
      `Error ${error.name}: ${error.message}`,
      `Context: ${context}`,
      `Cause: ${error.cause}`,
      `Stack: ${error.stack}`,
      String(error),
    ].join("\n");
  } else {
    message = [`Error: ${String(error)}`, `Context: ${context}`].join("\n");
  }

  return await client.telegram.sendMessage(env.TELEGRAM_BOT_CHAT_ID, message);
};
