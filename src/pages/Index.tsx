
import { Button } from "@/components/ui/button";
import VehicleCard from "@/components/VehicleCard";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const vehicles = [
    {
      id: 1,
      name: "Mercedes-Benz W223",
      price: "от 5000₽/час",
      image: "https://images.unsplash.com/photo-1622353376994-cf92681d48ce?q=80&w=1000",
      description: "Флагманский представительский седан с исключительным комфортом и роскошью.",
      features: ["Кожаный салон", "Массажные сиденья", "Мультимедийная система", "Климат-контроль"]
    },
    {
      id: 2,
      name: "Mercedes-Benz W222",
      price: "от 3500₽/час",
      image: "https://images.unsplash.com/photo-1549536335-df7a4ed78b1d?q=80&w=1000",
      description: "Элегантный представительский седан, сочетающий комфорт и технологичность.",
      features: ["Премиум аудиосистема", "Панорамная крыша", "Комфортные сиденья", "Климат-контроль"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        <section id="vehicles" className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Наш автопарк</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {vehicles.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white"
                onClick={() => window.open("https://t.me/your_bot_username", "_blank")}
              >
                Заказать в один клик через Telegram
              </Button>
            </div>
          </div>
        </section>
        
        <section id="about" className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Больше чем такси</h2>
            <p className="text-lg text-center max-w-3xl mx-auto">
              Мы предлагаем не просто услуги перевозки, а комплексный сервис VIP-уровня. 
              Профессиональные водители, безупречный сервис и первоклассные автомобили 
              Mercedes-Benz создадут для вас атмосферу комфорта и престижа.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
