import React from "react";

const Loader = () => {
    return (
        <div className="fixed inset-0 bg-navy flex items-center justify-center z-50">
            <div className="flex flex-col items-center">
                {/* Logo Container with Animation */}
                <div className="w-16 h-16 mb-8 animate-fadeIn">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 100"
                        className="text-accent">
                        <polygon
                            points="50 15, 85 85, 15 85"
                            className="fill-none stroke-current stroke-2"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Loader;
