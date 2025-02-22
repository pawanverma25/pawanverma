import React from 'react';
import Button from "../../../components/common/Button";
import { email } from "../../../constants";

function Contact() {
	return (
		<section 
			id="contact" 
			className="py-24 max-w-3xl mx-auto px-4 text-center"
			aria-label="contact section"
		>
			<h2 className="flex items-center justify-center gap-2 text-2xl text-primary mb-5">
				<span className="font-mono text-accent text-lg">04.</span>
				What&apos;s Next?
			</h2>
			<h3 className="text-5xl font-bold text-primary mb-6">
				Get In Touch
			</h3>
			<p className="text-slate/80 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
				Although I&apos;m not currently looking for any new opportunities, my inbox 
				is always open. Whether you have a question or just want to say hi, 
				I&apos;ll try my best to get back to you!
			</p>
			<Button
				text="Say Hello"
				href={`mailto:${email}`}
				variant="outline"
				size="lg"
				className="mt-8"
				aria-label="Send email"
			/>
		</section>
	);
}

export default Contact;
