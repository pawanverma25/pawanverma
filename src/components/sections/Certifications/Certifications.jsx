import React, { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const certifications = [
    {
        id: 1,
        image: "/path-to-sanji-image.jpg",
        title: "Certification 1",
        issuer: "Issuing Organization 1",
        date: "January 2024",
    },
    // Add more certifications as needed
];

function Certifications() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === certifications.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === certifications.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? certifications.length - 1 : prevIndex - 1
        );
    };

    return (
        <section id="certifications" className="py-24 max-w-5xl mx-auto px-6">
            <h2 className="flex items-center gap-2 text-3xl font-bold text-primary mb-12">
                <span className="font-mono text-accent text-lg">05.</span>
                Certifications
            </h2>

            <div className="relative group">
                {/* Carousel Container */}
                <div className="overflow-hidden rounded-lg shadow-lg">
                    <div
                        className="flex transition-transform duration-500 ease-out"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                        }}>
                        {certifications.map((cert) => (
                            <div key={cert.id} className="w-full flex-shrink-0">
                                <div className="relative aspect-video bg-light-navy">
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy p-6">
                                        <h3 className="text-xl font-bold text-primary">
                                            {cert.title}
                                        </h3>
                                        <p className="text-accent">
                                            {cert.issuer}
                                        </p>
                                        <p className="text-secondary text-sm">
                                            {cert.date}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-navy/50 hover:bg-navy/70 text-accent p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Previous slide">
                    <HiChevronLeft size={24} />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-navy/50 hover:bg-navy/70 text-accent p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Next slide">
                    <HiChevronRight size={24} />
                </button>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-4">
                    {certifications.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all ${
                                index === currentIndex
                                    ? "bg-accent w-4"
                                    : "bg-accent/30"
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Certifications;
