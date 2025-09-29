import {
  ActivityType,
  Client,
  Events,
  GatewayIntentBits,
  PresenceUpdateStatus,
} from "discord.js";
import dotenv from "dotenv";

dotenv.config();

export const botToken = process.env.TOKEN;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once(Events.ClientReady, () => {
  client.user?.setPresence({
    status: PresenceUpdateStatus.Idle,
    activities: [
      {
        name: "🌌 Destiny Beyond Stars",
        type: ActivityType.Playing,
      },
    ],
  });
  console.log(`✅ Logged in as ${client.user?.tag}`);
});

const discordClient = client;

export { discordClient };
