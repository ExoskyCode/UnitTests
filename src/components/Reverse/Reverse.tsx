export const reverse = (arr: string[]) => {
	return arr
		.map((str) => {
			return str.split('').reverse().join('');
		})
		.reverse();
};
