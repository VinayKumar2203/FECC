import React from 'react';
import '../styles/Footer.css'; // Import the CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Tata MarketPlace Section */}
                <div className="footer-section">
                    <h4>Tata MarketPlace</h4>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Sell With Us</a></li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Affiliates</a></li>
                        <li><a href="#">Sitemap</a></li>
                    </ul>
                </div>

                {/* Customer Service Section */}
                <div className="footer-section">
                    <h4>Customer Service</h4>
                    <ul>
                        <li><a href="#">Shopping</a></li>
                        <li><a href="#">Offers & Promotions</a></li>
                        <li><a href="#">Payments</a></li>
                        <li><a href="#">Cancellation</a></li>
                        <li><a href="#">Returns & Refunds</a></li>
                        <li><a href="#">CliQ And PiQ</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>

                {/* My Tata CLiQ Section */}
                <div className="footer-section">
                    <h4>My Tata CLiQ</h4>
                    <ul>
                        <li><a href="#">My Account</a></li>
                        <li><a href="#">My Orders</a></li>
                        <li><a href="#">My Shopping Bag</a></li>
                        <li><a href="#">My Wishlist</a></li>
                    </ul>
                </div>

                {/* Tata CLiQ Offerings Section */}
                <div className="footer-section">
                    <h4>Tata CLiQ Offerings</h4>
                    <ul>
                        <li><a href="#">Watches for Men</a></li>
                        <li><a href="#">Campus Shoes</a></li>
                        <li><a href="#">Sneakers for Women</a></li>
                        <li><a href="#">Digital Watches</a></li>
                        <li><a href="#">Puma Shoes</a></li>
                        <li><a href="#">Skechers</a></li>
                        <li><a href="#">Malabar Gold</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
