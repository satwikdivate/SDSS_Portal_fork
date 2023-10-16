import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="ngo-name">Swami Dayananda Saraswati Shakha</div>
                    <div className="social-icons">
                        <div>
                            <a href="https://instagram.com/swami_dayanand_saraswatishakha?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
                                <i class='bx bxl-instagram' ></i>
                                <h6>Instagram</h6>
                            </a>
                        </div>
                        <div>
                            <a href="https://www.facebook.com/your-ngo" target="_blank" rel="noopener noreferrer">
                                <i class='bx bxl-facebook-circle'></i>
                                <h6>Facebook</h6>
                            </a>
                        </div>
                        <div>
                            <a href="mailto:info@your-ngo.com">
                                <i class='bx bxl-gmail'></i>
                                <h6>Gmail</h6>
                            </a>
                        </div>

                    </div>
                </div>
            </div >
        </footer >
    );
};

export default Footer;
