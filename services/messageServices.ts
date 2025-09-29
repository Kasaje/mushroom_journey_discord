import { Message } from "discord.js";

export const pingMessage = async (message: Message) => {
  try {
    console.log("========== START PING MESSAGE =============");
    await message.reply("Pong! 🏓");
    console.log("========== END PING MESSAGE =============");
  } catch (error) {
    console.log("========== ERROR PING MESSAGE =============");
    console.log("error => ", error);
    throw error;
  }
};
