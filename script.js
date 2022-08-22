function calcElapsed(start, end, elapsedDisplay) {
	// start and end are strings of format 'HH:MM'
	const [startH, startM] = start.split(':');
	const [endH, endM] = end.split(':');
	const totalMinutes = (endH - startH) * 60 + (endM - startM);
	const resultH = String(Math.floor(totalMinutes / 60)).padStart(2, '0');
	const resultM = String(totalMinutes % 60).padStart(2, '0');
	elapsedDisplay.innerHTML = `Elapsed: ${resultH}:${resultM}`;
	return totalMinutes;
}

function calcTotal(firstTotal, secondTotal) {
	const total = firstTotal + secondTotal;
	const resultH = String(Math.floor(total / 60)).padStart(2, '0');
	const resultM = String(total % 60).padStart(2, '0');
	const totalDisplay = document.querySelector('#total');
	totalDisplay.innerHTML = `Total: ${resultH}:${resultM}`;
}

function recalculate() {
	const firstStart = document.querySelector('#first-start');
	const firstEnd = document.querySelector('#first-end');
	const firstElapsed = document.querySelector('#first-elapsed');
	
	const secondStart = document.querySelector('#second-start');
	const secondEnd = document.querySelector('#second-end');
	const secondElapsed = document.querySelector('#second-elapsed');

	const firstTotal = calcElapsed(firstStart.value, firstEnd.value, firstElapsed);
	const secondTotal = calcElapsed(secondStart.value, secondEnd.value, secondElapsed);
	calcTotal(firstTotal, secondTotal);
}

const firstStart = document.querySelector('#first-start');
const firstEnd = document.querySelector('#first-end');

const secondStart = document.querySelector('#second-start');
const secondEnd = document.querySelector('#second-end');

firstStart.addEventListener('change', recalculate);
firstEnd.addEventListener('change', recalculate);

secondStart.addEventListener('change', recalculate);
secondEnd.addEventListener('change', recalculate);
recalculate();