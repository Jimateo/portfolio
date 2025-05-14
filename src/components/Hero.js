import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="pt-24 text-center py-20 bg-gray-900 text-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Image
        src="/profile.jpg"
        alt="Foto de José Ignacio"
        width={160}
        height={160}
        className="rounded-full mx-auto shadow-lg"
      />
      <h1 className="text-5xl font-extrabold mt-4">Hola, soy José Ignacio</h1>
      <p className="mt-2 text-xl">Doctorando e Ingeniero en Telemática, apasionado por la IA.</p>
      <motion.a
        href="/Cv.pdf"
        download
        className="mt-6 inline-block px-6 py-3 bg-blue-600 rounded text-white"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Descargar CV
      </motion.a>
    </motion.section>
  );
}
