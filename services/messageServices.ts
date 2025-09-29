import { Message } from "discord.js";

export class MessageService {
  constructor() {}

  async pingMessage(message: Message) {
    try {
      console.log("========== START PING MESSAGE =============");
      await message.reply("Pong! 🏓");
      console.log("========== END PING MESSAGE =============");
    } catch (error) {
      console.log("========== ERROR PING MESSAGE =============");
      console.log("error => ", error);
      throw error;
    }
  }
}
