// import AboutImg from "../images/about-img.webp";
import AboutImg from "../images/java image.png";
import RoundedText from "../images/vinit-text.svg";
import WorkingEmoji from "../images/working-late.png";

function AboutMe() {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="img-side">
              <img src={WorkingEmoji} alt="emoji" className="work-emoji" />
              <img src={AboutImg} alt="mee" className="img-side__main-img" />
              <span>
                <img src={RoundedText} alt="text" />
              </span>
            </div>
            <div className="text-side">
              <h3>About me</h3>
              <h4>
                Java Developer <br /> based in Bengaluru, India.📍
              </h4>
              <p>
                Hi, I'm Vinit Kelginmane, a Java Developer specializing in
                Spring Boot. I'm passionate about crafting and developing robust
                backend solutions to ensure a clean and efficient experience..
                <br />
                <br />I work with technologies such as Spring Boot, Java, and
                MySQL to deliver robust and scalable applications. Let's build
                something great together!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
