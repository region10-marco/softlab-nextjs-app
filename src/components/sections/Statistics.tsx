'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { FaUsers, FaProjectDiagram, FaAward, FaCoffee } from 'react-icons/fa'

const Statistics = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    {
      icon: FaUsers,
      number: 250,
      suffix: '+',
      title: 'Happy Clients',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: FaProjectDiagram,
      number: 500,
      suffix: '+',
      title: 'Projects Done',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FaAward,
      number: 48,
      suffix: '+',
      title: 'Awards Won',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: FaCoffee,
      number: 1200,
      suffix: '+',
      title: 'Cups of Coffee',
      color: 'from-green-500 to-emerald-500',
    },
  ]

  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Achievements
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            We are proud of our accomplishments and the trust our clients place in us
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="text-4xl text-white" />
                </div>
                <div className="text-5xl font-bold text-white mb-2">
                  {inView && (
                    <CountUp
                      end={stat.number}
                      duration={2.5}
                      suffix={stat.suffix}
                    />
                  )}
                </div>
                <p className="text-xl text-white/90 font-medium">
                  {stat.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Statistics
