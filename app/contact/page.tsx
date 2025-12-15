'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Building2, Globe, Banknote, Sparkles } from 'lucide-react'
import PageHeader from '@/components/PageHeader'

export default function Contact() {
  return (
    <div className="bg-white">
      <PageHeader
        title="Get in"
        highlight="Touch"
        subtitle="Let's collaborate to create impactful solutions that drive sustainable development"
      />

      {/* Contact Information */}
      <section className="relative py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d1fae512_1px,transparent_1px),linear-gradient(to_bottom,#d1fae512_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-black text-gray-900 mb-12">
                Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-600">Information</span>
              </h2>
              <div className="space-y-8">
                {[
                  { icon: Building2, title: 'Company Name', content: 'Jaze Research and Evaluation Consultancy Company Limited', sub: 'Acronym: JRECC', color: 'cyan' },
                  { icon: MapPin, title: 'Address', content: 'Suite 510, 5th Floor\nBank of Industry House\nMuhammadu Buhari Way\nKaduna, Kaduna State, Nigeria', color: 'purple' },
                  { icon: Phone, title: 'Phone', content: '+234 912 776 3205', href: 'tel:+2349127763205', color: 'blue' },
                  { icon: Mail, title: 'Email', content: 'jazeresearchevaluation@gmail.com', href: 'mailto:jazeresearchevaluation@gmail.com', color: 'pink' },
                  { icon: Sparkles, title: 'Executive Director', content: 'Aisha Ahmad Keku', color: 'amber' },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-start space-x-4 group"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-14 h-14 rounded-xl bg-gradient-to-r ${
                        item.color === 'cyan' ? 'from-emerald-500 to-emerald-700' :
                        item.color === 'purple' ? 'from-emerald-700 to-emerald-900' :
                        item.color === 'blue' ? 'from-emerald-600 to-amber-600' :
                        item.color === 'pink' ? 'from-amber-500 to-amber-700' :
                        'from-amber-600 to-amber-800'
                      } flex items-center justify-center flex-shrink-0`}
                    >
                      <item.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-700 group-hover:to-amber-600 transition-all duration-300">
                        {item.title}
                      </h3>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-emerald-700 hover:text-emerald-800 transition-colors break-all font-semibold"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-gray-700 whitespace-pre-line font-medium">{item.content}</p>
                      )}
                      {item.sub && <p className="text-sm text-gray-600 mt-1 font-medium">{item.sub}</p>}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Registration Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
                className="bg-emerald-50 p-10 rounded-3xl border-2 border-emerald-200"
              >
                <h2 className="text-5xl font-black text-gray-900 mb-12 flex items-center">
                  <Banknote className="w-10 h-10 text-emerald-700 mr-4" />
                  Registration <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-600">Details</span>
                </h2>
              <div className="space-y-8">
                {[
                  { icon: Building2, label: 'CAC Registration Number', value: '1784084', gradient: 'from-emerald-500 to-emerald-700' },
                  { icon: Banknote, label: 'Tax Identification Number (TIN)', value: '238866231', gradient: 'from-emerald-700 to-emerald-900' },
                  { icon: Globe, label: 'Bank Account', bank: 'Zenith Bank', account: '1214701172', gradient: 'from-emerald-600 to-amber-600' },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="group"
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center mb-4`}>
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-700 group-hover:to-amber-600 transition-all duration-300">
                      {item.label}
                    </h3>
                    {item.value ? (
                      <p className="text-gray-700 text-lg font-bold">{item.value}</p>
                    ) : (
                      <div className="text-gray-700">
                        <p className="font-bold">{item.bank}</p>
                        <p className="text-lg font-semibold">{item.account}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Map Section Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 bg-emerald-50 rounded-3xl p-16 text-center border-2 border-emerald-200"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-r from-emerald-600 to-amber-600 flex items-center justify-center shadow-lg"
            >
              <MapPin className="w-12 h-12 text-white" />
            </motion.div>
            <h3 className="text-3xl font-black text-gray-900 mb-4">Visit Us</h3>
            <p className="text-gray-700 text-lg font-medium">
              Suite 510, 5th Floor, Bank of Industry House<br />
              Muhammadu Buhari Way, Kaduna, Kaduna State, Nigeria
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
