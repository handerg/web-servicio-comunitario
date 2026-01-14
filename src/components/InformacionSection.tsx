import { BookOpen, FolderKanban, Users } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const infoCards = [
  {
    icon: BookOpen,
    title: 'Definición de Servicio Comunitario',
    content:
      'El Servicio Comunitario es la actividad que deben desarrollar los estudiantes de educación superior en las comunidades, aplicando los conocimientos científicos, técnicos, culturales, deportivos y humanísticos adquiridos durante su formación académica, en beneficio de la comunidad, para cooperar con su participación al cumplimiento de los fines del bienestar social. Tiene una duración mínima de 120 horas académicas.'
  },
  {
    icon: FolderKanban,
    title: '¿Qué es un Proyecto Comunitario?',
    content:
      'Un Proyecto Comunitario es un conjunto de actividades planificadas y coordinadas que los estudiantes realizan para atender necesidades específicas identificadas en la comunidad. Estos proyectos deben estar alineados con el perfil académico del estudiante y buscar generar un impacto positivo y sostenible en el entorno social donde se implementan.'
  },
  {
    icon: Users,
    title: '¿Qué son los Asesores Comunitarios?',
    content:
      'Los Asesores Comunitarios son profesores o personal académico calificado que orientan, supervisan y evalúan el desarrollo del Servicio Comunitario de los estudiantes. Su función es garantizar que las actividades realizadas cumplan con los objetivos formativos, aporten valor a la comunidad y se desarrollen conforme a los lineamientos institucionales y legales establecidos.'
  }
];

export function InformacionSection() {
  return (
    <section id="informacion" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 text-primary">
            Información Fundamental
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conoce los aspectos esenciales del Servicio Comunitario en la UGMA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {infoCards.map((card, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-accent">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg">
                  <card.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-4 text-primary">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{card.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
