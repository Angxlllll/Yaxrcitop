import fs from "fs";
import path from "path";

const handler = async (msg, { conn }) => {
const chatId = msg.key.remoteJid;

await conn.sendMessage(chatId,{
react:{text:"🔄",key:msg.key}
});

await conn.sendMessage(chatId,{
text:"*𝖱𝖾𝗂𝗇𝗂𝖼𝗂𝖺𝗇𝖽𝗈 𝖠 ${global.author} 𝖤𝗌𝗉𝖾𝗋𝖾 𝖴𝗇 𝖬𝗈𝗆𝖾𝗇𝗍𝗈* 🔄"
},{quoted:msg});

const restartPath = path.resolve("lastRestarter.json");
fs.writeFileSync(restartPath,JSON.stringify({chatId},null,2));

setTimeout(()=>process.exit(1),3000);
};

handler.command=["rest","restart"];
handler.help=['𝖱𝖾𝗌𝗍𝖺𝗋𝗍']
handler.tags=['𝖮𝖶𝖭𝖤𝖱']
handler.owner=true
export default handler;