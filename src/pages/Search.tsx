
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon, Filter } from "lucide-react";
import BottomNavigation from "@/components/BottomNavigation";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const collections = [
    {
      name: "Pastas",
      subtitle: "Colección",
      image: "🍝",
      color: "from-orange-400 to-red-400",
    },
    {
      name: "Ensaladas",
      subtitle: "Colección",
      image: "🥗",
      color: "from-green-400 to-teal-400",
    },
  ];

  const ingredients = [
    { name: "Acelga", icon: "🥬" },
    { name: "Brócoli", icon: "🥦" },
    { name: "Coliflor", icon: "🥬" },
    { name: "Lechuga", icon: "🥬" },
    { name: "Tomate", icon: "🍅" },
    { name: "Cebolla", icon: "🧅" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white p-6 border-b border-gray-100">
        <div className="relative mb-6">
          <SearchIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Input
            placeholder="Busca ingredientes o recetas"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 py-3 bg-gray-50 border-0 rounded-xl"
          />
        </div>
      </div>

      {/* Collections */}
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Colecciones</h2>
        <div className="grid grid-cols-2 gap-4 mb-8">
          {collections.map((collection, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${collection.color} rounded-2xl p-6 text-white relative overflow-hidden h-32`}
            >
              <div className="relative z-10">
                <h3 className="font-semibold mb-1">{collection.name}</h3>
                <p className="text-sm opacity-90">{collection.subtitle}</p>
              </div>
              <div className="absolute bottom-2 right-2 text-4xl opacity-20">
                {collection.image}
              </div>
            </div>
          ))}
        </div>

        {/* Ingredients */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Ingredientes</h2>
        <div className="space-y-3">
          {ingredients.map((ingredient, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-xl">
                {ingredient.icon}
              </div>
              <span className="font-medium text-gray-800">{ingredient.name}</span>
            </div>
          ))}
        </div>
      </div>

      <BottomNavigation currentPage="search" />
    </div>
  );
};

export default Search;
