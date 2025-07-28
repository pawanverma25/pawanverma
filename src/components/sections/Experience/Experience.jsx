import { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';

function Experience() {
    const [activeTab, setActiveTab] = useState(0);

    const experiences = [
        {
            company: "Tata Consultancy Services",
            title: "Systems Engineer",
            period: "Jan 2024 - Present",
            responsibilities: [
                "Develop scalable mobile applications and back-end services for India's premier financial institution using Spring Boot and React Native ensuring robust and modular architecture.",
                "Write modern, performant, maintainable code for a diverse array of client and internal projects",
                "Diagnosing and resolving production issues effectively, minimizing downtime and enhancing application reliability through detailed debugging and root cause analysis."
            ]
        }
    ];

    return (
        <section id="experience" className="py-24 max-w-3xl mx-auto px-4">
            <h2 className="flex items-center gap-3 text-2xl text-primary mb-16">
                <span className="font-mono text-accent text-lg">02.</span>
                Where I&apos;ve Worked
            </h2>
            
            <div className="flex flex-col md:flex-row gap-8">
                {/* Tabs */}
                <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible md:min-w-[140px]">
                    {experiences.map((exp, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`px-5 py-3 border-b-2 md:border-b-0 md:border-l-2 whitespace-nowrap transition-all duration-300
                                font-mono text-sm
                                ${activeTab === index 
                                    ? 'text-accent border-accent bg-light-navy/10' 
                                    : 'text-slate border-light-navy hover:text-accent hover:bg-light-navy/5'
                                }`}
                        >
                            {exp.company}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="py-2 relative flex-1 min-h-[350px]">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`absolute w-full transition-all duration-300 
                                ${activeTab === index 
                                    ? 'opacity-100 translate-x-0' 
                                    : 'opacity-0 translate-x-8 pointer-events-none'
                                }`}
                            style={{ 
                                transitionDelay: activeTab === index ? '200ms' : '0ms'
                            }}
                        >
                            <h3 className="text-xl text-primary mb-1">
                                {exp.title}
                                <span className="text-accent"> @ {exp.company}</span>
                            </h3>
                            <p className="font-mono text-xs text-slate mb-6">
                                {exp.period}
                            </p>
                            <ul className="space-y-5">
                                {exp.responsibilities.map((item, i) => (
                                    <li 
                                        key={i} 
                                        className="flex gap-3 text-slate/90 text-[15px] leading-relaxed transition-all duration-300"
                                        style={{ 
                                            transitionDelay: activeTab === index ? `${i * 100 + 300}ms` : '0ms',
                                            opacity: activeTab === index ? 1 : 0,
                                            transform: activeTab === index ? 'translateX(0)' : 'translateX(20px)'
                                        }}
                                    >
                                        <FiArrowRight className="text-accent flex-shrink-0 mt-1.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience; 