import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Phone, Mail } from "lucide-react";
import exampleImage from 'figma:asset/032dc37daa398cea4393db39aadb2dcf2bc16e79.png';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const navigationLinks = [
    { href: "#home", label: "الرئيسية" },
    { href: "#about", label: "من نحن" },
    { href: "#services", label: "خدماتنا" },
    { href: "#gallery", label: "معرض الأعمال" },
    { href: "#contact", label: "اتصل بنا" }
  ];

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-80 p-0">
        <div className="h-full flex flex-col">
          <SheetHeader className="p-6 bg-gradient-to-r from-orange-50 to-amber-50">
            <div className="flex items-center gap-3">
              <img 
                src={exampleImage} 
                alt="شعار شركة الآفاق العمرانية" 
                className="h-12 w-auto"
              />
              <div>
                <SheetTitle className="text-lg text-orange-700 text-right">
                  شركة الآفاق العمرانية
                </SheetTitle>
                <p className="text-sm text-gray-600 text-right">
                  للمقاولات والتطوير العقاري
                </p>
              </div>
            </div>
          </SheetHeader>

          <div className="flex-1 p-6">
            <nav className="space-y-4">
              {navigationLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block py-3 px-4 rounded-lg text-gray-700 hover:bg-orange-50 hover:text-orange-700 transition-colors text-right"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <Separator className="my-6" />

            <div className="space-y-4">
              <h4 className="text-lg text-gray-800 text-right">تواصل معنا</h4>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 justify-end">
                  <div className="text-right">
                    <p className="text-sm text-gray-600" dir="ltr">+967 1 234 567</p>
                    <p className="text-sm text-gray-600" dir="ltr">+967 773 456 789</p>
                  </div>
                  <Phone className="h-5 w-5 text-orange-700" />
                </div>
                
                <div className="flex items-center gap-3 justify-end">
                  <div className="text-right">
                    <p className="text-sm text-gray-600" dir="ltr">info@alafaq-dev.example</p>
                  </div>
                  <Mail className="h-5 w-5 text-orange-700" />
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gray-50">
            <Button 
              asChild
              size="lg"
              className="w-full bg-gradient-to-r from-orange-700 to-amber-700 hover:from-orange-800 hover:to-amber-800 text-white"
              onClick={handleLinkClick}
            >
              <a href="#contact">احصل على استشارة مجانية</a>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}