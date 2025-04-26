// File: components/CommunitySection.jsx
"use client";

import { motion } from "framer-motion";

export default function CommunitySection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const communities = [
    {
      name: "Anxiety Support",
      members: "2,450+",
      description: "A safe space to share experiences and coping strategies for anxiety.",
      image: "/images/panic.jpeg",
    },
    {
      name: "Depression Recovery",
      members: "3,200+",
      description: "Connect with others on their journey through depression and recovery.",
      image: "/images/hand.png",
    },
    {
      name: "Mindfulness Practice",
      members: "1,850+",
      description: "Learn and share mindfulness techniques for everyday mental wellness.",
      image: "/images/mental.jpg",
    },
    {
      name: "Stress Management",
      members: "2,100+",
      description: "Strategies and support for managing stress in your daily life.",
      image: "/images/esk.png",
    },
  ];

  return (
    <motion.section
      id="community"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-[#001233] to-[#001845] dark:from-[#001845] dark:to-[#000c2b]"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-40 right-20 w-80 h-80 rounded-full bg-gradient-to-br from-[#001233]/20 to-[#ff9966]/10 dark:from-[#001233]/10 dark:to-[#ff9966]/5 blur-[80px]"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-40 left-20 w-60 h-60 rounded-full bg-gradient-to-tr from-[#ff9966]/20 to-[#fffae6]/10 dark:from-[#ff9966]/10 dark:to-[#fffae6]/5 blur-[70px]"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 40, 0],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 1,
        }}
      />

      <div className="max-w-7xl mx-auto">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 px-4 py-1 rounded-full bg-gradient-to-r from-[#001845] to-[#001233] dark:from-[#001845] dark:to-[#001233] text-[#fffae6] dark:text-[#fffae6] font-medium text-sm shadow-lg"
          >
            Supportive Communities
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#fffae6] dark:from-white dark:to-[#fffae6]"
          >
            You Are{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff9966] to-[#ffbb99] dark:from-[#ff9966] dark:to-[#ffbb99]">
              Not Alone
            </span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg max-w-3xl mx-auto text-[#fffae6] dark:text-[#fffae6]">
            Join supportive communities of people who understand what you're going through. Share experiences, find
            support, and grow together in a safe, moderated environment.
          </motion.p>
        </motion.div>

        <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-8">
          {communities.map((community, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 40px -5px rgba(0, 35, 121, 0.2), 0 10px 20px -5px rgba(0, 35, 121, 0.1)",
              }}
              className="bg-gradient-to-br from-[#001233] to-[#001845] dark:from-[#001845] dark:to-[#000c2b] rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,35,121,0.1)] transition-all duration-300 border border-[#001233] dark:border-[#001845] relative group backdrop-blur-sm"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={community.image || "/images/person1.jpg"}
                  alt={community.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001845]/90 via-[#001845]/50 to-transparent"></div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-[#ffbb99] dark:text-[#ffbb99]">{community.name}</h3>
                  <span className="px-3 py-1 bg-gradient-to-r from-[#001845] to-[#001233] dark:from-[#001845] dark:to-[#001233] rounded-full text-sm font-medium text-[#fffae6] dark:text-[#fffae6] shadow-md">
                    {community.members} members
                  </span>
                </div>
                <p className="text-[#fffae6] dark:text-[#fffae6] mb-6">{community.description}</p>
                <div className="flex items-center gap-4">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 25px 5px rgba(255, 95, 0, 0.4)",
                      background: "linear-gradient(to right, #ff9966, #ffbb99)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#ff9966] to-[#ff9966] hover:from-[#ff9966] hover:to-[#ffbb99] text-white font-medium shadow-[0_10px_20px_rgba(255,95,0,0.3)] transition-all duration-300"
                  >
                    Join Community
                  </motion.button>
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      background: "linear-gradient(to right, #001845, #001233)",
                      color: "#fffae6",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 rounded-lg border-2 border-[#001233] dark:border-[#001845] text-[#fffae6] dark:text-[#fffae6] font-medium hover:bg-gradient-to-r hover:from-[#001845]/50 hover:to-[#001233]/50 dark:hover:from-[#001845]/50 dark:hover:to-[#001233]/50 transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 bg-gradient-to-br from-[#001233] to-[#001845] dark:from-[#001845] dark:to-[#000c2b] rounded-2xl shadow-[0_20px_50px_rgba(0,35,121,0.15)] max-w-3xl mx-auto border border-[#001233] dark:border-[#001845] backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#fffae6] dark:from-white dark:to-[#fffae6]">
              Start Your Own Community
            </h3>
            <p className="text-[#fffae6] dark:text-[#fffae6] mb-6">
              Have a specific mental health topic you'd like to discuss with others? Create your own supportive
              community and connect with people who share your experiences.
            </p>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px 5px rgba(255, 95, 0, 0.4)",
                background: "linear-gradient(to right, #ff9966, #ffbb99)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-[#ff9966] to-[#ff9966] hover:from-[#ff9966] hover:to-[#ffbb99] text-white rounded-lg font-medium shadow-[0_10px_20px_rgba(255,95,0,0.3)] transition-all duration-300"
            >
              Create Community
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}