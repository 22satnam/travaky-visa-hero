import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-primary text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <span className="text-3xl font-bold">Travaky</span>
              <p className="text-brand-accent mt-2 font-medium">Visa on Autopilot</p>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Making visa applications simple, fast, and stress-free. We handle everything 
              from form filling to doorstep delivery, so you can focus on planning your trip.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Countries</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Track Application</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand-accent" />
                <div>
                  <p className="text-white font-medium">+1 (555) 123-4567</p>
                  <p className="text-white/60 text-xs">24/7 Support Line</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand-accent" />
                <div>
                  <p className="text-white font-medium">support@travaky.com</p>
                  <p className="text-white/60 text-xs">Quick Response</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-brand-accent mt-0.5" />
                <div>
                  <p className="text-white font-medium">Global Offices</p>
                  <p className="text-white/60 text-xs">Mumbai, Delhi, Bangalore</p>
                  <p className="text-white/60 text-xs">New York, London, Dubai</p>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 mt-4">
                <p className="text-white/80 text-sm font-medium">Emergency Support</p>
                <p className="text-brand-accent text-sm">+1 (555) 911-VISA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              © 2024 Travaky. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;