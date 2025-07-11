
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (
    <section 
    id="hero" 
    className="relative min-h-screen flex flex-col items-center justify-center px-4" 
    >
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in"> I Am</span>
                    <span className="text-primary opacity-0 animate-fade-in"> 
                        {" "}
                        Angus
                        </span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in"> 
                        {" "}
                        McBride
                        </span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 px-40">
                    I am a passionate Software Engineering student at the University of South Australia,
                    specialising in Full Stack Development. I am focusing my independant studies in finance,
                    specifically, trading algorithms and applying machine learning techniques to improve algorithmic
                    decision making.
                </p>
                <div>
                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                </div>
            </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="test-sm text-muted-foreground mb-2">Scroll</span>
            <ArrowDown className="h-5 w-5 text-primary" />
        </div>
    </section>
    );
};