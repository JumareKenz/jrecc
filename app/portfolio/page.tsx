'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Award, TrendingUp, Sparkles } from 'lucide-react'
import PageHeader from '@/components/PageHeader'

export default function Portfolio() {
  const projects = [
    {
      year: '2023',
      title: 'Endline Evaluation - AEID Project',
      client: 'Plan International',
      location: 'Borno State',
      period: 'June 2023',
      gradient: 'from-emerald-400 to-emerald-700',
    },
    {
      year: '2023',
      title: 'Endline Evaluation - BMZ Project',
      client: 'Plan International',
      location: 'Yobe State',
      period: 'Apr–May 2023',
      gradient: 'from-emerald-700 to-emerald-900',
    },
    {
      year: '2021',
      title: 'Endline Evaluation - REACH Project',
      client: 'REACH',
      location: 'Zamfara, Katsina, Gombe',
      period: '2021',
      gradient: 'from-emerald-600 to-amber-600',
    },
    {
      year: '2020',
      title: 'Midterm Evaluation - REACH Project',
      client: 'REACH',
      location: 'Zamfara, Katsina, Gombe',
      period: '2020',
      gradient: 'from-amber-500 to-amber-700',
    },
    {
      year: '2017-2018',
      title: 'Mid-Term Evaluation - WHH Project',
      client: 'WHH',
      location: 'Kabul Province, Afghanistan',
      period: '2017–2018',
      gradient: 'from-emerald-800 to-emerald-900',
    },
    {
      year: '2017',
      title: 'Client Exit Interview Report',
      client: 'MSI',
      location: 'Afghanistan',
      period: '2017',
      gradient: 'from-amber-600 to-amber-800',
    },
    {
      year: '2016-2017',
      title: 'Maternal & Perinatal Death Review',
      client: 'UNFPA Nigeria',
      location: 'Kaduna State',
      period: '2016–2017',
      gradient: 'from-emerald-400 to-emerald-700',
    },
    {
      year: '2016-2018',
      title: 'BORN & SHOW Project Surveys',
      client: 'Plan International',
      location: 'Bauchi, Sokoto, Zamfara',
      period: '2016–2018',
      gradient: 'from-emerald-700 to-emerald-900',
    },
    {
      year: '2015-2017',
      title: 'SMC Scale-up Project',
      client: 'London School of Hygiene & Tropical Medicine',
      location: 'Sokoto, Katsina, Jigawa, Zamfara',
      period: '2015–2017',
      gradient: 'from-emerald-600 to-amber-600',
    },
    {
      year: '2015',
      title: 'SMC Communication Study',
      client: 'Malaria Consortium / BMGF',
      location: 'Katsina, Sokoto, Zamfara',
      period: 'May–Jun 2015',
      gradient: 'from-amber-500 to-amber-700',
    },
    {
      year: '2013',
      title: 'SMC Project Coordination',
      client: 'BMGF',
      location: 'Katsina',
      period: 'Jan–Jun 2013',
      gradient: 'from-emerald-800 to-emerald-900',
    },
    {
      year: '2013',
      title: 'Capacity Building Training',
      client: 'BMGF',
      location: 'Katsina',
      period: 'Jul–Aug 2013',
      gradient: 'from-amber-600 to-amber-800',
    },
    {
      year: '2013-2014',
      title: 'SMC Implementation Planning',
      client: 'BMGF/DFID',
      location: 'Jigawa',
      period: 'Nov 2013–Feb 2014',
      gradient: 'from-emerald-400 to-emerald-700',
    },
    {
      year: '2015',
      title: 'Lessons Learnt Workshop',
      client: 'BMGF/DFID',
      location: 'Katsina',
      period: 'Apr–May 2015',
      gradient: 'from-emerald-700 to-emerald-900',
    },
    {
      year: '2011-2013',
      title: 'PRRINN-MNCH Initiative',
      client: 'DFID & Norwegian Govt',
      location: 'Zamfara',
      period: '2011–2013',
      gradient: 'from-emerald-600 to-amber-600',
    },
  ]

  const sectors = [
    { name: 'Development Agencies', gradient: 'from-cyan-500 to-blue-600' },
    { name: 'Multilateral Organizations', gradient: 'from-purple-500 to-pink-600' },
    { name: 'Non-profit and Social Enterprises', gradient: 'from-emerald-500 to-teal-600' },
    { name: 'Public & Private Organizations', gradient: 'from-orange-500 to-amber-600' },
    { name: 'National & Intl. NGOs', gradient: 'from-violet-500 to-purple-600' },
    { name: 'Healthcare Providers', gradient: 'from-rose-500 to-pink-600' },
  ]

  return (
    <div className="bg-white">
      <PageHeader
        title="Our Track"
        highlight="Record"
        subtitle="Over a decade of impactful projects across Africa, Asia, and beyond"
      />

      {/* Stats */}
      <section className="relative py-20 bg-emerald-50 overflow-hidden border-y-2 border-emerald-700">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d1fae512_1px,transparent_1px),linear-gradient(to_bottom,#d1fae512_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '15+', label: 'Years Experience', gradient: 'from-emerald-400 to-emerald-700' },
              { number: '50+', label: 'Projects Completed', gradient: 'from-emerald-700 to-emerald-900' },
              { number: '15+', label: 'Countries Served', gradient: 'from-emerald-600 to-amber-600' },
              { number: '20+', label: 'Partners Worldwide', gradient: 'from-amber-500 to-amber-700' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.1, y: -10 }}
                className="text-center group"
              >
                <div className={`text-5xl md:text-7xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-3`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-bold group-hover:text-emerald-700 transition-colors uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Timeline */}
      <section className="relative py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d1fae512_1px,transparent_1px),linear-gradient(to_bottom,#d1fae512_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
              Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-600">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
              A comprehensive timeline of our successful projects
            </p>
          </motion.div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={`${project.year}-${index}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                <div                 className="relative bg-emerald-50 p-8 rounded-3xl border-2 border-emerald-200 hover:border-emerald-600 transition-all duration-500 shadow-sm hover:shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`px-6 py-3 rounded-2xl bg-gradient-to-r ${project.gradient} inline-flex items-center w-fit shadow-md`}
                    >
                      <Calendar className="w-5 h-5 text-white mr-2" />
                      <span className="text-white font-bold">{project.year}</span>
                    </motion.div>
                    <h3 className="text-3xl font-black text-gray-900 flex-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-700 group-hover:to-amber-600 transition-all duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="flex items-center">
                      <Award className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-gray-600 font-semibold">Client</div>
                        <div className="text-gray-900 font-bold">{project.client}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-emerald-700 mr-3 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-gray-600 font-semibold">Location</div>
                        <div className="text-gray-900 font-bold">{project.location}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="w-5 h-5 text-amber-600 mr-3 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-gray-600 font-semibold">Period</div>
                        <div className="text-gray-900 font-bold">{project.period}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Served */}
      <section className="relative py-32 bg-emerald-50 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d1fae512_1px,transparent_1px),linear-gradient(to_bottom,#d1fae512_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
              Sectors <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-600">Served</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
              Effective and impactful solutions across diverse sectors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.name}
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: 'spring' }}
                whileHover={{ scale: 1.05, rotate: 2, y: -5 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${sector.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                <div className="relative bg-emerald-50 p-8 rounded-2xl border-2 border-emerald-200 hover:border-emerald-600 transition-all duration-500 text-center h-full shadow-sm hover:shadow-lg">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${sector.gradient} flex items-center justify-center shadow-md`}
                  >
                    <Sparkles className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="text-gray-900 font-black text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-700 group-hover:to-amber-600 transition-all duration-300 uppercase tracking-wide">
                    {sector.name}
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
