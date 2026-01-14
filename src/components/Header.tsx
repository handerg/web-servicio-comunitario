import { useState } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#informacion', label: 'Información' },
    { href: '#documentos', label: 'Documentos' },
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#contacto', label: 'Contacto' }
  ];

  const NavLinks = ({ mobile = false, onClose = () => {} }) => (
    <>
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={onClose}
          className={`transition-colors hover:text-accent ${
            mobile ? 'block py-3 px-4 hover:bg-accent/10 rounded-md' : ''
          }`}
        >
          {link.label}
        </a>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-primary text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <div className="bg-accent rounded-full p-2">
              <GraduationCap className="h-8 w-8 text-primary" />
            </div>
            <div>
              <div className="font-semibold text-lg">UGMA</div>
              <div className="text-sm text-accent">Servicio Comunitario</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLinks />
          </nav>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-primary text-white border-l-accent w-[280px]">
              <div className="flex flex-col gap-6 mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-accent rounded-full p-2">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">UGMA</div>
                    <div className="text-sm text-accent">Servicio Comunitario</div>
                  </div>
                </div>
                <nav className="flex flex-col">
                  <NavLinks mobile onClose={() => setIsOpen(false)} />
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
