import PropTypes from "prop-types";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Button from "../../../components/common/Button";
import { otherProjects, projects } from "../../../constants/projects";

function ProjectCard({
    title,
    description,
    tech,
    github,
    external,
    image,
    isReverse,
}) {
    return (
        <div
            className={`relative grid items-center gap-4 ${
                isReverse
                    ? "md:grid-cols-[1fr_1.5fr]"
                    : "md:grid-cols-[1.5fr_1fr]"
            }`}>
            <div className={`relative z-10 ${isReverse ? "md:order-2" : ""}`}>
                <h3 className="text-2xl font-bold text-primary mb-4">
                    {title}
                </h3>
                <div className="bg-light-navy p-6 rounded-lg text-light-slate mb-4">
                    <p>{description}</p>
                </div>
                <ul className="flex flex-wrap gap-3 mb-4">
                    {tech.map((item, index) => (
                        <li
                            key={index}
                            className="font-mono text-sm text-slate">
                            {item}
                        </li>
                    ))}
                </ul>
                <div className="flex items-center gap-6">
                    {github && (
                        <Button
                            text={<FiGithub size={20} />}
                            href={github}
                            variant="minimal"
                            className="hover:translate-y-[-2px]"
                            aria-label={`View source code for ${title}`}
                        />
                    )}
                    {external && (
                        <Button
                            text={<FiExternalLink size={20} />}
                            href={external}
                            variant="minimal"
                            className="hover:translate-y-[-2px]"
                            aria-label={`View live demo of ${title}`}
                        />
                    )}
                </div>
            </div>
            <div className={`relative ${isReverse ? "md:order-1" : ""}`}>
                <div className="relative aspect-video overflow-hidden rounded-lg">
                    <img
                        src={image}
                        alt={title}
                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                            e.target.src = "/placeholder.png";
                            e.target.onerror = null;
                        }}
                    />
                    <div className="absolute inset-0 bg-navy/50 hover:bg-transparent transition-colors duration-300" />
                </div>
            </div>
        </div>
    );
}

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    github: PropTypes.string,
    external: PropTypes.string,
    image: PropTypes.string.isRequired,
    isReverse: PropTypes.bool,
};

function NoteworthyProjectCard({ title, description, tech, github, external }) {
    return (
        <div className="bg-light-navy p-8 rounded-lg hover:translate-y-[-4px] transition-all">
            <div className="flex justify-between items-start mb-7">
                <div className="text-accent">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-10 h-10">
                        <title>Folder</title>
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                </div>
                <div className="flex gap-4">
                    {github && (
                        <Button
                            text={<FiGithub size={20} />}
                            href={github}
                            variant="minimal"
                            className="hover:translate-y-[-2px]"
                            aria-label={`View source code for ${title}`}
                        />
                    )}
                    {external && (
                        <Button
                            text={<FiExternalLink size={20} />}
                            href={external}
                            variant="minimal"
                            className="hover:translate-y-[-2px]"
                            aria-label={`View live demo of ${title}`}
                        />
                    )}
                </div>
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2 hover:text-accent">
                <a href={external || github}>{title}</a>
            </h3>
            <p className="text-light-slate text-sm mb-4">{description}</p>
            <ul className="flex flex-wrap gap-3 font-mono text-xs text-slate">
                {tech.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

NoteworthyProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    github: PropTypes.string,
    external: PropTypes.string,
};

function Projects() {
    return (
        <>
            <section id="work" className="py-20 max-w-6xl mx-auto px-4">
                <h2 className="flex items-center gap-2 text-2xl text-primary mb-10">
                    <span className="font-mono text-accent">03.</span>
                    Some Things I&apos;ve Built
                </h2>
                <div className="space-y-32">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </section>

            <section className="py-20 max-w-6xl mx-auto px-4">
                <h2 className="text-2xl text-primary text-center mb-10">
                    Other Noteworthy Projects
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {otherProjects.map((project, index) => (
                        <NoteworthyProjectCard key={index} {...project} />
                    ))}
                </div>
            </section>
        </>
    );
}

export default Projects;
