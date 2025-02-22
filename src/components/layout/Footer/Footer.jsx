import PropTypes from 'prop-types';
import * as FiIcons from 'react-icons/fi';
import { socialLinks } from '../../../constants';

function SocialIcon({ icon, url, name }) {
    const Icon = FiIcons[icon];
    return (
        <a
            href={url}
            aria-label={`Link to ${name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-accent hover:-translate-y-1 transition-all"
        >
            <Icon size={20} />
        </a>
    );
}

SocialIcon.propTypes = {
    icon: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

function Footer() {
    return (
        <footer className="py-6 px-4 text-center">
            {/* Mobile Social Links */}
            <div className="md:hidden flex justify-center gap-6 mb-4">
                {socialLinks.map((social) => (
                    <SocialIcon key={social.name} {...social} />
                ))}
            </div>

            <div className="font-mono text-xs text-slate/70 space-y-2">
                <a 
                    href="https://github.com/bchiang7/v4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                >
                    <div>Designed by Brittany Chiang</div>
                    <div>Built by Pawan Verma</div>
                </a>
            </div>
        </footer>
    );
}

export default Footer; 