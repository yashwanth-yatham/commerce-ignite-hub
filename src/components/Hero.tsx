import { Button } from "@/components/ui/button";
import { ChevronRight, TrendingUp, Sparkles, Zap } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Scene3D from "./Scene3D";

const TypingText = ({ text, delay = 0 }: { text: string, delay?: number }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          setCurrentIndex(prev => prev + 1);
        } else {
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, currentIndex, delay]);

  return (
    <span className="relative">
      {displayText}
      <span className="animate-blink border-r-2 border-electric ml-1"></span>
    </span>
  );
};

const ParticleField = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 3 + 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-electric/30 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const stats = [
    { value: "500+", label: "Brands Scaled", icon: TrendingUp },
    { value: "$50M+", label: "Revenue Generated", icon: Sparkles },
    { value: "340%", label: "Avg ROI Increase", icon: Zap },
    { value: "24/7", label: "Expert Support", icon: TrendingUp },
  ];

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-gradient-mesh">
      {/* 3D Background */}
      <Scene3D />
      
      {/* Particle Field */}
      <ParticleField />
      
      {/* Hero Content */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 py-20 md:py-32"
        style={{ y, opacity }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 mb-8 border border-electric/30"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(var(--electric) / 0.4)" }}
              data-cursor="hover"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <TrendingUp className="w-5 h-5 text-electric" />
              </motion.div>
              <span className="text-sm font-medium text-electric">Leading Ecommerce Growth Agency</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-4 h-4 text-electric" />
              </motion.div>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-8xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <span className="text-foreground">Skyrocket Your </span>
              <motion.span 
                className="text-transparent bg-gradient-electric bg-clip-text"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <TypingText text="Ecommerce" delay={1000} />
              </motion.span>
              <br />
              <span className="text-foreground">Revenue Today</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              We've generated over <motion.span 
                className="text-electric font-bold"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                $50M+
              </motion.span> in revenue for 500+ ecommerce brands through our proven strategies in SEO, CRO, design, and digital marketing.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="electric" className="group" data-cursor="hover">
                  Get Free Growth Audit
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.div>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="hero" data-cursor="hover">
                  View Our Case Studies
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Animated Stats */}
            <motion.div 
              className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="glass rounded-2xl p-6 border border-electric/20 group-hover:border-electric/40 transition-all duration-300">
                    <motion.div
                      className="w-12 h-12 bg-gradient-electric rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <stat.icon className="w-6 h-6 text-electric-foreground" />
                    </motion.div>
                    <motion.div 
                      className="text-3xl md:text-4xl font-bold text-electric mb-2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.6 + index * 0.1, type: "spring" }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;