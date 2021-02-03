let day = document.querySelector('#day');
let line = document.querySelectorAll('.line');
let lineTime = [];
let linePlace = [];
let lineSubject = [];
let linePrepod = [];
let lineWeek = [];
const studentName = document.querySelector('#student').textContent;

function lineGroup() {
	for (let el of line) {
		lineTime.push(el.children[0].children[0])
	}
	for (let el of line) {
		linePlace.push(el.children[0].children[1])
	}
	for (let el of line) {
		lineSubject.push(el.children[1].children[0])
	}
	for (let el of line) {
		linePrepod.push(el.children[1].children[2])
	}
	for (let el of line) {
		lineWeek.push(el.children[1].children[1])
	}
}
lineGroup();
