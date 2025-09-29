import { discordClient } from "./config";
import { botToken } from "./config/discordClient";
import { Events } from "discord.js";
import { pingMessage } from "./services/messageServices";

discordClient.once(Events.ClientReady, () =>
  console.log(`✅ Logged in as ${discordClient.user?.tag}`)
);

discordClient.on(Events.MessageCreate, async (message) => {
  if (message.author.bot) return;

  if (message.content === "!ping") await pingMessage(message);
});

discordClient.login(botToken);
