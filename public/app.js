const addCat = function (name, favoriteFood, img) {
	const cats = document.querySelector('#cats');
	const ul = document.createElement('ul');
	ul.classList.add('cat');
	const catName = document.createElement('li');
	const catFood = document.createElement('li');
	const catLiImg = document.createElement('li');
	const catImg = document.createElement('img');
	catName.innerText = `Name: ${name}`;
	catFood.innerText = `Favorite food: ${favoriteFood}`;
	catImg.width = 500;
	catImg.src = img;
	catLiImg.appendChild(catImg);
	ul.appendChild(catName);
	ul.appendChild(catFood);
	ul.appendChild(catLiImg);
	cats.appendChild(ul);
};

const cats = [
	{
		name: 'fluffer',
		food: 'spergherters',
		img: 'https://static.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg'
	},
	{
		name: 'Boba',
		food: 'Sock fluff',
		img: 'https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg'
	},
	{
		name: 'Barnaby',
		food: 'Tuna',
		img: 'https://cdn.thinglink.me/api/image/854796788643659778/1240/10/scaletowidth'
	},
	{
		name: 'Max',
		food: 'Whiskas Temptations',
		img: 'http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg'
	}
];

const addCats = function (array) {
	array.forEach(function (cat) {
		addCat(cat.name, cat.food, cat.img);
	});
};

const app = function () {
	addCats(cats);
};

document.addEventListener('DOMContentLoaded', app);
