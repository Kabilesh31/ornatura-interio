import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">O</span>
              </div>
              <span className="text-xl font-bold">Ornatura Interio</span>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Creating exceptional interior spaces that reflect your unique style and enhance your daily life.
            </p>
            <div className="flex space-x-4">
              <a
    href="https://www.facebook.com/ornatura?mibextid=wwXIfr&rdid=GZixnPc6Ko4yOin9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1YMxqY7rzT%2F%3Fmibextid%3DwwXIfr#"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      size="icon"
      variant="ghost"
      className="text-background/80 hover:text-background hover:bg-background/10"
    >
      <Facebook className="w-4 h-4" />
    </Button>
  </a>
              <a
    href="https://www.instagram.com/ORNATURA_INTERIO"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      size="icon"
      variant="ghost"
      className="text-background/80 hover:text-background hover:bg-background/10"
    >
      <Instagram className="w-4 h-4" />
    </Button>
  </a>
              <a
    href="https://wa.me/919487435050"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      size="icon"
      variant="ghost"
      className="text-background/80 hover:text-background hover:bg-background/10"
    >
      <span className="sr-only">WhatsApp</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 .5C5.648.5.5 5.648.5 12c0 2.106.546 4.166 1.582 5.983L.5 23.5l5.64-1.543A11.445 11.445 0 0 0 12 23.5c6.352 0 11.5-5.148 11.5-11.5S18.352.5 12 .5Zm0 20.75c-1.817 0-3.585-.481-5.128-1.394l-.366-.216-3.348.916.917-3.318-.238-.376A9.209 9.209 0 0 1 2.75 12c0-5.098 4.152-9.25 9.25-9.25s9.25 4.152 9.25 9.25-4.152 9.25-9.25 9.25Zm5.155-6.91c-.283-.142-1.673-.827-1.933-.922-.26-.095-.449-.142-.638.142-.19.283-.732.922-.897 1.111-.165.19-.331.213-.614.071-.283-.142-1.192-.439-2.27-1.4-.84-.749-1.406-1.674-1.571-1.957-.165-.283-.018-.437.124-.579.127-.127.283-.331.425-.496.142-.165.189-.283.283-.472.095-.19.047-.355-.024-.497-.071-.142-.638-1.54-.873-2.107-.229-.55-.462-.475-.638-.483-.165-.007-.355-.009-.545-.009s-.497.071-.758.355c-.26.283-.997.974-.997 2.374s1.021 2.755 1.163 2.943c.142.189 2.007 3.067 4.866 4.297.68.293 1.21.468 1.623.599.682.217 1.303.187 1.794.114.547-.082 1.673-.683 1.911-1.342.236-.66.236-1.226.165-1.342-.071-.116-.26-.189-.543-.331Z"/>
      </svg>
    </Button>
  </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#styling" className="text-background/80 hover:text-background transition-colors">
                  Interior Styling
                </a>
              </li>
              <li>
                <a href="#studio" className="text-background/80 hover:text-background transition-colors">
                  Interior Design Studio
                </a>
              </li>
              <li>
                <a href="#renovation" className="text-background/80 hover:text-background transition-colors">
                  Renovation
                </a>
              </li>
              <li>
                <a href="#architecture" className="text-background/80 hover:text-background transition-colors">
                  Architecture
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-background/80 hover:text-background transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="text-background/80 hover:text-background transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/80 hover:text-background transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-background transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-background/80 text-sm mb-4">
              Subscribe to our newsletter for design tips and project updates.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
              />
              <Button size="icon" className="bg-primary hover:bg-primary/90">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/80 text-sm">© {currentYear} Ornatura Interio. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-background/80 hover:text-background text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/80 hover:text-background text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-background/80 hover:text-background text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
