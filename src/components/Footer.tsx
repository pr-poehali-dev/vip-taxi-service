
import { MessageSquare, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Больше чем такси</h3>
            <p className="mb-4">
              Премиальный сервис аренды VIP автомобилей Mercedes-Benz с водителем.
              Комфорт, безопасность и пунктуальность на высшем уровне.
            </p>
            <Button 
              className="bg-primary hover:bg-primary/90 flex items-center gap-2"
              onClick={() => window.open("https://t.me/your_bot_username", "_blank")}
            >
              <MessageSquare className="h-4 w-4" />
              <span>Заказать в Telegram</span>
            </Button>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>+7 (XXX) XXX-XX-XX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>info@большечемтакси.рф</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>г. Москва</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Время работы</h3>
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-primary mt-1" />
              <div>
                <p>Ежедневно</p>
                <p className="font-bold">24/7</p>
                <p className="mt-2">Предварительный заказ за 2 часа</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Больше чем такси. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
