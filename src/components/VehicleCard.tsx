
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

interface Vehicle {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  features: string[];
}

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  return (
    <Card className="overflow-hidden hover-scale transition-all duration-300 h-full flex flex-col">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={vehicle.image} 
          alt={vehicle.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-2xl">{vehicle.name}</CardTitle>
        <CardDescription className="text-lg font-semibold text-primary">
          {vehicle.price}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="mb-4">{vehicle.description}</p>
        <ul className="space-y-2">
          {vehicle.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full"
          onClick={() => window.open("https://t.me/your_bot_username", "_blank")}
        >
          Заказать
        </Button>
      </CardFooter>
    </Card>
  );
};

export default VehicleCard;
