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
				color1: "#00FFFF",
				color2: "#008888",
				color3: "#002222",
				blocks: [
					{
						opcode: "alert",
						type: Scratch.BlockType.COMMAND,
						blockText: "alert [A]",
						arguments: {
							A: {
								argumentType: Scratch.ArgumentType.STRING,
								defaultValue: "this text"
							}
						}
					}
				]
			}
		}

		alert(args) {
			alert(args.A)
		}
	}

	Scratch.extensions.register(new Extension())
})(Scratch)
