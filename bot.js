const { Telegraf } = require('telegraf')
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.help((ctx) => ctx.reply('Hi, how can I help you?'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))

bot.start((ctx) => {
    ctx.reply("Hi there!", {
        reply_markup: {
            inline_keyboard: [
                [{ text: "My Website", callback_data: "btn-1" }, { text: "Button 2", callback_data: "btn-2" }],
                [{ text: "Next", callback_data: "next" }],
                [{ text: "My Website", url: "https://site.shreyashrangrej.tech" }]
            ]
        }
    });
});

bot.launch()
