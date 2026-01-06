import fs from "fs";
import path from "path";
import { exec } from "child_process";

const handler = async (msg, { conn }) => {
const chatId = msg.key.remoteJid;

const lastRestarterFile = "./lastRestarter.json";
if (!fs.existsSync(lastRestarterFile)) {
fs.writeFileSync(lastRestarterFile, JSON.stringify({ chatId: "" }, null, 2));
}

exec("git pull", async (error, stdout, stderr) => {
if (error) {
await conn.sendMessage(chatId, {
text: `*𝖧𝗎𝖻𝗈 𝖴𝗇 𝖤𝗋𝗋𝗈𝗋 𝖠𝗅 𝖠𝖼𝗍𝗎𝖺𝗅𝗂𝗓𝖺𝗋:* ${error.message} ❌`
}, { quoted: msg });
return;
}

const output = stdout || stderr;
if (output.includes("Already up to date")) {
await conn.sendMessage(chatId, {
text: `*𝖤𝗌𝗍𝖺𝗌 𝖴𝗌𝖺𝗇𝖽𝗈 𝖫𝖺 𝖴𝗅𝗍𝗂𝗆𝖺 𝖵𝖾𝗋𝗌𝗂𝗈𝗇 𝖣𝖾 𝖦𝗂𝗍𝗁𝗎𝖻* ✅`
}, { quoted: msg });
} else {
const mensaje = `${output.trim()}\n\n*𝖱𝖾𝗂𝗇𝗂𝖼𝗂𝖺𝗇𝖽𝗈 𝖤𝗅 𝖲𝖾𝗋𝗏𝗂𝖽𝗈𝗋*... *𝖤𝗌𝗉𝖾𝗋𝖾 𝖴𝗇 𝖬𝗈𝗆𝖾𝗇𝗍𝗈* 🔄`;

await conn.sendMessage(chatId, {
react: { text: "🔄", key: msg.key }
});

await conn.sendMessage(chatId, {
text: mensaje
}, { quoted: msg });

fs.writeFileSync(lastRestarterFile, JSON.stringify({ chatId }, null, 2));

setTimeout(() => process.exit(1), 3000);
}
});
};

handler.tags = ['𝖮𝖶𝖭𝖤𝖱']
handler.help = ['𝖴𝗉𝖽𝖺𝗍𝖾']
handler.command = ["carga", "update"];
handler.owner = true
export default handler;