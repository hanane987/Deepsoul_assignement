// File: components/HeroSection.jsx
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 text-center bg-blue-100 dark:bg-blue-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Welcome to DeepSoul</h2>
        <p className="text-lg mb-4">A safe space for emotional support.</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Join Now
        </button>
      </div>
    </motion.section>
  );
}