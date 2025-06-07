"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Code,
  Award,
  User,
  Menu,
  X,
  Download,
  ArrowRight,
  Star,
  Calendar,
  Building,
  Trophy,
} from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { id: "hero", label: "Home", icon: User },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "projects", label: "Projects", icon: Code },
    { id: "certifications", label: "Certifications", icon: Award },
    { id: "skills", label: "Skills", icon: Code },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id)
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                <img
                    src="/profile.jpg"
                    alt="Saksham's Photo"
                    className="w-10 h-10 rounded-xl flex items-center object-cover border-1 border-white shadow-md"
                  />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent">
                Saksham Sapkota
              </h1>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-200 ${activeSection === item.id
                    ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 shadow-sm"
                    : "hover:bg-slate-100 dark:hover:bg-slate-800/50 text-slate-600 dark:text-slate-300"
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <item.icon size={16} />
                  <span className="font-medium">{item.label}</span>
                </motion.button>
              ))}
              <div className="ml-4 pl-4 border-l border-slate-200 dark:border-slate-700">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button
                className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 space-y-2 pb-4"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center space-x-3 w-full px-4 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-left"
                >
                  <item.icon size={18} />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
            >
              <div className="space-y-4">
                <motion.div
                  className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Trophy className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                  <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                    IOE Entrance Rank 10 • Top Performer
                  </span>
                </motion.div>

                <motion.h1
                  className="text-5xl lg:text-7xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent">
                    AI/ML
                  </span>
                  <br />
                  <span className="text-slate-700 dark:text-slate-300">Enthusiast</span>
                </motion.h1>

                <motion.p
                  className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  Passionate about solving real-world problems using deep learning and data-driven approaches. Currently
                  pursuing Computer Engineering at IOE Pulchowk Campus with hands-on experience in AI projects.
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} className="text-blue-600 dark:text-blue-400" />
                    <span>Pulchowk, Lalitpur</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail size={16} className="text-blue-600 dark:text-blue-400" />
                    <span>jrsaksham10@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone size={16} className="text-blue-600 dark:text-blue-400" />
                    <span>+977-9845283345</span>
                  </div>
                </motion.div>

                <motion.div
                  className="flex flex-wrap gap-4 pt-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <a href="/saksham_s_cv.pdf" download>
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
                    >
                      <Download className="mr-2" size={18} />
                      Download Resume
                    </Button>
                  </a>
                  <a
                    href="https://www.github.com/SakshamJr/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-2 hover:bg-slate-50 dark:hover:bg-slate-800"
                    >
                      <Github className="mr-2" size={18} />
                      GitHub
                    </Button>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/saksham-jr/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-2 hover:bg-slate-50 dark:hover:bg-slate-800"
                    >
                      <Linkedin className="mr-2" size={18} />
                      LinkedIn
                    </Button>
                  </a>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
            >
              <div className="relative">
                <motion.div
                  className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-600 rounded-3xl shadow-2xl flex items-center justify-center text-white text-6xl font-bold"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <img
                    src="/profile.jpg"
                    alt="Saksham's Photo"
                    className="w-80 h-80 rounded-3xl shadow-2xl flex items-center object-cover border-2 border-white shadow-md"
                  />
                </motion.div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-2xl opacity-20 blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-400 rounded-2xl opacity-20 blur-xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl">
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent">
                Education
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Strong academic foundation in Computer Engineering and Science
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div variants={scaleIn}>
                <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                          <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                            Bachelor's in Computer Engineering
                          </CardTitle>
                          <CardDescription className="text-slate-600 dark:text-slate-400">
                            Institute of Engineering, Pulchowk Campus
                          </CardDescription>
                        </div>
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                      >
                        Apr 2022 – July 2026
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Star className="w-5 h-5 text-yellow-500" />
                      <span className="text-lg font-semibold text-green-600 dark:text-green-400">
                        Aggregate: 81.76%
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-slate-700 dark:text-slate-300">Key Coursework:</h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Computer Architecture",
                          "Artificial Intelligence",
                          "Data Structures",
                          "Project Management",
                          "Software Engineering",
                        ].map((course) => (
                          <Badge key={course} variant="outline" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={scaleIn}>
                <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
                          <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl group-hover:text-green-600 transition-colors">
                            +2, Science
                          </CardTitle>
                          <CardDescription className="text-slate-600 dark:text-slate-400">
                            Orchid Science College, Bharatpur, Chitwan
                          </CardDescription>
                        </div>
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                      >
                        July 2019 - Sept 2021
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Star className="w-5 h-5 text-yellow-500" />
                      <span className="text-lg font-semibold text-green-600 dark:text-green-400">GPA: 3.59</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-slate-700 dark:text-slate-300">Key Coursework:</h4>
                      <div className="flex flex-wrap gap-2">
                        {["Calculus", "Algebra", "Physics", "Computer Overview", "Chemistry"].map((course) => (
                          <Badge key={course} variant="outline" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent">
                Experience
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Leadership roles and professional experience in education and student organizations
              </p>
            </motion.div>

            <div className="space-y-8">
              {[
                {
                  title: "Mentor",
                  company: "ClampHook Academy",
                  location: "Kupondole, Lalitpur",
                  period: "May 2023 – Present",
                  color: "blue",
                  icon: User,
                  responsibilities: [
                    "Working as a mentor for students appearing for the Institute of Engineering, Entrance Examination",
                    "Volunteered as a Computer-Based Test invigilator",
                  ],
                },
                {
                  title: "Hostel Prefect",
                  company: "Pulchowk Campus Boys Hostel",
                  location: "Pulchowk, Lalitpur",
                  period: "Aug 2023 – July 2024",
                  color: "purple",
                  icon: Building,
                  responsibilities: [
                    "Elected member of the Hostel Prefect Committee",
                    "Supervised and managed hostel activities, ensuring a safe and disciplined environment for over 390 students",
                  ],
                },
                {
                  title: "Executive Member",
                  company: "Chitwan Engineering Students Association",
                  location: "Pulchowk Campus",
                  period: "Mar 2023 - Mar 2024",
                  color: "green",
                  icon: Briefcase,
                  responsibilities: [
                    "Organized 3+ major student welfare events, including blood donation campaign, book distribution, and clothes donation",
                    "Developed leadership and teamwork skills while contributing to the campus community",
                  ],
                },
                {
                  title: "Event Organizer",
                  company: "LOCUS",
                  location: "Pulchowk Campus",
                  period: "Jan 2023",
                  color: "orange",
                  icon: Calendar,
                  responsibilities: [
                    "Managed logistics and setup for 2 major robotics competitions: RoboPop and Dronacharya with 20+ participants",
                    "Marketing team member to reach out to sponsors",
                    "Worked as a volunteer for the LOCUS Photography Competition",
                  ],
                },
              ].map((exp, index) => (
                <motion.div key={index} variants={scaleIn}>
                  <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-12 h-12 bg-gradient-to-br from-${exp.color}-500 to-${exp.color}-600 rounded-xl flex items-center justify-center`}
                          >
                            <exp.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <CardTitle className={`text-xl group-hover:text-${exp.color}-600 transition-colors`}>
                              {exp.title}
                            </CardTitle>
                            <CardDescription className="text-slate-600 dark:text-slate-400">
                              {exp.company} • {exp.location}
                            </CardDescription>
                          </div>
                        </div>
                        <Badge
                          variant="secondary"
                          className={`bg-${exp.color}-100 dark:bg-${exp.color}-900/30 text-${exp.color}-700 dark:text-${exp.color}-300`}
                        >
                          {exp.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start space-x-3 text-slate-600 dark:text-slate-400">
                            <ArrowRight className="w-4 h-4 mt-1 text-blue-500 flex-shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl">
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent">
                Featured Project
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Deep learning solution for grape disease detection
              </p>
            </motion.div>

            <motion.div variants={scaleIn} className="max-w-4xl mx-auto">
              <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm overflow-hidden">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                        <Code className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">Grape Disease Identification</h3>
                        <p className="text-green-100">Deep Learning-based Disease Detection System</p>
                      </div>
                    </div>
                    <a href="https://github.com/SakshamJr/Grape-Disease-Identification">
                      <Button
                        variant="secondary"
                        size="lg"
                        className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                      >
                        <ExternalLink size={18} className="mr-2" />
                        View Project
                      </Button>
                    </a>
                  </div>
                </div>

                <CardContent className="p-8 space-y-6">
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                    Developed a cutting-edge deep learning system using Convolutional Neural Networks (CNN) to
                    accurately identify grape plant diseases from leaf images. The system features a user-friendly web
                    interface for real-time disease predictions with exceptional accuracy.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-lg text-slate-700 dark:text-slate-300 flex items-center">
                        <Star className="w-5 h-5 text-yellow-500 mr-2" />
                        Key Features
                      </h4>
                      <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>98% accuracy in disease detection</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>Real-time prediction interface</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span>User-friendly web application</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-lg text-slate-700 dark:text-slate-300 flex items-center">
                        <Code className="w-5 h-5 text-blue-500 mr-2" />
                        Skills Acquired
                      </h4>
                      <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span>CNN Architecture Design</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <span>Data Augmentation Techniques</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                          <span>Hyperparameter Tuning</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                    <h4 className="font-semibold mb-3 text-slate-700 dark:text-slate-300">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Python", "TensorFlow", "FastAPI", "CNN", "Deep Learning", "Dropout Regularization","Pooling","Tensorflow Pipelines"].map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent">
                Certifications
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Continuous learning and professional development in AI/ML
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Machine Learning Specialization",
                  provider: "Coursera, Deeplearning.AI",
                  description:
                    "Comprehensive training in machine learning algorithms, neural networks, and practical implementation using TensorFlow and scikit-learn.",
                  color: "blue",
                  skills: ["NumPy", "TensorFlow", "Neural Networks", "Regression Analysis"],
                  link: "https://www.coursera.org/account/accomplishments/specialization/63ZN55EGLX34"
                },
                {
                  title: "Data Visualization",
                  provider: "Kaggle Learn",
                  description:
                    "Mastered data visualization techniques using Python libraries to create compelling and informative visual representations.",
                  color: "green",
                  skills: ["Seaborn", "Matplotlib", "Data Analysis", "Statistical Visualization"],
                  link: "https://www.kaggle.com/learn/certification/sakshamjr10/data-visualization"
                },
                {
                  title: "Career Essentials in Generative AI",
                  provider: "Microsoft and LinkedIn",
                  description:
                    "Explored the fundamentals of generative AI, AI ethics, and practical applications in modern business environments.",
                  color: "purple",
                  skills: ["Copilot", "AI Ethics", "Generative AI", "Microsoft 365"],
                  link: "https://www.linkedin.com/learning/certificates/9bf15d0e8ba4ee69e7eb27fbe657e6b4a4f392a7a0f9334b962d8e696978a519"
                },
                {
                  title: "Intermediate Machine Learning",
                  provider: "Kaggle Learn",
                  description:
                    "Advanced machine learning techniques including ensemble methods, feature engineering, and model optimization strategies.",
                  color: "orange",
                  skills: ["XGBoost", "Decision Trees", "Feature Engineering", "Model Optimization"],
                  link: "https://www.kaggle.com/learn/certification/sakshamjr10/intermediate-machine-learning"
                },
                {
                  title: "Intro to Machine Learning",
                  provider: "Kaggle Learn",
                  description:
                    "Developed an understanding of Machine Learning and some Machine Learning Algorithms.",
                  color: "orange",
                  skills: ["XGBoost", "Decision Trees", "Feature Engineering", "Model Optimization"],
                  link: "https://www.kaggle.com/learn/certification/sakshamjr10/intro-to-machine-learning"
                }
              ].map((cert, index) => (
                <motion.div key={index} variants={scaleIn}>

                  <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm h-full">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-12 h-12 bg-gradient-to-br from-${cert.color}-500 to-${cert.color}-600 rounded-xl flex items-center justify-center`}
                          >
                            <Award className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <CardTitle className={`text-lg group-hover:text-${cert.color}-600 transition-colors`}>
                              {cert.title}
                            </CardTitle>
                            <CardDescription className="text-slate-600 dark:text-slate-400">
                              {cert.provider}
                            </CardDescription>
                          </div>
                        </div>
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block h-full"
                        >
                          <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors" />
                        </a>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{cert.description}</p>
                      <div>
                        <h4 className="font-semibold mb-2 text-slate-700 dark:text-slate-300">Key Skills:</h4>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl">
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent">
                Skills & Expertise
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Technical proficiency across multiple domains and technologies
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {[
                {
                  category: "Languages",
                  skills: ["C/C++", "Python", "HTML", "JavaScript", "Java", "SQL"],
                  color: "blue",
                  icon: Code,
                },
                {
                  category: "Frameworks",
                  skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-Learn", "TensorFlow", "Streamlit"],
                  color: "green",
                  icon: Award,
                },
                {
                  category: "Tools",
                  skills: ["Excel", "Photoshop", "Capcut", "Lightroom", "Git"],
                  color: "purple",
                  icon: Briefcase,
                },
                {
                  category: "Platforms",
                  skills: ["Visual Studio", "Google Colab", "Jupyter Notebook", "PyCharm"],
                  color: "teal",
                  icon: Building,
                },
              ].map((skillGroup, index) => (
                <motion.div key={index} variants={scaleIn}>
                  <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm h-full">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br from-${skillGroup.color}-500 to-${skillGroup.color}-600 rounded-xl flex items-center justify-center`}
                        >
                          <skillGroup.icon className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className={`text-lg group-hover:text-${skillGroup.color}-600 transition-colors`}>
                          {skillGroup.category}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="text-xs hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Achievements Section */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <h3 className="text-2xl font-bold text-center text-slate-700 dark:text-slate-300">
                Notable Achievements & Interests
              </h3>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <Trophy className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                    <h4 className="font-bold text-lg text-yellow-700 dark:text-yellow-400 mb-2">
                      IOE Entrance Rank 10
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Achieved top 10 ranking and honored as Chitwan Topper by CESA
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold">120+</span>
                    </div>
                    <h4 className="font-bold text-lg text-red-700 dark:text-red-400 mb-2">Blood Donation Organizer</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Organized campaigns collecting over 120 units of blood
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-xl">🎵</span>
                    </div>
                    <h4 className="font-bold text-lg text-purple-700 dark:text-purple-400 mb-2">Creative Interests</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Singing, Guitar, Piano, Harmonium, Dancing
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 dark:bg-slate-950 text-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Let's Connect & Collaborate
              </h3>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Always open to discussing AI/ML projects, research opportunities, or just having a conversation about
                technology and innovation.
              </p>
            </div>

            <div className="flex justify-center space-x-6">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=jrsaksham10@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-white hover:text-blue-400 hover:bg-slate-800 transition-all duration-200"
                >
                  <Mail className="mr-2" size={20} />
                  jrsaksham10@gmail.com
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/saksham-jr/">
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-white hover:text-blue-400 hover:bg-slate-800 transition-all duration-200"
                >
                  <Linkedin className="mr-2" size={20} />
                  LinkedIn
                </Button>
              </a>
              <a href="https://www.github.com/SakshamJr/">
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-white hover:text-blue-400 hover:bg-slate-800 transition-all duration-200"
                >
                  <Github className="mr-2" size={20} />
                  GitHub
                </Button>
              </a>
            </div>

            <Separator className="bg-slate-800" />

            <div className="flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
              <p>© 2024 Saksham Sapkota. All rights reserved.</p>
              <p>Built with Next.js, Framer Motion & Tailwind CSS</p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
