// File: components/CommunitySection.jsx
import { motion } from 'framer-motion';

export default function CommunitySection() {
  return (
    <motion.section
      id="community"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 text-center"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Community</h2>
        <p className="text-lg mb-4">Connect with others.</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Join Now
        </button>
      </div>
    </motion.section>
  );
}