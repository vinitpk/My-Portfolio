import crud from "../images/crud.png";
import ProBox from "./ProBox";

function Projects() {
  return (
    <>
      <section id="projects" className="project">
        <div className="container">
          <div className="project-content">
            <p>Portfolio</p>
            <h3>Each project is a unique piece of development 🧩</h3>

            <div className="projects-grid">
              <ProBox
                title="CRUD"
                img={crud}
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A repudiandae mollitia eligendi tenetur et optio officia iste voluptas. Impedit similique non recusandae facilis molestiae labore quia nam! Sunt, consequatur excepturi."
                techno1="Spring Boot"
                techno2="Java"
                code="https://github.com/vinitpk"
                demo="https://github.com/vinitpk"
                icon="🛠️"
              />

              <ProBox
                title="CRUD"
                img={crud}
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A repudiandae mollitia eligendi tenetur et optio officia iste voluptas. Impedit similique non recusandae facilis molestiae labore quia nam! Sunt, consequatur excepturi."
                techno1="Spring Boot"
                techno2="Java"
                code="https://github.com/vinitpk"
                demo="https://github.com/vinitpk"
                icon="🛠️"
                cName="reversed-proj"
              />

              <ProBox
                title="CRUD"
                img={crud}
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A repudiandae mollitia eligendi tenetur et optio officia iste voluptas. Impedit similique non recusandae facilis molestiae labore quia nam! Sunt, consequatur excepturi."
                techno1="Spring Boot"
                techno2="Java"
                code="https://github.com/vinitpk"
                demo="https://github.com/vinitpk"
                icon="🛠️"
              />

              <ProBox
                title="CRUD"
                img={crud}
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A repudiandae mollitia eligendi tenetur et optio officia iste voluptas. Impedit similique non recusandae facilis molestiae labore quia nam! Sunt, consequatur excepturi."
                techno1="Spring Boot"
                techno2="Java"
                code="https://github.com/vinitpk"
                demo="https://github.com/vinitpk"
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
