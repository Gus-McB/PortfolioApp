import { ExternalLink, Github, ArrowRight } from "lucide-react";
import soundwave from "../assets/soundwave.png";
import airquality from "../assets/air_quality.png";
import smsagent from "../assets/sms-agent.jpg";


const projects = [
    {
      id: 1,
      title: "Transcribing & Conversation Analysis Tool",
      description:
        "An advanced Python-based tool for transcribing and diarizing audio recordings with a streamlined GUI. Built on OpenAI's Whisper model and custom K-means clustering for speaker separation, the tool achieves transcription accuracy of ~80%. Beyond diarization, it generates detailed reports including most-used words, conversation intent, overlapping speech detection, and interactive visualizations to simplify analysis for researchers and professionals.",
      image: soundwave,
      tags: ["Python", "WhisperAI", "GUI", "NLP", "Data Visualization"],
      demoUrl: "#",
      github: "https://github.com/Gus-McB/StudyRecordings",
    },
    {
      id: 2,
      title: "Air Quality Prediction Tool",
      description:
        "A machine learning pipeline that predicts a location’s Air Quality Index (AQI) using a Dense Regression Neural Network with >90% accuracy. Results are mapped onto an interactive HTML dashboard, combining predictive analytics with geospatial visualization for clear communication of air quality trends across regions.",
      image: airquality,
      tags: ["Python", "Scikit-learn", "Folium", "Machine Learning"],
      demoUrl: "#",
      github: "https://github.com/Gus-McB/Air_Quality_Project",
    },
    {
      id: 3,
      title: "Automated SMS Agent for Dental Clinics",
      description:
        "A full-stack SMS automation system designed during my internship at Arterial AI. The agent handles appointment bookings, deposit payments, cancellations, and FAQs through conversational SMS. Built with a microservice architecture and integrated with Supabase/Postgres, Stripe, Cellcast, and deployed using AWS,it enables scalable communication pipelines and tracks conversation flows for clinic efficiency.",
      image: smsagent,
      tags: ["Node.js", "PostgreSQL", "Stripe", "Microservices", "AWS"],
      demoUrl: "#",
      github: "#",
    },
  ];
  

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
                    <div key={key} className="group bg-card p-6 rounded-lg overflow-hidden shadow-sm card-hover">
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
                        <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-4">
                                {project.demoUrl !== "#" ? <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                    <ExternalLink size={20} />
                                </a> 
                                : null}
                                {project.github !== "#" ? <a href={project.github} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                    <Github size={20} />
                                </a>
                                : null}
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        <div className="text-center mt-12">
            <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank" href="https://github.com/Gus-McB">
                Check My Github <ArrowRight size={16} />
            </a>
        </div>
        </div>
    </section>;
};