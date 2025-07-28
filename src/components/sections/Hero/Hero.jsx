import React from "react";
import Button from "../../../components/common/Button";

function Hero() {
    return (
        <section
            id="hero"
            className="flex-1 flex items-center justify-center h-screen">
            <div className="lg:w-[65%] md:w-[70%] w-[88%] my-auto">
                <p className="code-text text-[18px] mb-5 tracking-normal">
                    Hi, my name is
                </p>
                <h1 className="lg:text-7xl md:text-6xl text-[3.5rem] leading-[4rem] lg:leading-[6rem] font-black text-primary">
                    Pawan Verma.
                </h1>
                <h1 className="lg:text-7xl md:text-6xl text-[3.5rem] mb-5 font-black text-secondary">
                    I build things for the web.
                </h1>
                <p className="text-p lg:w-[60%] w-[80%] lg:mb-18 mb-14 text-secondary2">
                    I&apos;m a software engineer specializing in building (and
                    occasionally designing) exceptional digital experiences.
                    Currently, I&apos;m focused on building secure, robust and
                    human-centered products at
                    <a href="#" className="link">
                        TCS
                    </a>
                    .
                </p>
                <Button
                    text="Connect with me!"
                    innerClassName="px-8 py-4"
                    href="mailto:pawanashokverma@gmail.com"
                />
            </div>
        </section>
    );
}

export default Hero;
