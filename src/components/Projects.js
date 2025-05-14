import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-16 text-gray-100 bg-gray-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      variants={{ hidden: {}, visible: {} }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Proyectos Destacados</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map(p => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
