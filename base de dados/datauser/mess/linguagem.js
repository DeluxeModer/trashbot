const fs = require('fs');
emoji_bot = "🖤🥀"

const infos = JSON.parse(fs.readFileSync('./configure aqui.js'))
var {p, SeuNome, OwnerNumber, NomeDoBot} = infos

exports.wait = () => {
return`🖤🥀 Espere unos segundos...`
}

exports.registroB = () => {
return`
┏━━━━━━─ • ─━━━━━─
┃*「️𝙲𝚘𝚖𝚊𝚗𝚍𝚘 𝙽𝚎𝚐𝚊𝚍𝚘」*
┗┯━━━━━─ • ─━━━━━─
┏┤𝖯𝖺𝗋𝖺 𝖿𝖺𝗓𝖾𝗋 𝖫𝗈𝗀𝗂𝗇:
┃┃𝖴𝗌𝖾: 𝖫𝗈𝗀𝗂𝗇
┃┗━━━━━─ • ─━━━━━─
┗━━━━━━─ • ─━━━━━─`
}

exports.menu2 = (pushname, hr, total_gp1, bateria) => {
return `
Hola ${pushname} Lindo nombre <3
┏━━━━━━━━━━━━━━━✞
┃༺【️ɪɴғᴏ ᴅᴇʟ ʙᴏᴛ】༻
┃
┃⫸ Pʀᴇғɪᴊᴏ :《${p}》
┃⫸ Hᴏʀᴀ : ${hr}
┃⫸ Cʜᴀᴛs: ${total_gp1}
┃⫸ Bᴀᴛᴇʀɪᴀ : ${bateria}
┃⫸ ${p}Report《Eʀʀᴏʀᴇs?》
┃
┣━━━━━━━━━━━━━━━✞
┃ ▷〖ᴄᴍᴅ sᴏʟᴏ ᴘᴀʀᴀ ᴀᴅᴍ〛◁
┣━━━━━━━━━━━━━━━✞
┃ツ Usᴀʀ ᴇɴ ᴛᴏᴅᴏs ʟᴏs ᴄᴅᴍ :*@ᴍᴀʀᴄᴀʀ|ɴᴜᴍ!*
┣━━━━━━━━━━━━━━━✞
┃
┃⫸ ${p}Banir《@ᴍᴀʀᴄᴀʀ》
┃⋗(ʙᴀɴᴇᴀ ᴇʟ ɴᴜᴍ. ᴅᴇʟ ɢᴘ)
┃
┃⫸ ${p}Add《Nᴜᴍᴇʀᴏ》 
┃⋗(ᴀɢʀᴇɢᴀɢ ᴜɴ ᴍɪᴇᴍʙʀᴏ ᴀʟ ɢʀᴜᴘᴏ)
┃
┣━━━━━°•✮•°━━━━
┃⫸ ${p}Promover《@Tag》
┃⋗(ᴅᴀ ᴀᴅᴍɪɴ ᴀ ᴜɴ ᴍɪᴇᴍʙʀᴏ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Rebaixar《@ᴍᴀʀᴄᴀʀ》
┃⋗(ʙᴀᴊᴀ ᴅᴇ ᴀᴅᴍɪɴ ᴀ ᴍɪᴇᴍʙʀᴏ)
┃
┣━━━━°•✮•°━━━━
┣━━━━━━━━━━━━━━━✞
┃ツ *Mᴀʀǫᴜᴇ ᴜɴ ᴍᴇɴsᴀᴊᴇ ᴀʟ ᴜsᴀʀ ᴇsᴛᴏs ᴄᴍᴅ*
┣━━━━━━━━━━━━━━━✞
┃
┃⫸ ${p}Kick《ᴍᴇɴsᴀᴊᴇ》
┃⋗(ᴇʟɪᴍɪɴᴀ ᴀ ᴇʟ ᴍɪᴇᴍʙʀᴏ ᴅᴇʟ ɢᴘ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Demote《ᴍᴇɴsᴀᴊᴇ》 
┃⋗(sᴀᴄᴀ ᴀᴅᴍɪɴ ᴇɴ sᴇɢᴜɴᴅᴏs)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Reviver《ᴍᴇɴsᴀᴊᴇ》
┃⋗(ᴀɢʀᴇɢᴀ ᴀ ᴜɴ ᴍɪᴇᴍʙʀᴏ ᴇʟɪᴍɪɴᴀᴅᴏ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Promote《ᴍᴇɴsᴀᴊᴇ》
┃⋗(ᴅᴀ ᴀᴅᴍɪɴ ᴘᴏʀ ᴍᴇᴅɪᴏ ᴅᴇ ᴍsᴊ
┃
┣━━━━°•✮•°━━━━
┣━━━━━━━━━━━━━━━✞
┃ ▷【ɴᴏᴍʙʀᴇ|ᴅᴇsᴄ|ғᴏᴛᴏ】◁
┣━━━━━━━━━━━━━✞
┃ツ Usᴀ ᴇsᴛᴏs ᴄᴍᴅ ᴄᴏɴ : *[ᴛᴇxᴛᴏ/ғᴏᴛᴏ]*
┣━━━━━━━━━━━━━━━✞
┃⫸ ${p}Setppgc《ғᴏᴛᴏ》
┃⋗(ᴄᴀᴍʙɪᴀ ʟᴀ ғᴛᴏ ᴅᴇʟ ɢᴘ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Hidetag《ᴛᴇxᴛᴏ》
┃⋗(ᴍᴀʀᴄᴀ ᴀ ᴛᴏᴅᴏs ᴄᴏɴ ᴛᴜ ᴛᴇxᴛᴏ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Setdesk《ᴅᴇsᴄ》
┃⋗(ᴄᴀᴍʙɪᴀ ʟᴀ ᴅᴇsᴄʀɪᴘᴄɪᴏɴ ᴅᴇʟ ɢᴘ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Setnome《ɴᴏᴍʙʀᴇ》
┃⋗(ᴄᴀᴍʙɪᴀ ᴇʟ ɴᴏᴍʙʀᴇ ᴅᴇʟ ɢᴘ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Del《ᴍsᴊ ᴅᴇʟ ʙᴏᴛ》
┃⋗(ᴇʟɪᴍɪɴᴀ ᴍᴇɴsᴀᴊᴇs ᴅᴇʟ ʙᴏᴛ)
┃
┣━━━━°•✮•°━━━━
┣━━━━━━━━━━━━━━━✞
┃▷【ᴄᴍᴅ ᴘᴀʀᴀ ᴀᴄᴛɪᴠᴀʀ】◁
┣━━━━━━━━━━━━━✞
┃ツ ᴏɴ : ᴘᴀʀᴀ ᴀᴄᴛɪᴠᴀʀ
┃ツ ᴏғғ : ᴘᴀʀᴀ ᴅᴇsᴀᴄᴛɪᴠᴀʀ
┣━━━━━━━━━━━━━━━✞
┃⫸${p}Antilink《ᴏɴ|ᴏғғ》
┃
┃ɴᴏᴛᴀ : sɪ ᴇʟ ᴄᴅᴍ ᴇsᴛᴀ 
┃ᴀᴄᴛɪᴠᴏ, ɴɪɴɢᴜɴ ᴍɪᴇᴍʙʀᴏ 
┃ᴘᴏᴅʀᴀ ᴘᴀsᴀʀ ᴇɴʟᴀᴄᴇs ᴅᴇ ɢᴘ,
┃sɪ ɴᴏ ᴇʟ ʙᴏᴛ ʟᴏs ᴇʟɪᴍɪɴᴀ
┣━━━━°•✮•°━━━━
┃⫸ ${p}Antifake《ᴏɴ|ᴏғғ》
┃⋗(ᴇʟɪᴍɪɴᴀ ᴀ ᴛᴏᴅᴏs ʟᴏs ɴᴜᴍᴇʀᴏs ғᴀᴋᴇ)
┃
┃ɴᴏᴛᴀ : sᴏʟᴏ ᴘᴀʀᴀ ɢʀᴜᴘᴏs ᴅᴇ ᴀʀɢᴇɴᴛɪɴᴀ 🇦🇷
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Leveling《ᴏɴ|ᴏғғ》
┃⋗(ᴀᴄᴛɪᴠᴀ ʟᴀ ɴɪᴠᴇʟᴀᴄɪᴏɴ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Welcome 《ᴏɴ|ᴏғғ》
┃⋗(ᴀᴄᴛɪᴠᴀ ʟᴀ ʙɪᴇɴᴠᴇɴɪᴅᴀ)
┃
┣━━━━°•✮•°━━━━
┣━━━━━━━━━━━━━━━✞
┃  ▷【ᴏᴛʀᴏs ᴄᴅᴍ ᴅᴇ ɢᴘ】◁
┣━━━━━°•✮•°━━━━
┃⫸ ${p}Listadmin
┃⋗(ɴᴏᴍʙʀᴀ ᴀ ᴛᴏᴅᴏs ʟᴏs ᴀᴅᴍ ғᴀᴄʜᴇʀᴏs)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Totag《ɪᴍɢ|ɢɪғ|sᴛɪᴄᴋ》  
┃⋗(ᴍᴀʀᴄᴀ ᴀ ᴛᴏᴅᴏs ᴘᴏʀ ᴜɴ ᴍᴇᴅɪᴏ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Link《ᴘᴠ|ɢʀᴜᴘᴏ》 
┃⋗(ᴍᴀɴᴅᴀ ᴇʟ ʟɪɴᴋ ᴅᴇʟ ɢʀᴜᴘᴏ)
┃ɴᴏᴛᴀ : ʟᴏ ᴍᴀɴᴅᴀ ᴀʟ ᴘʀɪᴠᴀᴅᴏ ᴏ ᴀʟ ɢᴘ
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Info《ɢʀᴜᴘᴏ|ᴘᴇʀғɪʟ》
┃⋗(ʟᴇs ᴍᴀɴᴅᴀ ʟᴀ ɪɴғᴏ ᴅᴇʟ ɢᴘ ᴏ ᴇʟ ᴘᴇʀғɪʟ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Grup《ᴀʙʀɪʀ|ᴄᴇʀʀᴀʀ》
┃⋗(ᴀʙʀᴇ ᴏ ᴄɪᴇʀʀᴀ ᴇʟ ɢʀᴜᴘᴏ)
┃
┣━━━━°•✮•°━━━━
┗━━━━━━━━━━━━━━✞`
}

