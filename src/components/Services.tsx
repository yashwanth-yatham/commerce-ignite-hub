import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Search, 
  Code, 
  TrendingUp, 
  Megaphone, 
  Palette, 
  Mail,
  MessageCircle,
  Zap
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Dominate search rankings with our proven SEO strategies. We've helped brands achieve 300%+ organic traffic growth.",
    features: ["Keyword Research", "Technical SEO", "Content Strategy", "Link Building"],
    color: "from-electric to-neon"
  },
  {
    icon: Code,
    title: "Website Development",
    description: "Lightning-fast, conversion-optimized websites that turn visitors into customers. Built for performance and scale.",
    features: ["Shopify Plus", "Custom Development", "Speed Optimization", "Mobile-First Design"],
    color: "from-cyan to-electric"
  },
  {
    icon: TrendingUp,
    title: "Conversion Rate Optimization",
    description: "Increase your conversion rates by up to 250% with data-driven CRO strategies and A/B testing.",
    features: ["A/B Testing", "User Experience", "Analytics Setup", "Performance Tracking"],
    color: "from-neon to-electric"
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Full-funnel marketing campaigns that drive qualified traffic and maximize your ROI across all channels.",
    features: ["PPC Campaigns", "Social Media", "Content Marketing", "Influencer Outreach"],
    color: "from-electric to-cyan"
  },
  {
    icon: Palette,
    title: "Design & Branding",
    description: "Award-winning designs that build trust and drive conversions. From logos to complete brand overhauls.",
    features: ["Brand Identity", "UI/UX Design", "Product Photography", "Graphic Design"],
    color: "from-cyan to-neon"
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Automated email sequences that nurture leads and drive repeat purchases. Average 40x ROI for our clients.",
    features: ["Email Automation", "List Building", "Campaign Design", "Performance Analytics"],
    color: "from-neon to-cyan"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp & SMS",
    description: "Direct communication channels that boost customer engagement and drive immediate sales conversions.",
    features: ["WhatsApp Business", "SMS Campaigns", "Automated Responses", "Customer Support"],
    color: "from-electric to-neon"
  },
  {
    icon: Zap,
    title: "Funnel Optimization",
    description: "End-to-end funnel optimization that maximizes every touchpoint in your customer journey.",
    features: ["Sales Funnels", "Landing Pages", "Checkout Optimization", "Upsell Strategies"],
    color: "from-cyan to-electric"
  }
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-electric/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-6 text-foreground"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Complete Ecommerce
            <motion.span 
              className="text-transparent bg-gradient-electric bg-clip-text"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              {" "}Growth Solutions
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From strategy to execution, we handle every aspect of your ecommerce growth. 
            Our integrated approach ensures maximum results across all channels.
          </motion.p>
        </motion.div>
        
        <motion.div 
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                z: 50
              }}
              className="group perspective-1000"
              data-cursor="hover"
            >
              <Card className="h-full glass border border-electric/20 group-hover:border-electric/40 transition-all duration-500 interactive-card overflow-hidden">
                <CardContent className="p-6 relative">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="mb-4"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <motion.div 
                        className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:shadow-glow`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <service.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      
                      <motion.h3 
                        className="text-xl font-bold mb-3 text-foreground group-hover:text-electric transition-colors duration-300"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {service.title}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-muted-foreground mb-4 leading-relaxed text-sm"
                        initial={{ opacity: 0.7 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {service.description}
                      </motion.p>
                    </motion.div>
                    
                    <motion.ul 
                      className="space-y-2"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.features.map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          className="text-sm text-muted-foreground flex items-center gap-2"
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <motion.div 
                            className="w-1.5 h-1.5 bg-electric rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                          ></motion.div>
                          {feature}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" variant="cta" data-cursor="hover">
              Start Your Growth Journey
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;