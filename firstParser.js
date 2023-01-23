const mail = '';
let arrayOfAllArrays = [[mail]];
let arrayOfAllMails = [];
let combinations = 0;
const count = mail.length - 1;
function calculateMaxComb(x) {
	let maxComb = 0;
	function fact(x) {
		if (x <= 1) return 1;
		else return x * fact(x - 1);
	};
	function calculateComb(n, k) {
		return fact(n) / (fact(k) * fact(n - k));
	};
	for (let i = 1; i <= x; i++) {
		maxComb += calculateComb(x, i);
	}
	combinations = maxComb + 1;
};
function createAllVariants(i) {
	function computeVariants() {
		let countArray = arrayOfAllArrays[i].length;
		let tempArray = [];
		let mainArray = [...arrayOfAllArrays[i]];
		for (let v = 0; v < countArray; v++) {
			let timeMail = [...mainArray[v]];
			for (let j = 1; j < mainArray[v].length; j++) {
				if (timeMail[j - 1] === '.' || timeMail[j] === '.') continue;
				let tempMail = [...timeMail];
				tempMail.splice(j, 0, '.');
				let newMail = tempMail.join('');
				if (tempArray.indexOf(newMail) < 0) { tempArray.push(newMail) };
			};
		};
		arrayOfAllArrays.push(tempArray);
	};
	computeVariants();
	function wonderfulEnd() {
		arrayOfAllMails = arrayOfAllArrays.flat();
		arrayOfAllMails = arrayOfAllMails.map(mailPart => mailPart += '@gmail.com');
		arrayOfAllMails.forEach(mailEnd => document.write(mailEnd + `\r\n`));
	};
	if (arrayOfAllArrays.length <= count) {
		i++;
		createAllVariants(i);
	} else { wonderfulEnd() }
};
createAllVariants(0);
calculateMaxComb(count);