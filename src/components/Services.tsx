import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
    features: ["Keyword Research", "Technical SEO", "Content Strategy", "Link Building"]
  },
  {
    icon: Code,
    title: "Website Development",
    description: "Lightning-fast, conversion-optimized websites that turn visitors into customers. Built for performance and scale.",
    features: ["Shopify Plus", "Custom Development", "Speed Optimization", "Mobile-First Design"]
  },
  {
    icon: TrendingUp,
    title: "Conversion Rate Optimization",
    description: "Increase your conversion rates by up to 250% with data-driven CRO strategies and A/B testing.",
    features: ["A/B Testing", "User Experience", "Analytics Setup", "Performance Tracking"]
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Full-funnel marketing campaigns that drive qualified traffic and maximize your ROI across all channels.",
    features: ["PPC Campaigns", "Social Media", "Content Marketing", "Influencer Outreach"]
  },
  {
    icon: Palette,
    title: "Design & Branding",
    description: "Award-winning designs that build trust and drive conversions. From logos to complete brand overhauls.",
    features: ["Brand Identity", "UI/UX Design", "Product Photography", "Graphic Design"]
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Automated email sequences that nurture leads and drive repeat purchases. Average 40x ROI for our clients.",
    features: ["Email Automation", "List Building", "Campaign Design", "Performance Analytics"]
  },
  {
    icon: MessageCircle,
    title: "WhatsApp & SMS",
    description: "Direct communication channels that boost customer engagement and drive immediate sales conversions.",
    features: ["WhatsApp Business", "SMS Campaigns", "Automated Responses", "Customer Support"]
  },
  {
    icon: Zap,
    title: "Funnel Optimization",
    description: "End-to-end funnel optimization that maximizes every touchpoint in your customer journey.",
    features: ["Sales Funnels", "Landing Pages", "Checkout Optimization", "Upsell Strategies"]
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Complete Ecommerce
            <span className="text-electric"> Growth Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From strategy to execution, we handle every aspect of your ecommerce growth. 
            Our integrated approach ensures maximum results across all channels.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 border-border/50"
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-electric rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-electric-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-electric transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-electric rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" variant="cta">
            Start Your Growth Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;