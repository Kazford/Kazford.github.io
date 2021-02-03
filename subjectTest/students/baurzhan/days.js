monday.onclick = () => {
	main.classList.remove('hidden')
	distance.classList.add('hidden')
	const Monday = new Day(
		'Понедельник',
		'English', //1
		'none', //2
		'English', //3
		'none', //4
		'none', //5
		'History', //6
		'OOSLek', //7
		'none' //8
	)
	const MP = new Place(
		'2.1.201', //1
		'', //2
		'2.1.201', //3
		'', //4
		'', //5
		'Zoom', //6
		'Zoom', //7
		'', //8
	)
	const MW = new Weeks(
		'', //1
		'', //2
		'', //3
		'', //4
		'', //5
		'', //6
		'1,2,3,5,6,7,9,10,11,13,14,15', //7
		'', //8
	)
}
tuesday.onclick = () => {
	main.classList.remove('hidden')
	distance.classList.add('hidden')
	const Tuesday = new Day(
		'Вторник',
		'none', //1
		'none', //2
		'PE', //3
		'none', //4
		'Russian', //5
		'none', //6
		'none', //7
	)
	const TP = new Place(
		'', //8
		'', //1
		'LMS «Сириус»', //2
		'', //3
		'1.3.309', //4
		'', //5
		'', //6
		'', //7
	)
	const TW = new Weeks(
		'', //8
		'', //1
		'', //2
		'', //3
		'', //4
		'', //5
		'', //6
		'', //7
	)
}
wednesdey.onclick = () => {
	main.classList.remove('hidden')
	distance.classList.add('hidden')
	const Wednesdey = new Day(
		'Среда',
		'OOS', //1
		'none', //2
		'OOS', //3
		'none', //4
		'none', //5
		'OP', //6
		'none', //7
		'none', //8
	)
	const TP = new Place(
		'2.2.210', //1
		'', //2
		'2.2.210', //3
		'', //4
		'', //5
		'Zoom', //6
		'', //7
		'', //8
	)
	const TW = new Weeks(
		'1,3,4,5,7,8,9,11,12,13', //1
		'', //2
		'', //3
		'', //4
		'', //5
		'1,2,4,5,7,8,10,11,13,14 ', //6
		'', //7
		'', //8
	)
}
thursday.onclick = () => {
	main.classList.remove('hidden')
	distance.classList.add('hidden')
	const Thursday = new Day(
		'Четверг',
		'none', //1
		'none', //2
		'OP', //3
		'none', //4
		'OP', //5
		'none', //6
		'English', //7
		'none', //8
	)
	const TP = new Place(
		'', //1
		'', //2
		'2.2.209', //3
		'', //4
		'2.2.209', //5
		'', //6
		'Google <br> Classroom', //7
		'', //8
	)
	const TW = new Weeks(
		'', //1
		'', //2
		'2,3,4,6,7,8,10,11,12,14', //3
		'', //4
		'2,3,4,6,7,8,10,11,12,14', //5
		'', //6
		'1,3,5,7,9,11,13', //7
		'', //8
	)
}
friday.onclick = () => {
	main.classList.remove('hidden')
	distance.classList.add('hidden')
	const Friday = new Day(
		'Пятница',
		'none', //1
		'none', //2
		'History', //3
		'Russian', //4
		'none', //5
		'none', // 6
		'none',
		'none',
	)
	const TP = new Place(
		'', //1
		'', //2
		'Google <br> Classroom', //3
		'LMS «Сириус»', //4
		'', //5
		'', //6
		'',
		'',
	)
	const TW = new Weeks(
		'', //1
		'', //2
		'1,3,5,7,9,11,13', //3
		'1,3,5,7,9,11,13', //4
		'', //5
		'', //6
		'',
		'',
	)
}
saturday.onclick = () => {
	main.classList.remove('hidden')
	distance.classList.add('hidden')
	const Saturday = new Day(
		'Суббота',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
	)
	const TP = new Place(
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
	)
	const TW = new Weeks(
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
	)
}