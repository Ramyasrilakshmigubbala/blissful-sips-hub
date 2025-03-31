
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
      name: "Classic Negroni",
      price: "$8",
      description: "A perfect balance of gin, vermouth rosso, and Campari",
      image: "https://images.unsplash.com/photo-1527761939622-933c961abba1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
      ingredients: ["Gin", "Vermouth Rosso", "Campari", "Orange peel"]
    },
    {
      name: "Espresso Martini",
      price: "$9",
      description: "Vodka-based cocktail with coffee liqueur and freshly brewed espresso",
      image: "https://images.unsplash.com/photo-1621428171086-0a8b21a4e89f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
      ingredients: ["Vodka", "Coffee Liqueur", "Espresso", "Simple syrup"]
    },
    {
      name: "Old Fashioned",
      price: "$10",
      description: "A sophisticated blend of bourbon, bitters, sugar, and citrus",
      image: "https://images.unsplash.com/photo-1573163126123-6131e87db349?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
      ingredients: ["Bourbon", "Angostura bitters", "Sugar cube", "Orange twist"]
    },
    {
      name: "French 75",
      price: "$11",
      description: "Champagne cocktail with gin, lemon juice, and sugar",
      image: "https://images.unsplash.com/photo-1560512823-829485b8bf0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
      ingredients: ["Gin", "Champagne", "Lemon juice", "Simple syrup"]
    },
  ];

  const nonVegDishes: MenuItem[] = [
    {
      name: "Spicy Chicken Wings",
      price: "$12",
      description: "Crispy wings tossed in our signature spicy sauce, served with blue cheese dip",
      image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      ingredients: ["Chicken wings", "Hot sauce", "Butter", "Garlic", "Blue cheese"]
    },
    {
      name: "Beef Sliders",
      price: "$14",
      description: "Premium Angus beef mini burgers with caramelized onions and truffle aioli",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      ingredients: ["Angus beef", "Brioche buns", "Caramelized onions", "Truffle aioli", "Arugula"]
    },
    {
      name: "Prosciutto Flatbread",
      price: "$13",
      description: "Stone-baked flatbread with prosciutto, arugula, and parmesan shavings",
      image: "https://images.unsplash.com/photo-1576096876569-9a54647ee3f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
      ingredients: ["Prosciutto", "Flatbread dough", "Arugula", "Parmesan", "Olive oil"]
    },
    {
      name: "Lamb Meatballs",
      price: "$10",
      description: "Moroccan-spiced lamb meatballs in rich tomato sauce with mint yogurt",
      image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
      ingredients: ["Ground lamb", "Moroccan spices", "Tomato sauce", "Mint yogurt", "Fresh herbs"]
    },
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
