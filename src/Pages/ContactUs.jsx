import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore'; 
import { db } from '../Firebase'; 
import Swal from 'sweetalert2'; 
import Button from '../components/Button';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await addDoc(collection(db, 'contactMessages'), formData);

            Swal.fire({
                icon: 'success',
                title: 'Message Sent!',
                text: 'Our team will respond to you soon.',
                confirmButtonText: 'OK'
            });

            setFormData({
                name: '',
                email: '',
                message: ''
            });
        } catch (error) {
            console.error('Error submitting contact form: ', error);
            Swal.fire({
                icon: 'error',
                title: 'Submission Failed!',
                text: 'There was an issue sending your message. Please try again.',
            });
        }
    };

    return (
        <div className="bg-white text-gray-800 p-12">
            <h2 className="text-4xl font-bold text-center text-gray-900">Get in Touch</h2>
            <p className="mt-4 text-lg text-center text-gray-600 max-w-3xl mx-auto">
                We'd love to hear from you. Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
            </p>
            <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-2xl font-semibold text-gray-800">Contact Information</h3>
                    <p className="mt-4 text-gray-600">
                        <strong>Address:</strong><br />
                        123 Health Street<br />
                        Wellness City, HW 45678<br />
                        United States
                    </p>
                    <p className="mt-4 text-gray-600">
                        <strong>Phone:</strong><br />
                        +1 234 567 890
                    </p>
                    <p className="mt-4 text-gray-600">
                        <strong>Email:</strong><br />
                        <a href="mailto:support@healthtrack.com" className="text-purple-500 hover:text-purple-600">support@healthtrack.com</a>
                    </p>
                    <div className="mt-8">
                        <h3 className="text-2xl font-semibold text-gray-800">Follow Us</h3>
                        <div className="flex mt-4 space-x-4">
                            <a href="#" className="text-blue-500 hover:text-blue-600"><i className="fab fa-twitter"></i> Twitter</a>
                            <a href="#" className="text-blue-700 hover:text-blue-800"><i className="fab fa-facebook"></i> Facebook</a>
                            <a href="#" className="text-pink-500 hover:text-pink-600"><i className="fab fa-instagram"></i> Instagram</a>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold text-gray-800">Send Us a Message</h3>
                    <form onSubmit={handleSubmit} className="mt-4">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700">Your Message</label>
                            <textarea
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                rows="5"
                                required
                            ></textarea>
                        </div>

                       
                        <Button label="Send" type="submit" className="px-6 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600"></Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
