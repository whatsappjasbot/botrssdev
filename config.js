const fs = require('fs')
const chalk = require('chalk')


// Other
global.owner = ['6285748411847']

//Nomer Creator Buat Fitur Report, Untuk laporan Bug Jangan di ganti Biar Tidak Terganggu bila ada spam
global.owner1 = '6285748411847'
global.ownere = '6285748411847@s.whatsapp.net'

//Ubah Ke True Untuk Otomatis Update Sebelum Bot Berjalan
global.autoupdate = false

//Auto Read Message
global.autoread = true

//Auto Pesan Selamat datang, leave, promote, demote
global.autowelcome = false
global.demote = false
global.autopromote = false
global.autoleave = false



//API KEY
global.keyneor = 'acuyxzyyy' //https://api.neoxr.my.id


//PackName
global.packname = ''
global.author = 'Whatsapp Bot\nwa.me/6281357396914'

//Nama Session Whatsapp default
global.sessionName = 'main'

//Lanjutan
global.prefa = ['.']
global.sp = '♦'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    
}

global.thumb = fs.readFileSync('./lib/thum.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
