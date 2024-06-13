const removeFromArray = function(array, ...elems) {
	// nums.forEach(num => {
	// 	for (let i = 0; i < array.length; i++) {
	// 		console.log(array[i]);
	// 		if (num === array[i]) {
	// 			array.splice(i, 1);
	// 			i--;
	// 		};
	// 	};
	// });

	// return array;

	return array.filter(elem => !elems.includes(elem));

};

// Do not edit below this line
module.exports = removeFromArray;
