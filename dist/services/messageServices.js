"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pingMessage = void 0;
const pingMessage = async (message) => {
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
};
exports.pingMessage = pingMessage;
