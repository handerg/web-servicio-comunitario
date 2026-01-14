import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

const proyectos = [
  {
    imagen: 'https://images.unsplash.com/photo-1760992003987-efc5259bcfbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXJzJTIwaGVscGluZyUyMGNvbW11bml0eXxlbnwxfHx8fDE3NjMxMDc2OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    titulo: 'Programa de Alfabetización Digital',
    descripcion: 'Estudiantes de Ingeniería en Sistemas enseñaron habilidades básicas de computación a 45 adultos mayores de la comunidad El Paraíso, facilitando su inclusión en el mundo digital.',
    semestre: 'Semestre 2024-1'
  },
  {
    imagen: 'https://images.unsplash.com/photo-1622119029245-5bf43951115a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwdm9sdW50ZWVyJTIwcHJvamVjdHxlbnwxfHx8fDE3NjMxNjIxMDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    titulo: 'Jornadas de Salud Preventiva',
    descripcion: 'Estudiantes de Medicina y Enfermería realizaron jornadas de evaluación médica, vacunación y orientación nutricional beneficiando a más de 200 familias en la Parroquia San José.',
    semestre: 'Semestre 2024-1'
  },
  {
    imagen: 'https://images.unsplash.com/photo-1759922378187-11a435837df8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBlZHVjYXRpb24lMjBwcm9ncmFtfGVufDF8fHx8MTc2MzE2MjEwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    titulo: 'Refuerzo Escolar Comunitario',
    descripcion: 'Estudiantes de Educación desarrollaron un programa de apoyo académico para niños de primaria en situación vulnerable, mejorando significativamente su rendimiento escolar.',
    semestre: 'Semestre 2023-2'
  },
  {
    imagen: 'https://images.unsplash.com/photo-1708447134640-2b57ad0dd846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjB3b3JrJTIwY29tbXVuaXR5fGVufDF8fHx8MTc2MzE2MjEwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    titulo: 'Asesoría Legal Comunitaria',
    descripcion: 'Estudiantes de Derecho brindaron orientación jurídica gratuita a 80 familias de bajos recursos, ayudándoles a resolver trámites legales y conocer sus derechos.',
    semestre: 'Semestre 2023-2'
  }
];

export function ProyectosSection() {
  return (
    <section id="proyectos" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 text-primary">
            Galería de Proyectos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubre el impacto positivo de nuestros estudiantes en las comunidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {proyectos.map((proyecto, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={proyecto.imagen}
                  alt={proyecto.titulo}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-accent text-primary px-3 py-1 rounded-full text-xs">
                  {proyecto.semestre}
                </div>
              </div>
              <CardContent className="p-5">
                <h3 className="mb-2 text-primary line-clamp-2">{proyecto.titulo}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
                  {proyecto.descripcion}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            ¿Quieres que tu proyecto aparezca aquí? Documenta tu experiencia y compártela con nosotros
          </p>
          <a
            href="#contacto"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Contactar Coordinación
          </a>
        </div>
      </div>
    </section>
  );
}
