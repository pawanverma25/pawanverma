import Email from "./Email";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SocialLinks from "./SocialLinks";

function Layout({ children }) {
    return (
        <div className="bg-navy min-h-screen">
            <Navbar />
            <main className="px-6 md:px-10">{children}</main>
            <SocialLinks />
            <Email />
            <Footer />
        </div>
    );
}

export default Layout;
