import React from 'react';

function AboutUs() {
  return (
    <div className="bg-white py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold mb-4">About Max Supermarket</h1>
        <p className="text-gray-700 leading-relaxed">
          Max Supermarket is your one-stop destination for all your grocery shopping needs. With a commitment to quality, convenience, and affordability, we aim to provide you with the best shopping experience from the comfort of your home.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          Our mission is to make grocery shopping hassle-free for you. We strive to offer a wide selection of fresh and high-quality products, deliver them to your doorstep promptly, and ensure your satisfaction with every order.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">Why Choose Max Supermarket?</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
          <li>Wide Range of Products: We offer a diverse range of grocery items, including fresh produce, pantry staples, and household essentials.</li>
          <li>Quality Assurance: We source our products from trusted suppliers to ensure you receive only the best quality.</li>
          <li>Convenient Shopping: Shop from the comfort of your home, and we'll deliver your groceries right to your doorstep.</li>
          <li>Affordability: We strive to provide competitive prices and special offers to help you save on your grocery bills.</li>
          <li>Excellent Customer Service: Our customer support team is here to assist you with any questions or concerns you may have.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-3">Contact Us</h2>
        <p className="text-gray-700 leading-relaxed">
          Have questions or feedback? We'd love to hear from you!
        </p>
        <p className="text-gray-700 leading-relaxed">
          Email: <a href="mailto:maxsupermarket4@gmail.com" className="text-blue-500 hover:underline">info@maxsupermarket.com</a><br />
          Phone: <a href="tel:+1234567890" className="text-blue-500 hover:underline">+91 9807564231</a>
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
