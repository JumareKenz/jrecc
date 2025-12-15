'use client'

import { motion } from 'framer-motion'
import { BarChart3, Target, Users, Zap, Shield, Globe, TrendingUp, CheckCircle, Sparkles, Database } from 'lucide-react'
import PageHeader from '@/components/PageHeader'

export default function Services() {
  const services = [
    {
      icon: BarChart3,
      title: 'Research',
      description: 'We design and execute comprehensive quantitative and qualitative research studies across various sectors.',
      features: [
        'Epidemiological studies',
        'Household surveys',
        'Baseline/midline/endline evaluations',
        'Customized sector-specific surveys',
        'Statistical survey methodology',
      ],
      gradient: 'from-research-blue to-impact-green',
      bg: 'bg-soft-grey',
    },
    {
      icon: Target,
      title: 'Evaluation',
      description: 'We provide expert guidance in program and project evaluation, ensuring rigorous assessment and insightful recommendations for improvement.',
      features: [
        'Program evaluation',
        'Project assessment',
        'Impact evaluation',
        'Performance monitoring',
        'Outcome measurement',
      ],
      gradient: 'from-impact-green to-research-blue',
      bg: 'bg-soft-grey',
    },
    {
      icon: Users,
      title: 'Capacity Building',
      description: 'We empower individuals and organizations with the skills and knowledge needed to navigate the data-driven world.',
      features: [
        'Training programs',
        'Workshop facilitation',
        'Skill development',
        'Knowledge transfer',
        'Technical support',
      ],
      gradient: 'from-research-blue to-impact-green',
      bg: 'bg-soft-grey',
    },
    {
      icon: Zap,
      title: 'Data Analytics',
      description: 'We harness the power of data to extract actionable insights and inform strategic decisions.',
      features: [
        'Advanced statistical modeling',
        'Data visualization',
        'Predictive analytics',
        'Real-time monitoring',
        'Custom dashboards',
      ],
      gradient: 'from-impact-green to-research-blue',
      bg: 'bg-soft-grey',
    },
    {
      icon: Shield,
      title: 'Project Management',
      description: 'We excel at orchestrating complex projects from inception to completion, ensuring efficient execution and adherence to budget and timelines.',
      features: [
        'Project planning',
        'Resource management',
        'Timeline coordination',
        'Quality assurance',
        'Stakeholder engagement',
      ],
      gradient: 'from-research-blue to-impact-green',
      bg: 'bg-soft-grey',
    },
    {
      icon: Database,
      title: 'Data Collection',
      description: 'Advanced data collection solutions using cutting-edge technology platforms for efficient, real-time data gathering.',
      features: [
        'Digital survey platforms',
        'Real-time data monitoring',
        'Quality control systems',
        'Mobile data collection',
        'Custom survey design',
      ],
      gradient: 'from-impact-green to-research-blue',
      bg: 'bg-soft-grey',
    },
  ]

  const technicalCapabilities = [
    {
      title: 'Survey Design & Implementation',
      items: [
        'Household surveys',
        'Baseline/midline/endline evaluations',
        'Customized surveys for diverse sectors',
      ],
      icon: BarChart3,
      gradient: 'from-research-blue to-impact-green',
    },
    {
      title: 'Statistical Mastery',
      items: [
        'In-house expertise in statistical survey methodology',
        'Data analysis',
        'Advanced statistical modeling',
      ],
      icon: TrendingUp,
      gradient: 'from-impact-green to-research-blue',
    },
    {
      title: 'GIS Integration',
      items: [
        'Leveraging GIS applications',
        'Spatial analysis',
        'Data visualization',
      ],
      icon: Globe,
      gradient: 'from-research-blue to-impact-green',
    },
    {
      title: 'Technology-Driven Collection',
      items: [
        'Tablets and online platforms',
        'Efficient, real-time data gathering',
        'Custom-built survey platform',
      ],
      icon: Zap,
      gradient: 'from-impact-green to-research-blue',
    },
    {
      title: 'Advanced Monitoring',
      items: [
        'Real-time project progress visibility',
        'Advanced Project Monitoring Platform (PMP)',
        'Immediate data quality checks',
      ],
      icon: Sparkles,
      gradient: 'from-research-blue to-impact-green',
    },
  ]

  return (
    <div className="bg-white">
      <PageHeader
        title="Our"
        highlight="Services"
        subtitle="Comprehensive solutions for research, evaluation, and data-driven decision making"
      />

      {/* Main Services */}
      <section className="relative py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d1fae512_1px,transparent_1px),linear-gradient(to_bottom,#d1fae512_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 bg-sky-blue text-research-blue rounded-full text-sm font-bold uppercase tracking-wide mb-6 border-2 border-research-blue">
              Professional Services
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-charcoal mb-6">
              Comprehensive Solutions for
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-research-blue to-impact-green">
                Your Success
              </span>
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto font-medium">
              Expert services designed to transform challenges into opportunities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -12, scale: 1.02, rotateY: 2 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                <div className={`relative ${service.bg} p-8 rounded-3xl border-2 border-soft-grey hover:border-impact-green transition-all duration-500 h-full shadow-xl hover:shadow-2xl`}>
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.15 }}
                    transition={{ duration: 0.6 }}
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 shadow-xl`}
                  >
                    <service.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <h2 className="text-3xl font-black text-charcoal mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-research-blue group-hover:to-impact-green transition-all duration-300">
                    {service.title}
                  </h2>
                  <p className="text-charcoal leading-relaxed font-medium mb-6 text-base">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                        className="flex items-start group/item"
                      >
                        <CheckCircle className="w-5 h-5 text-impact-green mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                        <span className="text-charcoal group-hover/item:text-impact-green transition-colors font-medium text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Capacity */}
      <section className="relative py-32 bg-sky-blue overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0B3C5D08_1px,transparent_1px),linear-gradient(to_bottom,#0B3C5D08_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 bg-white text-research-blue rounded-full text-sm font-bold uppercase tracking-wide mb-6 border-2 border-research-blue">
              Technical Excellence
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-charcoal mb-4">
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-research-blue to-impact-green">Capacity</span>
            </h2>
            <p className="text-xl text-charcoal max-w-2xl mx-auto font-medium">
              Exceptional technical expertise built on over a decade of experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: 'spring' }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white p-8 rounded-3xl border-2 border-soft-grey hover:border-impact-green transition-all duration-500 group shadow-lg hover:shadow-2xl"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${capability.gradient} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <capability.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-black text-charcoal mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-research-blue group-hover:to-impact-green transition-all duration-300">
                  {capability.title}
                </h3>
                <ul className="space-y-3">
                  {capability.items.map((item) => (
                    <li key={item} className="flex items-start">
                      <TrendingUp className="w-5 h-5 text-impact-green mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-charcoal font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="relative py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d1fae512_1px,transparent_1px),linear-gradient(to_bottom,#d1fae512_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 bg-sky-blue text-research-blue rounded-full text-sm font-bold uppercase tracking-wide mb-6 border-2 border-research-blue">
              Global Partnerships
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-charcoal mb-4">
              Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-research-blue to-impact-green">Partners</span>
            </h2>
            <p className="text-xl text-charcoal max-w-2xl mx-auto font-medium">
              We collaborate with leading organizations worldwide
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'ERIC Consulting Ltd', description: 'Long-term strategic partner', icon: '🌍' },
              { name: 'Nove Metrics (UK)', description: 'Evaluation and analytics specialists', icon: '📊' },
              { name: 'ASK Training & Consulting (Afghanistan)', description: 'Humanitarian and development evaluation partner', icon: '🤝' },
            ].map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10, rotateY: 5 }}
                className="bg-soft-grey p-8 rounded-3xl border-2 border-soft-grey hover:border-impact-green text-center group shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-research-blue to-impact-green flex items-center justify-center text-4xl shadow-lg"
                >
                  {partner.icon}
                </motion.div>
                <h3 className="text-xl font-black text-charcoal mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-research-blue group-hover:to-impact-green transition-all duration-300">
                  {partner.name}
                </h3>
                <p className="text-charcoal font-medium">{partner.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-lg text-charcoal max-w-3xl mx-auto font-medium">
              Jaze operates nationally across Nigeria, with significant presence in Northern Nigeria
              and project experience in Afghanistan, Asia, and Africa.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
