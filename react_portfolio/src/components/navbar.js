import React from "react";
import "../components/Views/style.css";

function NavBar() {
    return (
        <div>
            <nav className="navbar">

            <a href="/" className="btn no-border">
                    <button style={{ backgroundColor: "rgb(32, 32, 212)" }} className="btn btn-dark no-border rounded-pill">Home</button>
                </a>

                <form action="https://www.linkedin.com/in/brockehnert/" method="get" target="_blank"
                    className="btn no-border">
                    <button style={{ backgroundColor: "rgb(32, 32, 212)" }} type="submit"
                        className="btn btn-dark  no-border  rounded-pill">Linkedin</button>
                </form>

                <form action="https://github.com/BEhnert" method="get" target="_blank" className="btn no-border">
                    <button style={{ backgroundColor: "rgb(32, 32, 212)" }} type="submit"
                        className="btn btn-dark  no-border rounded-pill">Github</button>
                </form>

                <form action="https://mailto:behnert77@gmail.com" method="get" target="_top" className="btn no-border">
                    <button style={{ backgroundColor: "rgb(32, 32, 212)" }} type="submit"
                        className="btn btn-dark no-border rounded-pill">Email</button>
                </form>

                <a href="resume" className="btn no-border">
                    <button style={{ backgroundColor: "rgb(32, 32, 212)" }} className="btn btn-dark no-border rounded-pill">View My
              Resume</button>
                </a>

                <a href="projects" className="btn no-border">
                    <button style={{ backgroundColor: "rgb(32, 32, 212)" }} className="btn btn-dark no-border rounded-pill">View My
          Projects</button>
                </a>
            </nav>

        </div>

    )
};

export default NavBar;