
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Clock, Star } from "lucide-react";
import BottomNavigation from "@/components/BottomNavigation";

const Favorites = () => {
  const [activeTab, setActiveTab] = useState("recipes");

  const favoriteIngredients = [
    { name: "Strawberry", icon: "🍓" },
    { name: "Potato", icon: "🥔" },
    { name: "Broccoli", icon: "🥦" },
    { name: "Apple", icon: "🍎" },
    { name: "Tomato", icon: "🍅" },
    { name: "Onion", icon: "🧅" },
  ];

  const favoriteRecipes = [
    {
      name: "Chopped Spring Ramen",
      description: "Saludable & Tomates",
      calories: "250 kcal",
      image: "🍜",
      rating: 4.8,
    },
    {
      name: "Chicken Tandoori",
      description: "Chicken & Salad",
      calories: "450 kcal", 
      image: "🍗",
      rating: 4.9,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white p-6 border-b border-gray-100">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Favoritos</h1>
        
        {/* Tabs */}
        <div className="flex space-x-1 bg-gray-100 rounded-xl p-1">
          <Button
            variant={activeTab === "ingredients" ? "default" : "ghost"}
            onClick={() => setActiveTab("ingredients")}
            className={`flex-1 rounded-lg ${
              activeTab === "ingredients"
                ? "bg-gradient-to-r from-red-400 to-orange-400 text-white"
                : "text-gray-600"
            }`}
          >
            Ingredientes
          </Button>
          <Button
            variant={activeTab === "recipes" ? "default" : "ghost"}
            onClick={() => setActiveTab("recipes")}
            className={`flex-1 rounded-lg ${
              activeTab === "recipes"
                ? "bg-gradient-to-r from-red-400 to-orange-400 text-white"
                : "text-gray-600"
            }`}
          >
            Recetas
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === "ingredients" ? (
          <div className="grid grid-cols-2 gap-4">
            {favoriteIngredients.map((ingredient, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow relative"
              >
                <Heart className="absolute top-3 right-3 h-5 w-5 text-red-400 fill-current" />
                <div className="text-4xl mb-3">{ingredient.icon}</div>
                <div className="font-medium text-gray-800">{ingredient.name}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {favoriteRecipes.map((recipe, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-200 to-red-200 rounded-2xl flex items-center justify-center text-2xl">
                    {recipe.image}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-gray-800">{recipe.name}</h3>
                      <Heart className="h-5 w-5 text-red-400 fill-current" />
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{recipe.description}</p>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center text-gray-600">
                        <div className="w-3 h-3 bg-green-400 rounded-full mr-1"></div>
                        {recipe.calories}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Star className="h-3 w-3 mr-1 fill-current text-yellow-400" />
                        {recipe.rating}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <BottomNavigation currentPage="favorites" />
    </div>
  );
};

export default Favorites;
