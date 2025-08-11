import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 times-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Software Engineering Student</h3>

                        <p className="text-muted-foreground">
                            I am currently in my penultimate year of a Bachelor of Software Engineering (Honours) at the University of South Australia.
                            As of now I am exploring the financial world of software, focusing my independant studies on algorithmic trading and developing 
                            machine learning models trained using historical financial data.
                        </p>

                        <p className="text-muted-foreground">
                            I'm currently a Software Engineering Intern at Arterial.ai, an AI-driven healthtech startup, 
                            where I'm developing an SMS-based virtual assistant to support dental and medical receptionists. 
                            Built with Node.js, this tool automates appointment reminders, booking confirmations, and patient 
                            inquiries through natural-language SMS conversations. The goal is to reduce administrative workload, 
                            improve response times, and enhance patient communication while maintaining a human-like interaction experience.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            {" "}
                            Get in touch
                        </a>
                        <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Download CV
                        </a>
                    </div>
                </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> AI and Automation</h4>
                                    <p className="text-muted-foreground">
                                        Developed AI tools like a transcription and diarization system that saved 300+ 
                                        hours of manual work. Applied neural networks and clustering to classify air 
                                        quality from environmental datasets. Passionate about turning repetitive tasks 
                                        into efficient, automated solutions with measurable real-world impact.
                                    </p>
                                </div>
                            </div>
                        </div>
                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <User className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg"> Backend Development</h4>
                                        <p className="text-muted-foreground">
                                            Experienced in building scalable backend systems with Flask, Node.js, PostgreSQL, 
                                            and SQLite. At Arterial.ai, developing an SMS-based virtual assistant to automate 
                                            patient communications. Skilled in RESTful APIs, database design, and integrating 
                                            third-party services to create reliable, maintainable backend architectures.
                                        </p>
                                    </div>
                                </div>
                        </div>
                            <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Data in Finance</h4>
                                    <p className="text-muted-foreground">
                                        Proficient in Python, Pandas, and data visualisation tools like Folium and Matplotlib. 
                                        Experienced in analysing large datasets and applying clustering models. Exploring algorithmic 
                                        trading and quantitative finance to merge software engineering expertise with data-driven 
                                        decision-making and analytical precision.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}