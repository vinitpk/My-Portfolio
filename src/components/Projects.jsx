import ighomepage from "../images/Instagram-HomePage.png";
import igicon from "../images/Instagram-icon.png";
import crud from "../images/crud.png";
import ProBox from "./ProBox";

function Projects() {
    return (
        <>
            <section id="projects" className="project">
                <div className="container">
                    <div className="project-content">
                        <p>Portfolio</p>
                        <h3>Showcasing My Work 🧩</h3>

                        <div className="projects-grid">
                            <ProBox
                                title="Instagram Clone"
                                img={ighomepage}
                                description="Instagram clone employs Spring Boot, Spring Security, Java, React, MySQL, deployed on an AWS. User functionalities like creation, login, post, story, and follower/following management, it mirrors the popular social media platform. With robust security measures and seamless integration of frontend and backend technologies, it ensures a dynamic and secure user experience on a scalable cloud infrastructure."
                                techno1="Spring Boot"
                                techno2="Java"
                                code="https://github.com/vinitpk/Instagram-Springboot-Backend"
                                demo="http://43.205.235.133:82/login"
                                imgemoji={igicon}
                            />

                            <ProBox
                                title="CRUD"
                                img={crud}
                                description="
                                CRUD Spring Boot Java React MySQL application deployed on an AWS EC2 instance facilitates seamless management of data operations. Leveraging Spring Boot's robustness, React's dynamic frontend, and MySQL's relational database capabilities, it enables Create, Read, Update, and Delete functionalities. Deployed on AWS EC2, catering to diverse data management needs efficiently."
                                techno1="Spring Boot"
                                techno2="Java"
                                code="https://github.com/vinitpk/CRUD-SpringBoot-Application"
                                demo="http://43.205.235.133:81/"
                                icon="🛠️"
                                cName="reversed-proj"
                            />
                        </div>
                    </div>
                    {/* <h2 className="new-projects">New projects coming soon.. 🤠</h2> */}
                </div>
            </section>
        </>
    );
}

export default Projects;
