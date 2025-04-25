import Link from "next/link"
import { Heart, Mail, Instagram, Twitter, Facebook, Linkedin } from "lucide-react"
import Logo from "./Logo"

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <Logo size="large" />
            <p className="text-muted-foreground mt-4 mb-4">
              A safe, soulful platform for emotional support and healing.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Instagram className="h-5 w-5" />, label: "Instagram" },
                { icon: <Twitter className="h-5 w-5" />, label: "Twitter" },
                { icon: <Facebook className="h-5 w-5" />, label: "Facebook" },
                { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href="#"
                  aria-label={social.label}
                  className="bg-card p-2 rounded-full text-muted-foreground hover:text-primary transition-colors"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About Us", "Services", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors animated-underline inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {["Therapy", "Self-Help Tools", "Community Support", "Resources", "Workshops"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors animated-underline inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Us</h4>
            <div className="space-y-3">
              <p className="text-muted-foreground flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                support@deepsoul.com
              </p>
              <p className="text-muted-foreground">
                123 Healing Street
                <br />
                Mindful City, MC 12345
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} DeepSoul. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <Link key={item} href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center">
            Made with <Heart className="h-4 w-4 mx-1 text-secondary" /> for mental wellness
          </p>
        </div>
      </div>
    </footer>
  )
}
