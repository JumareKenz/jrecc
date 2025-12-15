'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Logo() {
  return (
    <Link href="/" className="flex flex-col items-start group relative">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative"
      >
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gold/20 blur-xl rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        />
        
        <div className="relative">
          <span className="text-3xl md:text-4xl font-black text-white leading-none tracking-tight">
            J<span className="text-gold">a</span>Ze
          </span>
          <span className="absolute -top-1 -right-10 text-[8px] font-bold text-gold/80 bg-white/10 px-1.5 py-0.5 rounded">
            RC: 1784084
          </span>
        </div>
        <div className="text-[9px] md:text-[10px] font-semibold text-white/90 mt-1 leading-tight tracking-wide">
          Research And Evaluation Consultancy Company Ltd.
        </div>
      </motion.div>
    </Link>
  )
}