exports.figurinhas = (pushname, hr, total_gp2, bateria) => {
return `
Hola ${pushname} Lindo nombre <3
┏━━━━━━━━━━━━━━━✞
┃༺【️ɪɴғᴏ ᴅᴇʟ ʙᴏᴛ】༻
┃
┃⫸ Pʀᴇғɪᴊᴏ :《${p}》
┃⫸ Hᴏʀᴀ : ${hr}
┃⫸ Cʜᴀᴛs: ${total_gp2}
┃⫸ Bᴀᴛᴇʀɪᴀ : ${bateria}
┃⫸ ${p}Report《Eʀʀᴏʀᴇs?》
┃
┣━━━━━━━━━━━━━━━✞
┃▷【ғᴏᴛᴏ|sᴛɪᴄᴋᴇʀ】◁
┣━━━━━━━━━━━━━✞
┃ツ ᴍᴀʀᴄᴀʀ ᴏ ᴍᴀɴᴅᴀʀ : *[gif/foto]*
┣━━━━━━━━━━━━━━━✞
┃⫸ ${p}S 《Foto/Gif》
┃⋗(ᴄᴏᴍᴠɪᴇʀᴛᴇ ᴜɴᴀ ғᴏᴛᴏ ᴀ sᴛɪᴄᴋᴇʀ)
┃
┣━━━━°•✮•°━━━━
┣━━━━━━━━━━━━━━━✞
┃  ▷【sᴛɪᴄᴋᴇʀ|ᴛᴇxᴛᴏ】◁
┣━━━━━━━━━━━━━✞
┃ツ ᴇsᴛᴏs ᴄᴍᴅ ʜᴀᴄᴇɴ sᴛɪᴄᴋᴇʀs
┃ツ ᴀɴɪᴍᴀᴅᴏs, ᴄᴏɴ ᴛᴜ ᴛᴇxᴛᴏ
┣━━━━━━━━━━━━━━━✞
┃⫸ ${p}Attp《ᴛᴇxᴛᴏ》
┃
┃⫸ ${p}Attp1《ᴛᴇxᴛᴏ》
┃
┃⫸ ${p}Attp2《ᴛᴇxᴛᴏ》
┃
┃⫸ ${p}Attp3《ᴛᴇxᴛᴏ》
┃
┃⫸ ${p}Attp4《ᴛᴇxᴛᴏ》
┃
┃⫸ ${p}Attp5《ᴛᴇxᴛᴏ》
┃
┃⫸ ${p}Attp6《ᴛᴇxᴛᴏ》
┃
┃ɴᴏᴛᴀ : ᴄᴀᴅᴀ ᴀᴛᴛᴘ ᴛɪᴇɴᴇ ʟᴇᴛʀᴀ ᴅɪғᴇʀᴇɴᴛᴇ
┣━━━━°•✮•°━━━━
┣━━━━━━━━━━━━━━━✞
┃   ▷【 ᴄᴏɴᴠᴇʀᴛɪʀ 】◁
┣━━━━━━━━━━━━━━✞
┃ツ ᴅᴇ sᴛɪᴄᴋᴇʀ ᴀ sᴜs ᴍᴇᴅɪᴏs
┣━━━━━━━━━━━━━━━✞
┃⫸ ${p}Togif《sᴛɪᴄᴋᴇʀ》
┃⋗(ᴅᴇ sᴛɪᴄᴋᴇʀ ᴀ ɪᴍᴀɢᴇɴ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Toimg《sᴛɪᴄᴋᴇʀ》
┃⋗(ᴅᴇ sᴛɪᴄᴋᴇʀ ᴀɴɪᴍᴀᴅᴏ ᴀ ᴠɪᴅᴇᴏ)
┃
┣━━━━°•✮•°━━━━
┣━━━━━━━━━━━━━━━✞
┃ ▷【sᴛɪᴄᴋᴇʀ/ғᴏᴛᴏs】◁
┣━━━━━━━━━━━━━━━✞
┃ツ ᴇᴅɪᴛᴇ ғᴛᴏs ᴇɴ sᴛɪᴄᴋᴇʀs...
┃ツ ᴜsᴇ ʟᴏs ᴄᴍᴅ ᴄᴏɴ : *[foto]*
┣━━━━━━━━━━━━━━━✞
┃⫸ ${p}Figupet《ғᴏᴛᴏ》
┃⋗(ʜᴀᴄᴇ ᴜɴ sᴛɪᴄᴋᴇʀ ᴀᴄᴀʀɪᴄɪᴀɴᴅᴏ ʟᴀ ғᴛᴏ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Figuger《ғᴏᴛᴏ》
┃⋗(ʜᴀᴄᴇ ᴇʟ ᴇғᴇᴄᴛᴏ ᴛʀɪɢɢᴇʀᴇᴅ ᴇɴ ʟᴀ ғᴛᴏ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Figulgbt《ғᴏᴛᴏ》
┃⋗(ʜᴀᴄᴇ ᴜɴ ᴇғᴇᴄᴛᴏ ɢᴇʏ ᴇɴ ʟᴀ ғᴛᴏ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Figuarma《ғᴏᴛᴏ》
┃⋗(ʟᴇ ᴘᴏɴᴇ ᴜɴᴀ ᴀʀᴍᴀ ᴀ ғᴛᴏ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Figuinvert《ғᴏᴛᴏ》
┃⋗(ᴄᴀᴍʙɪᴀ ʟᴏs ᴄᴏʟᴏʀᴇs ᴅᴇ ʟᴀ ғᴛᴏ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Figupreso《ғᴏᴛᴏ》
┃⋗(ᴍᴀɴᴅᴀ ᴀ ʟᴀ ᴄᴀʀᴄᴇʟ ᴀ ʟᴀ ғᴛᴏ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Figuwasted《sᴛɪᴄᴋᴇʀ》
┃⋗(ʜᴀᴄᴇ ᴇʟ ᴇғᴇᴄᴛᴏ ᴡᴀsᴛᴇᴅ (ɢᴛᴀ) ᴇɴ ʟᴀ ғᴛᴏ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Figuborrada《sᴛɪᴄᴋᴇʀ》
┃⋗(ʜᴀᴄᴇ ᴜɴ ᴇғᴇᴄᴛᴏ ʙᴏʀʀᴏsᴏ ᴀ ʟᴀ ғᴛᴏ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Figuprocurado《sᴛɪᴄᴋᴇʀ》
┃⋗(ᴘᴏɴᴇ ʟᴀ ғᴛᴏ ᴇɴ ᴜɴ ᴘᴏsᴛᴇ ᴅᴇ "sᴇ ʙᴜsᴄᴀ")
┃
┣━━━━°•✮•°━━━━
┗━━━━━━━━━━━━━━✞`
}

