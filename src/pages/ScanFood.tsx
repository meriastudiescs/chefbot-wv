
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Camera, X, Heart, Send } from "lucide-react";
import BottomNavigation from "@/components/BottomNavigation";

const ScanFood = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scannedIngredients, setScannedIngredients] = useState([
    "Tomate",
    "Lechuga", 
    "Carne",
    "Pan"
  ]);

  const chatMessages = [
    {
      type: "bot",
      message: "¡Hola! ¿Qué cocinaremos hoy?",
      avatar: "🤖",
    },
    {
      type: "user",
      message: "¡Hola! Tengo:",
      ingredients: scannedIngredients,
    },
    {
      type: "bot",
      message: "¿Qué podría preparar hoy?",
      avatar: "🤖",
    },
    {
      type: "bot",
      message: "¡Gracias! Generando...",
      avatar: "🤖",
      loading: true,
    },
  ];

  if (isScanning) {
    return (
      <div className="min-h-screen bg-black relative">
        {/* Camera Interface */}
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
          <div className="text-white text-center">
            <Camera className="h-16 w-16 mx-auto mb-4" />
            <p>Escaneando ingredientes...</p>
          </div>
        </div>

        {/* Top Controls */}
        <div className="absolute top-6 left-6 right-6 flex justify-between z-10">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsScanning(false)}
            className="text-white"
          >
            <X className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="sm" className="text-white">
            <Heart className="h-6 w-6" />
          </Button>
        </div>

        {/* Bottom Capture Button */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <Button
            size="lg"
            onClick={() => setIsScanning(false)}
            className="w-16 h-16 rounded-full bg-white hover:bg-gray-100"
          >
            <div className="w-12 h-12 rounded-full bg-red-400"></div>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-400 to-orange-400 p-6 text-white flex items-center justify-between">
        <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
          🤖
        </div>
        <h1 className="text-lg font-medium">¡Hola! ¿Qué cocinaremos hoy?</h1>
        <Button variant="ghost" size="sm">
          <X className="h-6 w-6 text-white" />
        </Button>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-6 space-y-4">
        {chatMessages.map((message, index) => (
          <div key={index} className="flex items-start space-x-3">
            {message.type === "bot" && (
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white text-lg flex-shrink-0">
                {message.avatar}
              </div>
            )}
            
            <div className={`flex-1 ${message.type === "user" ? "ml-12" : ""}`}>
              {message.type === "bot" ? (
                <div className="bg-white rounded-2xl rounded-tl-none p-4 shadow-sm">
                  <p className="text-gray-800">{message.message}</p>
                  {message.loading && (
                    <div className="flex space-x-1 mt-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                      <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="bg-red-400 text-white rounded-2xl rounded-tr-none p-4 ml-auto max-w-xs">
                  <p className="mb-2">{message.message}</p>
                  {message.ingredients && (
                    <div className="space-y-1">
                      {message.ingredients.map((ingredient, i) => (
                        <div key={i} className="text-sm bg-red-500 rounded-lg px-2 py-1">
                          {ingredient}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {message.type === "user" && (
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b647?w=150" 
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Ingredients Selection */}
      <div className="p-6 bg-white border-t border-gray-100">
        <p className="text-gray-600 mb-3">Selecciona los ingredientes</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {scannedIngredients.map((ingredient, index) => (
            <div
              key={index}
              className="bg-red-100 text-red-600 px-3 py-2 rounded-full text-sm"
            >
              {ingredient}
            </div>
          ))}
        </div>
        
        <Button
          onClick={() => setIsScanning(true)}
          className="w-full bg-gradient-to-r from-red-400 to-orange-400 hover:from-red-500 hover:to-orange-500 text-white py-3 rounded-full font-medium"
        >
          Escribe los ingredientes
          <Send className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <BottomNavigation currentPage="scan" />
    </div>
  );
};

export default ScanFood;
