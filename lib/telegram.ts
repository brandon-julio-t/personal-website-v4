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
