import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, CheckCircle2, Loader2, Shield, Zap, ArrowRight } from 'lucide-react'
import { useForm, ValidationError } from '@formspree/react'
import './App.css'

// Formspree endpoint ID
const FORMSPREE_ID = 'mbddlglg'

const features = [
  {
    icon: <Zap className="w-6 h-6 text-teal-400" />,
    title: "Zero Agent Hassle",
    description: "No more endless agent fees or 'inspection' stress. Fewer middlemen. Clearer processes."
  },
  {
    icon: <Shield className="w-6 h-6 text-emerald-400" />,
    title: "Seamless Renting",
    description: "Solving the unique challenges of the Nigerian rental market with transparent processes and verified listings."
  }
]

function App() {
  const [state, handleSubmit] = useForm(FORMSPREE_ID);
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-mesh text-white selection:bg-teal-500/30 overflow-x-hidden font-sans">
      {/* Dynamic Background Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%" 
            }}
            animate={{ 
              y: [null, Math.random() * -100 - 50 + "px"],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ 
              duration: Math.random() * 5 + 5, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
        ))}
      </div>

      <main className="relative z-10 container mx-auto px-4 py-12 md:py-24 min-h-screen flex flex-col items-center">
        <div className="grid md:grid-cols-2 gap-16 items-start w-full max-w-6xl mt-8 md:mt-16">
          {/* Left Column: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-left space-y-8"
          >
            <div className="space-y-6">
              <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
                A Simpler Way to <br />
                <span className="text-gradient">Rent and Manage</span> <br />
                Property
              </motion.h1>
              
              <motion.p variants={itemVariants} className="text-gray-400 text-base md:text-lg lg:text-xl max-w-xl leading-relaxed">
                PropHunta brings transparency to renting and property management in Nigeria by helping renters, property owners, and property firms simplify processes, reduce unnecessary agent layers, and operate with clarity.
              </motion.p>
            </div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 gap-4 sm:gap-6 pt-4">
              {features.map((feature, i) => (
                <motion.div 
                  key={i} 
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="flex gap-4 p-4 rounded-2xl bg-white/0 hover:bg-white/5 transition-all border border-transparent hover:border-white/5 group cursor-default"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1 text-base md:text-lg">{feature.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:sticky md:top-32 self-start"
          >
            {/* Glow Effect behind card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-emerald-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="glass-card relative p-8 md:p-10 rounded-3xl overflow-hidden">
              <AnimatePresence mode="wait">
                {!state.succeeded ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                  >
                    <h2 className="text-2xl font-bold mb-2">Secure Early Access</h2>
                    <p className="text-gray-400 mb-8">Limited spots available for our Beta launch.</p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          placeholder="Your full name"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none"
                          required
                        />
                        <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-xs mt-1" />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                          <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none"
                            required
                          />
                        </div>
                        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1" />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="interest" className="text-sm font-medium text-gray-300">I am interested in</label>
                        <select
                          id="interest"
                          name="interest"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none appearance-none cursor-pointer text-gray-300"
                        >
                          <option value="" className="bg-gray-900">Select an option</option>
                          <option value="renting" className="bg-gray-900">Rent Property</option>
                          <option value="managing" className="bg-gray-900">Manage Property</option>
                        </select>
                        <ValidationError prefix="Interest" field="interest" errors={state.errors} className="text-red-400 text-xs mt-1" />
                      </div>

                      <button
                        type="submit"
                        disabled={state.submitting}
                        className="w-full group relative flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-bold py-4 rounded-xl shadow-xl shadow-teal-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
                      >
                        {state.submitting ? (
                          <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                          <>
                            Join Waitlist
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-teal-500" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">You're on the list!</h2>
                    <p className="text-gray-400 mb-8 leading-relaxed">
                      Thank you for joining our community. We've received your submission and will be in touch soon.
                    </p>
                    <button
                      onClick={() => window.location.reload()}
                      className="text-sm font-medium text-teal-400 hover:text-teal-300 transition-colors"
                    >
                      Back to form
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-24 pt-8 border-t border-white/5 w-full max-w-6xl flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm"
        >
          <p>© 2026 PropHunta Technologies. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </motion.footer>
      </main>
    </div>
  )
}

export default App
