// simple.js
// Normalizador ligero de mensajes para Baileys
// Optimizado para handlers personalizados (sin lógica extra)

export function smsg(conn, m) {
  if (!m) return m

  const msg = m

  msg.chat = msg.key?.remoteJid || msg.chat || ''
  msg.fromMe = msg.key?.fromMe || false

  msg.sender =
    msg.fromMe
      ? conn.user?.jid
      : msg.key?.participant || msg.key?.remoteJid || ''

  msg.isGroup = msg.chat.endsWith('@g.us')
  msg.mtype = Object.keys(msg.message || {})[0] || null

  const content = msg.message?.[msg.mtype] || {}

  msg.text =
    content?.text ||
    content?.caption ||
    content?.conversation ||
    msg.message?.conversation ||
    ''

  if (typeof msg.text !== 'string') msg.text = ''

  msg.quoted = null
  const ctx = content?.contextInfo

  if (ctx?.quotedMessage) {
    const qType = Object.keys(ctx.quotedMessage)[0]
    const qMsg = ctx.quotedMessage[qType] || {}

    msg.quoted = {
      key: {
        remoteJid: msg.chat,
        fromMe: ctx.participant === conn.user?.jid,
        id: ctx.stanzaId,
        participant: ctx.participant
      },
      chat: msg.chat,
      sender: ctx.participant,
      fromMe: ctx.participant === conn.user?.jid,
      isGroup: msg.isGroup,
      mtype: qType,
      text:
        qMsg?.text ||
        qMsg?.caption ||
        qMsg?.conversation ||
        ''
    }

    if (typeof msg.quoted.text !== 'string') msg.quoted.text = ''
  }

  msg.reply = (text, chatId = msg.chat, options = {}) =>
    conn.sendMessage(chatId, { text }, { quoted: msg, ...options })

  return msg
}
