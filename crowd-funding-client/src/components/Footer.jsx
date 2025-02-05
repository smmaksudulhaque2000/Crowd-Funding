import { FaFacebook, FaGoogle, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-gray-500 flex flex-col justify-center items-center gap-5">
            <div className="flex gap-5 pt-10">
                <a href="https://www.facebook.com/maksudulhaque2000" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-3xl" />
                </a>
                <a href="https://www.instagram.com/maksudulhaque2000/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-3xl" />
                </a>
                <a href="https://myaccount.google.com/?hl=en&utm_source=OGB&utm_medium=act&gar=WzEyMF0" target="_blank" rel="noopener noreferrer">
                    <FaGoogle className="text-3xl" />
                </a>
                <a href="https://x.com/smmaksudulhaque" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-3xl" />
                </a>
                <a href="https://www.youtube.com/@smmaksudulhaque" target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="text-3xl" />
                </a>
            </div>
            <div className="flex gap-5 py-5">
                <a className="font-bold" href="#">About Us</a>
                <a className="font-bold" href="#">Our Services</a>
                <a className="font-bold" href="#">Privacy Policy</a>
                <a className="font-bold" href="#">FAQ</a>
            </div>
            <div className="py-2">
                <h3 className="text-xs font-bold"><span className="font-bold">©</span> Crowd Funding Website, 2024. All rights reserved.</h3>
            </div>
        </div>
    );
};

export default Footer;
