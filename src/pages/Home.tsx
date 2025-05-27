
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Camera, Heart, User, ChefHat, Clock, Sparkles } from "lucide-react";
import BottomNavigation from "@/components/BottomNavigation";

const Home = () => {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  const ingredientCategories = [
    { name: "Frutas", icon: "🍓", color: "bg-red-100" },
    { name: "Verduras", icon: "🥬", color: "bg-green-100" },
    { name: "Carnes", icon: "🥩", color: "bg-orange-100" },
    { name: "Lácteos", icon: "🥛", color: "bg-blue-100" },
  ];

  const featuredRecipe = {
    name: "Hamburguesa de Lentejas",
    image: "🍔",
    time: "25 min",
    difficulty: "Fácil",
    rating: 4.8,
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-400 to-orange-400 p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-xl font-medium">Hola Mariana,</h1>
            <p className="text-red-100">¿qué preparemos hoy?</p>
          </div>
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <User className="h-6 w-6 text-red-400" />
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Input
            placeholder="Busca ingredientes o recetas"
            className="pl-10 py-3 bg-white border-0 rounded-xl text-gray-800"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {/* Featured Recipe */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
              RECETAS
            </span>
            <Button variant="ghost" size="sm" className="text-red-400">
              Explora
              <span className="ml-1">▶</span>
            </Button>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-200 to-red-200 rounded-2xl flex items-center justify-center text-3xl">
              🍔
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 mb-1">{featuredRecipe.name}</h3>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {featuredRecipe.time}
                </div>
                <div className="flex items-center">
                  <Sparkles className="h-4 w-4 mr-1" />
                  {featuredRecipe.difficulty}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Heart className="h-5 w-5 text-gray-400 mb-1" />
              <span className="text-xs text-gray-600">{featuredRecipe.rating}</span>
            </div>
          </div>
        </div>

        {/* Add Ingredients Section */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Crea - Ingresa tus ingredientes
            </h2>
            <Button
              variant="outline"
              size="sm"
              className="border-purple-300 text-purple-600"
            >
              ¡Vamos! ★
            </Button>
          </div>
        </div>

        {/* Ingredient Categories */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Escoge tus ingredientes favoritos
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {ingredientCategories.map((category, index) => (
              <div
                key={index}
                className={`${category.color} rounded-2xl p-6 text-center hover:scale-105 transition-transform cursor-pointer`}
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <div className="font-medium text-gray-700">{category.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Camera Button */}
        <div className="fixed bottom-24 right-6 z-10">
          <Button
            size="lg"
            className="w-14 h-14 rounded-full bg-gradient-to-r from-red-400 to-orange-400 hover:from-red-500 hover:to-orange-500 shadow-lg"
          >
            <Camera className="h-6 w-6" />
          </Button>
        </div>
      </div>

      <BottomNavigation currentPage="home" />
    </div>
  );
};

export default Home;
