import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  company: z.string().min(2, "El nombre de la empresa debe tener al menos 2 caracteres"),
  email: z.string().email("Ingrese un email válido"),
  phone: z.string().min(9, "Ingrese un teléfono válido"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Simulación de envío (en producción esto se conectaría a un servicio de email)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Formulario enviado:", values);
    
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="section-padding bg-secondary text-secondary-foreground mt-16 md:mt-20">
        <div className="container-wide text-center animate-fade-in-up">
          <Send className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contáctanos</h1>
          <p className="text-xl text-secondary-foreground/80 max-w-3xl mx-auto">
            ¿Interesado en nuestros productos? Estamos aquí para atender tus consultas y necesidades comerciales
          </p>
        </div>
      </section>

      {/* Formulario y Info de Contacto */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulario */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6 text-secondary">Envíanos un Mensaje</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre</FormLabel>
                        <FormControl>
                          <Input placeholder="Tu nombre completo" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Empresa</FormLabel>
                        <FormControl>
                          <Input placeholder="Nombre de tu empresa" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="tu@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Teléfono</FormLabel>
                        <FormControl>
                          <Input placeholder="+56 9 XXXX XXXX" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensaje</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Cuéntanos sobre tus necesidades..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                  </Button>
                </form>
              </Form>
            </div>

            {/* Información de Contacto */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6 text-secondary">Información de Contacto</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4 p-6 bg-muted rounded-xl">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <a href="mailto:contacto@citrumax.com" className="text-muted-foreground hover:text-primary transition-smooth">
                      contacto@citrumax.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-muted rounded-xl">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Teléfono</h3>
                    <a href="tel:+56900000000" className="text-muted-foreground hover:text-primary transition-smooth">
                      +56 9 XXX XXXX
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-muted rounded-xl">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Dirección</h3>
                    <p className="text-muted-foreground">
                      Dirección del packing<br />
                      Ciudad, Región<br />
                      Chile
                    </p>
                  </div>
                </div>
              </div>

              {/* Mapa Placeholder */}
              <div className="w-full h-64 bg-muted rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                  <p className="text-muted-foreground">Mapa de ubicación</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-secondary text-secondary-foreground rounded-xl">
                <h3 className="font-bold text-xl mb-3">Horario de Atención</h3>
                <p className="text-secondary-foreground/80">
                  Lunes a Viernes: 9:00 - 18:00<br />
                  Sábado: 9:00 - 13:00<br />
                  Domingo: Cerrado
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
