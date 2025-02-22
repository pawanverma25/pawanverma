import ErrorBoundary from "./components/common/ErrorBoundary";
import Layout from "./components/layout";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

function App() {
    return (
        <ErrorBoundary>
            <Layout>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Contact />
            </Layout>
        </ErrorBoundary>
    );
}

export default App;
