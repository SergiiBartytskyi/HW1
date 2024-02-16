// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і
// зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника
// та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення
// лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

// 1 спосіб
const spanEl = document.querySelector("#value");
let counterValue = 0;

const decrementBtn = document.querySelector("button[data-action='decrement']");
decrementBtn.addEventListener("click", onDecrement);

function onDecrement() {
	counterValue -= 1;
	updateCounter();
}

const incrementBtn = document.querySelector("button[data-action='increment']");
incrementBtn.addEventListener("click", onIncrement);

function onIncrement() {
	counterValue += 1;
	updateCounter();
}

function updateCounter() {
	spanEl.textContent = counterValue;
}
// 2 спосіб
// const counterValue = document.querySelector("#value");
// const decrementBtn = document.querySelector("button[data-action='decrement']");
// const incrementBtn = document.querySelector("button[data-action='increment']");

// const counter = {
// 	value: 0,
// 	decrement() {
// 		this.value -= 1;
// 	},
// 	increment() {
// 		this.value += 1;
// 	},
// };
// function onChangeValue() {
// 	counterValue.textContent = counter.value;
// }
// decrementBtn.addEventListener("click", () => {
// 	counter.decrement();
// 	onChangeValue();
// });
// incrementBtn.addEventListener("click", () => {
// 	counter.increment();
// 	onChangeValue();
// });
