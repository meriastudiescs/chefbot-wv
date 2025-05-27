
import { Button } from "@/components/ui/button";
import { ChevronRight, Star, Settings, HelpCircle, LogOut, Crown } from "lucide-react";
import BottomNavigation from "@/components/BottomNavigation";

const Profile = () => {
  const menuItems = [
    {
      icon: <Settings className="h-5 w-5" />,
      title: "Editar Perfil",
      color: "text-red-400",
    },
    {
      icon: <Star className="h-5 w-5" />,
      title: "Suscripción",
      color: "text-red-400",
    },
    {
      icon: <Settings className="h-5 w-5" />,
      title: "Configuración",
      color: "text-red-400",
    },
    {
      icon: <HelpCircle className="h-5 w-5" />,
      title: "Acerca de la aplicación",
      color: "text-red-400",
    },
    {
      icon: <LogOut className="h-5 w-5" />,
      title: "Cerrar Sesión",
      color: "text-red-400",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white p-6 border-b border-gray-100">
        <h1 className="text-2xl font-semibold text-gray-800">Perfil</h1>
      </div>

      {/* Profile Info */}
      <div className="bg-white mx-6 mt-6 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1494790108755-2616b612b647?w=150" 
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-800">Mariana Melendez</h2>
            <div className="flex items-center mt-1">
              <Crown className="h-4 w-4 text-yellow-500 mr-1" />
              <span className="text-sm text-gray-600">Premium</span>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="mx-6 mt-6 bg-white rounded-2xl shadow-sm overflow-hidden">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 border-b border-gray-50 last:border-b-0 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <div className="flex items-center space-x-4">
              <div className={item.color}>
                {item.icon}
              </div>
              <span className="font-medium text-gray-800">{item.title}</span>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </div>
        ))}
      </div>

      <BottomNavigation currentPage="profile" />
    </div>
  );
};

export default Profile;
