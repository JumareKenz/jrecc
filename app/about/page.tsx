'use client'

import { motion } from 'framer-motion'
import { Target, Eye, MapPin, Phone, Mail, Building2, Sparkles, Heart, Stethoscope, GraduationCap, Globe2, TrendingUp, FileText, Users2, ShieldCheck, BarChart, Database, Map, BookOpen } from 'lucide-react'
import PageHeader from '@/components/PageHeader'

export default function About() {
  const expertise = [
    {
      title: 'Public Health, Nutrition & Epidemiology',
      icon: Stethoscope,
      description: 'Comprehensive health research and epidemiological studies to improve public health outcomes.',
      gradient: 'from-research-blue to-impact-green',
      examples: ['Disease surveillance', 'Nutrition assessments', 'Health impact evaluations'],
    },
    {
      title: 'Disaster Risk Reduction',
      icon: ShieldCheck,
      description: 'Assessing and mitigating risks to build resilient communities and systems.',
      gradient: 'from-impact-green to-research-blue',
      examples: ['Risk assessments', 'Emergency planning', 'Recovery evaluations'],
    },
    {
      title: 'Socio-economic & Demographic Studies',
      icon: Users2,
      description: 'In-depth analysis of social and economic factors affecting communities.',
      gradient: 'from-research-blue to-impact-green',
      examples: ['Household surveys', 'Poverty assessments', 'Demographic analysis'],
    },
    {
      title: 'Education, Agriculture & Labour Market Studies',
      icon: GraduationCap,
      description: 'Research and evaluation across education, agriculture, and employment sectors.',
      gradient: 'from-impact-green to-research-blue',
      examples: ['Education assessments', 'Agricultural surveys', 'Labor market analysis'],
    },
    {
      title: 'GIS & Remote Sensing',
      icon: Map,
      description: 'Spatial analysis and mapping solutions for data visualization and planning.',
      gradient: 'from-research-blue to-impact-green',
      examples: ['Spatial mapping', 'Geographic analysis', 'Remote sensing applications'],
    },
    {
      title: 'Impact Assessment and Feasibility Studies',
      icon: TrendingUp,
      description: 'Comprehensive impact evaluations and feasibility assessments for programs and projects.',
      gradient: 'from-research-blue to-impact-green',
      examples: ['Program impact studies', 'Feasibility analysis', 'Outcome evaluations'],
    },
    {
      title: 'Monitoring & Evaluation',
      icon: BarChart,
      description: 'Systematic monitoring and evaluation frameworks for program effectiveness.',
      gradient: 'from-impact-green to-research-blue',
      examples: ['M&E frameworks', 'Performance tracking', 'Results measurement'],
    },
    {
      title: 'Project Management',
      icon: FileText,
      description: 'End-to-end project management ensuring successful delivery and outcomes.',
      gradient: 'from-research-blue to-impact-green',
      examples: ['Project planning', 'Resource coordination', 'Timeline management'],
    },
    {
      title: 'Statistics & Research',
      icon: Database,
      description: 'Advanced statistical analysis and research methodology expertise.',
      gradient: 'from-impact-green to-research-blue',
      examples: ['Statistical modeling', 'Research design', 'Data analysis'],
    },
    {
      title: 'Educational Advisory',
      icon: BookOpen,
      description: 'Strategic advisory services for educational institutions and programs.',
      gradient: 'from-research-blue to-impact-green',
      examples: ['Curriculum development', 'Educational planning', 'Policy advisory'],
    },
    {
      title: 'Capacity Building',
      icon: Heart,
      description: 'Training and development programs to strengthen organizational capabilities.',
      gradient: 'from-impact-green to-research-blue',
      examples: ['Training workshops', 'Skill development', 'Knowledge transfer'],
    },
    {
      title: 'Business Management',
      icon: Globe2,
      description: 'Strategic business management consulting for sustainable growth.',
      gradient: 'from-research-blue to-impact-green',
      examples: ['Strategic planning', 'Organizational development', 'Process optimization'],
    },
  ]

  return (
    <div className="bg-white">
      <PageHeader
        title="About"
        highlight="Us"
        subtitle="Leading public health and development consulting firm specializing in program assessment, monitoring, evaluation, and applied research."
      />

      {/* Company Overview */}
      <section className="relative py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d1fae512_1px,transparent_1px),linear-gradient(to_bottom,#d1fae512_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-black text-charcoal mb-12"
            >
              Company <span className="text-transparent bg-clip-text bg-gradient-to-r from-research-blue to-impact-green">Overview</span>
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6 text-lg text-charcoal leading-relaxed font-medium"
              >
                <p>
                  Jaze Research and Evaluation Consultancy Services Ltd is a public health
                  and development consulting firm specializing in program assessment,
                  monitoring, evaluation, and applied research.
                </p>
                <p>
                  We design and conduct epidemiological studies, implement surveys, and analyze
                  data to inform evidence-based decision-making.
                </p>
                <p>
                  Our team combines expertise in public health, epidemiology, sociology,
                  nutrition, biostatistics, and implementation science, applying both
                  quantitative and qualitative methodologies to achieve client goals efficiently
                  and effectively.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-soft-grey p-10 rounded-3xl border-2 border-soft-grey"
              >
                <h3 className="text-3xl font-black text-charcoal mb-8 flex items-center">
                  <Building2 className="w-8 h-8 text-research-blue mr-3" />
                  Company Details
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Building2 className="w-6 h-6 text-impact-green mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-charcoal mb-1">Full Name</div>
                      <div className="text-charcoal">Jaze Research and Evaluation Consultancy Company Limited</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Building2 className="w-6 h-6 text-research-blue mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-charcoal mb-1">Acronym</div>
                      <div className="text-charcoal">JRECC</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Sparkles className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-charcoal mb-1">Executive Director</div>
                      <div className="text-charcoal">Aisha Ahmad Keku</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-research-blue mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-charcoal mb-1">Address</div>
                      <div className="text-charcoal">
                        Suite 510, 5th Floor, Bank of Industry House,<br />
                        Muhammadu Buhari Way, Kaduna, Kaduna State, Nigeria
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-impact-green mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-charcoal mb-1">Phone</div>
                      <a href="tel:+2349127763205" className="text-research-blue hover:text-research-blue transition-colors font-semibold">
                        +234 912 776 3205
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-charcoal mb-1">Email</div>
                      <a href="mailto:jazeresearchevaluation@gmail.com" className="text-research-blue hover:text-research-blue transition-colors break-all font-semibold">
                        jazeresearchevaluation@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t-2 border-soft-grey">
                  <div className="text-sm text-charcoal space-y-2 font-medium">
                    <div><span className="font-bold text-charcoal">CAC Registration:</span> 1784084</div>
                    <div><span className="font-bold text-charcoal">TIN:</span> 238866231</div>
                    <div><span className="font-bold text-charcoal">Bank:</span> Zenith Bank – 1214701172</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-32 bg-soft-grey overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d1fae512_1px,transparent_1px),linear-gradient(to_bottom,#d1fae512_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -10 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-research-blue to-impact-green rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              <div className="relative bg-gradient-to-br from-research-blue to-impact-green p-10 rounded-3xl text-white border-2 border-impact-green shadow-xl">
                <div className="flex items-center mb-8">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mr-6"
                  >
                    <Target className="w-10 h-10" />
                  </motion.div>
                  <h2 className="text-4xl font-black">Our Mission</h2>
                </div>
                <p className="text-xl leading-relaxed text-white/90 font-medium">
                  To empower organizations with intelligent, evidence-based, and technology-driven
                  solutions, bridging data, people, and purpose to deliver sustainable development
                  outcomes with integrity and precision.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -10 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-research-blue to-impact-green rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              <div className="relative bg-gradient-to-br from-research-blue to-impact-green p-10 rounded-3xl text-white border-2 border-gold shadow-xl">
                <div className="flex items-center mb-8">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mr-6"
                  >
                    <Eye className="w-10 h-10" />
                  </motion.div>
                  <h2 className="text-4xl font-black">Our Vision</h2>
                </div>
                <p className="text-xl leading-relaxed text-white/90 font-medium">
                  To be Africa's leading center of excellence in research, evaluation, and data
                  innovation, transforming evidence into actionable insights that improve health,
                  strengthen systems, and uplift communities worldwide.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Expertise Section */}
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
              Our Expertise
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-charcoal mb-4">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-research-blue to-impact-green">Expertise</span>
            </h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto font-medium">
              Deep domain knowledge across multiple sectors, backed by years of practical experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, type: 'spring' }}
                whileHover={{ scale: 1.03, y: -8 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl" style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }} />
                <div className="relative bg-soft-grey p-8 rounded-3xl border-2 border-soft-grey hover:border-impact-green transition-all duration-500 shadow-lg hover:shadow-2xl h-full">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.gradient} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-black text-charcoal mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-research-blue group-hover:to-impact-green transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-charcoal leading-relaxed font-medium mb-4 text-sm">
                    {item.description}
                  </p>
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-research-blue uppercase tracking-wide mb-2">Key Areas:</div>
                    {item.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.gradient} mr-2 flex-shrink-0`} />
                        <span className="font-medium">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
