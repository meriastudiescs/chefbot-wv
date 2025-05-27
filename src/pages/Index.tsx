import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Clock, Heart } from "lucide-react";

const Index = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const onboardingSteps = [
    {
      title: "Convierte lo que tienes en recetas deliciosas.",
      subtitle: "Tu cocina, tus reglas, ChefBot te guía.",
      illustration: "👨‍🍳",
    },
    {
      title: "Come mejor, sin complicarte.",
      subtitle: "Recetas fáciles, rápidas y personalizadas con solo unos ingredientes.",
      illustration: "🥗",
    },
    {
      title: "El camino hacia una alimentación inteligente.",
      subtitle: "Únete y transforma tu alimentación.",
      illustration: "📱",
    },
  ];

  if (showSplash) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-400 via-red-400 to-pink-400 flex items-center justify-center">
        <div className="text-center animate-pulse">
          <div className="text-white text-6xl font-bold mb-4">
            Chef<span className="text-yellow-200">Bot</span>
          </div>
          <div className="text-white text-lg">V1.0.1</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {currentStep < onboardingSteps.length ? (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center p-6">
            <div className="text-2xl font-bold text-red-500">
              Chef<span className="text-orange-500">Bot</span>
            </div>
            <div className="flex space-x-2">
              {onboardingSteps.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentStep ? "bg-red-400" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
            <div className="text-8xl mb-8 animate-bounce">
              {onboardingSteps[currentStep].illustration}
            </div>
            <h1 className="text-2xl font-semibold text-gray-800 mb-4 leading-tight">
              {onboardingSteps[currentStep].title}
            </h1>
            <p className="text-gray-600 mb-12 max-w-sm">
              {onboardingSteps[currentStep].subtitle}
            </p>
          </div>

          {/* Bottom Actions */}
          <div className="p-6">
            <Button
              onClick={() => {
                if (currentStep < onboardingSteps.length - 1) {
                  setCurrentStep(currentStep + 1);
                } else {
                  // Navigate to main app
                  window.location.href = "/home";
                }
              }}
              className="w-full bg-gradient-to-r from-red-400 to-orange-400 hover:from-red-500 hover:to-orange-500 text-white py-4 rounded-full text-lg font-medium shadow-lg"
            >
              {currentStep < onboardingSteps.length - 1 ? "Comienza Ahora" : "Iniciar Sesión"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            {currentStep < onboardingSteps.length - 1 && (
              <div className="text-center mt-4">
                <button className="text-red-400 underline">
                  ¿Ya tienes una cuenta? Inicia Sesión
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <AuthScreen />
      )}
    </div>
  );
};

const AuthScreen = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-center p-6">
        <div className="text-2xl font-bold text-red-500">
          Chef<span className="text-orange-500">Bot</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        <div className="w-full max-w-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            {isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
          </h2>

          {!isLogin && (
            <div className="space-y-4 mb-6">
              <Button className="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-xl hover:bg-gray-50 flex items-center justify-center">
                <span className="mr-2">G</span>
                Continuar con Google
              </Button>
              <Button className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 flex items-center justify-center">
                <span className="mr-2">🍎</span>
                Continuar con Apple
              </Button>
            </div>
          )}

          <div className="text-center text-gray-500 mb-6">
            {isLogin ? "o" : "Correo Electrónico"}
          </div>

          <div className="space-y-4">
            <input
              type="email"
              placeholder="Correo Electrónico"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-red-400"
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-red-400"
            />
            {isLogin && (
              <div className="text-right">
                <button className="text-red-400 text-sm">
                  ¿Olvidaste la contraseña?
                </button>
              </div>
            )}
          </div>

          <Button
            onClick={() => window.location.href = "/home"}
            className="w-full bg-gradient-to-r from-red-400 to-orange-400 hover:from-red-500 hover:to-orange-500 text-white py-4 rounded-full text-lg font-medium shadow-lg mt-8"
          >
            {isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
          </Button>

          <div className="text-center mt-6">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-red-400 underline"
            >
              {isLogin
                ? "¿No tienes una cuenta? Regístrate Aquí"
                : "¿Ya tienes una cuenta? Inicia Sesión"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
