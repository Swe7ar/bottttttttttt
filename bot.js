const mineflayer = require('mineflayer')

// ضع كلمة المرور التي تريدها للبوت هنا
const BOT_PASSWORD = 'YourPassword123' // ✏️ غير هذه الكلمة

const bot = mineflayer.createBot({
  host: 'sevensins.mcsh.io',
  port: 25565,
  username: 'sinssevendz',
  auth: 'offline',
  version: false
})

// ====== قسم المصادقة (AuthMe) ======
let isAuthenticated = false // لمنع تكرار الأوامر

bot.on('message', (jsonMsg) => {
  // إذا تمت المصادقة بالفعل، لا تفعل شيئًا
  if (isAuthenticated) return

  const msgText = jsonMsg.toString() // تحويل رسالة السيرفر إلى نص

  // البحث عن طلب التسجيل (Register)
  // مثلاً: "Please register using /register <password> <password>"
  if (/register.*password/i.test(msgText)) {
    console.log('📝 تم اكتشاف طلب تسجيل، جاري إرسال الأمر...')
    bot.chat(`/register ${daya12345678} ${daya12345678}`)
    isAuthenticated = true // افترض أن التسجيل نجح
  }
  // البحث عن طلب تسجيل الدخول (Login)
  // مثلاً: "Please login using /login <password>"
  else if (/login.*password/i.test(msgText) || /please.*login/i.test(msgText)) {
    console.log('🔑 تم اكتشاف طلب تسجيل دخول، جاري إرسال الأمر...')
    bot.chat(`/login ${daya12345678}`)
    isAuthenticated = true // افترض أن الدخول نجح
  }
})

// ====== باقي كود البوت (الذي يعمل بعد الدخول) ======
bot.once('spawn', () => {
  console.log('✅ دخل البوت إلى الخادم (بعد المصادقة)')
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
  // إعادة الاتصال بعد 5 ثواني
  setTimeout(() => {
    console.log('🔄 إعادة الاتصال...')
    process.exit(0) // إعادة تشغيل العملية
  }, 5000)
})
