let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
        conn.reply(m.chat, `*999+*`, m)
        global.db.data.users[m.sender].money = Infinity
        global.db.data.users[m.sender].limit = Infinity
        global.db.data.users[m.sender].level = Infinity
        global.db.data.users[m.sender].exp = 99999999999999
        global.db.data.users[m.sender].mythic = 999999999999
        global.db.data.users[m.sender].legendary = 999999999
        
}
handler.help = ['cheat']
handler.tags = ['owner']
handler.command = /^(cheat)$/i
handler.owner = false
handler.mods = true
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.money = 0

module.exports = handler
