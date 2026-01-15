import { FileText, Table, Download, LucideIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

// Provide a minimal JSX namespace so TypeScript recognizes JSX.IntrinsicElements
// (useful when project lacks @types/react or tsconfig JSX settings)
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

interface Documento {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  hoverColor: string;
  href: string; // Ruta web pública
}


const documentos: Documento[] = [
  {
    icon: FileText,
    title: 'Guía de Informe Final',
    description: 'Descarga la guía completa para elaborar tu informe final de Servicio Comunitario con todos los requisitos y formato institucional.',
    color: 'bg-blue-50 text-blue-600',
    hoverColor: 'hover:bg-blue-100',
    // RUTA WEB CORREGIDA.
    href: `${import.meta.env.BASE_URL}assets/guia-informe-final.docx`
  },
  {
    icon: Table,
    title: 'Planilla de Control de Horas',
    description: 'Formato oficial para registrar y controlar tus horas de servicio comunitario. Debe ser firmada semanalmente por tu asesor.',
    color: 'bg-green-50 text-green-600',
    hoverColor: 'hover:bg-green-100',
    // RUTA WEB CORREGIDA.
    href: `${import.meta.env.BASE_URL}assets/planilla-registro-horas.docx`
  }
];

export function DocumentosSection() {
  return (
    <section id="documentos" className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/90 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">
            Documentos y Descargas
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto">
            Accede a todos los documentos necesarios para tu Servicio Comunitario
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {documentos.map((doc, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-0">
                <div className={`${doc.color} p-8 flex items-center justify-center`}>
                  <doc.icon className="h-20 w-20" />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="mb-3 text-primary">{doc.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {doc.description}
                  </p>
                  <a
                    href={doc.href}         // 1. Usa la ruta real del documento
                    download                // 2. FUERZA la descarga en lugar de navegar
                    target="_blank"         // 3. Abre el enlace en una nueva pestaña
                    rel="noopener noreferrer"
                    className="w-full block" // 4. Asegura que el enlace ocupe todo el ancho
                  >
                    <Button
                      className="w-full bg-primary hover:bg-primary/90 text-white group"
                      size="lg"
                    >
                      <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                      Descargar Documento
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/80 text-sm">
            ¿Necesitas ayuda con los documentos? Contacta a la Coordinación de Servicio Comunitario
          </p>
        </div>
      </div>
    </section>
  );
}
