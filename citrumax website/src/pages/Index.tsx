import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Leaf, Sun, Award, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductCard from "@/components/ProductCard";
import heroImage from "@/assets/hero-citrus.jpg";
import orangesImage from "@/assets/oranges.jpg";
import lemonsImage from "@/assets/lemons.jpg";
import grapefruitImage from "@/assets/grapefruits.jpg";
import solarImage from "@/assets/solar-panels.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden mt-16 md:mt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Campos de cítricos Citrumax"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary/50"></div>
        </div>
        
        <div className="container-wide relative z-10 text-center text-white animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Cítricos de alta calidad<br />con producción sustentable
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Presencia en supermercados como Líder y Unimarc
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to="/contact">Contáctanos</Link>
          </Button>
        </div>
      </section>

      {/* Productos */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-secondary">Nuestros Productos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos cítricos frescos de primera calidad para el mercado mayorista
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="animate-scale-in">
              <ProductCard name="Naranjas" image={orangesImage} />
            </div>
            <div className="animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <ProductCard name="Limones" image={lemonsImage} />
            </div>
            <div className="animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <ProductCard name="Pomelos" image={grapefruitImage} />
            </div>
          </div>
        </div>
      </section>

      {/* Sustentabilidad */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Sun className="w-5 h-5" />
                <span className="font-semibold">Energía Sustentable</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-secondary">
                Compromiso con el Medio Ambiente
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                En Citrumax utilizamos energía solar para alimentar nuestras operaciones de packing, reduciendo significativamente nuestra huella de carbono y contribuyendo a un futuro más sustentable.
              </p>
              <p className="text-lg text-muted-foreground">
                Nuestra inversión en paneles solares nos permite producir cítricos de alta calidad mientras cuidamos el planeta para las futuras generaciones.
              </p>
            </div>
            <div className="animate-scale-in">
              <img
                src={solarImage}
                alt="Paneles solares en Citrumax"
                className="rounded-xl shadow-card w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Calidad y Trazabilidad */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Award className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-secondary">
              Calidad y Trazabilidad Garantizada
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Cada uno de nuestros productos pasa por rigurosos controles de calidad en todas las etapas del proceso productivo. Contamos con certificaciones internacionales y mantenemos un sistema de trazabilidad completo que garantiza la frescura y origen de nuestros cítricos.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-muted rounded-xl">
                <Leaf className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-2">Producción Natural</h3>
                <p className="text-muted-foreground">Cultivo responsable con prácticas agrícolas sustentables</p>
              </div>
              <div className="p-6 bg-muted rounded-xl">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-2">Certificaciones</h3>
                <p className="text-muted-foreground">Cumplimos con los más altos estándares de calidad internacional</p>
              </div>
              <div className="p-6 bg-muted rounded-xl">
                <Sun className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-2">Energía Limpia</h3>
                <p className="text-muted-foreground">100% alimentados por energía solar renovable</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dónde Encontrarnos */}
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container-wide">
          <div className="text-center mb-12 animate-fade-in">
            <MapPin className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Dónde Encontrarnos</h2>
            <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto mb-12">
              Nuestros productos están disponibles en las principales cadenas de supermercados de Chile
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-background/10 backdrop-blur-sm rounded-xl p-8 flex items-center justify-center animate-scale-in">
              <span className="text-2xl font-bold">Líder</span>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-xl p-8 flex items-center justify-center animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <span className="text-2xl font-bold">Unimarc</span>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-xl p-8 flex items-center justify-center animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <span className="text-xl font-bold">Distribuidores</span>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-xl p-8 flex items-center justify-center animate-scale-in" style={{ animationDelay: "0.3s" }}>
              <span className="text-xl font-bold">Mayoristas</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
