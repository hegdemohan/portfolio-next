import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.FROM_EMAIL,
		pass: process.env.PASSWORD,
	},
});

export const mailOptions = {
	from: process.env.FROM_EMAIL,
	to: process.env.TO_EMAIL,
};
