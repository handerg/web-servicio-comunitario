import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative bg-primary text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80 z-10"></div>
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1638241906516-32462a8e35bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBjb21tdW5pdHklMjBzZXJ2aWNlfGVufDF8fHx8MTc2MzE2MjEwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Estudiantes en actividad comunitaria"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Transformando Comunidades, Forjando Profesionales
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            El Servicio Comunitario es una oportunidad para que nuestros estudiantes apliquen sus
            conocimientos en beneficio de la sociedad, desarrollando un profundo sentido de
            responsabilidad social y compromiso ciudadano.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#informacion"
              className="inline-block bg-accent text-primary px-8 py-3 rounded-lg hover:bg-accent/90 transition-colors text-center"
            >
              Conoce Más
            </a>
            <a
              href="#documentos"
              className="inline-block bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg hover:bg-white/20 transition-colors border border-white/20 text-center"
            >
              Ver Documentos
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-20"></div>
    </section>
  );
}
