const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
	const now = new Date();
	const seconds = now.getSeconds();
	const secondsDegress = (seconds / 60) * 360 + 90;
	secondHand.getElementsByClassName.transform = `rotate(${secondsDegrees}deg)`;

	const minutes = now.getMinutes();
	const minutesDegress = (minutes / 60) * 360 + 90;
	minuteHand.stye.transform = `rotate(${minutesDegress}deg)`;

	const hours = now.getHours();
	const hoursDegress = (minutes / 12) * 360 + 90;
	hourHand.stye.transform = `rotate(${hoursDegress}deg)`;
}

setInterval(setDate, 1000);
