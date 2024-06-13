const palindromes= function (str) {
	const rgx = /[a-zA-Z0-9]/;


	const cleanedString = str
		.toLowerCase()
		.split('')
		.filter((char) => rgx.test(char))
		.join('');
	

	const reversedString = cleanedString
		.split('')
		.reverse()
		.join('');

	return cleanedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
