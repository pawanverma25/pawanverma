import { email } from "../../../constants";

function Email() {
    return (
        <div className="hidden md:block fixed bottom-0 right-10 after:w-[1px] after:h-[90px] after:bg-secondary after:block after:mx-auto after:mt-5">
            <a
                href={"mailto:" + email}
                className="writing-vertical-rl font-mono text-secondary hover:text-accent hover:-translate-y-1 transition-all">
                {email}
            </a>
        </div>
    );
}

export default Email;
