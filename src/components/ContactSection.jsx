import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Send, Space } from "lucide-react";
 import { cn } from "../lib/utils";
 import { useToast } from "../hooks/use-toast";
 import { useState } from "react";
 import emailjs from '@emailjs/browser';

export const ContactSection = () => {
    const {toast} = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        emailjs.sendForm('service_7qbajy4', 'template_121f1ze', e.target, 'mniFEdmmcAUUVTMRG')
          .then(() => {
            toast({ title: "Message Sent", description: "Thank you for reaching out!" });
            setIsSubmitting(false);
          }, () => {
            toast({ title: "Error", description: "Failed to send message." });
            setIsSubmitting(false);
          });
      };

    return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-primary"> Touch</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out! I'm always open to new opportunities and connections.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">
                        Contact Information
                    </h3>
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">Email</h4>
                                <a href="mailto:anguscmmcbride@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                    anguscmmcbride@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">Phone</h4>
                                <a href="tel:+61409245732" className="text-muted-foreground hover:text-primary transition-colors">
                                    +61 409 245 732
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">Location</h4>
                                <a href="#" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                    Adelaide, South Australia
                                </a> 
                                /
                                <a href="#" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                    Hong Kong, Hong Kong 
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8">
                        <h4 className="font-medium mb-4" > Connect With Me</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="https://www.linkedin.com/in/angus-mcbride-091320290" target="_blank">
                                <Linkedin />
                            </a>
                            <a href="https://www.instagram.com/gus_mcbride47/" target="_blank">
                                <Instagram />
                            </a>
                            <a href="https://www.facebook.com/angus.mcbride.210304/" target="_blank">
                                <Facebook />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-card p-8 rounded-lg shadow-xs"
                onSubmit={handleSubmit}>
                    <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2" > Your Name</label>
                            <input type="text" 
                            id="name" 
                            name="name"
                            required 
                            className="text-black w-full px-4 py-3 rounded-md border border-input bg-primary-foreground focus:outline-hidden foucs:ring-2 focus:ring-primary" 
                            placeholder="Jonathan..." />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2" > Your Email</label>
                            <input type="email" 
                            id="email" 
                            name="email"
                            required 
                            className="text-black w-full px-4 py-3 rounded-md border border-input bg-primary-foreground focus:outline-hidden foucs:ring-2 focus:ring-primary" 
                            placeholder="jon@gmail.com" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2" > Your Message</label>
                            <textarea
                            name="message"
                            id="message" 
                            required 
                            className="text-black w-full px-4 py-3 rounded-md border border-input bg-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none" 
                            placeholder="Write message here" />
                        </div>
                        <button disabled={isSubmitting} type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                            {isSubmitting ? "Sending..." : "Send Message"}
                            <Send size={16} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
}