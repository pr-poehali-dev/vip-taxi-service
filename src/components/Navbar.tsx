
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">Больше чем такси</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-base font-medium hover:text-primary transition-colors">
            Главная
          </Link>
          <a href="#vehicles" className="text-base font-medium hover:text-primary transition-colors">
            Автопарк
          </a>
          <a href="#about" className="text-base font-medium hover:text-primary transition-colors">
            О нас
          </a>
        </nav>

        <Button 
          onClick={() => window.open("https://t.me/your_bot_username", "_blank")}
          className="bg-primary hover:bg-primary/90 flex items-center gap-2"
        >
          <MessageSquare className="h-4 w-4" />
          <span>Заказать</span>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
