"use client";

import { motion } from "framer-motion";
import { Mail, Copy, ArrowRight } from "lucide-react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

const HireMe = () => {

  const [copied, setCopied] = useState(false);
  const email = "your.email@example.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      toast.success("Email copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy email");
    }
  };



  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden flex items-center justify-center">
        <ToastContainer/>
    {/* Background gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 -z-10" />
    
    {/* Animated circles */}
    <motion.div
      className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 90, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
    />
    
    <motion.div
      className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-secondary/5 blur-3xl"
      animate={{
        scale: [1.2, 1, 1.2],
        rotate: [0, -90, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
    />

    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Let's Create Something
          <span className="text-primary"> Amazing</span> Together
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-muted-foreground mb-12"
        >
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="space-y-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button
              className="flex items-center justify-center px-12 py-3 bg-black text-white rounded-xl"
              onClick={() => window.location.href = `mailto:${email}`}
            >
              <Mail className="mr-2 h-4 w-4" />
              Send Email
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={copyToClipboard}
              className="group relative flex items-center justify-center px-14 py-2 bg-white border-[1px] border-black rounded-xl"
            >
              <Copy className="mr-2 h-4 w-4" />
              {copied ? "Copied!" : "Copy Email"}
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg text-muted-foreground"
          >
            {email}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  </main>
  )
}

export default HireMe