module.exports = (sequelize, dataTypes) => {
	const product = sequelize.define('products', {
		id: {
			type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: dataTypes.STRING,
		description: dataTypes.STRING,
		price: dataTypes.DECIMAL,
		image: dataTypes.STRING,
		brandId: dataTypes.INTEGER,
	});

	return product;
}