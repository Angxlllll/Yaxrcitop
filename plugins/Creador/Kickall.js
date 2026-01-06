const handler = async (m,{conn,participants})=>{
if(!m.isGroup)return

const normJid=jid=>jid.replace(/(@s\.whatsapp\.net|@lid)$/i,'')

const botJid=conn.user.jid

const expulsar=participants
.filter(p=>normJid(p.id)!==normJid(botJid))
.map(p=>p.id)

if(!expulsar.length){
return m.reply('*𝖭𝗈 𝖧𝖺𝗒 𝖬𝗂𝖾𝗆𝖻𝗋𝗈𝗌 𝖯𝖺𝗋𝖺 𝖤𝗑𝗉𝗎𝗅𝗌𝖺𝗋* 🍅')
}

try{
await conn.groupParticipantsUpdate(m.chat,expulsar,'remove')
await m.reply(`*𝖡𝗒𝖾 𝖡𝗒𝖾* *${expulsar.length}* *𝖬𝗂𝖾𝗆𝖻𝗋𝗈𝗌* 🍅`)
await conn.groupLeave(m.chat)
}catch(e){
console.error(e)
m.reply('*𝖶𝗁𝖺𝗍𝗌𝖺𝗉𝗉 𝖡𝗅𝗈𝗊𝗎𝖾𝗈 𝖤𝗌𝗍𝖺 𝖠𝖼𝖼𝗂𝗈𝗇* 🚫')
}
}

handler.help=['𝖪𝗂𝖼𝗄𝖺𝗅𝗅']
handler.tags=['𝖮𝖶𝖭𝖤𝖱']
handler.customPrefix=/^(.kickall)$/i
handler.command=new RegExp()
handler.group=true

export default handler