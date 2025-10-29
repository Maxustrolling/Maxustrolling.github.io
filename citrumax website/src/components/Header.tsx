import { Link, useLocation } from "react-router-dom";
import { Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const location = useLocation();
  
  const navItems = [
    { name: "Inicio", path: "/" },
    { name: "Sobre Nosotros", path: "/about" },
    { name: "Contacto", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <nav className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 transition-smooth hover:opacity-80">
            <Leaf className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-secondary">Citrumax</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-smooth hover:text-primary ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/contact">Contáctanos</Link>
            </Button>
          </div>

          <div className="flex md:hidden">
            <Button asChild size="sm" variant="outline">
              <Link to="/contact">Contacto</Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
