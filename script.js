//your code here

function separateNames(fullName) {
	const names = fullName.split(/\s+\b(?:a|an|the)\b\s+/i);
		return names;
}
const input = 'sandy is a G';

const op = separateNames(input);

console.log(op);