import { sanji } from "../../../assets/";

function About() {
	return (
		<section
			id="about"
			className="min-h-screen lg:w-[60%] md:w-[80%] w-[90%] mx-auto flex flex-col">
			<div className="flex flex-col items-center justify-center gap-11 h-full my-[100px]">
				<div className="flex gap-3 w-full items-center">
					<h1 className="code-text text-xl">01.</h1>
					<h1 className="text-primary font-bold text-3xl">
						About Me
					</h1>
					<div className="h-[1px] bg-secondary3 opacity-30 w-full lg:w-[300px] md:w-[300px]"></div>
				</div>
				<div className="flex gap-7 flex-wrap">
					<div className="flex-[3] flex flex-col gap-4 text-secondary3">
						<p className="text-p">
							Hello! My name is Brittany and I enjoy creating
							things that live on the internet. My interest in web
							development started back in 2012 when I decided to
							try editing custom Tumblr themes — turns out hacking
							together a custom reblog button taught me a lot
							about HTML & CSS!
						</p>
						<p className="text-p">
							Fast-forward to today, and I&apos;ve had the
							privilege of working at{" "}
							<a
								href="#"
								className="link">
								an advertising agency
							</a>
							,{" "}
							<a
								href="#"
								className="link">
								a start-up
							</a>
							,{" "}
							<a
								href="#"
								className="link">
								a huge corporation
							</a>
							, and{" "}
							<a
								href="#"
								className="link">
								a student-led design studio
							</a>
							. My main focus these days is building accessible,
							inclusive products and digital experiences at{" "}
							<a
								href="#"
								className="link">
								Upstatement
							</a>{" "}
							for a variety of clients.
						</p>
						<p className="text-p">
							I also recently{" "}
							<a
								href="#"
								className="link">
								launched a course
							</a>
							{""} that covers everything you need to build a web
							app with the Spotify API using Node & React.
						</p>
						<p className="text-p">
							Here are a few technologies I&apos;ve been working
							with recently:
						</p>
						<ul className="mt-5 list">
							<li className="list-items text-secondary">
								JavaScript (ES6+)
							</li>
							<li className="list-items text-secondary">
								TypeScript
							</li>
							<li className="list-items text-secondary">React</li>
							<li className="list-items text-secondary">
								Eleventy
							</li>
							<li className="list-items text-secondary">
								Node.js
							</li>
							<li className="list-items text-secondary">
								WordPress
							</li>
						</ul>
					</div>
					<div className="flex-[2]">
						<div className="group relative mx-5 max-w-[300px] min-w-[100px] headshot">
							<img
								className="rounded grayscale group-hover:grayscale-0 transition-all duration-[600ms] ease-in-out"
								src={sanji}
								alt="Headshot"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
