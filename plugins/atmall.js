const moneyplus = 1
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^atm/i, '')
  count = count ? /all/i.test(count) ? math.floor(global.db.data.users[m.sender].money / moneyplus) : parseint(count) : args[0] ? parseint(args[0]) : 1
  count = math.max(1, count)
  if (global.db.data.users[m.sender].money >= moneyplus * count) {
    global.db.data.users[m.sender].money -= moneyplus * count
    global.db.data.users[m.sender].bank += count
    conn.reply(m.chat, `-${moneyplus * count} money\n+ ${count} atm`, m)
  } else conn.reply(m.chat, `❌ money tidak mencukupi untuk menabung ${count} atm`, m)
}
handler.help = ['atm <jumlah>', 'atmall']
handler.tags = ['rpg']
handler.command = /^atm([0-9]+)|atm|atmall|nabung$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = true
handler.admin = false
handler.botadmin = false

handler.fail = null
handler.exp = 0

module.exports = handler
