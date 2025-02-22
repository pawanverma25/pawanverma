import Email from "./Email";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SocialLinks from "./SocialLinks";

function Layout({ children }) {
    return (
        <div className="bg-navy min-h-screen">
            <Navbar />
            <Email />
            <main>{children}</main>
            <SocialLinks />
            <Footer />
        </div>
    );
}

export default Layout;
