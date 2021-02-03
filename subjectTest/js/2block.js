
function scriptPrepods(lineNumb, count) {
	if (count === 1) {
		lineSubject[lineNumb].innerHTML = subjects.OOS;
		linePrepod[lineNumb].innerHTML = prepods.OOS;
	} else if (count === 2) {
		lineSubject[lineNumb].innerHTML = subjects.OP;
		linePrepod[lineNumb].innerHTML = prepods.OP;
	} else if (count === 3) {
		lineSubject[lineNumb].innerHTML = subjects.English;
		linePrepod[lineNumb].innerHTML = prepods.English;
	} else if (count === 4) {
		lineSubject[lineNumb].innerHTML = subjects.Russian;
		linePrepod[lineNumb].innerHTML = prepods.Russian;
	} else if (count === 5) {
		lineSubject[lineNumb].innerHTML = subjects.History;
		linePrepod[lineNumb].innerHTML = prepods.History;
	} else if (count === 6) {
		lineSubject[lineNumb].innerHTML = subjects.Practice;
		linePrepod[lineNumb].innerHTML = prepods.Practice;
	} else if (count === 7) {
		lineSubject[lineNumb].innerHTML = subjects.PE;
		linePrepod[lineNumb].innerHTML = prepods.PE;
	} else if (count === 8) {
		lineSubject[lineNumb].innerHTML = subjects.none;
		linePrepod[lineNumb].innerHTML = prepods.none;
	} else if (count === 9) {
		lineSubject[lineNumb].innerHTML = subjects.BN;
		linePrepod[lineNumb].innerHTML = prepods.BN;
	} else if (count === 10) {
		lineSubject[lineNumb].innerHTML = subjects.OOSLek;
		linePrepod[lineNumb].innerHTML = prepods.OOSLek;
	} else if (count === 11) {
		lineSubject[lineNumb].innerHTML = subjects.OOSLek;
		linePrepod[lineNumb].innerHTML = prepods.OOSLek;
	}
}
class Day {
	constructor(
		day,
		subject1,
		subject2,
		subject3,
		subject4,
		subject5,
		subject6,
		subject7,
		subject8,
	) {
		this.day = day;
		this.subject1 = subject1;
		this.subject2 = subject2;
		this.subject3 = subject3;
		this.subject4 = subject4;
		this.subject5 = subject5;
		this.subject6 = subject6;
		this.subject7 = subject7;
		this.subject8 = subject8;
		this.checker()
		this.timeCheck()
	}

	checker() {
		day.textContent = this.day;
		let s1 = () => {
			let count = 1;
			for (let key in subjects) {
				if (this.subject1 === key) {
					break
				} else {
					count++;//8
				}
			}
			scriptPrepods(0, count)
		}
		let s2 = () => {
			let count = 1;
			for (let key in subjects) {
				if (this.subject2 === key) {
					break
				} else {
					count++;//3
				}
			}
			scriptPrepods(1, count)
		}
		let s3 = () => {
			let count = 1;
			for (let key in subjects) {
				if (this.subject3 === key) {
					break
				} else {
					count++;
				}
			}
			scriptPrepods(2, count)
		}
		let s4 = () => {
			let count = 1;
			for (let key in subjects) {
				if (this.subject4 === key) {
					break
				} else {
					count++;
				}
			}
			scriptPrepods(3, count)
		}
		let s5 = () => {
			let count = 1;
			for (let key in subjects) {
				if (this.subject5 === key) {
					break
				} else {
					count++;
				}
			}
			scriptPrepods(4, count)
		}
		let s6 = () => {
			let count = 1;
			for (let key in subjects) {
				if (this.subject6 === key) {
					break
				} else {
					count++;
				}
			}
			scriptPrepods(5, count)
		}
		let s7 = () => {
			let count = 1;
			for (let key in subjects) {
				if (this.subject7 === key) {
					break
				} else {
					count++;
				}
			}
			scriptPrepods(6, count)
		}
		let s8 = () => {
			let count = 1;
			for (let key in subjects) {
				if (this.subject8 === key) {
					break
				} else {
					count++;
				}
			}
			scriptPrepods(7, count)
		}
		s1()
		s2()
		s3()
		s4()
		s5()
		s6()
		s7()
		s8()
	}

