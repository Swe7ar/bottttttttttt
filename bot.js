const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'sevensins.mcsh.io',
  port: 25565,
  username: 'sinssevendz',
  auth: 'offline',
  version: false // يخلي mineflayer يختار النسخة تلقائياً
})

bot.once('spawn', () => {
  console.log('✅ دخل البوت إلى الخادم')
  bot.chat('hello guys im the bot for server sevensinsdz')
})

bot.on('chat', (username, message) => {
  if (username === bot.username) return

  const msg = message.toLowerCase()

  if (msg === 'hello') {
    bot.chat(`yo whatup brother ${username}`)
  }

  if (msg === 'ping') {
    bot.chat('pong 🏓')
  }
})

bot.on('kicked', reason => {
  console.log('❌ تم طرد البوت:', reason)
})

bot.on('error', error => {
  console.log('⚠️ حدث خطأ:', error.message)
})

bot.on('end', () => {
  console.log('🔌 انقطع اتصال البوت')
})

// إعادة الاتصال التلقائي بعد 5 ثواني
bot.on('end', () => {
  setTimeout(() => {
    console.log('🔄 إعادة الاتصال...')
    process.exit(0) // أو استخدم إعادة تشغيل عبر nodemon
  }, 5000)
})
