class ReverseArray {
	constructor() {
		this.counterImmutable = 0
		this.counterMutable = 0
	}

	reverseImmutable(array, newArray, i) {
		if (newArray.length === array.length) return newArray

		this.counterImmutable++

		newArray.push(array[i])

		return this.reverseImmutable(array, newArray, --i)
	}

	reverseMutable(array) {
		if (!array.length) return

		let item = array.pop()

		this.reverseMutable(array)
		this._pushToHead(array, item)

		this.counterMutable++
	}

	_pushToHead(array, item) {
		if (!array.length) return array.push(item)

		let temp = array.pop()
		this._pushToHead(array, item)
		array.push(temp)

		this.counterMutable++
	}

	run(array) {
		const newArray = this.reverseImmutable(array, [], array.length - 1)
		this.reverseMutable(array)

		console.log("Immutable iterations: ", this.counterImmutable)
		console.log("Mutable iterations: ", this.counterMutable)
		this.counterMutable = 0
		this.counterImmutable = 0

		return {immutable: newArray, mutable: array}
	}
}

/*****************/
/* SAMPLE RUNNER */
/*****************/

const rs = new ReverseArray()
rs.run([10,9,8,7,6,5,4,3,2,1])