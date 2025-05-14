import { motion } from 'framer-motion';

export default function Publications() {
  return (
    <motion.section
      id="publications"
      className="py-16 bg-gray-800 text-gray-100"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Publicaciones</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <a href="https://doi.org/10.1007/978-3-031-61137-7_20" className="text-blue-400 hover:underline">
              Dual-System Recommendation Architecture...
            </a>
          </li>
          <li>
            <a href="https://doi.org/10.1142/S0129065725500327" className="text-blue-400 hover:underline">
              Directed weighted EEG connectogram insights...
            </a>
          </li>
        </ul>
      </div>
    </motion.section>
  );
}
