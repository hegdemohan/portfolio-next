import { ContactFormData } from './types';

export function generateTemplate({ name, email, message, subject }: ContactFormData): string {
	return `<!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>Contact Form Submission</title>
        </head>
        <body style="font-family: Arial, sans-serif; background-color: #010C15; margin: 0; padding: 0;">
            <table cellpadding="0" cellspacing="0" width="100%">
                <tr>
                    <td align="center" style="padding: 20px;">
                        <table bgcolor="#010C15" cellpadding="0" cellspacing="0" width="600" style="border-radius: 10px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
                            <tr>
                                <td bgcolor="#010C15" style="padding: 40px 40px;">
                                    <div style="background-color: #1C2B3A; padding: 20px; border-radius: 10px;">
                                        <h1 style="color: #E5E9F0; margin-bottom: 20px;">New Contact Form Submission</h1>
                                        <p style="color: #E5E9F0;">Name: ${name}</p>
                                        <p style="color: #E5E9F0;">Email: ${email}</p>
                                        <p style="color: #E5E9F0;">Subject: ${subject}</p>
                                        <p style="color: #E5E9F0;">Message: ${message}</p>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
        </html>`;
}
