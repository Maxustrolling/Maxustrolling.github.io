import { Link } from "react-router-dom";
import { Leaf, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-wide py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo y descripción */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Leaf className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold">Citrumax</span>
            </Link>
            <p className="text-sm text-secondary-foreground/80">
              Cítricos de alta calidad con producción sustentable para el mercado mayorista.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="font-bold mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-secondary-foreground/80 hover:text-primary transition-smooth">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-secondary-foreground/80 hover:text-primary transition-smooth">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-secondary-foreground/80 hover:text-primary transition-smooth">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-bold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-primary" />
                <a href="mailto:contacto@citrumax.com" className="text-sm text-secondary-foreground/80 hover:text-primary transition-smooth">
                  contacto@citrumax.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-primary" />
                <a href="tel:+56900000000" className="text-sm text-secondary-foreground/80 hover:text-primary transition-smooth">
                  +56 9 XXX XXXX
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                <span className="text-sm text-secondary-foreground/80">
                  Dirección del packing
                </span>
              </li>
            </ul>
          </div>

          {/* Alianzas */}
          <div>
            <h3 className="font-bold mb-4">Presentes en</h3>
            <div className="flex flex-col gap-3">
              <div className="bg-background/10 rounded-lg px-4 py-2 text-center">
                <span className="text-sm font-semibold">Líder</span>
              </div>
              <div className="bg-background/10 rounded-lg px-4 py-2 text-center">
                <span className="text-sm font-semibold">Unimarc</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/60">
            <p>&copy; {new Date().getFullYear()} Citrumax. Todos los derechos reservados.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-smooth">Aviso Legal</a>
              <a href="#" className="hover:text-primary transition-smooth">Política de Privacidad</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
