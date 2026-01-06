import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fetch from 'node-fetch'

global.owner = [
'159606034665538',
'5212213479743',
'5215542690330',
'447894206349'
]

global.bot = {
name: '𝖸𝖺𝗑𝗋𝖼𝗂𝗍𝗈𝗉 𝖡𝗈𝗍',
alias: '𝖸𝖺𝗑𝗋𝖼𝗂𝗍𝗈𝗉 𝖡𝗈𝗍',
packname: '𝖸𝖺𝗑𝗋𝖼𝗂𝗍𝗈𝗉 𝖡𝗈𝗍',
author: '𝖸𝖺𝗑𝗋𝖼𝗂𝗍𝗈𝗉 𝖳𝗎 𝖯𝖺𝗉𝗂',
session: '𝖸𝖺𝗑𝗋𝖼𝗂𝗍𝗈𝗉 𝖡𝗈𝗍𝗌𝗂𝗍𝗈',
banner: 'https://files.catbox.moe/4k94dp.jpg'
}

global.namebot = global.bot.name
global.botname = global.bot.alias
global.packname = global.bot.packname
global.author = global.bot.author
global.sessions = global.bot.session
global.banner = global.bot.banner

global.bannerBuffer = null
fetch(global.banner)
.then(r => r.arrayBuffer())
.then(b => global.bannerBuffer = Buffer.from(b))
.catch(() => global.bannerBuffer = null)

global.APIs = {
may: 'https://api.soymaycol.icu'
}

global.APIKeys = {
may: process.env.MAY_API_KEY || 'may-e89378ce'
}

const file = fileURLToPath(import.meta.url)

watchFile(file, () => {
unwatchFile(file)
console.log(chalk.redBright('config.js actualizado'))
import(`${file}?update=${Date.now()}`)
})