import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Button from '../components/Button';

const Support = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    
    const handleSubmit = (e) => {
        e.preventDefault();

        
        Swal.fire({
            icon: 'success',
            title: 'Ticket Submitted!',
            text: 'Our support team will respond to your request soon.',
            confirmButtonText: 'OK'
        });

       
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="bg-white text-gray-800 p-12">
            <h1 className="text-4xl font-bold text-center mb-8">Support</h1>
            <div className="max-w-4xl mx-auto">
                <p className="text-lg text-center mb-8">
                    Need help? Our support team is here for you. Reach out to us and we'll do our best to assist you.
                </p>

                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-semibold mb-6">Contact Support</h2>
                    <p className="text-gray-700 mb-4">
                        For any support inquiries, please email us at <a href="mailto:support@healthtrack.com" className="text-purple-500 hover:text-purple-600">support@healthtrack.com</a> or call us at +1 234 567 890.
                    </p>

                    <h3 className="text-xl font-semibold mt-8 mb-4">Submit a Support Ticket</h3>
                    <form onSubmit={handleSubmit} className="mt-4">
                        
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
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
                                name="email"
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
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                rows="5"
                                required
                            ></textarea>
                        </div>

                        
                        <Button label="Submit" type="submit" className="px-6 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Support;
