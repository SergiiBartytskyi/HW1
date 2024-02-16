// HTML містить список категорій ul#categories.

// <ul id="categories">
//   <li class="item">
//     <h2>Animals</h2>
//     <ul>
//       <li>Cat</li>
//       <li>Hamster</li>
//       <li>Horse</li>
//       <li>Parrot</li>
//     </ul>
//   </li>
//   <li class="item">
//     <h2>Products</h2>
//     <ul>
//       <li>Bread</li>
//       <li>Prasley</li>
//       <li>Cheese</li>
//     </ul>
//   </li>
//   <li class="item">
//     <h2>Technologies</h2>
//     <ul>
//       <li>HTML</li>
//       <li>CSS</li>
//       <li>JavaScript</li>
//       <li>React</li>
//       <li>Node.js</li>
//     </ul>
//   </li>
// </ul>

// Напиши скрипт, який:

// 1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// 2. Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента
// (тегу < h2 >) і кількість елементів в категорії(усіх < li >, вкладених в нього).

// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3 --- OK!

// Category: Animalsc --- OK!
// Elements: 4

// Category: Products --- OK!
// Elements: 3

// Category: Technologies --- OK!
// Elements: 5

const categoriesList = document.querySelector("#categories");
console.log("Number of categories: ", categoriesList.children.length);

const categories = categoriesList.querySelectorAll(".item");
console.log("Number of categories: ", categories.length);

// categories.forEach(category => {
// 	const titleEl = category.querySelector("h2");
// 	console.log("Category: ", titleEl.textContent);
// 	const listEl = titleEl.nextElementSibling.children.length;
// 	console.log("Elements: ", listEl);
// });

categories.forEach(category => {
	console.log("Category: ", category.firstElementChild.textContent);

	console.log("Elements: ", category.lastElementChild.children.length);
});
