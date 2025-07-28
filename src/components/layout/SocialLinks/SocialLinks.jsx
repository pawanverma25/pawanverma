import { socialLinks } from "../../../constants";
function SocialLinks() {
    return (
        <div className="hidden md:block fixed bottom-0 left-10 after:w-[1px] after:h-[90px] after:bg-secondary after:block after:mx-auto after:mt-5">
            <div className="flex flex-col gap-5 items-center text-secondary">
                {socialLinks.map((element, index) => {
                    <a
                        key={index}
                        href={element.url}
                        className="hover:text-accent hover:-translate-y-1 transition-all">
                        <element.icon size={20} />
                    </a>;
                })}
            </div>
        </div>
    );
}

export default SocialLinks;
