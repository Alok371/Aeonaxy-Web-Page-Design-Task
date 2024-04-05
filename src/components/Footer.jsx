import React from 'react';

function Footer() {
    return (
        <footer className="bg-white p-4 flex justify-end">
            <div className="flex gap-8 mr-20">
                <a href="#" className="text-gray-600 text-lg font-semibold hover:text-gray-800">Reference</a>
                <a href="#" className="text-gray-600 text-lg font-semibold hover:text-gray-800">PayPal.com</a>
                <a href="#" className="text-gray-600 text-lg font-semibold hover:text-gray-800">Privacy</a>
                {/* Show only on medium and large screens */}
                <a href="#" className="hidden sm:inline text-gray-600 text-lg font-semibold hover:text-gray-800">Support</a>
                <a href="#" className="hidden sm:inline text-gray-600 text-lg font-semibold hover:text-gray-800">Legal</a>
                <a href="#" className="hidden sm:inline text-gray-600 text-lg font-semibold hover:text-gray-800">Contact</a>
            </div>
        </footer>
    );
}

export default Footer;
