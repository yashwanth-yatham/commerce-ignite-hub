import { Button } from "@/components/ui/button";
import { ChevronRight, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-subtle overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Ecommerce Growth" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-primary opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-electric/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-electric/30">
              <TrendingUp className="w-4 h-4 text-electric" />
              <span className="text-sm font-medium text-electric">Leading Ecommerce Growth Agency</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Skyrocket Your
              <span className="text-electric"> Ecommerce</span>
              <br />Revenue Today
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
              We've generated over <span className="text-electric font-bold">$50M+</span> in revenue for 500+ ecommerce brands through our proven strategies in SEO, CRO, design, and digital marketing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" variant="electric" className="group">
                Get Free Growth Audit
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="hero">
                View Our Case Studies
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-electric mb-2">500+</div>
                <div className="text-sm text-primary-foreground/60">Brands Scaled</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-electric mb-2">$50M+</div>
                <div className="text-sm text-primary-foreground/60">Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-electric mb-2">340%</div>
                <div className="text-sm text-primary-foreground/60">Avg ROI Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-electric mb-2">24/7</div>
                <div className="text-sm text-primary-foreground/60">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;