exports.playrs = (pushname, hr, total_gp4, bateria) => {
return `
Hola ${pushname} Lindo nombre <3
┏━━━━━━━━━━━━━━━✞
┃༺【️ɪɴғᴏ ᴅᴇʟ ʙᴏᴛ】༻
┃
┃⫸ Pʀᴇғɪᴊᴏ :《${p}》
┃⫸ Hᴏʀᴀ : ${hr}
┃⫸ Cʜᴀᴛs: ${total_gp4}
┃⫸ Bᴀᴛᴇʀɪᴀ : ${bateria}
┃⫸ ${p}Report《Eʀʀᴏʀᴇs?》
┃
┣━━━━━━━━━━━━━━━✞
┃▷【ᴅᴇsᴄᴀʀɢᴀʀ ᴍᴜsɪᴄᴀ】◁
┣━━━━━━━━━━━━━━━✞
┃ツ sɪ ɴᴏ ᴅᴇsᴄᴀʀɢᴀ, ɪɴᴛᴇɴᴛᴇ ᴄᴏɴ ᴏᴛʀᴏ ᴘʟᴀʏ
┣━━━━━━━━━━━━━━━✞
┃⫸ ${p}Play《ᴛɪᴛᴜʟᴏ-ᴀʀᴛɪsᴛᴀ》
┃
┃⫸ ${p}Play1《ᴛɪᴛᴜʟᴏ-ᴀʀᴛɪsᴛᴀ》
┃
┃⫸ ${p}Play2《ᴛɪᴛᴜʟᴏ-ᴀʀᴛɪsᴛᴀ》
┃
┃⫸ ${p}Play3《ᴛɪᴛᴜʟᴏ-ᴀʀᴛɪsᴛᴀ》
┃
┃⫸ ${p}Play4《ᴛɪᴛᴜʟᴏ-ᴀʀᴛɪsᴛᴀ》
┃
┃⫸ ${p}Play5《ᴛɪᴛᴜʟᴏ-ᴀʀᴛɪsᴛᴀ》
┃
┃ɴᴏᴛᴀ : ᴇsᴘᴇʀᴇ ᴀ ǫᴜᴇ sᴇ ᴇɴᴠɪᴇ ᴇʟ ᴀʀᴄʜɪᴠᴏ
┃ʏ ᴇsᴘᴇᴄɪғɪǫᴜᴇsᴇ ᴇɴ ᴇsᴄʀɪʙɪʀ ʙɪᴇɴ ᴇʟ ɴᴏᴍʙʀᴇ
┃ᴅᴇ ʟᴀ ᴄᴀɴᴄɪᴏɴ ʏ ᴇʟ ᴀʀᴛɪsᴛᴀ ǫᴜᴇ ʟᴀ ᴄᴀɴᴛᴀ
┃
┣━━━━━━━━━━━━━━━✞
┃▷【ᴅᴇsᴄᴀʀɢᴀ ᴅᴇ ᴠɪᴅᴇᴏs】◁
┣━━━━━━━━━━━━━━━✞
┃ツ Sɪ ɴᴏ ғᴜɴᴄɪᴏɴᴀ, ᴜsᴀ ᴏᴛʀᴏ ᴘʟᴀʏᴠɪᴅ...
┣━━━━━━━━━━━━━━━✞
┃⫸ ${p}Playvid《ᴛɪᴛᴜʟᴏ-ᴀʀᴛɪsᴛᴀ》
┃
┃⫸ ${p}Playvid1《ᴛɪᴛᴜʟᴏ-ᴀʀᴛɪsᴛᴀ》
┃
┃ɴᴏᴛᴀ : ᴇsᴘᴇʀᴇ ᴀ ǫᴜᴇ sᴇ ᴇɴᴠɪᴇ ᴇʟ ᴀʀᴄʜɪᴠᴏ
┃ʏ ᴇsᴘᴇᴄɪғɪǫᴜᴇsᴇ ᴇɴ ᴇsᴄʀɪʙɪʀ ʙɪᴇɴ ᴇʟ ɴᴏᴍʙʀᴇ
┃ᴅᴇ ʟᴀ ᴄᴀɴᴄɪᴏɴ ʏ ᴇʟ ᴀʀᴛɪsᴛᴀ ǫᴜᴇ ʟᴀ ᴄᴀɴᴛᴀ
┃
┃▷【ʙᴜsᴄᴀ ᴠɪᴅᴇᴏs|ᴍᴜsɪᴄᴀ|ᴄᴀɴᴀʟᴇs】◁
┣━━━━━━━━━━━━━━━✞
┃ツ ʙᴜsǫᴜᴇᴅᴀ ᴅᴇ ʏᴛ...
┣━━━━━━━━━━━━━━━✞
┃⫸ ${p}Ytsearch《ᴄᴀɴᴀʟ|ᴛɪᴛᴜʟᴏ》
┃
┣━━━━━━━━━━━━━━━✞
┃▷【ᴇᴅɪᴄɪᴏɴ ᴅᴇ ᴀᴜᴅɪᴏ】◁
┣━━━━━━━━━━━━━✞
┃ツ ᴀ ᴄᴏɴᴛɪɴᴜᴀᴄɪᴏɴ : *[audio]*
┣━━━━━━━━━━━━━✞
┃⫸ ${p}Baixo《ᴀᴜᴅɪᴏ》
┃
┃⫸ ${p}Rapid《ᴀᴜᴅɪᴏ》
┃
┃⫸ ${p}Tomp3《ᴠɪᴅᴇᴏ》
┃
┃⫸ ${p}Rapido《ᴀᴜᴅɪᴏ》
┃
┃⫸ ${p}Esquilo《ᴀᴜᴅɪᴏ》
┃
┃⫸ ${p}Gigante《ᴀᴜᴅɪᴏ》
┃
┃⫸ ${p}Devagar《ᴀᴜᴅɪᴏ》
┃
┃⫸ ${p}Sombrio《ᴠɪᴅᴇᴏ》
┃
┃⫸ ${p}Estourar《ᴀᴜᴅɪᴏ》
┃
┗━━━━━━━━━━━━━━━✞`
}

exports.jogos = (pushname, hr, total_gp5, bateria) => {
return `
Hola ${pushname} Lindo nombre <3
┏━━━━━━━━━━━━━━━✞
┃༺【️ɪɴғᴏ ᴅᴇʟ ʙᴏᴛ】༻
┃
┃⫸ Pʀᴇғɪᴊᴏ :《${p}》
┃⫸ Hᴏʀᴀ : ${hr}
┃⫸ Cʜᴀᴛs: ${total_gp5}
┃⫸ Bᴀᴛᴇʀɪᴀ : ${bateria}
┃⫸ ${p}Report《Eʀʀᴏʀᴇs?》
┃
┣━━━━━━━━━━━━━━━✞
┃         ️▷【ᴊᴜᴇɢᴏs】◁
┣━━━━━━━━━━━━━━━✞
┃ツ ᴊᴜᴇɢᴏs/ʀᴀɴɢᴏs/ᴍɪᴇᴍʙʀᴏs
┣━━━━━━━━━━━━━━━✞
┃⫸ ${p}Sn《ᴘʀᴇɢᴜɴᴛᴀ》
┃⋗(ʀᴇsᴘᴏɴᴅᴇ ᴀ ᴛᴜ ᴘʀᴇɢᴜɴɢᴀ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Ttt《ᴅɪғɪᴄᴜʟᴛᴀᴅ》
┃⋗(ᴊᴜᴇɢᴀ ᴀʟ ᴛᴛᴛ ᴄᴏɴ ᴇʟ ʙᴏᴛ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Getname《@ᴍᴀʀᴄᴀʀ》
┃⋗(sᴀᴄᴀ ᴇʟ ɴɪᴄᴋ ᴅᴇ ᴇsᴀ ᴘᴇʀsᴏɴᴀ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Amongus《@ᴍᴀʀᴄᴀʀ》
┃⋗(ᴊᴜᴇɢᴀ ᴀʟ ᴀᴍᴏɴɢᴜs)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Slot
┃⋗(ᴊᴜᴇɢᴀ ᴀʟ sʟᴏᴛ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Ranklevel
┃⋗(ᴍɪʀᴀ ᴇʟ ʀᴀɴɢᴏ ᴅᴇ ᴛᴏᴅᴏs)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Tagme
┃⋗(ᴇʟ ʙᴏᴛ ᴛᴇ ᴍᴀʀᴄᴀ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Cassino
┃⋗(ᴊᴜᴇɢᴀ 3 ᴇɴ 1 )
┃
┣━━━━°•✮•°━━━━
┣━━━━━━━━━━━━━━━✞
┃        ️▷【ᴛᴏᴘ ᴅᴇʟ ɢʀᴜᴘᴏ】◁
┣━━━━━━━━━━━━━━━✞
┃⫸ ${p}Gay
┃
┃⫸ ${p}Pau
┃
┃⫸ ${p}Feio
┃
┃⫸ ${p}Lixo
┃
┃⫸ ${p}Gado
┃
┃⫸ ${p}Dado
┃
┃⫸ ${p}Level 
┃
┃⫸ ${p}Burro
┃
┃⫸ ${p}Gordo
┃
┃⫸ ${p}Corno
┃
┃⫸ ${p}Bonito
┃
┃⫸ ${p}Otaku
┃
┃ɪɴғᴏ : ᴇsᴛᴏs ᴄᴏᴍᴀɴᴅᴏs sᴏɴ
┃ᴘᴀʀᴀ ᴠᴇʀ ǫᴜɪᴇɴ ᴇs ᴇʟ ᴍᴀs ᴛᴏᴘ
┃
┗━━━━━━━━━━━━━━✞`
}

