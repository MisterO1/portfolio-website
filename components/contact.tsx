"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, FileText } from "lucide-react"
import Link from "next/link"
import { useI18n } from "@/locales/client"

export default function Contact() {
  const t = useI18n()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })

    // Reset the submitted state after 5 seconds
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">{t('contact.heading', { count: 1 })}</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {t('contact.intro', { count: 1 })}
          </p>
          <div className="h-1 w-20 bg-sky-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">{t('contact.info_heading', { count: 1 })}</h3>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-sky-100 dark:bg-sky-900/30 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-sky-600 dark:text-sky-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{t('contact.email_label', { count: 1 })}</p>
                      <p className="text-slate-800 dark:text-white font-medium">kouassiolivier18@gmail.com</p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
                    <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">{t('contact.connect_heading', { count: 1 })}</h4>
                    <div className="flex gap-4">
                      <Link
                        href="https://www.linkedin.com/in/olivier-kouassi-a5abb616a/"
                        target="_blank"
                        className="bg-slate-100 dark:bg-slate-800 p-3 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                      </Link>
                      <Link
                        href="https://github.com/MisterO1?tab=repositories" 
                        target="_blank"
                        className="bg-slate-100 dark:bg-slate-800 p-3 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                      </Link>
                      {/* <Link
                        href="#"
                        className="bg-slate-100 dark:bg-slate-800 p-3 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                        aria-label="Resume"
                      >
                        <FileText className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                      </Link> */}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">{t('contact.form_heading', { count: 1 })}</h3>

                {submitted ? (
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-900 rounded-lg p-4 text-center">
                    <h4 className="text-blue-800 dark:text-blue-400 font-medium text-lg mb-2">{t('contact.success_title', { count: 1 })}</h4>
                    <p className="text-blue-700 dark:text-blue-300">
                      {t('contact.success_text', { count: 1 })}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                      >
                        {t('contact.fields.name_label', { count: 1 })}
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t('contact.fields.name_placeholder', { count: 1 })}
                        required
                        autoComplete="given-name"
                        className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                      >
                        {t('contact.fields.email_label', { count: 1 })}
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t('contact.fields.email_placeholder', { count: 1 })}
                        required
                        autoComplete="off"
                        className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                      >
                        {t('contact.fields.message_label', { count: 1 })}
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t('contact.fields.message_placeholder', { count: 1 })}
                        required
                        className="min-h-[150px] bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-sky-600 hover:bg-sky-700 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? t('contact.sending', { count: 1 }) : t('contact.send', { count: 1 })}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
