import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Leaf, Target, Heart, Sun } from "lucide-react";
import packingImage from "@/assets/packing-facility.jpg";
import solarImage from "@/assets/solar-panels.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="section-padding bg-secondary text-secondary-foreground mt-16 md:mt-20">
        <div className="container-wide text-center animate-fade-in-up">
          <Leaf className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Sobre Citrumax</h1>
          <p className="text-xl text-secondary-foreground/80 max-w-3xl mx-auto">
            Más de dos décadas dedicadas a la producción y comercialización de cítricos de calidad superior para el mercado mayorista chileno
          </p>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-secondary">Nuestra Historia</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Citrumax nace del sueño de una familia de agricultores que vio en los cítricos una oportunidad para desarrollar productos de excelencia. Desde nuestros inicios, nos hemos comprometido con la calidad, la innovación y el respeto por el medio ambiente.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Hoy, somos un referente en el mercado mayorista chileno, abasteciendo a las principales cadenas de supermercados del país con naranjas, limones y pomelos de primera categoría.
              </p>
              <p className="text-lg text-muted-foreground">
                Nuestra trayectoria está marcada por la constante búsqueda de la excelencia y el compromiso con nuestros clientes y el planeta.
              </p>
            </div>
            <div className="animate-scale-in">
              <img
                src={packingImage}
                alt="Instalaciones de packing Citrumax"
                className="rounded-xl shadow-card w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Misión, Visión y Valores */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-xl p-8 shadow-soft animate-fade-in">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-secondary">Nuestra Misión</h3>
              <p className="text-muted-foreground">
                Proveer cítricos frescos de la más alta calidad al mercado mayorista, manteniendo prácticas sustentables que cuiden nuestro entorno y garanticen productos excepcionales para nuestros clientes.
              </p>
            </div>

            <div className="bg-background rounded-xl p-8 shadow-soft animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <Leaf className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-secondary">Nuestra Visión</h3>
              <p className="text-muted-foreground">
                Ser el líder reconocido en producción y comercialización de cítricos sustentables en Chile, expandiendo nuestra presencia a nivel nacional e internacional.
              </p>
            </div>

            <div className="bg-background rounded-xl p-8 shadow-soft animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Heart className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-secondary">Nuestros Valores</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Calidad y excelencia</li>
                <li>• Sustentabilidad ambiental</li>
                <li>• Compromiso con clientes</li>
                <li>• Innovación constante</li>
                <li>• Responsabilidad social</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sustentabilidad */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-scale-in">
              <img
                src={solarImage}
                alt="Energía solar en Citrumax"
                className="rounded-xl shadow-card w-full"
              />
            </div>
            <div className="order-1 lg:order-2 animate-fade-in">
              <Sun className="w-12 h-12 text-primary mb-6" />
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-secondary">
                Compromiso con la Energía Renovable
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Hemos invertido significativamente en infraestructura de energía solar, instalando paneles fotovoltaicos en toda nuestra planta de packing. Esta decisión nos permite:
              </p>
              <ul className="space-y-4 text-lg text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Reducir nuestra huella de carbono en más del 70%</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Generar energía limpia y renovable para nuestras operaciones</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Contribuir a un futuro más sustentable para las próximas generaciones</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Ser un ejemplo de responsabilidad ambiental en la industria agrícola</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Relaciones Comerciales */}
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container-wide text-center animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Relaciones Comerciales Sólidas</h2>
          <p className="text-lg text-secondary-foreground/80 max-w-3xl mx-auto mb-12">
            Mantenemos alianzas estratégicas con los principales actores del mercado mayorista chileno. Nuestra presencia en cadenas de supermercados como Líder y Unimarc nos consolida como un socio confiable y comprometido con la excelencia.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-background/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Supermercados</h3>
              <p className="text-secondary-foreground/80">
                Abastecemos a las principales cadenas del país con productos frescos y de calidad certificada
              </p>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Distribuidores</h3>
              <p className="text-secondary-foreground/80">
                Trabajamos con distribuidores mayoristas que llevan nuestros cítricos a todo Chile
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
