
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative h-[80vh] bg-black flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-60"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1532054957411-c662fa562cd6?q=80&w=1000)' }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Больше чем такси
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in" style={{animationDelay: "0.2s"}}>
            Премиальный сервис аренды VIP автомобилей Mercedes-Benz с водителем
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white"
              onClick={() => {
                const vehiclesSection = document.getElementById('vehicles');
                vehiclesSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Выбрать автомобиль
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/20 flex items-center gap-2"
              onClick={() => window.open("https://t.me/your_bot_username", "_blank")}
            >
              <MessageSquare className="h-4 w-4" />
              <span>Быстрый заказ</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
