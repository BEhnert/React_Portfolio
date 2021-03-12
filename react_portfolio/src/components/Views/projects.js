import React from "react";
import './style.css';

function Projects() {
    return (
        <div>
            <div className="App">
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@100&display=swap" rel="stylesheet"></link>

                <title>Brock Ehnert</title>

                <body>

                    <div className="col-md-10 m-auto">
                        <div className="jumbotron" style={{ background: "rgba(171, 196, 206, 0.85)" }}>
                            <div className="container-fluid">
                                <h1>Brock's Projects</h1>
                                <p className="lead">
                                    <div className="container">
                                        <h2>FairWeather Adventures</h2>
                                        <p style={{ fontSize: "20px", color: "black", fontWeight: "450" }}>The Fairweather Adventures app solves the real world problem
                                        for short notice travelers who are looking for National Park information and also want to know
                                        the current weather and 5-day forecast for their chosen park adventure. The app integrates data
                                        received from multiple server-side API requests (Open Weather Map API
                                        https://openweathermap.org/ and , National Park Services API
                                        https://www.nps.gov/subjects/developer/guides.htm ) to solve this problem. The motivation to
                                        build this project was to help clients achieve their travel goals by having an accessible
                                        website that is easy to navigate.</p>
                                        <form action="https://github.com/BEhnert/Fairweather-Adventures" method="get" target="_blank"
                                            className="btn no-border">
                                            <button style={{ backgroundColor: "rgb(32, 32, 212)" }} type="submit"
                                                className="btn btn-dark  no-border rounded-pill">Github: Project 1 - FairWeather
                                                Adventures
                        </button>
                                        </form>
                                        <form action="https://jrubio1995.github.io/Fairweather-Adventures/index.html" method="get"
                                            target="_blank" className="btn no-border">
                                            <button style={{ backgroundColor: "rgb(32, 32, 212)" }} type="submit"
                                                className="btn btn-dark  no-border rounded-pill">FairWeather Adventures</button>
                                        </form>
                                    </div>
                                    <div className="container">
                                        <h2>Household Optimizer</h2>
                                        <p style={{ fontSize: "20px", color: "black", fontWeight: "450" }}>Simple application that allows users keep track of essentials in their household. This app was made using NodeJS, Express, Handlebars, Sequelize ORM with MySQL Dialect, Passport package with Local Strategy, Jquery Ajax requests, Bootstrap CSS Library, and custom CSS stylings.</p>
                                        <form action="https://github.com/BEhnert/project-2" method="get" target="_blank"
                                            className="btn no-border">
                                            <button style={{ backgroundColor: "rgb(32, 32, 212)" }} type="submit"
                                                className="btn btn-dark  no-border rounded-pill">Github: Project 2 - Household Optimizer
                        </button>
                                        </form>
                                        <form action="https://vast-mesa-04959.herokuapp.com/" method="get"
                                            target="_blank" className="btn no-border">
                                            <button style={{ backgroundColor: "rgb(32, 32, 212)" }} type="submit"
                                                className="btn btn-dark  no-border rounded-pill">Household Optimizer</button>
                                        </form>
                                    </div>
                                    <div className="container">
                                        <h2>Twin Cities Food Share</h2>
                                        <p style={{ fontSize: "20px", color: "black", fontWeight: "450" }}>Application to allow easy sharing of food supplies in the Twin Cities<br></br>
                                        As a user:
I want to find free meals, produce, and groceries near me so that I can have access to food in the Twin Cities. I can search by areas locate the area by zooming on the map When I click on the pin on the map It shows me the description, date added, and the donor It gives me an option to get direction an option to share

As a Registered User
I can drop a pin for the product's: Location Date Quantity I can delete the pin from the map when the product is not available anymore.</p>
                                        <form action="https://github.com/BEhnert/tc-foodshare-1" method="get" target="_blank"
                                            className="btn no-border">
                                            <button style={{ backgroundColor: "rgb(32, 32, 212)" }} type="submit"
                                                className="btn btn-dark  no-border rounded-pill">Github: Project 3 - Twin Cities Food Share
                        </button>
                                        </form>
                                        <form action="https://tc-food-share.herokuapp.com/" method="get"
                                            target="_blank" className="btn no-border">
                                            <button style={{ backgroundColor: "rgb(32, 32, 212)" }} type="submit"
                                                className="btn btn-dark  no-border rounded-pill">Twin Cities Food Share</button>
                                        </form>
                                    </div>
                                    <div className="container">
                                        <h2>Coding Quiz</h2>
                                        <p style={{ fontSize: "20px", color: "black", fontWeight: "450" }}>This app is designed to be a timed code quiz where user is able to select from multiple choice answers. After getting through the quiz, the user score will be displayed according to how many correct/incorrect answers they gave during the 60 second quiz. At that time, they can then enter initials and submit to store their score in the high scores.</p>
                                        <form action=" https://github.com/BEhnert/4-Coding_Quiz" method="get" target="_blank"
                                            className="btn no-border">
                                            <button style={{ backgroundColor: "rgb(32, 32, 212)" }} type="submit"
                                                className="btn btn-dark  no-border rounded-pill">Github: Coding Quiz</button>
                                        </form>
                                        <form action="https://behnert.github.io/4-Coding_Quiz/" method="get" target="_blank"
                                            className="btn no-border">
                                            <button style={{ backgroundColor: "rgb(32, 32, 212)" }} type="submit"
                                                className="btn btn-dark  no-border rounded-pill">Coding Quiz</button>
                                        </form>
                                    </div>
                                    <div className="container">
                                        <h2>Day Planner</h2>
                                        <p style={{ fontSize: "20px", color: "black", fontWeight: "450" }}>Web application for current day's activities during business hours of 9-5pm local time.  This DayPlanner will allow user to save any activities by the hour in daily routine.</p>
                                        <form action=" https://github.com/BEhnert/5-Day_Planner" method="get" target="_blank"
                                            className="btn no-border">
                                            <button style={{ backgroundColor: "rgb(32, 32, 212)" }} type="submit"
                                                className="btn btn-dark  no-border rounded-pill">Github: Day Planner</button>
                                        </form>
                                        <form action="https://behnert.github.io/5-Day_Planner/" method="get" target="_blank"
                                            className="btn no-border">
                                            <button style={{ backgroundColor: "rgb(32, 32, 212)" }} type="submit"
                                                className="btn btn-dark  no-border rounded-pill">Day Planner</button>
                                        </form>
                                    </div>
                                    <div className="container">
                                        <h2>Note Taker</h2>
                                        <p style={{ fontSize: "20px", color: "black", fontWeight: "450" }}>This application will allow users to create, view, and delete notes</p>
                                        <form action="https://github.com/BEhnert/11-Note_Taker" method="get" target="_blank"
                                            className="btn no-border">
                                            <button style={{ backgroundColor: "rgb(32, 32, 212)" }} type="submit"
                                                className="btn btn-dark  no-border rounded-pill">Github: Note Taker</button>
                                        </form>
                                        <form action="https://evening-ravine-10572.herokuapp.com/" method="get" target="_blank"
                                            className="btn no-border">
                                            <button style={{ backgroundColor: "rgb(32, 32, 212)" }} type="submit"
                                                className="btn btn-dark  no-border rounded-pill">Note Taker</button>
                                        </form>
                                    </div>
                                    <div className="container">
                                        <h2>Fitness Tracker</h2>
                                        <p style={{ fontSize: "20px", color: "black", fontWeight: "450" }}> This application will allow users to view create and track daily workouts. They can also log multiple exercises in a workout on a given day. It allows user to track both resistance and cardio workouts. For resistance, the user can input name, type, weight, sets, reps, and duration of exercise. For cardio, user can track duration and distance traveled. The purpose of application is to help users reach their fitness goals more quickly by actively tracking their workout progress.
                    </p>
                                        <form action="https://github.com/BEhnert/17-Fitness-Tracker" method="get" target="_blank"
                                            className="btn no-border">
                                            <button style={{ backgroundColor: "rgb(32, 32, 212)" }} type="submit"
                                                className="btn btn-dark  no-border rounded-pill">Github: Fitness Tracker</button>
                                        </form>
                                        <form action="https://young-tor-03929.herokuapp.com/" method="get" target="_blank"
                                            className="btn no-border">
                                            <button style={{ backgroundColor: "rgb(32, 32, 212)" }} type="submit"
                                                className="btn btn-dark  no-border rounded-pill">Fitness Tracker</button>
                                        </form>
                                    </div>
                                </p>
                            </div>
                        </div>
                    </div>
                </body>
            </div>
        </div>


    );
}

export default Projects;


