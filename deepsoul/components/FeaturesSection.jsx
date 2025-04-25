// File: components/FeaturesSection.jsx
import { motion } from 'framer-motion';

export default function FeaturesSection() {
  return (
    <motion.section
      id="features"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 text-center"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 bg-white dark:bg-gray-600 rounded shadow">
            <h3 className="font-semibold">Support</h3>
            <p>Professional guidance.</p>
          </div>
          <div className="p-4 bg-white dark:bg-gray-600 rounded shadow">
            <h3 className="font-semibold">Community</h3>
            <p>Join others for support.</p>
          </div>
          <div className="p-4 bg-white dark:bg-gray-600 rounded shadow">
            <h3 className="font-semibold">Tools</h3>
            <p>Resources for wellness.</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}