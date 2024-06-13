const sumAll = function(nb1, nb2) {
	if ((nb1 < 0 || nb2 < 0) ||  (typeof nb1 != 'number' || typeof nb2 != 'number')) {
		return 'ERROR';
	}

	let max = 0;
	let min = 0;

	if (nb1 > nb2) {
		max = nb1;
		min = nb2;
	} else {
		max = nb2;
		min = nb1;
	}

	let res = 0;

	for (i = min; i <= max; i++) {
		res += i;
	}

	return res;
};

// Do not edit below this line
module.exports = sumAll;
