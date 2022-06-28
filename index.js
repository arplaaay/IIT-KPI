const { Telegraf } = require('telegraf')

let range = 800
const bot = new Telegraf("5575133769:AAHUBndE6ZwERJxocQY2_4VT5FurOpN4vMM")
bot.start((ctx) => ctx.reply('hello world!'))
bot.hears(`da privet`, (ctx) => {
    ctx.reply(`${range}`)
    range = range - 77
})
bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

