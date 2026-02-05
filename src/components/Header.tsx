import { Button } from "./ui/button";
import { Menu } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="bg-white shadow-md fixed top-0 right-0 left-0 z-50" dir="rtl">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Navigation menu - aligned to the right with proper RTL layout */}
        <nav className="hidden lg:flex items-center gap-6 pr-10">
          <a href="#home" className="text-orange-700 hover:text-orange-800 transition-colors">
            الرئيسية
          </a>
          <a href="#about" className="text-gray-700 hover:text-orange-700 transition-colors">
            من نحن
          </a>
          <a href="#services" className="text-gray-700 hover:text-orange-700 transition-colors">
            خدماتنا
          </a>
          <a href="#gallery" className="text-gray-700 hover:text-orange-700 transition-colors">
            معرض الأعمال
          </a>
          <a href="#contact" className="text-gray-700 hover:text-orange-700 transition-colors">
            اتصل بنا
          </a>
        </nav>
        
        {/* Mobile menu button - aligned to the left in RTL */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onMenuClick}
            className="lg:hidden text-orange-700 hover:text-orange-800"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}