//your code here

function separateNames(fullName) {
	const names = fullName.split(?:an|the|a);
		return names;
}
const input = 'sandy is a G';

const op = separateNames(input);

console.log(op);