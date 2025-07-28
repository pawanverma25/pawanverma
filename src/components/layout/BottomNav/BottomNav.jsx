import React, { useState } from "react";
import {
    HiHome,
    HiUser,
    HiBriefcase,
    HiCode,
    HiAcademicCap,
    HiMail,
} from "react-icons/hi";
import { Link } from "react-scroll";

const navItems = [
    { id: "hero", icon: HiHome, label: "Home" },
    { id: "about", icon: HiUser, label: "About" },
    { id: "experience", icon: HiBriefcase, label: "Experience" },
    { id: "projects", icon: HiCode, label: "Projects" },
    { id: "certifications", icon: HiAcademicCap, label: "Certificates" },
    { id: "contact", icon: HiMail, label: "Contact" },
];

const BottomNav = () => {
    const [activeSection, setActiveSection] = useState("hero");

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
            {/* Blur Background */}
            <div className="absolute inset-0 bg-navy/80 backdrop-blur-lg -z-10" />

            {/* Navigation Bar */}
            <nav className="flex items-center justify-between px-6 py-4">
                <div className="w-full grid grid-cols-3 gap-4">
                    {navItems.map(({ id, icon: Icon, label }) => (
                        <Link
                            key={id}
                            to={id}
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-100}
                            onSetActive={() => setActiveSection(id)}
                            className="flex flex-col items-center gap-1">
                            <div
                                className={`p-2 rounded-xl transition-all duration-300 ${
                                    activeSection === id
                                        ? "bg-accent text-navy scale-110"
                                        : "text-slate hover:text-accent"
                                }`}>
                                <Icon className="w-5 h-5" />
                            </div>
                            <span
                                className={`text-xs transition-colors duration-300 ${
                                    activeSection === id
                                        ? "text-accent"
                                        : "text-slate"
                                }`}>
                                {label}
                            </span>
                        </Link>
                    ))}
                </div>
            </nav>

            {/* Bottom Safe Area (for iOS) */}
            <div className="h-safe-area bg-navy/80 backdrop-blur-lg" />
        </div>
    );
};

export default BottomNav;
