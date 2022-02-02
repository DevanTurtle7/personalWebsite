import '../style/Projects.css';
import { Component } from 'react';
import ProjectCarousel from '../components/ProjectCarousel';
import ProjectDisplay from '../components/ProjectDisplay';

const highlightedProjects = [
    {
        title: "Artist Portfolio",
        image: "xsjScreenshot.png",
        description: ["Desc"],
        tags: ["ReactJS", "Firebase", "Web Development"],
        githubLink: "https://github.com/DevanTurtle7/xavier-portfolio"
    }, {
        title: "Corner Clerk",
        image: "clayhackScreenshot.png",
        shadow: true,
        description: [
            `Corner Clerk is an Android and iOS app that was developed to
            make grocery shopping more convenient for college students. The app
            displays a list of all the available products at RIT's corner store and
            their price. Users can add items to their cart, while the app keeps track
            of how much money they have left. The app converts meal swipes into
            dollars, making it much easier to keep track of spending.`,
            `The app was developed during a hackathon with a colleague. We chose to
            build the app using Flutter, because allowed us rapidly design and test
            the app for both Android and iOS. After the hackathon, we shipped
            multiple version to Android users.`,
        ],
        tags: ["Flutter", "Firestore", "Mobile Development"],
        githubLink: "https://github.com/DevanTurtle7/clayHack2020"
    }, {
        title: "Genetic Algorithm",
        image: "geneticAlgorithmScreenshot.png",
        description: [
            `This genetic algorithm is a python program. I was inspired to
        build this program after watching a lecture on genetic algorithms from
        Fullstack Academy. This project uses object oriented concepts in python,
        allowing for easy expansion in the future.`,
            `The algorithm works by using evolutionary concepts found in nature such as
        survival of the fittest. Each “organism” has their own unique DNA, which they
        inherit from their parents. Each generation the “fittest” organisms breed,
        creating a new organism with a mix of their DNA. Over several generations,
        the population grows more and more fit until it reaches the goal. This
        algorithm serves as a quick and efficient alternative to brute force solutions
        to difficult problems.`
        ],
        tags: ["Python", "Machine Learning", "Test Driven Development"],
        githubLink: "https://github.com/DevanTurtle7/geneticAlgorithm"
    }
]

const otherProjects = [
    {
        title: "Full Stack Chat",
        description: [
            `The full stack chat is a project that I started to further refine 
            my full stack development skills. The program allows users to send 
            and receive messages through a web application.`,
            `I built the front end with ReactJS. While designing the front end, 
            I focused on the details and tried to improve my UI/UX design 
            skills. The back end is composed of a Flask REST API that 
            communicates with a PostgreSQL server. When designing the API, I 
            utilized test driven development to ensure it was functioning as 
            intended.`
        ],
        tags: ["ReactJS", "Python", "JavaScript", "PostgreSQL", "Flask",
            "REST APIs", "Test Driven Development"],
        githubLink: "https://github.com/DevanTurtle7/full-stack-chat"
    }, {
        title: "Spotify Hue",
        description: [
            `Spotify Hue has been an ongoing project of mine throughout the 
            years. This particular iteration is an android application. The 
            app syncs Philips Hue smart lights with the color of the current 
            song’s album art on Spotify to deliver a unique and immersive 
            listening experience to the user. The front end is very much 
            incomplete, but the functionality meets my criteria for the 
            minimum viable product.`,
            `The app is written in Java, but I hope to convert to Kotlin as 
            I continue to learn it. As with almost all of my other work, 
            this is a long term passion project and still under development.`
        ],
        tags: ["Java", "REST APIs", "Android Development"],
        githubLink: "https://github.com/DevanTurtle7/SpotifyHueAndroid"
    }, {
        title: "Tempo",
        description: [
            `Tempo is a web application that syncs users’ Spotify 
            accounts to listen together at the same time. This project was built 
            during a 24 hour hackathon in collaboration with two colleagues.`,
            `This project is a great example of my ability to push the limits 
            of whatever technology I’m using to achieve my vision of the 
            project. I created this project before I knew ReactJS, so we 
            used vanilla HTML and JavaScript which made it difficult to build 
            a dynamic web application. Additionally, we had to find workarounds 
            in the Spotify API to implement the functionality we were looking 
            for. The app uses Firestore as the back end, which allows users 
            to sync their songs, add new ones to the queue, and even vote to 
            skip songs they dislike.`
        ],
        tags: ["JavaScript", "HTML", "Firestore", "REST APIs"],
        githubLink: "https://github.com/DevanTurtle7/BrickHack7"
    }
]


class Projects extends Component {
    render() {
        let projectDisplays = []
        let imagePrefix = "images/"

        for (let i = 0; i < highlightedProjects.length; i++) {
            let current = highlightedProjects[i]
            let title = current.title
            let description = current.description
            let tags = current.tags
            let githubLink = current.githubLink
            let image = imagePrefix + current.image
            let flipped = i % 2 !== 0
            let shadow = current.shadow === true

            projectDisplays.push(<ProjectDisplay
                title={title}
                description={description}
                tags={tags}
                githubLink={githubLink}
                img={image}
                flipped={flipped}
                shadow={shadow}
                key={i}
            />)
        }

        return (
            <div id="projects" className="centered-col">
                <div className="projects-container">
                    <h2 id="projects-label">Projects</h2>
                    {projectDisplays}

                    <h3 id="other-projects-label">Other Projects</h3>
                    <ProjectCarousel projects={otherProjects} />
                </div>
            </div>
        );
    }
}

export default Projects;