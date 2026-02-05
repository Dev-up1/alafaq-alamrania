import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Check } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export interface ServiceDetailData {
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
  features: string[];
  detailedDescription: string;
  benefits: string[];
  process: string[];
}

interface ServiceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceDetailData | null;
}

export function ServiceDetailModal({ isOpen, onClose, service }: ServiceDetailModalProps) {
  if (!service) return null;

  const IconComponent = service.icon;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto" dir="rtl">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-2">
            <div className="bg-gradient-to-r from-orange-100 to-amber-100 p-3 rounded-full">
              <IconComponent className="h-8 w-8 text-orange-700" />
            </div>
            <DialogTitle className="text-2xl text-orange-700">{service.title}</DialogTitle>
          </div>
          <DialogDescription className="text-base text-gray-600">
            {service.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Service Image */}
          <div className="relative h-64 rounded-lg overflow-hidden">
            <ImageWithFallback
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>

          <Separator />

          {/* Detailed Description */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3 text-lg">نبذة تفصيلية</h4>
            <p className="text-gray-600 leading-relaxed">{service.detailedDescription}</p>
          </div>

          <Separator />

          {/* Features */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3 text-lg">الخدمات المقدمة</h4>
            <div className="grid md:grid-cols-2 gap-3">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 p-3 bg-orange-50 rounded-lg">
                  <Check className="h-5 w-5 text-orange-700 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Benefits */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3 text-lg">فوائد هذه الخدمة</h4>
            <div className="space-y-2">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-orange-700 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Process */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3 text-lg">خطوات العمل</h4>
            <div className="space-y-3">
              {service.process.map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-orange-700 to-amber-700 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                    {index + 1}
                  </div>
                  <p className="text-gray-600 mt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* CTA Buttons */}
          <div className="flex gap-4">
            <a href="#contact" className="flex-1">
              <Button 
                className="w-full bg-gradient-to-r from-orange-700 to-amber-700 hover:from-orange-800 hover:to-amber-800 text-white"
                onClick={onClose}
              >
                طلب هذه الخدمة
              </Button>
            </a>
            <Button 
              variant="outline" 
              className="flex-1 border-orange-700 text-orange-700 hover:bg-orange-50"
              onClick={onClose}
            >
              إغلاق
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
