import { Button } from "@/components/ui/button";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              Ecom<span className="text-electric">Growth</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              The leading ecommerce growth agency helping brands scale to 7-figures and beyond through proven strategies and expert execution.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/60 hover:text-electric transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-electric transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-electric transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-electric transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><a href="#" className="hover:text-electric transition-colors">SEO Optimization</a></li>
              <li><a href="#" className="hover:text-electric transition-colors">Website Development</a></li>
              <li><a href="#" className="hover:text-electric transition-colors">Conversion Optimization</a></li>
              <li><a href="#" className="hover:text-electric transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-electric transition-colors">Email Marketing</a></li>
              <li><a href="#" className="hover:text-electric transition-colors">Design & Branding</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><a href="#" className="hover:text-electric transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-electric transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-electric transition-colors">Free Tools</a></li>
              <li><a href="#" className="hover:text-electric transition-colors">Growth Guide</a></li>
              <li><a href="#" className="hover:text-electric transition-colors">Webinars</a></li>
              <li><a href="#" className="hover:text-electric transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4 text-primary-foreground/80">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-electric" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-electric" />
                <span>hello@agency.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-electric" />
                <span>New York, NY</span>
              </div>
            </div>
            
            <div className="mt-6">
              <Button variant="electric" size="sm" className="w-full">
                Get Free Consultation
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 EcomGrowth Agency. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-primary-foreground/60">
              <a href="#" className="hover:text-electric transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-electric transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-electric transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;