import { transporter, mailOptions } from '@/config/nodemailer';
import { generateTemplate } from '@/utils/email-template-generator';

export async function POST(req: Request) {
	const body = await req.json();

	try {
		await transporter.sendMail({
			...mailOptions,
			subject: body.subject,
			text: 'This is test string',
			html: generateTemplate(body),
		});
	} catch (error) {
		return new Response('Bad request', { status: 400 });
	}
	return new Response(JSON.stringify({ success: 'post' }));
}
