
import { Home, Search, Camera, Heart, User } from "lucide-react";
import { Link } from "react-router-dom";

interface BottomNavigationProps {
  currentPage: "home" | "search" | "scan" | "favorites" | "profile";
}

const BottomNavigation = ({ currentPage }: BottomNavigationProps) => {
  const navItems = [
    { icon: Home, label: "Home", path: "/home", key: "home" },
    { icon: Search, label: "Buscar", path: "/search", key: "search" },
    { icon: Camera, label: "Escanear", path: "/scan", key: "scan" },
    { icon: Heart, label: "Favoritos", path: "/favorites", key: "favorites" },
    { icon: User, label: "Perfil", path: "/profile", key: "profile" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3">
      <div className="flex items-center justify-between">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.key;
          
          return (
            <Link
              key={item.key}
              to={item.path}
              className={`flex flex-col items-center py-2 px-3 rounded-xl transition-all ${
                isActive
                  ? "bg-red-100 text-red-500"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              <Icon className="h-6 w-6 mb-1" />
              <span className="text-xs font-medium">{item.label}</span>
              {isActive && (
                <div className="w-1 h-1 bg-red-500 rounded-full mt-1"></div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;
