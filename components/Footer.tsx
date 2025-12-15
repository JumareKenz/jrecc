import Link from 'next/link'
import { Mail, Phone, MapPin, Sparkles } from 'lucide-react'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="relative bg-impact-green text-white border-t-4 border-gold overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-impact-green via-impact-green-light to-impact-green opacity-95" />
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="text-white">
              <Logo />
            </div>
            <p className="text-white/90 text-sm leading-relaxed mt-4 font-medium">
              Empowering organizations with intelligent, evidence-based solutions
              for sustainable development outcomes.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 flex items-center uppercase tracking-wide text-sm">
              <Sparkles className="w-5 h-5 text-gold mr-2" />
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-white/80 hover:text-gold transition-colors font-medium flex items-center group">
                  <span className="w-1.5 h-1.5 bg-gold/50 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-gold transition-colors font-medium flex items-center group">
                  <span className="w-1.5 h-1.5 bg-gold/50 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-white/80 hover:text-gold transition-colors font-medium flex items-center group">
                  <span className="w-1.5 h-1.5 bg-gold/50 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/jazeos" className="text-white/80 hover:text-gold transition-colors font-medium flex items-center group">
                  <span className="w-1.5 h-1.5 bg-gold/50 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  JazeOS
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 flex items-center uppercase tracking-wide text-sm">
              <MapPin className="w-5 h-5 text-gold mr-2" />
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/80 font-medium">
              <li>Suite 510, 5th Floor</li>
              <li>Bank of Industry House</li>
              <li>Muhammadu Buhari Way</li>
              <li>Kaduna, Nigeria</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 flex items-center uppercase tracking-wide text-sm">
              <Phone className="w-5 h-5 text-gold mr-2" />
              Connect
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+2349127763205" className="text-white/80 hover:text-gold transition-colors flex items-center font-medium group">
                  <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  +234 912 776 3205
                </a>
              </li>
              <li>
                <a href="mailto:jazeresearchevaluation@gmail.com" className="text-white/80 hover:text-gold transition-colors flex items-center break-all font-medium group">
                  <Mail className="w-4 h-4 mr-2 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  jazeresearchevaluation@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/90 text-sm font-medium">
            &copy; {new Date().getFullYear()} Jaze Research and Evaluation Consultancy Company Limited. All rights reserved.
          </p>
          <p className="text-white/70 text-xs mt-2">CAC Registration: 1784084 | TIN: 238866231</p>
        </div>
      </div>
    </footer>
  )
}
