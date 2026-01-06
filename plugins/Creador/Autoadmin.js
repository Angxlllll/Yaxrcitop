const handler = async (m, { conn, isAdmin, groupMetadata }) => {
try {

if (isAdmin) {
return conn.sendMessage(
m.chat,
{ text: '*𝖸𝖺 𝖤𝗋𝖺𝗌 𝖠𝖽𝗆𝗂𝗇 𝖩𝖾𝖿𝖾*', ...global.rcanal },
{ quoted: m }
);
}

await conn.sendMessage(m.chat,{react:{text:'⚙️',key:m.key}});

await conn.groupParticipantsUpdate(m.chat,[m.sender],'promote');

await conn.sendMessage(m.chat,{react:{text:'⭐',key:m.key}});

return conn.sendMessage(
m.chat,
{ text: '*𝖠𝗁𝗈𝗋𝖺 𝖤𝗋𝖾𝗌 𝖠𝖽𝗆𝗂𝗇 𝖣𝖾 𝖤𝗌𝗍𝖾 𝖦𝗋𝗎𝗉𝗈 𝖩𝖾𝖿𝖾*', ...global.rcanal },
{ quoted: m }
);

} catch (e) {
}
};

handler.help=['𝖠𝗎𝗍𝗈𝖺𝖽𝗆𝗂𝗇']
handler.tags=['𝖮𝖶𝖭𝖤𝖱']
handler.command=['autoadmin'];
handler.owner=true;
handler.group=true;
export default handler;