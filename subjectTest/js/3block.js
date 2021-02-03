Distance.onclick = () => {
	main.classList.add('hidden');
	distance.classList.remove('hidden')
}

const HistoryLog = document.querySelector('#HistoryLog');
document.querySelector('#HistoryLogCopy').onclick = () => {
	HistoryLog.select();
	document.execCommand("copy");
}

const HistoryPass = document.querySelector('#HistoryPass');
document.querySelector('#HistoryPassCopy').onclick = () => {
	HistoryPass.select();
	document.execCommand("copy");
}

const OOSLog = document.querySelector('#OOSLog');
document.querySelector('#OOSLogCopy').onclick = () => {
	OOSLog.select();
	document.execCommand("copy");
}

const OOSPass = document.querySelector('#OOSPass');
document.querySelector('#OOSPassCopy').onclick = () => {
	OOSPass.select();
	document.execCommand("copy");
}

const OPLog = document.querySelector('#OPLog');
document.querySelector('#OPLogCopy').onclick = () => {
	OPLog.select();
	document.execCommand("copy");
}

const OPPass = document.querySelector('#OPPass');
document.querySelector('#OPPassCopy').onclick = () => {
	OPPass.select();
	document.execCommand("copy");
}

try {
	const HistoryGo = document.querySelector('#HistoryGo');
	document.querySelector('#HistoryGoCopy').onclick = () => {
		HistoryGo.select();
		document.execCommand("copy");
	}
} catch (e) {
	console.log(e);
}

try {
	const English = document.querySelector('#English');
	document.querySelector('#EnglishCopy').onclick = () => {
		English.select();
		document.execCommand("copy");
	}
} catch (e) {
	console.log(e);
}
try {
	const Russian = document.querySelector('#Russian');
	document.querySelector('#RussianCopy').onclick = () => {
		Russian.select();
		document.execCommand("copy");
	}
} catch (e) {
	console.log(e);
}

