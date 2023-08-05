'use client';

import Contacts from '@/components/contacts';
import Gist from '@/components/gist';
import { getFormattedMessage } from '@/i18n/i18n-provider';
import { useSnackbar } from '@/providers/snackbar-provider';
import { ContactFormData } from '@/utils/types';
import React, { useCallback, useState } from 'react';

const INITIAL_STATE: ContactFormData = {
	name: '',
	email: '',
	subject: '',
	message: '',
};
const Contact = () => {
	const date = new Date();
	const { createSnackbar } = useSnackbar();
	const [form, setForm] = useState<ContactFormData>(INITIAL_STATE);

	const handleFormChange = useCallback((key: string, value: string) => {
		setForm((prevForm) => {
			return { ...prevForm, [key]: value };
		});
	}, []);

	const handleSubmit = async () => {
		await fetch('/api/contact', {
			method: 'POST',
			body: JSON.stringify(form),
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		}).then(async (res) => {
			// TODO: better error handling here
			if (!res.ok) console.log('Failed to send message');
			const body = await res.json();
			console.log(body);
		});
	};

	const codeString = `const button = document.querySelector('#sendBtn');

const message = {
   name : "${form.name}" ,
   email : "${form.email}",
   message : "${form.message}" ,
   date: "${date.toLocaleDateString()}"
}


button.addEventListener('click'), () => {
  form.send(message);
})`;

	return (
		<div className="flex grow flex-col overflow-hidden font-fira_regular text-menu-text  lg:flex-row">
			<div className="border-br-default lg:w-60 lg:border-r ">
				<Contacts
					onClick={(contact) => {
						navigator.clipboard.writeText(contact);
						createSnackbar(`Copied ${contact} to clipboard`);
					}}
				/>
			</div>

			<div className="grow overflow-y-auto lg:grid lg:grid-cols-2">
				<div id="contact-form" className="flex  justify-center  border-br-default p-4 lg:border-r lg:p-16">
					<form id="contact-form" className="w-full max-w-lg  text-sm lg:text-base">
						<div className="flex flex-col">
							<label htmlFor="name" className="mb-3">
								_
								{getFormattedMessage({
									id: 'contactForm.name',
									defaultMessage: 'name',
								})}
								:
							</label>
							<input
								type="text"
								id="name"
								name="name"
								value={form.name}
								onChange={(e) => handleFormChange(e.target.id, e.target.value)}
								className="mb-5 rounded-lg border-2 border-br-default  bg-dark-bg p-2 focus:shadow-[0_0_0_2px_#607b9680] focus:outline-none"
								required
							/>
						</div>
						<div className="flex flex-col">
							<label htmlFor="email" className="mb-3">
								_
								{getFormattedMessage({
									id: 'contactForm.email',
									defaultMessage: 'email',
								})}
								:
							</label>
							<input
								type="email"
								id="email"
								name="email"
								onChange={(e) => handleFormChange(e.target.id, e.target.value)}
								className="mb-5 rounded-lg border-2 border-br-default  bg-dark-bg p-2 focus:shadow-[0_0_0_2px_#607b9680] focus:outline-none"
								required
							/>
						</div>
						<div className="flex flex-col">
							<label htmlFor="email" className="mb-3">
								_
								{getFormattedMessage({
									id: 'contactForm.subject',
									defaultMessage: 'subject',
								})}
								:
							</label>
							<input
								type="subject"
								id="subject"
								name="subject"
								onChange={(e) => handleFormChange(e.target.id, e.target.value)}
								className="mb-5 rounded-lg border-2 border-br-default  bg-dark-bg p-2 focus:shadow-[0_0_0_2px_#607b9680] focus:outline-none"
								required
							/>
						</div>
						<div className="flex flex-col">
							<label htmlFor="message" className="mb-3">
								_
								{getFormattedMessage({
									id: 'contactForm.message',
									defaultMessage: 'message',
								})}
								:
							</label>
							<textarea
								id="message"
								name="message"
								onChange={(e) => handleFormChange(e.target.id, e.target.value)}
								className="mb-5 rounded-lg border-2 border-br-default  bg-dark-bg p-2 focus:shadow-[0_0_0_2px_#607b9680] focus:outline-none"
								required
							/>
						</div>
						<button
							id="submit-button"
							className="rounded-md bg-active-bg px-4 py-2 text-slate-300 hover:bg-hover-bg"
							onClick={(e) => {
								e.preventDefault();
								handleSubmit();
							}}
						>
							{getFormattedMessage({
								id: 'contactForm.submit',
								defaultMessage: 'submit-message',
							})}
						</button>
					</form>
				</div>
				<div className="hidden p-16 lg:flex">
					<Gist code={codeString} style={{ background: 'transparent', border: 'none' }} />
				</div>
			</div>
		</div>
	);
};

export default Contact;
