// File: components/TherapySection.jsx
import { motion } from 'framer-motion';

export default function TherapySection() {
  return (
    <motion.section
      id="therapy"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 text-center bg-gray-100 dark:bg-gray-700"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Therapy</h2>
        <p className="text-lg mb-4">Access professional therapists.</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Learn More
        </button>
      </div>
    </motion.section>
  );
}