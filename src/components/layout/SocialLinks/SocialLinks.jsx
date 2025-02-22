import { FiGithub, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";

function SocialLinks() {
    return (
        <div className="hidden md:block fixed bottom-0 left-10 after:w-[1px] after:h-[90px] after:bg-secondary after:block after:mx-auto after:mt-5">
            <div className="flex flex-col gap-5 items-center text-secondary">
                <a href="#" className="hover:text-accent hover:-translate-y-1 transition-all">
                    <FiGithub size={20} />
                </a>
                <a href="#" className="hover:text-accent hover:-translate-y-1 transition-all">
                    <FiInstagram size={20} />
                </a>
                <a href="#" className="hover:text-accent hover:-translate-y-1 transition-all">
                    <FiTwitter size={20} />
                </a>
                <a href="#" className="hover:text-accent hover:-translate-y-1 transition-all">
                    <FiLinkedin size={20} />
                </a>
            </div>
        </div>
    );
}

export default SocialLinks; 