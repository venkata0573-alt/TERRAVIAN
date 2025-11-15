import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/lib/customSupabaseClient';

const Contact = () => {
	const { toast } = useToast();
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		company: '',
		message: '',
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (e) => {
		const { id, value } = e.target;
		setFormData((prev) => ({ ...prev, [id]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
    
    // Debug Logging
    console.log("🚀 Starting form submission...");
		
		try {
			// STEP 1: Database Insertion
      // We do NOT use .select() here because anonymous users have INSERT-only permissions.
      // Trying to select the returned row would trigger a 42501 RLS error.
      console.log("Attempting Database Insert...");
			const { error: dbError } = await supabase
				.from('contact_submissions')
				.insert([{ 
          ...formData, 
          company: formData.company || 'N/A',
          page_source: 'Contact Page' 
        }]);

			if (dbError) {
				console.error('❌ Database Insert Error Details:', dbError);
				throw new Error(`Database Error: ${dbError.message}`);
			}
      console.log("✅ Database Insert Success");
			
			// STEP 2: Email Trigger (Edge Function)
      console.log("Attempting to invoke 'send-contact-email' function...");
			const { data: funcData, error: functionError } = await supabase.functions.invoke('send-contact-email', {
				body: JSON.stringify(formData),
			});

			if (functionError) {
				console.error('⚠️ Email Function Error:', functionError);
				toast({
					title: 'Submission Saved (Email Delayed)',
					description: "Your info was saved to our database safely, but the email notification system had a hiccup. We will check the database manually!",
					variant: 'default',
          className: "bg-yellow-50 border-yellow-200"
				});
			} else {
        console.log("✅ Email Function Success:", funcData);
				toast({
					title: 'Message Sent Successfully! 🚀',
					description: "We have received your request and sent a confirmation.",
          className: "bg-green-50 border-green-200"
				});
			  setFormData({ name: '', email: '', phone: '', company: '', message: '' });
			}

		} catch (error) {
			console.error('❌ CRITICAL SUBMISSION ERROR:', error);
      
      let errorDescription = "There was a problem processing your request.";
      if (error.message.includes("Database Error")) {
        errorDescription = "We couldn't save your information to the database. Please try again or call us directly.";
      }

			toast({
				title: 'Submission Failed',
				description: errorDescription,
				variant: 'destructive',
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<>
			<Helmet>
				<title>Contact Us | Terravian Landscaping LLC</title>
				<meta
					name="description"
					content="Get a free quote from Terravian Landscaping LLC. Contact us for 24/7 snow plowing, lawn care, and property maintenance in Connecticut."
				/>
			</Helmet>

			<div className="bg-gray-50 mt-20">
				<section className="py-20 text-center bg-green-700 text-white">
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<h1 className="text-4xl md:text-5xl font-bold">Get a Free Quote</h1>
						<p className="mt-4 text-lg text-green-100 max-w-2xl mx-auto">
							Ready to transform your property? Fill out the form below or give us
							a call!
						</p>
					</motion.div>
				</section>

				<section className="py-20">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7 }}
							className="bg-white p-8 md:p-12 rounded-2xl shadow-xl"
						>
							<h2 className="text-3xl font-bold text-gray-900 mb-6">
								Send Us a Message
							</h2>
							<form onSubmit={handleSubmit} className="space-y-6">
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
									<div>
										<Label htmlFor="name">Full Name</Label>
										<Input
											id="name"
											type="text"
											placeholder="John Doe"
											value={formData.name}
											onChange={handleChange}
											required
											className="mt-2"
										/>
									</div>
									<div>
										<Label htmlFor="email">Email Address</Label>
										<Input
											id="email"
											type="email"
											placeholder="you@example.com"
											value={formData.email}
											onChange={handleChange}
											required
											className="mt-2"
										/>
									</div>
								</div>
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
									<div>
										<Label htmlFor="phone">Phone Number</Label>
										<Input
											id="phone"
											type="tel"
											placeholder="(203) 555-0123"
											value={formData.phone}
											onChange={handleChange}
											className="mt-2"
										/>
									</div>
									<div>
										<Label htmlFor="company">Company</Label>
										<Input
											id="company"
											type="text"
											placeholder="Your Company Name"
											value={formData.company}
											onChange={handleChange}
											className="mt-2"
										/>
									</div>
								</div>
								<div>
									<Label htmlFor="message">How can we help?</Label>
									<Textarea
										id="message"
										placeholder="Tell us about your project..."
										value={formData.message}
										onChange={handleChange}
										required
										className="mt-2"
										rows={5}
									/>
								</div>
								<div>
									<Button
										type="submit"
										className="w-full bg-green-700 hover:bg-green-800 text-lg"
										size="lg"
										disabled={isSubmitting}
									>
										{isSubmitting ? (
											<Loader2 className="w-6 h-6 mr-2 animate-spin" />
										) : (
											<Send className="w-5 h-5 mr-2" />
										)}
										{isSubmitting ? 'Sending...' : 'Request Free Quote'}
									</Button>
								</div>
							</form>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7 }}
							className="space-y-8"
						>
							<div className="bg-white p-8 rounded-2xl shadow-xl">
								<h3 className="text-2xl font-bold text-gray-900 mb-4">
									Contact Information
								</h3>
								<div className="space-y-4 text-lg">
									<div className="flex items-center space-x-4">
										<Phone className="w-6 h-6 text-green-700" />
										<a
											href="tel:2035141452"
											className="text-gray-700 hover:text-green-800"
										>
											(203) 514-1452
										</a>
									</div>
									<div className="flex items-center space-x-4">
										<Mail className="w-6 h-6 text-green-700" />
										<a
											href="mailto:terravianlandscaping@gmail.com"
											className="text-gray-700 hover:text-green-800"
										>
											terravianlandscaping@gmail.com
										</a>
									</div>
									<div className="flex items-start space-x-4">
										<MapPin className="w-6 h-6 text-green-700 mt-1" />
										<span className="text-gray-700">
											Meriden, CT & Surrounding Areas
										</span>
									</div>
								</div>
							</div>
							<div className="bg-white p-8 rounded-2xl shadow-xl">
								<h3 className="text-2xl font-bold text-gray-900 mb-4">
									Business Hours
								</h3>
								<p className="text-lg text-gray-700">
									<span className="font-semibold">24/7 Emergency Services</span>{' '}
									for Snow Plowing & Salting.
								</p>
								<p className="mt-2 text-lg text-gray-700">
									Standard landscaping services available Monday - Sunday.
								</p>
							</div>
						</motion.div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Contact;