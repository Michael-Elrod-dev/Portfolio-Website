// components/Contact.tsx
/* eslint-disable react/no-unescaped-entities */
'use client';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs.send(
      'service_609uksg',
      'template_guflehl',
      { name, email, message },
      'rAeFYEa0Wqgx8Df1o'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      }, (error) => {
        console.log('FAILED...', error);
        setStatus('Failed to send message. Please try again.');
      });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-blue-400">Contact Me</h2>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <p className="text-lg mb-4">
              I'm currently pursuing software development opportunities - especially
              in San Jose or the Bay Area. However, if you have any questions or would like
              more information, please dont hesitate to use the form below or you can reach out to me on LinkedIn.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                  required
                ></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                Send Message
              </button>
            </form>
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.3204839980725!2d-82.85085058481826!3d34.67681998043892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88585e6756d4e10d%3A0x5f4c5bec99c96abf!2s111%20University%20Village%20Dr%2C%20Central%2C%20SC%2029630!5e0!3m2!1sen!2sus!4v1628909076855!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="w-full h-full rounded-lg"
              />
            </div>
            <div className="mt-4">
              <p className="font-semibold">Michael Elrod</p>
              <p>111 University Village Dr.</p>
              <p>Unit G</p>
              <p>Clemson, SC 29715</p>
              <p>MichaelElrod.Dev@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
