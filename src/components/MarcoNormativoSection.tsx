import { Scale, Download } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { Button } from './ui/button';

const REGLAMENTO_HREF = `${import.meta.env.BASE_URL}assets/reglamento-interno-sc.pdf`;
const LINEAMIENTOS_HREF = `${import.meta.env.BASE_URL}assets/lineamientos-generales-sc.pdf`;
const REGLAMENTO_DOWNLOAD_NAME = "reglamento-interno-sc.pdf";
const LINEAMIENTOS_DOWNLOAD_NAME = "lineamientos-generales-sc.pdf";


export function MarcoNormativoSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Scale className="h-10 w-10 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl mb-4 text-primary">
            Base Legal y Lineamientos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Marco normativo que regula el Servicio Comunitario en la UGMA
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="reglamento" className="border rounded-lg shadow-sm px-6">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary">1</span>
                  </div>
                  <span className="text-left">Reglamento Interno de la Ley de Servicio Comunitario</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4 pt-4">
                <h4 className="text-primary">Capítulo I: Disposiciones Generales</h4>
                <p>
                  <strong>Artículo 1:</strong> El presente Reglamento tiene por objeto establecer las normas y
                  procedimientos para la prestación del Servicio Comunitario del estudiante de educación superior,
                  en cumplimiento de la Ley de Servicio Comunitario del Estudiante de Educación Superior.
                </p>
                <p>
                  <strong>Artículo 2:</strong> El Servicio Comunitario es un requisito indispensable para la
                  obtención del título académico correspondiente. Los estudiantes deberán cumplir con un mínimo de
                  120 horas académicas de servicio comunitario.
                </p>
                <h4 className="text-primary mt-6">Capítulo II: De los Estudiantes</h4>
                <p>
                  <strong>Artículo 3:</strong> Los estudiantes que hayan cumplido con el 50% de la carga académica
                  de la carrera podrán realizar el Servicio Comunitario.
                </p>
                <p>
                  <strong>Artículo 4:</strong> Los estudiantes deberán inscribirse formalmente en la Coordinación
                  de Servicio Comunitario, presentando la documentación requerida.
                </p>
                <h4 className="text-primary mt-6">Capítulo III: De los Proyectos</h4>
                <p>
                  <strong>Artículo 5:</strong> Los proyectos comunitarios deberán estar vinculados con el perfil
                  académico del estudiante y atender necesidades reales de la comunidad.
                </p>
                <p>
                  <strong>Artículo 6:</strong> Todos los proyectos deberán ser aprobados previamente por la
                  Coordinación de Servicio Comunitario antes de su ejecución.
                </p>
                <div className="mt-6 pt-6 border-t border-border">
                  <a
                    href={REGLAMENTO_HREF}
                    download={REGLAMENTO_DOWNLOAD_NAME}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block"
                  >
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                      <Download className="mr-2 h-5 w-5" />
                      Descargar Reglamento Completo (PDF)
                    </Button>
                  </a>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="lineamientos" className="border rounded-lg shadow-sm px-6">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary">2</span>
                  </div>
                  <span className="text-left">Lineamientos Generales del Servicio Comunitario</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4 pt-4">
                <h4 className="text-primary">1. Objetivos del Servicio Comunitario</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fomentar la solidaridad y el compromiso social en los estudiantes</li>
                  <li>Contribuir al desarrollo de las comunidades</li>
                  <li>Aplicar los conocimientos académicos en contextos reales</li>
                  <li>Fortalecer los valores de responsabilidad social y ciudadanía</li>
                </ul>

                <h4 className="text-primary mt-6">2. Proceso de Inscripción</h4>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Verificar haber aprobado el 50% de la carga académica</li>
                  <li>Asistir a la charla de inducción obligatoria</li>
                  <li>Presentar carta de postulación a un proyecto comunitario</li>
                  <li>Completar el formulario de inscripción</li>
                  <li>Recibir la asignación oficial del proyecto</li>
                </ol>

                <h4 className="text-primary mt-6">3. Desarrollo del Proyecto</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Duración mínima: 120 horas académicas</li>
                  <li>Supervisión constante del asesor comunitario</li>
                  <li>Registro semanal de actividades en la planilla de control</li>
                  <li>Reuniones periódicas de seguimiento</li>
                </ul>

                <h4 className="text-primary mt-6">4. Entrega Final</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Informe Final del proyecto (formato institucional)</li>
                  <li>Planilla de control de horas debidamente firmada</li>
                  <li>Evidencias fotográficas y documentales</li>
                  <li>Carta de culminación de la comunidad beneficiada</li>
                </ul>
                <div className="mt-6 pt-6 border-t border-border">
                  <a
                    href={LINEAMIENTOS_HREF}
                    download={LINEAMIENTOS_DOWNLOAD_NAME}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block"
                  >
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                      <Download className="mr-2 h-5 w-5" />
                      Descargar Lineamientos Generales (PDF)
                    </Button>
                  </a>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
