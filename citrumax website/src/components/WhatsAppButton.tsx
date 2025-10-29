import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const whatsappNumber = "XXXXXXXXXXX"; // Placeholder
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 animate-fade-in"
    >
      <Button
        size="lg"
        className="rounded-full w-14 h-14 shadow-lg hover:shadow-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </a>
  );
};

export default WhatsAppButton;
