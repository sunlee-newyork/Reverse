class ReverseString {
	constructor() {
		this.counterRecursive = 0
		this.counterIterative = 0
	}

	reverseRecursive(string, reversed, i) {
		if (reversed.length === string.length) return reversed

		this.counterRecursive++

		reversed += string.charAt(i)

		return this.reverseRecursive(string, reversed, --i)
	}

	reverseIterative(string) {
		let reversed = ""

		for (let i = string.length - 1; i >= 0; i--) {
			reversed += string.charAt(i)

			this.counterIterative++
		}

		return reversed
	}

	run(string) {
		const reversedRecursive = this.reverseRecursive(string, "", string.length - 1)
		const reversedIterative = this.reverseIterative(string)

		console.log("Recursive iterations: ", this.counterRecursive)
		console.log("Iterative iterations: ", this.counterIterative)
		
		this.counterRecursive = 0
		this.counterIterative = 0

		return {recursive: reversedRecursive, iterative: reversedIterative}
	}
}

/*****************/
/* SAMPLE RUNNER */
/*****************/

const rs = new ReverseString()
rs.run("Hello")