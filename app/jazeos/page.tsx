'use client'

import { motion } from 'framer-motion'
import { Brain, Zap, Shield, Globe, CheckCircle, AlertCircle, TrendingUp, Sparkles, Cpu } from 'lucide-react'
import PageHeader from '@/components/PageHeader'

export default function JazeOS() {
  const features = [
    {
      icon: Brain,
      title: 'Offline AI Engine (Kenz)',
      description: 'Embedded in single distributable files (.knx) for instant, offline intelligence',
      gradient: 'from-emerald-400 to-emerald-700',
    },
    {
      icon: Zap,
      title: 'Real-Time Validation',
      description: 'Instant insights during data entry with immediate quality checks',
      gradient: 'from-emerald-700 to-emerald-900',
    },
    {
      icon: Shield,
      title: 'High Security & Compliance',
      description: 'Digital signatures, encryption, GDPR & NDPR compliance',
      gradient: 'from-emerald-600 to-amber-600',
    },
    {
      icon: Globe,
      title: 'Full Interoperability',
      description: 'Seamlessly integrates with ODK, Kobo, DHIS2, and enterprise systems',
      gradient: 'from-amber-500 to-amber-700',
    },
  ]

  const challenges = [
    'Poorly designed survey instruments',
    'Inconsistent or unreliable field data',
    'Fragmented toolchains (Kobo, Excel, SPSS, PowerBI)',
    'Slow reporting cycles',
    'Limited technical and analytical capacity',
  ]

  const differentiators = [
    'App-Free Deployment: No installation required — runs directly from any device',
    'Offline-First Architecture: Works seamlessly in low-connectivity environments',
    'Single Unified Platform: From data collection to decision-making',
    'Data Integrity: Ensures accuracy from field to boardroom',
  ]

  return (
    <div className="bg-white">
      <section className="relative py-32 bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900 overflow-hidden border-b-4 border-amber-600">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500 rounded-full mix-blend-multiply filter blur-[120px] opacity-30"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
          <motion.div
            className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-500 rounded-full mix-blend-multiply filter blur-[120px] opacity-30"
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-block mb-8"
            >
              <span className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-amber-400 animate-gradient">
                Jaze
              </span>
              <span className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 animate-gradient">
                OS
              </span>
            </motion.div>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-6">
              Africa's First Field-Team-Focused, AI-Enabled Data Operating System
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-4xl mx-auto leading-relaxed font-medium">
              Empowering NGOs, governments, and enterprises to collect, validate, and analyze data seamlessly
              — with integrity, accuracy, and minimal friction, even in low-connectivity environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="relative py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              The Problem: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-amber-600">Drowning in Data</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
              NGOs and development agencies gather vast amounts of data from surveys, assessments, and evaluations
              — but most struggle to make sense of it.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: 'spring' }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-red-50 border-2 border-red-300 p-6 rounded-2xl hover:border-red-500 transition-all duration-300"
              >
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 font-bold">{challenge}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 bg-red-50 border-2 border-red-300 p-8 rounded-3xl"
          >
            <p className="text-lg text-gray-700 text-center font-bold">
              As a result, critical decisions are delayed or misinformed — reducing real-world impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Insight */}
      <section className="relative py-32 bg-gradient-to-b from-slate-950 via-purple-950/50 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              The Insight: The Problem Isn't Data — <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-600">It's Flow</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8 font-medium">
              Data in humanitarian work behaves like a river — pure at the source but polluted downstream
              by disconnected processes.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-medium">
              Each stage — design → collection → validation → analysis → reporting — lacks a unified flow.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -10 }}
            className="bg-gradient-to-br from-emerald-700 to-emerald-900 p-12 rounded-3xl text-white text-center border-2 border-amber-500"
          >
            <h3 className="text-4xl font-black mb-6">What Organizations Need</h3>
            <p className="text-2xl text-emerald-50 max-w-3xl mx-auto leading-relaxed font-medium">
              Not another app, but a data nervous system. A single platform that lets them think,
              collect, clean, and act in one loop. That's exactly what JazeOS delivers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="relative py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
              Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-600">Differentiators</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
              Revolutionary features that set JazeOS apart
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -10 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                <div className="relative glass-dark p-10 rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-500">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-8 shadow-2xl`}
                  >
                    <feature.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-3xl font-black text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-700 group-hover:to-amber-600 transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="relative py-32 bg-gradient-to-b from-slate-950 via-purple-950/50 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-600">JazeOS?</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {differentiators.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: index % 2 === 0 ? -10 : 10 }}
                className="bg-white p-8 rounded-2xl border-2 border-emerald-200 hover:border-emerald-600 transition-all duration-300 flex items-start group shadow-sm hover:shadow-lg"
              >
                <CheckCircle className="w-8 h-8 text-emerald-600 mr-6 mt-1 flex-shrink-0 group-hover:scale-125 transition-transform" />
                <p className="text-gray-700 font-bold text-lg group-hover:text-emerald-700 transition-colors">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Status */}
      <section className="relative py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -10 }}
            className="bg-gradient-to-br from-emerald-700 to-emerald-900 p-16 rounded-3xl text-white border-2 border-amber-500"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-white/20 flex items-center justify-center"
            >
              <TrendingUp className="w-12 h-12" />
            </motion.div>
            <h2 className="text-4xl font-black mb-6">Currently in MVP Stage</h2>
            <p className="text-xl text-emerald-50 leading-relaxed font-medium">
              JazeOS is actively being developed and tested. We're building Africa's first
              field-team-focused, AI-enabled, offline-first Data Operating System.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
