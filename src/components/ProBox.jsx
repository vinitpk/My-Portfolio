import React from "react";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";

const ProBox = (props) => {
    const {
        title,
        img,
        description,
        techno1,
        techno2,
        code,
        demo,
        icon,
        cName,
        imgemoji,
    } = props;
    // {`pro${cName ? ` ${cName}` : ""}`}
    return (
        <div className={`pro${cName ? ` ${cName}` : ""}`}>
            <div
                className={`pro__1 ${
                    cName === "reversed-proj" ? "reversed-proj" : ""
                }`}
            >
                <div className="pro__img img">
                    <img className="im" src={img} alt={title} />
                </div>
            </div>
            <div className="pro__1">
                <div className="pro__text h3">
                    <h3 className="h3">
                        {title}{" "}
                        {imgemoji && (
                            <img
                                src={imgemoji}
                                alt={title}
                                style={{
                                    marginLeft: "30px",
                                    justifySelf: "center",
                                    top: "4px",
                                    textAlign: "center",
                                    left: "60%",
                                    width: "6%",
                                }}
                            />
                        )}
                        {icon}
                    </h3>
                    <p>{description}</p>
                    <div className="stack">
                        <p>{techno1}</p>
                        <p>{techno2}</p>
                    </div>
                    <div className="links">
                        <a
                            href={code}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Source Code <IconBrandGithub />
                        </a>
                        <a href={demo} rel="noopener noreferrer">
                            Demo <IconExternalLink />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProBox;
