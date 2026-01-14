import { GraduationCap, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo y Descripción */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-accent rounded-full p-2">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-xl">Universidad UGMA</div>
                <div className="text-accent">Coordinación de Servicio Comunitario</div>
              </div>
            </div>
            <p className="text-white/80 mb-4 leading-relaxed">
              Formando profesionales comprometidos con el desarrollo social y el bienestar de nuestras comunidades.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="mb-4 text-accent">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#informacion" className="text-white/80 hover:text-accent transition-colors">
                  Información
                </a>
              </li>
              <li>
                <a href="#documentos" className="text-white/80 hover:text-accent transition-colors">
                  Documentos
                </a>
              </li>
              <li>
                <a href="#proyectos" className="text-white/80 hover:text-accent transition-colors">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-white/80 hover:text-accent transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="mb-4 text-accent">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 text-accent" />
                <a href="mailto:serviciocomunitario@ugma.edu.ve" className="text-white/80 hover:text-accent transition-colors text-sm">
                  serviciocomunitario@ugma.edu.ve
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 text-accent" />
                <a href="tel:+582129876543" className="text-white/80 hover:text-accent transition-colors text-sm">
                  +58 (212) 987-6543
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-accent" />
                <span className="text-white/80 text-sm">
                  Edificio Administrativo, Piso 3<br />
                  Universidad UGMA
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Horario de Atención */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="text-center">
            <h4 className="mb-3 text-accent">Horario de Atención</h4>
            <p className="text-white/80 text-sm">
              Lunes a Viernes: 8:00 AM - 4:00 PM
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm">
          <p>&copy; {currentYear} Universidad UGMA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
