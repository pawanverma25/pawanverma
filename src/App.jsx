import React, { useState, useEffect } from "react";
import Layout from "./components/layout";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Certifications from "./components/sections/Certifications";
import Loader from "./components/common/Loader/Loader";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <Layout>
                    <Hero />
                    <About />
                    <Experience />
                    <Projects />
                    <Certifications />
                    <Contact />
                </Layout>
            )}
        </>
    );
}

export default App;
