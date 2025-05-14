import { motion } from 'framer-motion';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

export default function ProjectCard({ project }) {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <motion.div
      ref={ref}
      className="bg-gray-800 p-6 rounded-2xl shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl font-semibold mb-2 text-white">{project.title}</h3>
      <p className="mb-4 text-gray-300">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map(t => (
          <span key={t} className="bg-blue-600 px-2 py-1 rounded text-xs">
            {t}
          </span>
        ))}
      </div>
      <Link href={`/projects/${project.slug}`}>
        <a className="text-blue-400 hover:underline">Ver más →</a>
      </Link>
    </motion.div>
  );
}
