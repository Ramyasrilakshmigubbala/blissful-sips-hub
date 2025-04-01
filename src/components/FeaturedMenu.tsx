import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';

interface MenuItem {
  name: string;
  price: string;
  description: string;
  image: string;
  ingredients?: string[];
}

const MenuItemCard = ({ item }: { item: MenuItem }) => {
  const [showDetails, setShowDetails] = useState(false);
  
  return (
    <div 
      className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-brown to-dark cursor-pointer"
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      <img 
        src={item.image} 
        alt={item.name} 
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4">
        <div className="flex justify-between items-center mb-1">
          <h4 className="text-white font-playfair font-semibold">{item.name}</h4>
          <span className="text-gold font-semibold">{item.price}</span>
        </div>
        <p className="text-gray-300 text-sm line-clamp-2">{item.description}</p>
      </div>
      
      {/* Overlay with details */}
      <div className={cn(
        "absolute inset-0 bg-dark bg-opacity-90 p-6 flex flex-col justify-center transition-all duration-300",
        showDetails ? "opacity-100" : "opacity-0 pointer-events-none"
      )}>
        <h4 className="text-gold font-playfair text-xl mb-2">{item.name}</h4>
        <p className="text-white mb-4">{item.description}</p>
        {item.ingredients && (
          <>
            <h5 className="text-gold text-sm mb-1">Ingredients:</h5>
            <ul className="text-gray-300 text-sm">
              {item.ingredients.map((ingredient, idx) => (
                <li key={idx}>{ingredient}</li>
              ))}
            </ul>
          </>
        )}
        <div className="mt-auto">
          <span className="text-gold text-lg font-semibold">{item.price}</span>
          <p className="text-white text-xs mt-1">During happy hours</p>
        </div>
      </div>
    </div>
  );
};

const FeaturedMenu = () => {
  const cocktails: MenuItem[] = [
    {
      name: "Velvet Storm",
      price: "₹975",
      description: "Premium vodka with blackberry liqueur, vanilla, and gold dust",
      image: "./velvet cocktail.jpg",
      ingredients: ["Premium vodka", "Blackberry liqueur", "Vanilla syrup", "Gold dust"]
    },
    {
      name: "Emerald Garden",
      price: "₹895",
      description: "Gin with cucumber, basil, lime, and elderflower tonic",
      image: "./emeralad cocktail.jpeg",
      ingredients: ["Gin", "Fresh cucumber", "Basil leaves", "Lime juice", "Elderflower tonic"]
    },
    {
      name: "Golden Paradise",
      price: "₹875",
      description: "Tropical blend of rum, passion fruit, mango, and coconut cream",
      image: "./golden paradise.webp",
      ingredients: ["Dark rum", "Passion fruit", "Mango puree", "Coconut cream"]
    },
    {
      name: "Mystic Martini",
      price: "₹925",
      description: "Color-changing butterfly pea flower gin with citrus and elderflower",
      image: "./mistic martini.jpg",
      ingredients: ["Butterfly pea gin", "Elderflower liqueur", "Citrus", "Edible shimmer"]
    }
  ];

  const nonVegDishes: MenuItem[] = [
    {
      name: "Spicy Chicken Wings",
      price: "$12",
      description: "Crispy wings tossed in our signature spicy sauce, served with blue cheese dip",
      image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
      ingredients: ["Chicken wings", "Hot sauce", "Butter", "Garlic", "Blue cheese"]
    },
    {
      name: "Grilled Chicken Skewers",
      price: "$13",
      description: "Tender marinated chicken skewers with aromatic spices and tangy dipping sauce",
      image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
      ingredients: ["Chicken thighs", "Middle Eastern spices", "Lemon", "Yogurt marinade", "Mint sauce"]
    },
    {
      name: "Prosciutto Flatbread",
      price: "$13",
      description: "Stone-baked flatbread with prosciutto, arugula, and parmesan shavings",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
      ingredients: ["Prosciutto", "Flatbread dough", "Arugula", "Parmesan", "Olive oil"]
    },
    {
      name: "Lamb Meatballs",
      price: "₹850",
      description: "Moroccan-spiced lamb meatballs in rich tomato sauce with mint yogurt",
      image: "./img.jpg",
      ingredients: ["Ground lamb", "Moroccan spices", "Tomato sauce", "Mint yogurt", "Fresh herbs"]
    }
  ];
  
  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-burgundy to-dark">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title text-white">Featured <span className="text-gold">Menu</span></h2>
          <p className="section-subtitle text-gray-300 max-w-3xl mx-auto">
            Discover our selection of handcrafted cocktails and premium non-vegetarian dishes available during happy hours.
            Hover over items to see ingredients and details.
          </p>
        </div>
        
        <Tabs defaultValue="cocktails" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-dark">
              <TabsTrigger 
                value="cocktails"
                className="data-[state=active]:text-gold data-[state=active]:shadow-[0_0_10px_rgba(199,153,75,0.5)]"
              >
                Signature Cocktails
              </TabsTrigger>
              <TabsTrigger 
                value="nonveg"
                className="data-[state=active]:text-gold data-[state=active]:shadow-[0_0_10px_rgba(199,153,75,0.5)]"
              >
                Non-Veg Specialties
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="cocktails" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cocktails.map((cocktail, idx) => (
                <MenuItemCard key={idx} item={cocktail} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="nonveg" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {nonVegDishes.map((dish, idx) => (
                <MenuItemCard key={idx} item={dish} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="text-center mt-12">
          <a href="#reserve" className="btn-gold inline-block">
            Reserve Your Happy Hour Experience
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
