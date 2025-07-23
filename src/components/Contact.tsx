import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  ArrowRight,
  Shield,
  Zap,
  Users
} from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Ready to <span className="text-electric">Scale Your Business?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get a free growth audit and discover exactly how we can increase your revenue. 
            No commitments, just actionable insights.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Get Your Free Growth Audit</h3>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">First Name</label>
                    <Input placeholder="John" className="border-border/50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Last Name</label>
                    <Input placeholder="Doe" className="border-border/50" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Email Address</label>
                  <Input type="email" placeholder="john@example.com" className="border-border/50" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Website URL</label>
                  <Input placeholder="https://yourstore.com" className="border-border/50" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Monthly Revenue</label>
                  <select className="w-full p-3 border border-border/50 rounded-md bg-background text-foreground">
                    <option>$0 - $10k</option>
                    <option>$10k - $50k</option>
                    <option>$50k - $100k</option>
                    <option>$100k - $500k</option>
                    <option>$500k+</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Tell us about your goals</label>
                  <Textarea 
                    placeholder="What challenges are you facing? What growth goals do you have?"
                    className="border-border/50 min-h-[100px]"
                  />
                </div>
                
                <Button size="lg" variant="electric" className="w-full group">
                  Get My Free Audit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  📞 We'll contact you within 24 hours with your personalized growth plan
                </p>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Info & Benefits */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-electric rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-electric-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Phone</div>
                      <div className="text-muted-foreground">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-electric rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-electric-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Email</div>
                      <div className="text-muted-foreground">hello@agency.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-electric rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-electric-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Address</div>
                      <div className="text-muted-foreground">New York, NY</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-electric rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-electric-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Business Hours</div>
                      <div className="text-muted-foreground">24/7 Support Available</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Why Choose Us */}
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-success/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Shield className="w-4 h-4 text-success" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">30-Day Money Back Guarantee</div>
                      <div className="text-sm text-muted-foreground">Not satisfied? Get your money back, no questions asked.</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-electric/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Zap className="w-4 h-4 text-electric" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Results Within 90 Days</div>
                      <div className="text-sm text-muted-foreground">See measurable growth in your first quarter with us.</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-success/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="w-4 h-4 text-success" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Dedicated Account Manager</div>
                      <div className="text-sm text-muted-foreground">Your personal growth strategist available 24/7.</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;