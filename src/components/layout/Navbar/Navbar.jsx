import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Button from "../../common/Button";
import Logo from "../../common/Logo";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`h-[70px] w-full px-6 md:px-10 flex items-center fixed z-50 transition-all duration-300
			${isScrolled ? "backdrop-blur-md bg-navy/70 shadow-lg" : "bg-transparent"}`}>
            <div className="flex-1">
                <Logo className="h-8 w-8 text-accent hover:text-accent/80 transition-colors" />
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-accent hover:text-accent/80 transition-colors"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}>
                {isMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>

            {/* Desktop Menu */}
            <div
                aria-label="Main navigation"
                className="hidden md:flex items-center gap-5 text-[13px]">
                <NavItems />
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 top-[70px] bg-light-navy/95 flex items-center justify-center md:hidden">
                    <div className="flex flex-col items-center gap-8 text-base">
                        <NavItems />
                    </div>
                </div>
            )}
        </nav>
    );
}

function NavItems() {
    return (
        <>
            <a
                href="#about"
                className="group flex items-center gap-1 hover:text-accent transition-colors">
                <span className="font-mono text-accent text-xs">01.</span>
                <span className="relative">
                    About
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all group-hover:w-full"></span>
                </span>
            </a>
            <a
                href="#experience"
                className="group flex items-center gap-1 hover:text-accent transition-colors">
                <span className="font-mono text-accent text-xs">02.</span>
                <span className="relative">
                    Experience
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all group-hover:w-full"></span>
                </span>
            </a>
            <a
                href="#work"
                className="group flex items-center gap-1 hover:text-accent transition-colors">
                <span className="font-mono text-accent text-xs">03.</span>
                <span className="relative">
                    Work
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all group-hover:w-full"></span>
                </span>
            </a>
            <a
                href="#contact"
                className="group flex items-center gap-1 hover:text-accent transition-colors">
                <span className="font-mono text-accent text-xs">04.</span>
                <span className="relative">
                    Contact
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all group-hover:w-full"></span>
                </span>
            </a>
            <Button
                text="Resume"
                href="/resume.pdf"
                variant="outline"
                size="sm"
                className="ml-4"
                aria-label="Download Resume"
            />
        </>
    );
}

export default Navbar;
