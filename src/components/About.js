import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-16 bg-gray-800 text-gray-100"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
        <p>
          Investigador en la Universidad de Málaga, desarrollando soluciones basadas en IA para trastornos de lectoescritura.
        </p>
      </div>
    </motion.section>
  );
}
