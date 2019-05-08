const emojiString = `
😀 😁 😂 🤣 😃 😄 😅 😆 😉 😊 😋 😎 😍 😘 😗 😙 😚 🙂 🤗 🤩 🤔 🤨
🙃 🤑 🤪 😇 🤠 🤓 😈 👿 🤡 👹 👺 💀 👻 👽 👾 🤖 💩 🙊
💋 💘 💝 💖 💗 💓 💞 💕 💌 ❣️ 💔 ❤️ 🧡 💛 💚 💙 💜 💍 💎 💐
💩 🍇 🍈 🍉 🍊 🍋 🍌 🍍 🍎 🍏 🍐 🍑 🍒 🍓 🥝 🍅 🥥 🥑 🍆 🥔 🥕 🌽 🌶️
🥒 🥦 🥜 🌰 🍞 🥐 🥖 🥨 🥞 🧀 🍖 🍗 🥩 🥓 🍔 🍟 🍕 🌭 🥪 🌮 🌯 🥙 🥚
🍳 🥘 🍲 🥣 🥗 🍿 🥫 🍱 🍘 🍙 🍚 🍛 🍜 🍝 🍠 🍢 🍣 🍤 🍥 🍡 🥟 🥠 🥡
🍦 🍧 🍨 🍩 🍪 🎂 🍰 🥧 🍫 🍬 🍭 🍮 🍯 🍼 🥛 🍵 🍶 🍾 🍷 🍸 🍹 🍺 🍻
🥂 🥃 🥤 🥢 🍽️ 🍴 🥄 🏺 🎖️ 🏆 🏅 🥇 🥈 🥉
🌸 💮 🏵️ 🌹 🥀 🌺 🌻 🌼 🌷 🌱 🍃 🍄 ☀️ 🌝 🌞 🌟 🌀 🌈 ☔ ❄️ ☃️ ⛄ 
💥 🎉 🎊 🎏 🎐 🎀 🎁
`

const emojis = emojiString
	.replace(/\r?\n|\r/g, ' ')
	.split(' ')
	.filter((char) => char !== ' ')

export const funEmoji = (): string => {
	const idx = Math.floor(Math.random() * emojis.length)
	return emojis[idx]
}
