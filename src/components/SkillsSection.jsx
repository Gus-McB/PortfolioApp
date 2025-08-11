import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
    // frontend skills
    {name: "HTML/CSS", level: 95, category: "Frontend"},
    {name: "React", level: 95, category: "Frontend"},
    {name: "TailwindCSS", level: 95, category: "Frontend"},
    {name: "Bootstrap", level: 85, category: "Tools"},
    // backend skills
    {name: "Java", level: 70, category: "Backend"},
    {name: "C++", level: 80, category: "Backend"},
    {name: "Python", level: 90, category: "Backend"},
    {name: "Node.js", level: 80, category: "Backend"},
    {name: "Express.js", level: 75, category: "Backend"},
    {name: "TensorFlow", level: 60, category: "Backend"},
    {name: "Scikit-learn", level: 70, category: "Backend"},
    // tools
    {name: "Git", level: 95, category: "Tools"},
    {name: "GitHub", level: 90, category: "Tools"},
    {name: "Docker", level: 80, category: "Tools"},
    {name: "Cursor", level: 80, category: "Tools"},
    // Development Methodologies
    {name: "Agile", level: 75, category: "Development"},
    {name: "Scrum", level: 85, category: "Development"},
];

const categories = ["all", "Frontend", "Backend", "Tools", "Development"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);
    
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button 
                        key={key} 
                        onClick={() => setActiveCategory(category)} 
                        className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize", 
                        activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary")}>
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="text-lg font-semibold">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" style={{ width: `${skill.level}%` }}>
                                </div>
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
    }