exports.animes = (pushname, hr, total_gp6, bateria) => {
return `
 Hola ${pushname} Lindo nombre <3
┏━━━━━━━━━━━━━━━✞
┃༺【️ɪɴғᴏ ᴅᴇʟ ʙᴏᴛ】༻
┃
┃⫸ Pʀᴇғɪᴊᴏ :《${p}》
┃⫸ Hᴏʀᴀ : ${hr}
┃⫸ Cʜᴀᴛs: ${total_gp6}
┃⫸ Bᴀᴛᴇʀɪᴀ : ${bateria}
┃⫸ ${p}Report《Eʀʀᴏʀᴇs?》
┃
┣━━━━━━━━━━━━━━━✞
┃     ▷【ʜᴇɴᴛᴀɪ】◁
┣━━━━━━━━━━━━━━━✞
┃ツ ʜᴇɴᴛᴀɪ
┣━━━━━━━━━━━━━━━✞
┃⫸ ${p}Ero
┃
┃⫸ ${p}Les
┃
┃⫸ ${p}Ass
┃
┃⫸ ${p}Solo
┃
┃⫸ ${p}Holo
┃
┃⫸ ${p}Feet
┃
┃⫸ ${p}Anal
┃
┃⫸ ${p}Eron
┃
┃⫸ ${p}Trap
┃
┃⫸ ${p}Erok
┃
┃⫸ ${p}Cum
┃
┃⫸ ${p}Feed
┃
┃⫸ ${p}Neko
┃
┃⫸ ${p}Lewd
┃
┃⫸ ${p}Solog
┃
┃⫸ ${p}Bdsm
┃
┃⫸ ${p}Feetg
┃
┃⫸ ${p}Spank
┃
┃⫸ ${p}Lewdk
┃
┃⫸ ${p}Boobs
┃
┃⫸ ${p}Hentai
┃
┃⫸ ${p}Eroyuri
┃
┃⫸ ${p}Classic
┃
┃⫸ ${p}Erofeet
┃
┃⫸ ${p}Hentain
┃
┃⫸ ${p}Kitsune
┃
┃⫸ ${p}Holoero
┃
┃⫸ ${p}Blowjob
┃
┃⫸ ${p}Pwankg
┃
┃⫸ ${p}Futanari
┃
┃⫸ ${p}Nsfwloli
┃
┃⫸ ${p}Femdom
┃
┃⫸ ${p}Nsfwneko
┃
┃⫸ ${p}Erokemo
┃
┃⫸ ${p}Trapnime
┃
┃⫸ ${p}Hololewd
┃
┃⫸ ${p}Lewdkemo
┃
┃ɴᴏᴛᴀ : ᴛᴏᴅᴏ ᴇʟ ʜᴇɴᴛᴀɪ sᴇ 
┃ᴇɴᴠɪᴀʀᴀ ᴀʟ ᴘʀɪᴠᴀᴅᴏ ᴘᴀʀᴀ 
┃ᴇᴠɪᴛᴀʀ ᴘʀᴏʙʟᴇᴍᴀs
┃
┣━━━━━━━━━━━━━━━✞
┃▷【ᴀɴɪᴍᴇ|ᴘɪɴᴛᴇʀᴇsᴛ】◁
┣━━━━━━━━━━━━━━━✞
┃ツ Animes e Hentais.
┣━━━━━━━━━━━━━━━✞
┃⫸ ${p}Ace
┃
┃⫸ ${p}Loli
┃
┃⫸ ${p}Luffy
┃
┃⫸ ${p}Zoro
┃
┃⫸ ${p}Nami
┃
┃⫸ ${p}Bully
┃
┃⫸ ${p}Obito
┃
┃⫸ ${p}Shota
┃
┃⫸ ${p}Waifu
┃
┃⫸ ${p}Buggy
┃
┃⫸ ${p}Carrot
┃
┃⫸ ${p}Nekoa
┃
┃⫸ ${p}Asuma
┃
┃⫸ ${p}Naruto
┃
┃⫸ ${p}Shanks
┃
┃⫸ ${p}Sakura
┃
┃⫸ ${p}Hinata
┃
┃⫸ ${p}Shikaku
┃
┃⫸ ${p}Madara
┃
┃⫸ ${p}Sasuke
┃
┃⫸ ${p}Abraço
┃
┃⫸ ${p}Shinobu
┃
┃⫸ ${p}Ahegao
┃
┃⫸ ${p}Lolizinha
┃
┃⫸ ${p}Shikadai
┃
┃⫸ ${p}Megumin
┃
┃⫸ ${p}Shikamaru
┃
┃ɴᴏᴛᴀ : ᴇʟ ʙᴏᴛ ᴇɴᴠɪᴀʀᴀ ғᴏᴛᴏs
┃ᴅᴇʟ ᴀɴɪᴍᴇ sᴇɢᴜɴ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Pinterest《ᴛᴇxᴛᴏ》
┃⋗(ᴅᴇsᴄᴀʀɢᴀ ʟᴀ ɪᴍɢ sᴇɢᴜɴ ᴇʟ ᴛᴇxᴛᴏ)
┃
┗━━━━━━━━━━━━━━✞
`
}

exports.dono = (pushname, hr, total_gp7, bateria) => {
return `
 Hola ${pushname} Lindo nombre <3
┏━━━━━━━━━━━━━━━✞
┃༺【️ɪɴғᴏ ᴅᴇʟ ʙᴏᴛ】༻
┃
┃⫸ Pʀᴇғɪᴊᴏ :《${p}》
┃⫸ Hᴏʀᴀ : ${hr}
┃⫸ Cʜᴀᴛs: ${total_gp7}
┃⫸ Bᴀᴛᴇʀɪᴀ : ${bateria}
┃⫸ ${p}Report《Eʀʀᴏʀᴇs?》
┃
┣━━━━━━━━━━━━━━━✞
┃▷【ᴄᴍᴅ ᴅᴇ ᴍᴀᴜᴜ-ᴍᴏᴅᴇʀ】◁
┣━━━━━━━━━━━━━━━✞
┃⫸ ${p}Bc《ᴛᴇxᴛᴏ》
┃⋗(ʜᴀᴄᴇ ᴜɴ ᴀᴠɪsᴏ ᴀ ᴛᴏᴅᴏs ʟᴏs ᴄʜᴀᴛs)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Ban《@ᴍᴀʀᴄᴀʀ》
┃⋗(ʟᴏ ʙᴀɴᴇᴀ ᴅᴇʟ ʙᴏᴛ
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Clone《@ᴍᴀʀᴄᴀʀ》
┃⋗(ɪɴᴛᴇʀᴄᴀᴍʙɪᴀ ʟᴀ ғᴛᴏ ᴅᴇʟ ᴘᴏʀ ᴘᴏʀ ʟᴀ ᴅᴇ ᴍɪᴇᴍ.)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Unban《@ᴍᴀʀᴄᴀʀ》
┃⋗(ʟᴏ ᴅᴇsʙᴀɴᴇᴀ ᴅᴇʟ ʙᴏᴛ
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Bcstik《sᴛɪᴄᴋᴇʀ》
┃⋗(ᴇɴɪᴀ ᴇʟ sᴛɪᴄᴋᴇ ᴘᴀʀᴀ ᴛᴏᴅᴏs ʟᴏs ᴄʜᴀᴛs)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Tagimg《ғᴏᴛᴏ》
┃⋗(ᴍᴀʀᴄᴀ ᴀ ᴛᴏᴅᴏs ᴄᴏɴ ʟᴀ ғᴛᴏ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Setprefix《ᴘʀᴇғɪᴊᴏ》
┃⋗(ᴄᴀᴍʙɪᴀ ᴇʟ ᴘʀᴇғɪᴊᴏ ᴅᴇʟ ʙᴏᴛ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Addprem《@ᴍᴀʀᴄᴀʀ》
┃⋗(ᴀɢʀᴇɢᴀʀ ᴘʀᴇᴍɪᴜɴ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Dellprem《@ᴍᴀʀᴄᴀʀ》
┃⋗(ᴇʟɪᴍɪɴᴀʀ ᴘʀᴇᴍɪᴜɴ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Tagstick《sᴛɪᴄᴋᴇʀ》
┃⋗(ᴍᴀʀᴄᴀ ᴀ ᴛᴏᴅᴏs ᴄᴏɴ ᴇʟ sᴛɪᴄᴋᴇʀs)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Delpalavra《ᴘᴀʟᴀʙʀᴀ》
┃⋗(ᴇʟɪᴍɪɴᴀ ʟᴀ ɢʀᴏsᴇʀɪᴀ ᴏ ᴘᴀʟᴀʙʀᴀ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Addpalavra《Palavra》
┃⋗(ᴀɢʀᴇɢᴀ ᴜɴᴀ ɢʀᴏsᴇʀɪᴀ ᴏ ᴘᴀʟᴀʙʀᴀ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Antipalavras《ᴏɴ|ᴏғғ》
┃⋗(ᴀᴄᴛɪᴠᴀ ᴇʟ ᴍᴏᴅᴏ ᴀɴᴛɪᴘᴀʟᴀʙʀᴀ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Setname《ɴᴏᴍʙʀᴇ ᴅᴇʟ ʙᴏᴛ》
┃⋗(ᴄᴀᴍʙɪᴀ ᴅᴇʟ ɴᴏᴍʙʀᴇ ᴅᴇʟ ʙᴏᴛ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Ping
┃⋗(ᴠᴇʟᴏᴄɪᴅᴀᴅ ᴅᴇʟ ʙᴏᴛ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Delchat
┃⋗(ᴇʟɪᴍɪɴᴀ ʟᴏs ᴄʜᴀᴛs ᴅᴇʟ ʙᴏᴛ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Bateria
┃⋗(ᴍᴜᴇsᴛʀᴀ ʟᴀ ʙᴀᴛᴇʀɪᴀ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Clearall
┃⋗(ʙᴏʀʀᴀ ʟᴏs ᴍᴇɴsᴀᴊᴇs ᴅᴇ ᴛᴏᴅᴏs ʟᴏs ᴄʜᴀᴛs)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Desligar
┃⋗(ᴀᴘᴀɢᴀ ᴇʟ ʙᴏᴛ
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Visuchat
┃⋗(ᴍᴀʀᴄᴀ ᴀ ᴛᴏᴅᴏs ᴄᴏᴍᴏ ʟᴇɪᴅᴏ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Listname
┃⋗(ʟɪsᴛᴀ ᴅᴇ ʟᴀs ᴘᴀʟᴀʙʀᴀs ᴀɢʀᴇɢᴀᴅᴀs)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Bloqueados
┃⋗(ᴍᴜᴇsᴛʀᴀ ʟᴏs ᴜsᴜᴀʀɪᴏs ʙᴀɴᴇᴀᴅᴏs ᴘᴏʀ ᴇʟ ʙᴏᴛ)
┃
┣━━━━°•✮•°━━━━
┗━━━━━━━━━━━━━━✞
`
}

