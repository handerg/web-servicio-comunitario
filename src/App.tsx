import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InformacionSection } from './components/InformacionSection';
import { MarcoNormativoSection } from './components/MarcoNormativoSection';
import { DocumentosSection } from './components/DocumentosSection';
import { ProyectosSection } from './components/ProyectosSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <InformacionSection />
        <MarcoNormativoSection />
        <DocumentosSection />
        <ProyectosSection />
      </main>
      <Footer />
    </div>
  );
}
