const TelegramBot = require('node-telegram-bot-api')

const token = '5500281057:AAFIhGmDiKy9ZSe-dd1Q3FGxko5N460uG-0'

const webAppUrl = 'https://funny-brigadeiros-5403a4.netlify.app'

const bot = new TelegramBot(token, {polling: true})

bot.on('message', async (msg) => {
  const chatId = msg.chat.id
  const text = msg.text

  if(text === '/start'){
    await bot.sendMessage(chatId, 'Form below', {
      reply_markup: {
        keyboard: [
          [{text: 'Form', web_app:{url: webAppUrl + '/form'}}]
        ]
      }
    })

    await bot.sendMessage(chatId, 'Fill the form', {
      reply_markup: {
        inline_keyboard: [
          [{text: 'ProductList', web_app:{url: webAppUrl}}]
        ]
      }
    })
  }
  if(msg?.web_app_data?.data) {
    try {
      const data = JSON.parse(msg?.web_app_data.data)

      await bot.sendMessage(chatId, 'Your Country' + data.country)
      await bot.sendMessage(chatId, 'Your Street' + data.street)

      setTimeout( async () => {
        await bot.sendMessage(chatId, 'Thats all')
      }, 3000);
    } catch (e) {
      console.log(e)
    }
  }
})