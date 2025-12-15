'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, BarChart3, Users, Globe, Target, Zap, Shield, Sparkles, TrendingUp, Award, Database } from 'lucide-react'

export default function Home() {
  const services = [
    {
      icon: BarChart3,
      title: 'Research',
      description: 'Comprehensive quantitative and qualitative research studies across various sectors.',
      features: ['Epidemiological studies', 'Household surveys', 'Baseline/midline/endline evaluations'],
      gradient: 'from-research-blue to-impact-green',
    },
    {
      icon: Target,
      title: 'Evaluation',
      description: 'Expert guidance in program and project evaluation with rigorous assessment.',
      features: ['Program evaluation', 'Impact assessment', 'Performance monitoring'],
      gradient: 'from-impact-green to-research-blue',
    },
    {
      icon: Users,
      title: 'Capacity Building',
      description: 'Empowering individuals and organizations with data-driven skills.',
      features: ['Training programs', 'Workshop facilitation', 'Skill development'],
      gradient: 'from-research-blue to-impact-green',
    },
    {
      icon: Zap,
      title: 'Data Analytics',
      description: 'Harnessing the power of data to extract actionable insights.',
      features: ['Statistical modeling', 'Data visualization', 'Predictive analytics'],
      gradient: 'from-impact-green to-research-blue',
    },
    {
      icon: Shield,
      title: 'Project Management',
      description: 'Orchestrating complex projects from inception to completion.',
      features: ['Project planning', 'Resource management', 'Quality assurance'],
      gradient: 'from-research-blue to-impact-green',
    },
    {
      icon: Database,
      title: 'Data Collection',
      description: 'Advanced data collection solutions using cutting-edge technology platforms.',
      features: ['Digital surveys', 'Real-time monitoring', 'Quality control'],
      gradient: 'from-impact-green to-research-blue',
    },
  ]

  const values = [
    { name: 'Teamwork', icon: Users, gradient: 'from-research-blue to-impact-green' },
    { name: 'Innovation', icon: Sparkles, gradient: 'from-impact-green to-research-blue' },
    { name: 'Integrity', icon: Shield, gradient: 'from-research-blue to-impact-green' },
    { name: 'Excellence', icon: Award, gradient: 'from-impact-green to-research-blue' },
  ]

  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '15+', label: 'Countries Served' },
    { number: '100%', label: 'Client Satisfaction' },
  ]

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-sky-blue to-white">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0B3C5D08_1px,transparent_1px),linear-gradient(to_bottom,#0B3C5D08_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Subtle accent shapes */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-sky-blue rounded-full mix-blend-multiply filter blur-3xl opacity-40"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-sky-blue rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-6xl md:text-8xl font-black text-charcoal mb-6 leading-tight"
            >
              Jaze Research
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-research-blue via-impact-green to-research-blue">
                & Evaluation
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-charcoal mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
            >
              Empowering organizations with{' '}
              <span className="text-research-blue font-bold">intelligent</span>,{' '}
              <span className="text-impact-green font-bold">evidence-based</span> solutions
              for sustainable development outcomes
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/about"
                  className="group relative inline-flex items-center px-10 py-4 bg-impact-green rounded-xl font-bold text-white overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-impact-green-light"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-impact-green-light to-impact-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                  <span className="relative z-10 flex items-center text-lg">
                    Learn More
                    <motion.span
                      className="ml-2"
                      whileHover={{ x: 5 }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.span>
                  </span>
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gold"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center px-10 py-4 bg-white border-2 border-impact-green text-impact-green rounded-xl font-bold hover:bg-impact-green hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl text-lg overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-impact-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                  <span className="relative z-10">Get in Touch</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-research-blue rounded-full flex justify-center bg-white/50 backdrop-blur-sm"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-gold rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative py-32 bg-gradient-to-b from-white via-sky-blue to-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0B3C5D08_1px,transparent_1px),linear-gradient(to_bottom,#0B3C5D08_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-impact-green/10 text-impact-green rounded-full text-sm font-bold uppercase tracking-wide mb-4 border border-impact-green/30">
              Our Impact
            </span>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.1, y: -10 }}
                className="text-center group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-white p-8 rounded-3xl border-2 border-soft-grey group-hover:border-gold shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  <motion.div
                    className="text-5xl md:text-7xl font-black bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent mb-3"
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-charcoal font-bold text-sm md:text-base uppercase tracking-wide group-hover:text-impact-green transition-colors">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="relative py-32 bg-sky-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 bg-white text-research-blue rounded-full text-sm font-bold uppercase tracking-wide mb-6 border-2 border-research-blue">
              Our Services
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-charcoal mb-6">
              Comprehensive Solutions for
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-research-blue to-impact-green">
                Data-Driven Excellence
              </span>
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto font-medium">
              Professional services designed to transform data into actionable insights
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                <div className="relative bg-white p-8 rounded-3xl border-2 border-soft-grey hover:border-impact-green transition-all duration-500 h-full shadow-xl hover:shadow-2xl group-hover:-translate-y-2">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.15 }}
                    transition={{ duration: 0.6, type: 'spring' }}
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 shadow-2xl group-hover:shadow-gold/50`}
                  >
                    <service.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-black text-charcoal mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-research-blue group-hover:to-impact-green transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-charcoal leading-relaxed font-medium mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2.5">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center text-sm text-charcoal group/item"
                      >
                        <motion.div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3 flex-shrink-0`}
                          whileHover={{ scale: 1.5 }}
                        />
                        <span className="font-medium group-hover/item:text-impact-green transition-colors">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/services"
                className="group relative inline-flex items-center px-10 py-4 bg-impact-green rounded-xl font-bold text-white shadow-xl hover:shadow-2xl transition-all duration-300 text-lg border-2 border-impact-green-light overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-impact-green-light to-impact-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <span className="relative z-10 flex items-center">
                  View All Services
                  <motion.span
                    className="ml-2"
                    whileHover={{ x: 5 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black text-charcoal mb-6">
              Our Core
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-research-blue to-impact-green"> Values</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              >
                <div className="bg-white p-8 rounded-2xl border-2 border-soft-grey hover:border-impact-green transition-all duration-500 text-center h-full shadow-lg hover:shadow-2xl group-hover:-translate-y-2">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.15 }}
                    transition={{ duration: 0.6, type: 'spring' }}
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${value.gradient} flex items-center justify-center shadow-xl group-hover:shadow-gold/50`}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="text-charcoal font-black text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-research-blue group-hover:to-impact-green transition-all duration-300 uppercase tracking-wide">
                    {value.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-gradient-to-br from-research-blue via-research-blue-dark to-research-blue">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
              Ready to Transform Your
              <br />
              <span className="text-gold">Data into Action?</span>
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed font-medium">
              Let's collaborate to create impactful solutions that drive sustainable development.
            </p>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="group relative inline-flex items-center px-12 py-6 bg-impact-green text-white rounded-xl font-black text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-gold/30 overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-impact-green-light to-impact-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <span className="relative z-10 flex items-center">
                  Contact Us Today
                  <motion.span
                    className="ml-3"
                    whileHover={{ x: 5 }}
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.span>
                </span>
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gold"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
