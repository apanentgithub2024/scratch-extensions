(function(Scratch) {
	"use strict"
	
	if (!Scratch.extensions.unsandboxed) {
		throw new Error("Alert extension must run unsandboxed for use")
	}
	
	class Extension {
		getInfo() {
			return {
				id: "alert",
				name: "Alert",
				color1: "#220088",
				color2: "#150055",
				color3: "#080022",
				blocks: [
					{
						opcode: "label",
						type: Scratch.BlockType.LABEL,
						text: "Browser-like Blocks"
					},
					{
						opcode: "label",
						type: Scratch.BlockType.LABEL,
						text: "They make your project feel like"
					},
					{
						opcode: "label",
						type: Scratch.BlockType.LABEL,
						text: "a website."
					},
					{
						opcode: "alert",
						type: Scratch.BlockType.COMMAND,
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
						type: Scratch.BlockType.REPORTER,
						text: "prompt [A]",
						arguments: {
							A: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "Type in anything!"
							}
						}
					},
					{
						opcode: "confirm",
						type: Scratch.BlockType.BOOLEAN,
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
						type: Scratch.BlockType.COMMAND,
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
						type: Scratch.BlockType.LABEL,
						text: "Console blocks"
					},
					{
						opcode: "log",
						type: Scratch.BlockType.COMMAND,
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
						type: Scratch.BlockType.COMMAND,
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
						type: Scratch.BlockType.COMMAND,
						text: "error [A] into console",
						arguments: {
							A: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "Uh oh, an error occurred!"
							}
						}
					}
				]
			}
		}
		
		alert(args) {
			alert(args.A)
		}

		prompt(args) {
			return prompt(args.A)
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
	}
	
	Scratch.extensions.register(new Extension())
})(Scratch)
