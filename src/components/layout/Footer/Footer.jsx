import PropTypes from "prop-types";
import * as FiIcons from "react-icons/fi";

function SocialIcon({ icon, url, name }) {
    const Icon = FiIcons[icon];
    return (
        <a
            href={url}
            aria-label={`Link to ${name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-accent hover:-translate-y-1 transition-all">
            <Icon size={20} />
        </a>
    );
}

SocialIcon.propTypes = {
    icon: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

const Footer = () => {
    return (
        <footer className="bg-navy text-accent py-4 text-center">
            <p>
                &copy; {new Date().getFullYear()} Pawan Verma. All rights
                reserved.
            </p>
        </footer>
    );
};

export default Footer;
