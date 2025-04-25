// File: components/Footer.jsx
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-700 p-4 mt-8"
    >
      <div className="max-w-6xl mx-auto text-center">
        <p>© 2025 DeepSoul. All rights reserved.</p>
        <p>Contact: support@deepsoul.in</p>
      </div>
    </motion.footer>
  );
}