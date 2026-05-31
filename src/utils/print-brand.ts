import boxen from "boxen";

function printBrand() {
	const logo = `
  > REACT FORGED 
  Fast. Opinionated. Production-ready.
`;

	console.log(
		boxen(logo, {
			padding: 1,
			margin: 1,
			borderStyle: "round",
			borderColor: "magenta",
		}),
	);
}

export default printBrand;
