import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="bg-white text-gray-800 p-12">
            <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>
            <div className="max-w-4xl mx-auto">
                <p className="text-lg mb-4">
                    At HealthTrack, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-4">Information We Collect</h2>
                <p className="text-gray-700 mb-4">
                    We collect personal data such as your name, email, contact details, and health information when you sign up or interact with our services.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-4">How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">
                    Your personal information is used to provide and improve our services, communicate with you, and ensure a personalized experience.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-4">Data Protection</h2>
                <p className="text-gray-700 mb-4">
                    We implement security measures to protect your data from unauthorized access. However, no method of transmission over the Internet is entirely secure.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-4">Your Rights</h2>
                <p className="text-gray-700 mb-4">
                    You have the right to access, update, or delete your personal information at any time. Contact us for any privacy-related inquiries.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-4">Changes to Our Policy</h2>
                <p className="text-gray-700 mb-4">
                    We may update this policy periodically. Any changes will be posted on this page with an updated revision date.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
                <p className="text-gray-700 mb-4">
                    If you have any questions regarding this privacy policy, please contact us at <a href="mailto:privacy@healthtrack.com" className="text-purple-500 hover:text-purple-600">privacy@healthtrack.com</a>.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
