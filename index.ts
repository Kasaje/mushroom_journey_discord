import { Events } from "discord.js";
import { discordClient } from "./config";
import { botToken } from "./config/discordClient";
import { MessageService } from "./services/messageServices";

discordClient.on(Events.MessageCreate, async (message) => {
  const messageService = new MessageService();
  if (message.author.bot) return;

  if (message.content === "!ping") await messageService.pingMessage(message);
});

discordClient.login(botToken);
