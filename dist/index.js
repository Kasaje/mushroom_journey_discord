"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const discordClient_1 = require("./config/discordClient");
const discord_js_1 = require("discord.js");
const messageServices_1 = require("./services/messageServices");
config_1.discordClient.once(discord_js_1.Events.ClientReady, () => console.log(`✅ Logged in as ${config_1.discordClient.user?.tag}`));
config_1.discordClient.on(discord_js_1.Events.MessageCreate, async (message) => {
    if (message.author.bot)
        return;
    if (message.content === "!ping")
        await (0, messageServices_1.pingMessage)(message);
});
config_1.discordClient.login(discordClient_1.botToken);