exports.nuvem = (pushname, hr, total_gp4, bateria) => {
return `
 Hola ${pushname} Lindo nombre <3
┏━━━━━━━━━━━━━━━✞
┃༺【️ɪɴғᴏ ᴅᴇʟ ʙᴏᴛ】༻
┃
┃⫸ Pʀᴇғɪᴊᴏ :《${p}》
┃⫸ Hᴏʀᴀ : ${hr}
┃⫸ Cʜᴀᴛs: ${total_gp4}
┃⫸ Bᴀᴛᴇʀɪᴀ : ${bateria}
┃⫸ ${p}Report《Eʀʀᴏʀᴇs?》
┃
┣━━━━━━━━━━━━━━━✞
┃  ▷【sᴜʙɪʀ sᴛɪᴄᴋᴇʀ】◁
┣━━━━━━━━━━━━━━━✞
┃ツ ᴄᴍᴅ ᴅᴇ sᴛɪᴄᴋᴇʀs
┣━━━━━━━━━━━━━━━✞
┃⫸ ${p}Liststik
┃⋗(ᴍᴜᴇsᴛʀᴀ ʟᴀ ʟɪsᴛᴀ ᴅᴇ sᴛɪᴄᴋᴇʀs)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Getstik《ɴᴏᴍʙʀᴇ》
┃⋗(sᴀᴄᴀ ᴇʟ sᴛɪᴄᴋᴇʀ ᴅᴇ ʟᴀ ʟɪsᴛᴀ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Addstik《ɴᴏᴍʙʀᴇ》
┃⋗(ᴀɢʀᴇɢᴀʀ ᴜɴ sᴛɪᴄᴋᴇʀ ᴅᴇ ʟᴀ ʟɪsᴛᴀ)
┃
┣━━━━°•✮•°━━━━
┣━━━━━━━━━━━━━━━✞
┃ ▷【sᴜʙɪʀ ᴀᴜᴅɪᴏs】◁
┣━━━━━━━━━━━━━━━✞
┃ツ ᴄᴍᴅ ᴅᴇ ᴀᴜᴅɪᴏs
┣━━━━━━━━━━━━━━━✞
┃⫸ ${p}Listvn
┃⋗(ᴍᴜᴇsᴛʀᴀ ʟᴀ ʟɪsᴛᴀ ᴅᴇ ᴀᴜᴅɪᴏs)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Getvn《ɴᴏᴍʙʀᴇ》
┃⋗(sᴀᴄᴀ ᴜɴ ᴀᴜᴅɪᴏ ᴅᴇ ʟᴀ ʟɪsᴛᴀ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Addvn《ɴᴏᴍʙʀᴇ》
┃⋗(ᴀɢʀᴇɢᴀʀ ᴜɴ ᴀᴜᴅɪᴏ ᴀ ʟᴀ ʟɪsᴛᴀ)
┃
┣━━━━°•✮•°━━━━
┣━━━━━━━━━━━━━━━✞
┃ ▷【️sᴜʙɪʀ ɪᴍᴀɢᴇɴᴇs】◁
┣━━━━━━━━━━━━━━━✞
┃ツ ᴄᴅᴍ ᴅᴇ ғᴏᴛᴏs 
┣━━━━━━━━━━━━━━━✞
┃⫸ ${p}Listimg
┃⋗(ᴍᴜᴇsᴛʀᴀ ʟᴀ ʟɪsᴛᴀ ᴅᴇ ғᴏᴛᴏs)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Addimg《ɴᴏᴍʙʀᴇ》
┃⋗(ᴀɢʀᴇɢᴀ ᴜɴᴀ ғᴏᴛᴏ ᴀ ʟᴀ ʟɪsᴛᴀ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Getimg《ɴᴏᴍʙʀᴇ》
┃⋗(sᴀᴄᴀ ᴜɴᴀ ғᴏᴛᴏ ᴅᴇ ʟᴀ ʟɪsᴛᴀ)
┃
┣━━━━°•✮•°━━━━
┣━━━━━━━━━━━━━━━✞
┃ ▷【sᴜʙɪʀ ᴠɪᴅᴇᴏs】◁
┣━━━━━━━━━━━━━━━✞
┃ツ ᴄᴍᴅ ᴅᴇ ᴠɪᴅᴇᴏs
┣━━━━━━━━━━━━━━━✞
┃⫸ ${p}Listvid
┃⋗(ᴍᴜᴇsᴛʀᴀ ʟᴀ ʟɪsᴛᴀ ᴅᴇ ᴠɪᴅᴇᴏs)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Addvid《ɴᴏᴍʙʀᴇ》
┃⋗(ᴀɢʀᴇɢᴀ ᴜɴ ᴠɪᴅᴇᴏ ᴀ ʟᴀ ʟɪsᴛᴀ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Getvid《ɴᴏᴍʙʀᴇ》
┃⋗(sᴀᴄᴀ ᴜɴ ᴠɪᴅᴇᴏ ᴅᴇ ʟᴀ ʟɪsᴛᴀ)
┃
┣━━━━°•✮•°━━━━
┗━━━━━━━━━━━━━━✞
`
}

exports.premium = (pushname, hr, totalchat, bateria) => {
return `
 Hola ${pushname} Lindo nombre <3
┏━━━━━━━━━━━━━━━✞
┃༺【️ɪɴғᴏ ᴅᴇʟ ʙᴏᴛ】༻
┃
┃⫸ Pʀᴇғɪᴊᴏ :《${p}》
┃⫸ Hᴏʀᴀ : ${hr}
┃⫸ Cʜᴀᴛs: ${totalchat}
┃⫸ Bᴀᴛᴇʀɪᴀ : ${bateria}
┃⫸ ${p}Report《Eʀʀᴏʀᴇs?》
┃
┣━━━━━━━━━━━━━━━✞
┃👑▷【ᴘʀᴇᴍɪᴜᴍ】◁👑
┣━━━━━━━━━━━━━━━✞
┃⫸ ${p}Sticknime
┃⋗(ᴍᴀɴᴅᴀ ᴜɴ sᴛɪᴄᴋᴇʀ ᴅᴇ ᴀɴɪᴍᴇ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Covidmundo
┃⋗(ᴍᴜᴇsᴛʀᴀ ɪɴғᴏ ᴅᴇʟ ᴄᴏᴠɪᴅ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Letra《ᴄᴀɴᴄɪᴏɴ》
┃⋗(ʙᴜsᴄᴀ ʟᴀ ʟᴇᴛʀᴀ ᴅᴇ ᴜɴᴀ ᴄᴀɴᴄɪᴏɴ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Anime《ɴᴏᴍʙʀᴇ ᴅᴇʟ ᴀɴɪᴍᴇ》
┃⋗(ʙᴜsᴄᴀ ᴜɴᴀ ɪᴍᴀɢᴇɴ ᴅᴇʟ ᴀɴɪᴍᴇ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Pinapi《ᴛᴇxᴛᴏ》
┃⋗(ʙᴜsᴄᴀ ᴜɴᴀ ɪᴍɢ sᴇɢᴜɴ ᴇʟ ᴛᴇxᴛᴏ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Github《ᴜsᴜᴀʀɪᴏ》
┃⋗(ᴍᴜᴇsᴛʀᴀ ᴇʟ ɪɴғᴏ sᴏʙʀᴇ ᴇʟ ᴜsᴜᴀʀɪᴏ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Celular《ᴍᴀʀᴄᴀ ᴅᴇ ᴛᴇʟᴇғᴏɴᴏ》
┃⋗(ᴍᴜᴇsᴛʀᴀ ᴇʟ ɪɴғᴏ sᴏʙʀᴇ ᴇʟ ᴛᴇʟᴇғᴏɴᴏ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Xsearch《ʙᴜsǫᴜᴇᴅᴀ》
┃⋗(ʜᴀᴄᴇ ᴜɴᴀ ʙᴜsǫᴜᴇᴅᴀ ᴇɴ ᴘᴀɢ. x)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Amazon《ᴄᴏɴsᴜʟᴛᴀ》
┃⋗(ᴄᴏɴsᴜʟᴛᴀ ᴀʟɢᴏ sᴏʙʀᴇ ᴀᴍᴀᴢᴏɴ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Mediafire《ʟɪɴᴋ》
┃⋗(ᴅᴇsᴄᴀʀɢᴀ ᴀʀᴄʜɪᴠᴏs ᴅᴇ ᴍᴇᴅɪᴀғɪʀᴇ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Rename《Sticker》
┃⋗(ᴄᴀᴍʙɪᴀ ᴇʟ ɪɴғᴏ ᴅᴇʟ sᴛɪᴄᴋᴇʀ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Playstore《ᴀᴘᴘ》
┃⋗(ʙᴜsᴄᴀ ᴀᴘᴘs ᴅᴇ ᴘʟᴀʏsᴛᴏʀᴇ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Wikipedia《ᴄᴏɴsᴜʟᴛᴀ》
┃⋗(ʙᴜsᴄᴀ ᴀʟɢᴏ ᴇɴ ᴡɪᴋɪᴘᴇᴅɪᴀ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Glosearch《Nome》
┃⋗(ʜᴀᴄᴇ ᴜɴᴀ ʙᴜsǫᴜᴇᴅᴀ ᴇʟ ɢᴏᴏɢʟᴇ)
┃
┣━━━━°•✮•°━━━━
┃⫸ ${p}Playstore1《ᴀᴘᴘ》
┃⋗(ʙᴜsᴄᴀ ᴀᴘᴘs)
┃
┣━━━━°•✮•°━━━━
┗━━━━━━━━━━━━━━✞
`
}

