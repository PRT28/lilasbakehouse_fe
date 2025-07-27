'use client'

import { FormEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useAlert } from '@/context/AlertContext'; // Assuming AlertContext is created

const ContactUsPage = () => {
  const { alertMessage } = useAlert();

  const handleContactForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    const name = (form.elements.namedItem('name') as HTMLInputElement)?.value;
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value;

    if (name && email && message) {
      alertMessage(
        'Thank you for your message! We will get back to you soon. (Dummy submission)',
        'success'
      );
      form.reset(); // Clear form
    } else {
      alertMessage('Please fill in all required fields.', 'error');
    }
  };

  return (
    <section className="flex items-center justify-center min-h-[calc(100vh-160px)] bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white p-8 rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-extrabold text-[#6b4f4f] mb-6">Get in Touch</h2>
          <p className="text-gray-700 mb-6">
            We&apos;d love to hear from you! Whether you have a question about our products,
            feedback, or just want to say hello, feel free to reach out.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#d4b29c] text-xl mr-3" />
              <p className="text-gray-700">123 Bakehouse Lane, Baker&apos;s Town, BT 12345</p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faPhone} className="text-[#d4b29c] text-xl mr-3" />
              <p className="text-gray-700">+1 (555) 123-4567</p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="text-[#d4b29c] text-xl mr-3" />
              <p className="text-gray-700">info@lilisbakehouse.com</p>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-[#6b4f4f] mb-4">Business Hours</h3>
            <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-700">Saturday: 10:00 AM - 4:00 PM</p>
            <p className="text-gray-700">Sunday: Closed</p>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-extrabold text-[#6b4f4f] mb-6">Send us a Message</h2>
          <form className="space-y-4" onSubmit={handleContactForm}>
            <div>
              <label htmlFor="contact-name" className="sr-only">Name</label>
              <input
                type="text"
                id="contact-name"
                name="name"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-accent-peach focus:border-accent-peach sm:text-sm"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="sr-only">Email</label>
              <input
                type="email"
                id="contact-email"
                name="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-accent-peach focus:border-accent-peach sm:text-sm"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="contact-subject" className="sr-only">Subject</label>
              <input
                type="text"
                id="contact-subject"
                name="subject"
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-accent-peach focus:border-accent-peach sm:text-sm"
                placeholder="Subject"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="sr-only">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-accent-peach focus:border-accent-peach sm:text-sm"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#d4b29c] hover:bg-[#c2a08c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-peach transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;
