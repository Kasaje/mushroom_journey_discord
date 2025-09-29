"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageService = void 0;
class MessageService {
    constructor() { }
    async pingMessage(message) {
        try {
            console.log("========== START PING MESSAGE =============");
            await message.reply("Pong! 🏓");
            console.log("========== END PING MESSAGE =============");
        }
        catch (error) {
            console.log("========== ERROR PING MESSAGE =============");
            console.log("error => ", error);
            throw error;
        }
    }
}
exports.MessageService = MessageService;