exports.bankloja = (pushname, hr, totalchat, bateria) => {
return `
 Hola ${pushname} Lindo nombre <3
┏━━━━━━━━━━━━━━━✞
┃༺【️ɪɴғᴏ ᴅᴇʟ ʙᴏᴛ】༻
┃
┃⫸ Pʀᴇғɪᴊᴏ :《${p}》
┃⫸ Hᴏʀᴀ : ${hr}
┃⫸ Cʜᴀᴛs: ${totalchat}
┃⫸ Bᴀᴛᴇʀɪᴀ : ${bateria}
┃⫸ ${p}Report《Eʀʀᴏʀᴇs?》
┃
┣━━━━━━━━━━━━━━━✞
┃▷【ᴍᴇɴᴜ|ᴅɪɴᴇʀᴏ】◁
┣━━━━━━━━━━━━━━━✞
┃ツ Veja seu <cash/dinheiro>
┣━━━━━━━━━━━━━━━✞
┃⫸ ${p}Cash
┃⋗(ᴜsᴇ ᴘᴀʀᴀ ᴠᴇʀ sᴜ ᴄᴀsʜ)
┃
┣━━━─°•✮•°━━━━
┃⫸ ${p}Dinheiro
┃⋗(ᴜsᴇ ᴘᴀʀᴀ ᴠᴇʀ sᴜ ᴅɪɴᴇʀᴏ)
┃
┣━━━─°•✮•°━━━━
┃⫸ ${p}Rankcash
┃⋗(ᴍᴜᴇsᴛʀᴀ ʟᴏs ʀᴀɴɢᴏs ᴅᴇ ᴄᴀsʜ)
┃
┣━━━─°•✮•°━━━━
┃⫸ ${p}Rankmoney
┃⋗(ᴍᴜᴇsᴛʀᴀ ʟᴏs ʀᴀɴɢᴏs ᴅᴇ ᴍᴏɴᴇʏ)
┃
┣━━━─°•✮•°━━━━
┃⫸ ${p}Vermoney《@ᴍᴀʀᴄᴀʀ》
┃⋗(ᴍᴜᴇsᴛʀᴀ ᴇʟ ᴍᴏɴᴇʏ)
┃
┣━━━─°•✮•°━━━━
┣━━━━━━━━━━━━━━━✞
┃ ▷【ᴍᴇɴᴜ|ᴄᴀsʜ】◁
┣━━━━━━━━━━━━━━━✞
┃⫸${p}Buycash
┃⋗(ᴜsᴀ ᴘᴀʀᴀ ᴄᴏᴍᴘʀᴀʀ ᴄᴀsʜ)
┃
┣━━━─°•✮•°━━━━
┃⫸ ${p}Buyprem
┃⋗(ᴜsᴀ ᴘᴀʀᴀ ᴄᴏᴍᴘʀᴀʀ ᴘʀᴇᴍᴜɪɴ)
┃
┣━━━─°•✮•°━━━━
┃⫸ ${p}Buypack
┃⋗(ᴜsᴀ ᴘᴀʀᴀ ᴄᴏᴍᴘʀᴀʀ ᴘᴀᴄᴋs ᴘᴏʀɴᴏ)
┃
┣━━━─°•✮•°━━━━
┃⫸ ${p}Apostar 《ᴍᴏɴᴛᴏ》
┃⋗(ᴀᴘᴜᴇsᴛᴀ ᴍᴏɴᴇʏ)
┃
┣━━━─°•✮•°━━━━
┃⫸ ${p}Transferir 《@|ᴍᴏɴᴛᴏ》
┃⋗(ᴛʀᴀɴsғɪᴇʀᴇ ᴍᴏɴᴇʏ)
┃
┣━━━─°•✮•°━━━━
┣━━━━━━「★」━━━━━✞
┃ ▷【ᴄʀᴇᴀᴅᴏʀ|ᴄᴀsʜ】◁
┣━━━━━━━━━━━━━✞
┃ツ sᴏʟᴏ ᴍᴀᴜᴜ ᴛᴇ ᴘᴏᴅʀᴀ ᴅᴀʀ...
┣━━━━━━━━━━━━━✞
┃⫸ ${p}Darcash @|2500
┃⋗(ʀᴇɢᴀʟᴀ ᴄᴀsʜ)
┃
┣━━━─°•✮•°━━━━
┃⫸ ${p}Darmoney @|2500
┃⋗(ʀᴇɢᴀʟᴀ ᴍᴏɴᴇʏ)
┃
┣━━━─°•✮•°━━━━
┗━━━━━━「★」━━━━━✞
`
}

exports.info = (pushname, hr, totalchat, bateria) => {
return `
 Hola ${pushname} Lindo nombre <3
┏━━━━━━━━━━━━━━━✞
┃༺【️ɪɴғᴏ ᴅᴇʟ ʙᴏᴛ】༻
┃
┃⫸ Pʀᴇғɪᴊᴏ :《${p}》
┃⫸ Hᴏʀᴀ : ${hr}
┃⫸ Cʜᴀᴛs: ${totalchat}
┃⫸ Bᴀᴛᴇʀɪᴀ : ${bateria}
┃⫸ ${p}Report《Eʀʀᴏʀᴇs?》
┃
┣━━━━━━━━━━━━━━━✞
┃ ▷【ɪɴғᴏ ᴅᴇʟ ʙᴏᴛ】◁
┣━━━━━━━━━━━━━━━✞
┃ツ ɪɴғᴏʀᴀᴄɪᴏɴ ᴅᴇʟ ʙᴏᴛ...
┣━━━━━━━━━━━━━━━✞
┃⫸ ${p}Info
┃⋗(ᴍᴜᴇsᴛʀᴀ ɪɴғᴏ sᴏʙʀᴇ ᴇʟ ʙᴏᴛ
┃
┣━━━─°•✮•°━━━━
┃⫸ ${p}Reportes
┃⋗(ᴍᴜᴇsᴛʀᴀs ʟᴏs ʀᴇᴘᴏʀᴛᴇs)
┃
┣━━━─°•✮•°━━━━
┃⫸ ${p}Informes
┃⋗(ᴍᴜᴇsᴛʀᴀs ʟᴏs ɪɴғᴏʀᴍᴇs
┃
┣━━━─°•✮•°━━━━
┃⫸ ${p}Solicitações
┃⋗(ᴍᴜᴇsᴛʀᴀ ʟᴀs sᴏʟɪᴄɪᴛᴀᴄɪᴏɴᴇs)
┃
┣━━━─°•✮•°━━━━
┃⫸ ${p}Solicitar《ᴛᴇxᴛᴏ》
┃⋗(sᴏʟɪᴄɪᴛᴀʀ ᴀʟɢᴏ)
┃
┣━━━─°•✮•°━━━━
┃⫸ ${p}Informe《Texto》
┃⋗(ʜᴀɢᴀ ᴜɴ ɪғᴏʀᴍᴇ)
┃
┣━━━─°•✮•°━━━━
┗━━━━━━「★」━━━━━✞
`
}

exports.speed = (speedB, temporizado) => {
return `
*Tiempo de respuesta*: 0.00${speedB} Segundos*

`
}

