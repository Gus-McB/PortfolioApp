import { ExternalLink, Github, ArrowRight } from "lucide-react";


const projects = [
    {id:1,
        title: "Transcribing and Diarizing Tool",
        description: "I developed a tool used to transcribe and diarize various types of audio files necessary for speech analysis." +
        " The tool integrates OpenAIs Whisper model and my Kmeans clustering model to accurately transcribe vectorised audio segments." + 
        " Tested accuracy reaches metrics of upto 80%.",
        image: "#",
        tags: ["Python", "WhsiperAI", "Machine Learning", "Clustering"],
        demoUrl: "#",
        github: "#",
    },
    {id:2,
        title: "Air Quality Prediction Tool",
        description: "This tool uses a Dense Regression Neural Network to accurately identify a locations Air Quality (AQI)." + 
        " Performance exceeds 90% with the provided dataset. The tool then outputs a HTML page containing the plotted AQI for all locations.",
        image: "#",
        tags: ["Python", "Scikit-learn", "Folium", "Machine Learning"],
        demoUrl: "#",
        github: "#",
    },
    {id:3,
        title: "Full Stack React SAPOL Webapp",
        description: "This web application mimicks the SAPOL website using previous historical and fabricated data for CRUD operations." +
        "Razor endpoints were used to access a SQL database and manipulate data, an encruypted login system was built to ensure only authorised " +
        "users can manipulate data.",
        image: "#",
        tags: ["React", "RazorPages", "REST API", "W3", "JavaScript"],
        demoUrl: "#",
        github: "#",
    }

]

export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
                {" "}
                Featured <span className="text-primary"> Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Below are a number of projects completed independantly and through work experience.
                </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card p-6 rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className="p-2">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag, key) => (
                                    <span key={key} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        <h3 className="text-xl font-semibold nb-1"> {project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-4">
                                {project.demoUrl !== "#" ? <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                    <ExternalLink size={20} />
                                </a> 
                                : null}
                                <a href={project.github} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                    <Github size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        <div className="text-center mt-12">
            <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank" href="#">
                Check My Github <ArrowRight size={16} />
            </a>
        </div>
        </div>
    </section>;
};