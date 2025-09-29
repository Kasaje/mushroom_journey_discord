"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const config_1 = require("./config");
const discordClient_1 = require("./config/discordClient");
const messageServices_1 = require("./services/messageServices");
config_1.discordClient.on(discord_js_1.Events.MessageCreate, async (message) => {
    const messageService = new messageServices_1.MessageService();
    if (message.author.bot)
        return;
    if (message.content === "!ping")
        await messageService.pingMessage(message);
});
config_1.discordClient.login(discordClient_1.botToken);
