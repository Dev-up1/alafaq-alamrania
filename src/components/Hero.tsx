import { Button } from "./ui/button";
import exampleImage from 'figma:asset/032dc37daa398cea4393db39aadb2dcf2bc16e79.png';

export function Hero() {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-right order-2 lg:order-1">
            <h1 className="text-4xl lg:text-6xl mb-6 text-gray-800 leading-tight">
              شركة <span className="text-orange-700">الآفاق العمرانية</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl mb-6 text-gray-700">
              للمقاولات والتطوير العقاري
            </h2>
            <p className="text-lg lg:text-xl mb-8 text-gray-600 leading-relaxed">
              نحن شركة رائدة في مجال المقاولات والتطوير العقاري، نقدم خدمات شاملة ومتطورة للقطاعات التجارية والصناعية والسكنية والخاصة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <a href="#contact" className="inline-block">
                <Button size="lg" className="bg-gradient-to-r from-orange-700 to-amber-700 hover:from-orange-800 hover:to-amber-800 text-white px-8 py-3 w-full sm:w-auto">
                  تواصل معنا
                </Button>
              </a>
              <a href="#about" className="inline-block">
                <Button size="lg" variant="outline" className="border-orange-700 text-orange-700 hover:bg-orange-50 px-8 py-3 w-full sm:w-auto">
                  اعرف المزيد
                </Button>
              </a>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-start order-1 lg:order-2">
            <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md">
              <img 
                src={exampleImage} 
                alt="شعار شركة الآفاق العمرانية" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}