	timeCheck() {
		if (this.day === 'Понедельник' || this.day === 'Среда') {
			lineTime[0].textContent = '8:30-9:30';
			lineTime[1].textContent = '9:00-10:00';
			lineTime[2].textContent = '10:00-11:00';
			lineTime[3].textContent = '10:30-11:30';
			lineTime[4].textContent = '11:30-12:45';
			lineTime[5].textContent = '13:00-14:15';
			lineTime[6].textContent = '14:30-15:45';
			lineTime[7].textContent = '16:00-17:15';
		} else if (this.day === 'Вторник' || this.day === 'Четверг') {
			lineTime[0].textContent = '8:30-9:45';
			lineTime[1].textContent = '10:00-11:00';
			lineTime[2].textContent = '11:30-12:30';
			lineTime[3].textContent = '12:00-13:00';
			lineTime[4].textContent = '13:00-14:00';
			lineTime[5].textContent = '13:30-14:30';
			lineTime[6].textContent = '14:30-15:45';
			lineTime[7].textContent = '16:00-17:15';
		} else if (this.day === 'Пятница') {
			lineTime[0].textContent = '8:30-9:45';
			lineTime[1].textContent = '10:00-11:15';
			lineTime[2].textContent = '11:30-12:45';
			lineTime[3].textContent = '13:00-14:15';
			lineTime[4].textContent = '14:30-15:45';
			lineTime[5].textContent = '16:00-17:15';
			lineTime[6].textContent = '';
			lineTime[7].textContent = '';
		} else {
			lineTime[0].textContent = '';
			lineTime[1].textContent = '';
			lineTime[2].textContent = '';
			lineTime[3].textContent = '';
			lineTime[4].textContent = '';
			lineTime[5].textContent = '';
			lineTime[6].textContent = '';
			lineTime[7].textContent = '';
		}
	}
}
class Place {
	constructor(
		subject1,
		subject2,
		subject3,
		subject4,
		subject5,
		subject6,
		subject7,
		subject8,
	) {
		this.subject1 = subject1;
		this.subject2 = subject2;
		this.subject3 = subject3;
		this.subject4 = subject4;
		this.subject5 = subject5;
		this.subject6 = subject6;
		this.subject7 = subject7;
		this.subject8 = subject8;
		this.placer()
	}

	placer() {
		linePlace[0].innerHTML = this.subject1
		linePlace[1].innerHTML = this.subject2
		linePlace[2].innerHTML = this.subject3
		linePlace[3].innerHTML = this.subject4
		linePlace[4].innerHTML = this.subject5
		linePlace[5].innerHTML = this.subject6
		linePlace[6].innerHTML = this.subject7
		linePlace[7].innerHTML = this.subject8
	}
}
class Weeks {
	constructor(
		subject1,
		subject2,
		subject3,
		subject4,
		subject5,
		subject6,
		subject7,
		subject8,
	) {
		this.subject1 = subject1;
		this.subject2 = subject2;
		this.subject3 = subject3;
		this.subject4 = subject4;
		this.subject5 = subject5;
		this.subject6 = subject6;
		this.subject7 = subject7;
		this.subject8 = subject8;
		this.placer()
	}

	placer() {
		lineWeek[0].innerHTML = this.subject1
		lineWeek[1].innerHTML = this.subject2
		lineWeek[2].innerHTML = this.subject3
		lineWeek[3].innerHTML = this.subject4
		lineWeek[4].innerHTML = this.subject5
		lineWeek[5].innerHTML = this.subject6
		lineWeek[6].innerHTML = this.subject7
		lineWeek[7].innerHTML = this.subject8
	}

}


const burger = document.querySelector('.burger');
const monday = document.querySelector('#Monday'),
	tuesday = document.querySelector('#Tuesday'),
	wednesdey = document.querySelector('#Wednesday'),
	thursday = document.querySelector('#Thursday'),
	friday = document.querySelector('#Friday'),
	saturday = document.querySelector('#Saturday'),
	back = document.querySelector('#Back');
const Distance = document.querySelector('#Distance');
const main = document.querySelector('#main');
const distance = document.querySelector('#distance');
let count = 0;
function burgerActive() {
	burger.classList.toggle('active');
	count++

	if (count % 2 === 0) {
		monday.textContent = 'П';
		tuesday.textContent = 'В';
		wednesdey.textContent = 'С';
		thursday.textContent = 'Ч';
		friday.textContent = 'П';
		saturday.textContent = 'С';
		Distance.textContent = 'D';
		back.textContent = 'B';
	} else {
		monday.textContent = 'Понедельник';
		tuesday.textContent = 'Вторник';
		wednesdey.textContent = 'Среда';
		thursday.textContent = 'Четверг';
		friday.textContent = 'Пятница';
		saturday.textContent = 'Суббота';
		Distance.textContent = 'Distance';
		back.textContent = 'Back';
	}
}
burger.onclick = burgerActive;
