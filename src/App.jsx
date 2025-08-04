import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Certifications from "./components/sections/Certifications";
import Loader from "./components/common/Loader/Loader";
import ResumePdf from "./pages/ResumePdf";

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
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        isLoading ? (
                            <Loader />
                        ) : (
                            <Layout>
                                <Hero />
                                <About />
                                <Experience />
                                <Projects />
                                {/* <Certifications /> */}
                                <Contact />
                            </Layout>
                        )
                    }
                />
                <Route path="/resumepdf" element={<ResumePdf />} />
            </Routes>
        </Router>
    );
}

export default App;
