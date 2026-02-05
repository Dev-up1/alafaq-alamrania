import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Phone,
  Mail,
  MapPin
} from "lucide-react";
import exampleImage from 'figma:asset/032dc37daa398cea4393db39aadb2dcf2bc16e79.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    "المقاولات العامة",
    "التطوير العقاري",
    "التوريد والمشتريات",
    "الخدمات الاستشارية",
    "الهندسة والتصميم",
    "التقنيات المتطورة"
  ];

  const quickLinks = [
    { label: "الرئيسية", href: "#home" },
    { label: "من نحن", href: "#about" },
    { label: "خدماتنا", href: "#services" },
    { label: "معرض الأعمال", href: "#gallery" },
    { label: "اتصل بنا", href: "#contact" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "فيسبوك" },
    { icon: Twitter, href: "#", label: "تويتر" },
    { icon: Instagram, href: "#", label: "انستغرام" },
    { icon: Linkedin, href: "#", label: "لينكد إن" },
    { icon: Youtube, href: "#", label: "يوتيوب" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src={exampleImage} 
                alt="شعار شركة الآفاق العمرانية" 
                className="h-16 w-auto mb-4 bg-white p-2 rounded"
              />
              <h3 className="text-xl mb-3 text-amber-400">
                شركة الآفاق العمرانية
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                شركة رائدة في مجال المقاولات والتطوير العقاري، نقدم خدمات شاملة ومتطورة 
                للقطاعات التجارية والصناعية والسكنية والخاصة، مع رؤية واسعة تفتح آفاقاً جديدة للنمو.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  asChild
                  className="border-gray-600 text-gray-300 hover:bg-orange-700 hover:border-orange-700 hover:text-white transition-all"
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg mb-6 text-amber-400">خدماتنا</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-gray-300 hover:text-amber-400 transition-colors text-sm block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-6 text-amber-400">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-amber-400 transition-colors text-sm block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-6">
              <h5 className="text-amber-400 mb-3">سياسات الشركة</h5>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors text-sm">
                    سياسة الخصوصية
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors text-sm">
                    الشروط والأحكام
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg mb-6 text-amber-400">معلومات التواصل</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm" dir="ltr">+967 1 234 567</p>
                  <p className="text-gray-300 text-sm" dir="ltr">+967 773 456 789</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm" dir="ltr">info@alafaq-dev.example</p>
                  <p className="text-gray-300 text-sm" dir="ltr">projects@alafaq-dev.example</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">اليمن - عدن - خور مكسر</p>
                  <p className="text-gray-300 text-sm">حي السفارات - شارع الجمهورية</p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="text-amber-400 mb-3">اشترك في النشرة الإخبارية</h5>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded text-sm text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none"
                />
                <Button 
                  size="sm"
                  className="bg-gradient-to-r from-orange-700 to-amber-700 hover:from-orange-800 hover:to-amber-800"
                >
                  اشترك
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-700 mb-8" />
        
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © {currentYear} شركة الآفاق العمرانية للمقاولات والتطوير العقاري. جميع الحقوق محفوظة.
            </p>
          </div>
          
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              تصميم وتطوير بواسطة{" "}
              <span className="text-amber-400">فريق التطوير</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}