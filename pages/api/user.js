// pages/api/user.js
import isEmail from 'validator/lib/isEmail';
import isLength from 'validator/lib/isLength';
import db from '../../models/index';
db.sequelize.sync();
const User = db.users;

export default async (req, res) => {
	console.log(req.body);
	// Recieved params from request
	let { name, email } = req.body;
	try {
		await db.sequelize.sync();
		// check email, name, password format
		if (!isLength(name, { min: 3, max: 15 })) {
			return res.status(422).send('Name must be 3-10 characters long');
		} else if (!isEmail(email)) {
			return res.status(422).send('Email must be valid');
		}

		// Check if user with that email if already exists
		const user = await User.findOne({
			where: { email: email },
		});
		if (user) {
			return res.status(422).send(`User already exist with that ${email}`);
		}
		const newUser = await User.create({
			name,
			email,
		});
		res.status(201).send(newUser);
	} catch (error) {
		console.error(error);
		res.status(500).send('Error in signup. Please try again.');
	}
};
