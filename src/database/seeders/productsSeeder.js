const db = require('../models');
const { products: Products } = db;

const faker = require('faker');
// https://github.com/Marak/Faker.js#readme

const imgCats = ['animals', 'architecture', 'nature', 'people', 'tech'];

for (let i = 1; i <= 40; i++) {
	Products
		.create({
			name: faker.commerce.productName(),
			price: faker.commerce.price(),
			image: `https://placeimg.com/640/480/${imgCats[Math.floor(Math.random() * imgCats.length)]}`,
			description: faker.lorem.paragraphs(2),
			brandId: Math.ceil(Math.random() * 5),
		})
		.then(product => console.log(product.id))
		.catch(error => console.log(error));
}