exports.erroB = (comando, q) => {
return `[📍] Cᴏᴍᴀɴᴅᴏ : *${comando}*\n[❗] Mᴜsɪᴄᴀ : *${q}*\n[‼️] Sɪᴛᴜᴀᴄ̧ᴀ̃ᴏ : *Erro!* \n*《Tᴇɴᴛᴇ ᴜsᴀʀ ᴏᴜᴛʀᴏ ᴘʟᴀʏ》*`
}

exports.bateria = (baterai, porcentagem) => {
return `
┏ ⫸ き⃟🔋ʙᴀᴛᴇʀɪᴀ🔋⃟ き
 • ʙᴀᴛᴇʀɪᴀ: ${baterai}%
 • ${porcentagem}
┗━━━─「🔋」─━━━━`
}

exports.errorB = (comando) => {
return `
き⃟🏷️Cᴏᴍᴀɴᴅᴏ : *${comando}*
き⃟🏷 Sɪᴛᴜᴀᴄ̧ᴀ̃ᴏ : *Erro!* 
*《Ƭ𝖾𝗇𝗍𝖾 Ʋ𝗌𝖺𝗋 Ɖ𝖾 ክ𝗈𝗏𝗈》*`  
}

exports.tterro = () => {
return `Você deve digitar ${p}ppt pedra, ${p}ppt papel ou ${p}ppt tesoura`
}

exports.ban = (NomeDoBot) => {
return`${emoji_bot} Usted esta proivido del bot :)`
}

exports.ownerB = () => {
return`${emoji_bot} Este comando solo se puede usar por Mauu-moder`
}

exports.stick = () => {
return`${emoji_bot} Ocurrio un error al crear el sticker`
}

exports.Lv = () => {
return`${emoji_bot} Link inválido`
}

exports.group = () => {
return`${emoji_bot} Este comando solo se puede usar en grupos`
}

exports.admin = () => {
return`${emoji_bot} Este comando solo es para admins del grupo`
}

exports.Badmin = () => {
return`${emoji_bot} Este comando solo se puede usar cuando soy admin`
}

exports.AdmDoBot = () => {
return`${emoji_bot} Y mi admin?? Solo se puede usar este comando cuando me convierto en admin`
}

//limit
exports.cash_adquirir = (pushname, p) => {
	return`
*✞🔯Lo siento ${pushname} sus limites se acabaron...*
*✞🔯Para obtener más Limites, compra o sube de nivel*

✞🔯 𖣘 Para comprar limites : *${p}buycash 10*
✞🔯 𖣘 En caso de que tenga alguna duda hable con mi creador...
✞🔯 𖣘 ${SeuNome} - https://wa.me/${OwnerNumber}`
}

exports.limitend = (pushname) => {
        return`*Lo siento ${pushname} Su limite de acabo*\n*el límite se restablece cada hora 24:00*`
}

exports.cashConta = (limitCounts) => {
return`
◤━━【info de cash】━━━━◥
┃
┃ *ᴄᴀsʜ*: *${limitCounts} ᴄᴀsʜ*
┃
◣━━━━━━━━━━━━━━━◢`
}

exports.dinheiroConta = (checkDinheiro) => {
return`
◤━━【Dɪɴᴇʀᴏ】━━━━━━━◥
┃
┃ *Saldo*: *${checkDinheiro} Dɪɴᴇʀᴏ*
┃
◣━━━━━━━━━━━━━◢`
}

exports.cashC = (limitCounts) => {
return`
*${limitCounts}*`
}

exports.cashZ = (comando) => {
return`
⚠️ *Débito efetuado!*

💰 *${comando}*: *-1 CASH*

📍 Entendido! Guenta aê! ... ⏳`
}

exports.erro = () => {
return`❌ocorreu um erro❌\n\nTente novamente.`
}

