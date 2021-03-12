import React from "react";
import './style.css';


function Home() {
  return (
    <div>
      <div className="App">
        <head>
          <meta charset="utf-8"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link href="https://fonts.googleapis.com/css2?family=Cabin&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300&family=Rubik&display=swap" rel="stylesheet"></link>

          <title>Brock Ehnert</title>

        </head>

        <div className="col-md-10 m-auto">
          <div className="jumbotron" style={{background: "rgba(171, 196, 206, 0.85)"}}>
            <div className="container-fluid">
              <h1 className="display-8" style={{textAlign: "center"}}>Brock Ehnert</h1>
              <p className="lead" style={{fontSize: "25px", fontWeight: "450"}}>Full-stack web developer with a Bachelor's degree in Management Information Systems and Minor in Computer Science (2000) from Worcester Polytechnic Institute.
              After 20 years of Functional and Technical Retail industry consulting Oracle Retail implementations, decided to expand technical expertise by obtaining a Full Stack Web Development
              certificate from the University of Minnesota.  Over the course, I learned multiple languages and coding standards in HTML, CSS, JavaScript/NodeJS, mySQL, React.js, and more.
              Creative problem-solver and engaging team player on many clients serving as liaison between client, software provider, internal consulting team, other 3rd party integrators, and management.
         Driven to utilize these newly acquired skills to bring value by testing/refactoring code, developing/refining applications, and collaborating with a team to deliver effective, efficient, and robust applications to clients.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Home;
