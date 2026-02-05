import { Button } from "./ui/button";
import { FileText } from "lucide-react";

export function FloatingActionButton() {
  return (
    <a href="#contact" className="fixed bottom-8 left-8 z-50">
      <Button 
        size="lg"
        className="bg-gradient-to-r from-orange-700 to-amber-700 hover:from-orange-800 hover:to-amber-800 text-white shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 px-6 py-6 rounded-full"
      >
        <FileText className="h-5 w-5 ml-2" />
        احصل على عرض سعر
      </Button>
    </a>
  );
}
