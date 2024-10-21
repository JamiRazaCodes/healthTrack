import React from 'react';

const TermsAndConditions = () => {
    return (
        <div className="bg-white text-gray-800 p-12">
            <h1 className="text-4xl font-bold text-center mb-8">Terms and Conditions</h1>
            <div className="max-w-4xl mx-auto">
                <p className="text-lg mb-4">
                    Welcome to HealthTrack. By using our website and services, you agree to the following terms and conditions.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-4">Use of Our Service</h2>
                <p className="text-gray-700 mb-4">
                    You agree to use our services only for lawful purposes and in accordance with these terms. Unauthorized use or tampering with the system is prohibited.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-4">Account Responsibility</h2>
                <p className="text-gray-700 mb-4">
                    You are responsible for maintaining the confidentiality of your account information and for any activity that occurs under your account.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-4">Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">
                    HealthTrack will not be held liable for any damages that arise from the use of our services, including but not limited to direct, indirect, or consequential damages.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-4">Termination</h2>
                <p className="text-gray-700 mb-4">
                    We reserve the right to terminate or suspend your access to our services at any time, without prior notice, if you violate these terms.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-4">Changes to the Terms</h2>
                <p className="text-gray-700 mb-4">
                    We may update these terms from time to time. Any changes will be communicated on this page.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
                <p className="text-gray-700 mb-4">
                    If you have any questions about these terms, please contact us at <a href="mailto:support@healthtrack.com" className="text-purple-500 hover:text-purple-600">support@healthtrack.com</a>.
                </p>
            </div>
        </div>
    );
};

export default TermsAndConditions;