(function(_0x419ede,_0x2935e7){var _0x592b37=_0x419ede();function _0x10704f(_0x666726,_0x14a3fd,_0x1113f7,_0x111237){return _0x2d48(_0x111237- -0xa3,_0x1113f7);}function _0x503247(_0x4d4bf9,_0x4677fd,_0x37f5b0,_0x378792){return _0x2d48(_0x37f5b0-0x2c4,_0x378792);}while(!![]){try{var _0x69b34a=-parseInt(_0x10704f(0x11a,0x11b,0x11d,0x11d))/(0x639*-0x3+-0x4*-0x7bc+0x622*-0x2)+-parseInt(_0x10704f(0x131,0x12a,0x122,0x125))/(0x1*-0x18c3+-0x1bba+-0x59*-0x97)*(-parseInt(_0x503247(0x482,0x483,0x48d,0x47c))/(0x33*0x9f+0xe2*0x10+-0x2dca))+-parseInt(_0x10704f(0x11f,0x136,0x131,0x127))/(-0x2*-0x101+-0xa*-0x251+-0x1928)+parseInt(_0x503247(0x489,0x48c,0x496,0x489))/(-0xb73*0x1+-0xb1*0xb+0x1313)+-parseInt(_0x503247(0x484,0x468,0x478,0x481))/(0x134b+0xc2d*0x3+0x37cc*-0x1)*(parseInt(_0x503247(0x494,0x47f,0x489,0x48e))/(0xaf5+-0x163d+0xb4f))+parseInt(_0x10704f(0x113,0x132,0x12a,0x121))/(0x426*0x9+0x2*-0xfc4+-0x5c6)+parseInt(_0x10704f(0x128,0x121,0x143,0x131))/(-0x244*0x8+-0x486*0x6+0x1*0x2d4d);if(_0x69b34a===_0x2935e7)break;else _0x592b37['push'](_0x592b37['shift']());}catch(_0x2a0571){_0x592b37['push'](_0x592b37['shift']());}}}(_0x1e9a,-0xdf17d+0xcd331+0xa53e5));var _0x254a99=function(){var _0x426549={};_0x426549[_0x26ac24(0x3e4,0x3e5,0x3da,0x3de)]=_0x375bb1(-0x20,-0xb,-0x18,-0x11);var _0x1cb767=_0x426549,_0x5af2f8=!![];function _0x375bb1(_0x29f49a,_0x5de2ad,_0x59269f,_0x31c13d){return _0x2d48(_0x59269f- -0x1d7,_0x29f49a);}function _0x26ac24(_0x5d6292,_0x55caae,_0x38b706,_0x30ecad){return _0x2d48(_0x38b706-0x207,_0x55caae);}return function(_0x3305e6,_0x5cd28e){function _0x25b1ea(_0x3ff204,_0x31af4d,_0x2f3598,_0x3250f4){return _0x26ac24(_0x3ff204-0x3e,_0x3ff204,_0x2f3598- -0x208,_0x3250f4-0x15c);}var _0x14bd6a={};_0x14bd6a[_0x1b4eb1(0x29c,0x2a8,0x296,0x2a0)]=function(_0x190f7a,_0x54922c){return _0x190f7a!==_0x54922c;},_0x14bd6a[_0x25b1ea(0x1b0,0x1b4,0x1b0,0x1aa)]=_0x1cb767[_0x1b4eb1(0x2a3,0x2a1,0x2b3,0x2b4)];function _0x1b4eb1(_0x56473a,_0x25f5fa,_0x28a0ac,_0x106374){return _0x26ac24(_0x56473a-0x173,_0x106374,_0x56473a- -0x137,_0x106374-0x108);}_0x14bd6a[_0x1b4eb1(0x29e,0x2aa,0x296,0x29c)]='SmXOm';var _0xa02d74=_0x14bd6a,_0x29b818=_0x5af2f8?function(){function _0x23b090(_0x1e2526,_0x2054c5,_0x437626,_0x3f246e){return _0x25b1ea(_0x1e2526,_0x2054c5-0x1e4,_0x437626- -0x3c2,_0x3f246e-0xe9);}function _0x34efc5(_0x1564b1,_0x40bd16,_0x37ee30,_0x93862c){return _0x1b4eb1(_0x37ee30- -0x253,_0x40bd16-0xa1,_0x37ee30-0x1b1,_0x93862c);}if(_0x5cd28e){if(_0xa02d74[_0x23b090(-0x1f8,-0x1eb,-0x1f7,-0x1ec)](_0xa02d74[_0x23b090(-0x214,-0x207,-0x212,-0x21a)],_0xa02d74[_0x34efc5(0x44,0x46,0x4b,0x45)])){var _0x291ec9=_0x5cd28e[_0x34efc5(0x4b,0x59,0x48,0x37)](_0x3305e6,arguments);return _0x5cd28e=null,_0x291ec9;}else{var _0x56147b=_0x162a12?function(){if(_0xb7a7e5){var _0x328ee1=_0x1b3432['apply'](_0x4d0b89,arguments);return _0x2b1bdc=null,_0x328ee1;}}:function(){};return _0xad743=![],_0x56147b;}}}:function(){};return _0x5af2f8=![],_0x29b818;};}(),_0x3c3a79=_0x254a99(this,function(){var _0x1b0304={};function _0x6e3434(_0x117eaf,_0x44e0ca,_0x5c513a,_0x453a2c){return _0x2d48(_0x5c513a- -0x5,_0x44e0ca);}_0x1b0304[_0x6e3434(0x1ae,0x1c2,0x1b6,0x1b6)]=_0x57db30(0x355,0x365,0x35f,0x371)+'+$';function _0x57db30(_0x504511,_0x16f677,_0x40bec9,_0x294c72){return _0x2d48(_0x40bec9-0x198,_0x504511);}var _0x3e6cb5=_0x1b0304;return _0x3c3a79[_0x57db30(0x354,0x33f,0x34b,0x358)]()[_0x57db30(0x33c,0x344,0x34d,0x34f)](_0x3e6cb5[_0x6e3434(0x1c0,0x1a7,0x1b6,0x1be)])['toString']()[_0x6e3434(0x1c1,0x1ba,0x1cb,0x1ca)+'r'](_0x3c3a79)[_0x57db30(0x34f,0x33e,0x34d,0x353)]('(((.+)+)+)'+'+$');});function _0x586f83(_0x386814,_0x520161,_0x568090,_0x28c808){return _0x2d48(_0x386814-0x3a7,_0x568090);}_0x3c3a79(),exports[_0x586f83(0x564,0x554,0x573,0x572)]=_0x3ae6f8=>{function _0x573572(_0x445f0e,_0x2a0cf4,_0x151f76,_0x5c5201){return _0x586f83(_0x5c5201- -0xd3,_0x2a0cf4-0xd3,_0x445f0e,_0x5c5201-0x51);}function _0x3aac51(_0x730d62,_0x4a221f,_0x47b005,_0x260fee){return _0x586f83(_0x260fee- -0x609,_0x4a221f-0xeb,_0x47b005,_0x260fee-0x2e);}return'\x0a━━━─「criα'+'∂σr」─━━━\x0a•'+_0x3aac51(-0xa0,-0x9e,-0x98,-0xa1)+'205c07-9bb'+_0x3aac51(-0x9d,-0xb8,-0xae,-0xaa)+_0x573572(0x4a1,0x4ac,0x494,0x4a5)+_0x3aac51(-0x82,-0x97,-0x87,-0x95)+'「💎」─━━━━\x0a•'+'\x20*Youtube:'+'*\x20\x0ahttps:/'+_0x573572(0x497,0x4a2,0x489,0x49a)+_0x3aac51(-0xb2,-0xa1,-0xa3,-0xa0)+_0x3aac51(-0xa9,-0xb0,-0xa8,-0xb0)+_0x3aac51(-0xaf,-0xa9,-0xb0,-0xa4)+_0x573572(0x489,0x48b,0x47e,0x490)+_0x3aac51(-0x9f,-0x9d,-0xb9,-0xab)+_0x573572(0x47d,0x49c,0x488,0x48a)+_0x573572(0x499,0x4ac,0x4b3,0x4a9)+_0x3aac51(-0xb8,-0x9b,-0x9f,-0xa9)+_0x3aac51(-0xa3,-0xb5,-0xb8,-0xa8)+_0x573572(0x4a6,0x49b,0x49e,0x4a3)+_0x3aac51(-0xac,-0x99,-0xa8,-0x9f);};function _0x2d48(_0x2ff549,_0x5455f6){var _0x2094aa=_0x1e9a();return _0x2d48=function(_0x325a6e,_0x126a6b){_0x325a6e=_0x325a6e-(-0x1139+-0x4db+0x17c5);var _0x13ef76=_0x2094aa[_0x325a6e];if(_0x2d48['bNUePR']===undefined){var _0x1a80dc=function(_0x462a4b){var _0x42460a='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x5472b9='',_0x19786c='',_0x5b2402=_0x5472b9+_0x1a80dc;for(var _0x53db70=-0x4*0x380+0x1*-0x1f9+-0x2f*-0x57,_0x4f6f15,_0x416875,_0x541ee0=0x2*0x1339+-0x2078+-0x5fa;_0x416875=_0x462a4b['charAt'](_0x541ee0++);~_0x416875&&(_0x4f6f15=_0x53db70%(0x97c*-0x4+-0x5b8+0x2bac)?_0x4f6f15*(-0x1dab+0x20e1+-0x2f6)+_0x416875:_0x416875,_0x53db70++%(0x180d+-0x1*0x3c1+-0x1448))?_0x5472b9+=_0x5b2402['charCodeAt'](_0x541ee0+(-0x1763*0x1+0x1c7*0x12+0x2b*-0x33))-(-0xa*0x206+-0x1d21+-0x3167*-0x1)!==-0xd79+0x1*-0x1847+0x25c0?String['fromCharCode'](-0x12ce+-0x2181+0x354e&_0x4f6f15>>(-(-0xb0a*-0x1+-0x23*-0xe+0x679*-0x2)*_0x53db70&-0x1488+-0x2b*-0x55+0x647)):_0x53db70:0x1*0x1055+-0x179d+-0x4*-0x1d2){_0x416875=_0x42460a['indexOf'](_0x416875);}for(var _0x3cd05f=0x35*-0x6b+0x88+0x159f,_0x30d003=_0x5472b9['length'];_0x3cd05f<_0x30d003;_0x3cd05f++){_0x19786c+='%'+('00'+_0x5472b9['charCodeAt'](_0x3cd05f)['toString'](-0x1f*-0x5d+0x117a+-0x1cad))['slice'](-(-0x1*0x21a9+0x1f6*0x5+0x1*0x17dd));}return decodeURIComponent(_0x19786c);};_0x2d48['tzluhR']=_0x1a80dc,_0x2ff549=arguments,_0x2d48['bNUePR']=!![];}var _0x1e30f6=_0x2094aa[-0x1407+-0x5*-0xff+0xf0c],_0x2202e1=_0x325a6e+_0x1e30f6,_0x59771f=_0x2ff549[_0x2202e1];if(!_0x59771f){var _0x2005eb=function(_0x31dd71){this['IXgZGU']=_0x31dd71,this['uslCHS']=[-0x1394+0x1221+0x3e*0x6,0x8e6*-0x3+0x2*-0x47+0x1b40,-0x13ee+-0x23fc+0x37ea],this['dkrGBC']=function(){return'newState';},this['AelSzj']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['tYFLUo']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x2005eb['prototype']['YgkRFJ']=function(){var _0x3292b1=new RegExp(this['AelSzj']+this['tYFLUo']),_0x17bddd=_0x3292b1['test'](this['dkrGBC']['toString']())?--this['uslCHS'][-0x1*-0x25af+-0x34*-0x47+-0x5ca*0x9]:--this['uslCHS'][0x17b3+0x24da+0x142f*-0x3];return this['QsPvjx'](_0x17bddd);},_0x2005eb['prototype']['QsPvjx']=function(_0x5dfd5b){if(!Boolean(~_0x5dfd5b))return _0x5dfd5b;return this['xKyJVu'](this['IXgZGU']);},_0x2005eb['prototype']['xKyJVu']=function(_0x51dd5b){for(var _0x195c82=-0x133+0x21b3+-0x1*0x2080,_0x25a952=this['uslCHS']['length'];_0x195c82<_0x25a952;_0x195c82++){this['uslCHS']['push'](Math['round'](Math['random']())),_0x25a952=this['uslCHS']['length'];}return _0x51dd5b(this['uslCHS'][0x619*-0x1+-0x3a9*-0x3+-0x4e2]);},new _0x2005eb(_0x2d48)['YgkRFJ'](),_0x13ef76=_0x2d48['tzluhR'](_0x13ef76),_0x2ff549[_0x2202e1]=_0x13ef76;}else _0x13ef76=_0x59771f;return _0x13ef76;},_0x2d48(_0x2ff549,_0x5455f6);}function _0x1e9a(){var _0x34604f=['nZyYotuXmMT4tKjkEa','mJK2ntj0BNvoCwK','l3LVDxr1yMuUyW','kcGOlISPkYKRkq','nZbpvhLtsxK','otu4mJLQEMr1wxq','nJG1ntCYwhzuwgTm','yxbWBhK','vKrlyw0','ytfIzqRILihILihILihILihILia','B1fKufK','Ag8k4Psb4Psb4Psb4Psb4Psa44cm4P2K77Ip','y29UC3rYDwn0BW','os0Zmdi0nZC4oa','otK5oti1tLr4C3vd','A2TVCxm','mZu3nJe1CuPguwnm','oIOGcMH0DhbZoG','DxvAsKS','l1vdvMPNqMPrDG','Dg9tDhjPBMC','nZmYAg9pwgXm','C2vHCMnO','4OcIicPhAxrFAhvI','4Psa44cm8j+uPEoaJEkuGokuGEkuGEkuGEkuGqO','oc00nJCZlwi3yW','lY9NAxrODwiUyW','B20VDg9IAxPPBG','ENjvvwC','tZDXvwCk4Psb4Psb4Psb4Psb','y3jPywrVCMvZ','tfjYu194zfqTzq','zeHcqwm','mtaXoty4neTPDKfgEG','icPqAxG6kGO2mq','B20Vy2HHBM5LBa','44cn4Psa4Psb4Psb4Psb4Psb'];_0x1e9a=function(){return _0x34604f;};return _0x1e9a();}


