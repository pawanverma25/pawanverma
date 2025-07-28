import React from "react";
import Logo from "../Logo";

const Loader = () => {
    return (
        <div className="fixed inset-0 bg-navy flex items-center justify-center z-50">
            <div className="flex flex-col items-center">
                {/* Logo Container with Animation */}
                <div className="h-56 w-56 mb-8 animate-fadeIn">
                    <Logo className="h-full w-full text-accent fill-accent" />
                </div>
            </div>
        </div>
    );
};

export default Loader;
