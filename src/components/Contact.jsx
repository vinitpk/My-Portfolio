import { IconMail, IconMapSearch, IconDownload } from "@tabler/icons-react";

function Contact() {
    return (
        <>
            <section id="contact" className="contact">
                <div className="container">
                    <div className="contact__content">
                        <div className="contact__title">
                            <p>contact</p>
                            <h3>Don't be shy! Hit me up! 👇</h3>
                        </div>
                        <div className="contact__icons">
                            <div className="contact__icon-box">
                                <span>
                                    <IconMapSearch width={30} height={30} />
                                </span>
                                <div className="contact__info">
                                    <h3>Location</h3>
                                    <p>Bengaluru, India</p>
                                </div>
                            </div>

                            <div className="contact__icon-box">
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="mailto:vinitpk00@gmail.com"
                                >
                                    <span>
                                        <IconMail width={30} height={30} />
                                    </span>
                                </a>

                                <div className="contact__info">
                                    <h3>Mail</h3>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="mailto:vinitpk00@gmail.com"
                                    >
                                        vinitpk00@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div
                                className="contact__icon-box"
                                style={{ cursor: "pointer" }}
                            >
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://drive.google.com/file/d/1WzvarLunePiB1OeQSErKrIGIZ9Paue1M/view?usp=drive_link"
                                >
                                    <span>
                                        <IconDownload width={30} height={30} />
                                    </span>
                                </a>
                                <div className="contact__info">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://drive.google.com/file/d/1WzvarLunePiB1OeQSErKrIGIZ9Paue1M/view?usp=drive_link"
                                    >
                                        <p>Resume</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
