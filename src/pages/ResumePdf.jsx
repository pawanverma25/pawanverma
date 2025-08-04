import React from "react";

function ResumePdf() {
    return (
        <div className="w-full h-screen flex justify-center items-center bg-navy">
            <iframe
                src="/resume.pdf"
                title="Resume PDF"
                className="w-full h-full"
                style={{ border: "none" }}
            />
        </div>
    );
}

export default ResumePdf;