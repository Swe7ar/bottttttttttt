const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'sevensinsdz.play.hosting',
  port: 25565,
  username: 'sinssevendz',
  auth: 'offline'
})

bot.once('spawn', () => {
  console.log('دخل البوت إلى الخادم')
  bot.chat('hello guys im the bot for server sevensinsdz')
})

bot.on('chat', (username, message) => {
  if (username === bot.username) return

  if (message === 'hello') {
    bot.chat(`yo whatup brother ${username}`)
  }
})

bot.on('kicked', reason => {
  console.log('تم طرد البوت:', reason)
})

bot.on('error', error => {
  console.log('حدث خطأ:', error)
})

bot.on('end', () => {
  console.log('انقطع اتصال البوت')
})
