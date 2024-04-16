(function(Scratch) {
	"use strict"
	
	if (!Scratch.extensions.unsandboxed) {
		throw new Error("Utilities extension must run unsandboxed for use")
	}
	
	class Extension {
		getInfo() {
			return {
				id: "largeutilities",
				name: "Utilities",
				color1: "#220088",
				color2: "#150055",
				color3: "#080022",
				blocks: [
					{
						opcode: "label",
						blockType: Scratch.BlockType.LABEL,
						text: "Browser-like Blocks"
					},
					{
						opcode: "label",
						blockType: Scratch.BlockType.LABEL,
						text: "They make your project feel like"
					},
					{                   
						opcode: "label",
						blockType: Scratch.BlockType.LABEL,
						text: "a website."
					},
					{
						opcode: "alert",
						blockType: Scratch.BlockType.COMMAND,
						text: "alert [A]",
						arguments: {
							A: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "this text"
							}
						}
					},
					{
						opcode: "prompt",
						blockType: Scratch.BlockType.REPORTER,
						text: "prompt [A]",
						arguments: {
							A: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "Type in anything!"
							}
						}
					},
					{
						opcode: "prompt_default",
						blockType: Scratch.BlockType.REPORTER,
						text: "prompt [A] default input [B]",
						arguments: {
							A: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "Type in anything!"
							},
							B: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "anything"
							}
						}
					},
					{
						opcode: "confirm",
						blockType: Scratch.BlockType.BOOLEAN,
						text: "confirm [A]",
						arguments: {
							A: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "Click on OK or Cancel!"
							}
						}
					},
					{
						opcode: "settitle",
						blockType: Scratch.BlockType.COMMAND,
						text: "set title to [A]",
						arguments: {
							A: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "My Project"
							}
						}
					},
					{
						opcode: "label",
						blockType: Scratch.BlockType.LABEL,
						text: "Console blocks"
					},
					{
						opcode: "log",
						blockType: Scratch.BlockType.COMMAND,
						text: "log [A] into console",
						arguments: {
							A: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "Hello, DevTools!"
							}
						}
					},
					{
						opcode: "warn",
						blockType: Scratch.BlockType.COMMAND,
						text: "warn [A] into console",
						arguments: {
							A: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "Warning! This project may break if you mess around with Scratch's internals!"
							}
						}
					},
					{
						opcode: "fake_error",
						blockType: Scratch.BlockType.COMMAND,
						text: "error [A] into console",
						arguments: {
							A: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "Uh oh, an error occurred!"
							}
						}
					},
					{
						opcode: "label",
						blockType: Scratch.BlockType.LABEL,
						text: "Browser Text To Speech"
					},
					{
						opcode: "speak_text",
						blockType: Scratch.BlockType.COMMAND,
						text: "speak [A]",
						arguments: {
							A: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "Hello! How are you doing on this fine day?"
							}
						}
					},
					{
						opcode: "speak_text_voice",
						blockType: Scratch.BlockType.COMMAND,
						text: "speak [A] using voice [B]",
						arguments: {
							A: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "Hello! How are you doing on this fine day?"
							},
							B: {
								type: Scratch.ArgumentType.STRING
							}
						}
					},
					{
						opcode: "speak_text_await",
						blockType: Scratch.BlockType.COMMAND,
						text: "speak [A] and wait",
						arguments: {
							A: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "Hello! How are you doing on this fine day?"
							}
						}
					},
					{
						opcode: "speak_text_voice_await",
						blockType: Scratch.BlockType.COMMAND,
						text: "speak [A] using voice [B] and wait",
						arguments: {
							A: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "Hello! How are you doing on this fine day?"
							},
							B: {
								type: Scratch.ArgumentType.STRING
							}
						}
					},
					{
						opcode: "supports_speech",
						blockType: Scratch.BlockType.BOOLEAN,
						text: "browser supports text to speech?"
					},
					{
						opcode: "get_voices",
						blockType: Scratch.BlockType.REPORTER,
						text: "get all browser voices"
					},
					{
						opcode: "label",
						blockType: Scratch.BlockType.LABEL,
						text: "Math"
					},
					{
						opcode: "find_lowest",
						blockType: Scratch.BlockType.REPORTER,
						text: "find min number through [A]",
						arguments: {
							A: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "4,6,2,3,9,8,1,7,0"
							}
						}
					},
					{
						opcode: "find_highest",
						blockType: Scratch.BlockType.REPORTER,
						text: "find max number through [A]",
						arguments: {
							A: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "4,6,2,3,9,8,1,7,0"
							}
						}
					}
				],
				menus: {}
			}
		}
		
		alert(args) {
			alert(args.A)
		}

		prompt(args) {
			return prompt(args.A)
		}

		prompt_default(args) {
			return prompt(args.A, args.B)
		}

		confirm(args) {
			return confirm(args.A)
		}
		settitle(args) {
			const title = document.querySelector("title") || document.createElement("title")
			if (title.parentNode !== document.head) {
				document.head.appendChild(title)
			}
			title.textContent = Scratch.Cast.toString(args.A)
		}

		log(args) {
			console.log(args.A)
		}

		warn(args) {
			console.warn(args.A)
		}

		fake_error(args) {
			console.error(args.A)
		}

		speak_text(args) {
			if ('speechSynthesis' in window) {
				const utterance = new SpeechSynthesisUtterance(Scratch.Cast.toString(args.A));
				window.speechSynthesis.speak(utterance)
			}
		}

		speak_text_voice(args) {
			if ('speechSynthesis' in window) {
				const utterance = new SpeechSynthesisUtterance(Scratch.Cast.toString(args.A));
				utterance.voice = window.speechSynthesis.getVoices().find(voice => voice.name == args.B)
				window.speechSynthesis.speak(utterance)
			}
		}

		async speak_text_await(args) {
			return new Promise(function(resolve) {
				if ('speechSynthesis' in window) {
					const utterance = new SpeechSynthesisUtterance(Scratch.Cast.toString(args.A))
					window.speechSynthesis.speak(utterance)
					utterance.onend = function() {
						resolve()
					}
				}
			})
		}

		async speak_text_voice_await(args) {
			return new Promise(function(resolve) {
				if ('speechSynthesis' in window) {
					const utterance = new SpeechSynthesisUtterance(Scratch.Cast.toString(args.A));
					utterance.voice = window.speechSynthesis.getVoices().find(voice => voice.name == args.B)
					window.speechSynthesis.speak(utterance)
					utterance.onend = function() {
						resolve()
					}
				}
			})
		}

		supports_speech(args) {
			return 'speechSynthesis' in window
		}

		get_voices() {
			return window.speechSynthesis.getVoices().map(item => item.name).join("|");
		}

		find_lowest(args) {
			const numbers = Scratch.Cast.toString(args.A).split(",").map(item => Number(item))
			return Math.min(...numbers)
		}
		
		find_highest(args) {
			const numbers = Scratch.Cast.toString(args.A).split(",").map(item => Number(item))
			return Math.max(...numbers)
		}
	}
	
	Scratch.extensions.register(new Extension())
})(Scratch)
