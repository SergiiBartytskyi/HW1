// HTML містить порожній список ul#ingredients.

// <ul id="ingredients"></ul>

//   JavaScript містить масив рядків.

const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];
// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredientsListEl = document.querySelector("#ingredients");
// 1 спосіб
// const ingredientEl = ingredients.map(ingredient => {
// 	const elementLi = document.createElement("li");
// 	elementLi.textContent = ingredient;
// 	elementLi.classList.add("item");

// 	return elementLi;
// });
// ingredientsListEl.append(...ingredientEl);

// 2 спосіб
const makeIngredientsList = arr => {
	return arr.map(el => {
		const elementLi = document.createElement("li");
		elementLi.textContent = el;
		elementLi.classList.add("item");

		return elementLi;
	});
};

const elements = makeIngredientsList(ingredients);
ingredientsListEl.append(...elements);
