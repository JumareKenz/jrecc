'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

export default function Navigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/jazeos', label: 'JazeOS' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-impact-green/98 backdrop-blur-xl shadow-2xl border-b-2 border-impact-green-light'
          : 'bg-impact-green/95 backdrop-blur-lg shadow-lg'
      }`}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-impact-green via-impact-green-light to-impact-green opacity-90" />
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Logo />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href))
              
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative group"
                >
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.5, type: 'spring' }}
                    whileHover={{ y: -3 }}
                    className={`relative px-6 py-3 rounded-xl overflow-hidden ${
                      isActive ? 'bg-white/20 border-2 border-gold' : ''
                    }`}
                  >
                    {/* Active state background */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-gold/30 rounded-xl"
                        initial={false}
                        layoutId="activeTab"
                      />
                    )}
                    
                    {/* Hover background glow */}
                    <motion.div
                      className="absolute inset-0 bg-white/15 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                    
                    {/* Animated border for hover */}
                    {!isActive && (
                      <motion.div
                        className="absolute inset-0 border-2 border-gold rounded-xl opacity-0 group-hover:opacity-100"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    
                    <motion.span
                      className={`relative z-10 font-bold transition-all duration-300 text-sm uppercase tracking-wider flex items-center ${
                        isActive 
                          ? 'text-gold' 
                          : 'text-white group-hover:text-gold'
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <motion.span
                          className="ml-2 w-2 h-0.5 bg-gold"
                          initial={{ width: 0 }}
                          animate={{ width: 8 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                      {!isActive && (
                        <motion.span
                          className="ml-2 w-0 group-hover:w-2 h-0.5 bg-gold transition-all duration-300"
                          initial={false}
                        />
                      )}
                    </motion.span>
                    
                    {/* Bottom accent line - always visible for active, on hover for inactive */}
                    <motion.div
                      className="absolute bottom-0 left-1/2 right-1/2 h-1 bg-gold rounded-full"
                      initial={{ scaleX: isActive ? 1 : 0, x: '-50%' }}
                      animate={{ scaleX: isActive ? 1 : 0, x: '-50%' }}
                      whileHover={{ scaleX: 1, x: '-50%' }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    />
                  </motion.div>
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1, rotate: 90 }}
            className="md:hidden p-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 border border-white/20"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-impact-green-dark/98 backdrop-blur-xl border-t-2 border-gold/30 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href))
                
                return (
                  <motion.div
                    key={link.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.08, type: 'spring' }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-6 py-4 rounded-xl transition-all duration-300 font-bold text-sm uppercase tracking-wide border ${
                        isActive
                          ? 'text-gold bg-white/20 border-gold/50'
                          : 'text-white hover:text-gold hover:bg-white/15 border-transparent hover:border-gold/50'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
