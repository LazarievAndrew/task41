// Реализовать polifill Promise.all

function promiseAllPolifill(promises) {
	let promiseAll = new Promise((resolve, reject) => {
		const resultArray = [];
		let okay = function () { if (!(--promises.length)) resolve(resultArray) }
		promises.forEach((item, index) => {
			item.then(result => { resultArray[index] = result }, reject).then(okay)
		});
	});
	return promiseAll;
}
