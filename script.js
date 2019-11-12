const move = document.querySelector(".container");
const palette = document.querySelector(".drawing-tools");
const mimic = document.querySelector(".face-mimic");

const PALETTE_SIZE = 130;

function movePalette(e) {
	const { offsetWidth: width, offsetHeight: height } = mimic;
	let { pageX: x, pageY: y } = e;

	const xMove = Math.round(x / width);
	const yMove = Math.round(y / height);

	palette.style.transform = `translate(${x - PALETTE_SIZE / 2}px, ${y -
		PALETTE_SIZE / 2}px)`;
	mimic.style.transform = `translate(${xMove - 15}px, ${yMove - 10}px)`;
}

move.addEventListener("mousemove", movePalette);