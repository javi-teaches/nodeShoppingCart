const db = require('../database/models');
const { products: Products } = db;

module.exports = {
	index: (req, res) => {
		Products
			.findAll()
			.then(products => res.render('index', { products }));
	},
	showCart: (req, res) => {
		Products
			.findAll({
				where: {
					id: req.session.cart
				}
			})
			.then(products => {
				return res.render('cart', { products });
			});
	},
	addToCart: (req, res) => {
		let cart = req.session.cart;

		if (!cart.includes(req.body.product)) {
			req.session.cart.push(req.body.product);
		}

		console.log('======');
		console.log(req.session.cart);
		console.log('======');
		return res.redirect('/');
	}
}