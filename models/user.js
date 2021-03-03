const userModel = (sequelize, Sequelize) => {
	const User = sequelize.define('user', {
		id: {
			type: Sequelize.UUID,
			defaultValue: Sequelize.UUIDV4,
			primaryKey: true,
		},
		name: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		email: {
			type: Sequelize.STRING,
			allowNull: false,
			trim: true,
		},
		type: {
			type: DataTypes.ENUM(['Admin', 'Partner', 'Customer', 'Business']),
			allowNull: false,
		},
	});

	return User;
};

export default userModel;
