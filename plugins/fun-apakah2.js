let handler = async (m, { conn, command, text }) => {
  if (!text) throw false
  conn.reply(m.chat, `
*Pertanyaan:* ${command} ${text}
*Jawaban:* ${pickRandom(['Ya', 'Iya banh', 'Gatau banh', 'Tydack Bisa', 'Yo ndak tau', 'Yoi slebeww'])}
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['afakah <text>']
handler.tags = ['kerang']
handler.command = /^(afakah)$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

