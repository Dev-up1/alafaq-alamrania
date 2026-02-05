import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { MapPin, Calendar, DollarSign, User, Building, Clock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export interface ProjectDetailData {
  id: number;
  title: string;
  category: string;
  type: string;
  image: string;
  location: string;
  year: string;
  description: string;
  client: string;
  budget: string;
  duration: string;
  scope: string;
  totalArea: string;
  features: string[];
}

interface ProjectDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectDetailData | null;
}

export function ProjectDetailModal({ isOpen, onClose, project }: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto" dir="rtl">
        <DialogHeader>
          <DialogTitle className="text-2xl text-orange-700">{project.title}</DialogTitle>
          <DialogDescription className="text-base text-gray-600">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Project Image */}
          <div className="relative h-80 rounded-lg overflow-hidden">
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4">
              <Badge className="bg-orange-700 text-white">
                {project.category === "commercial" && "تجاري"}
                {project.category === "industrial" && "صناعي"}
                {project.category === "residential" && "سكني"}
                {project.category === "private" && "خاص"}
              </Badge>
            </div>
          </div>

          <Separator />

          {/* Project Details Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
              <User className="h-5 w-5 text-orange-700 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">العميل</h4>
                <p className="text-gray-600 text-sm">{project.client}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
              <DollarSign className="h-5 w-5 text-orange-700 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">الميزانية</h4>
                <p className="text-gray-600 text-sm">{project.budget}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
              <MapPin className="h-5 w-5 text-orange-700 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">الموقع</h4>
                <p className="text-gray-600 text-sm">{project.location}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
              <Calendar className="h-5 w-5 text-orange-700 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">سنة الإنجاز</h4>
                <p className="text-gray-600 text-sm">{project.year}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
              <Clock className="h-5 w-5 text-orange-700 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">مدة التنفيذ</h4>
                <p className="text-gray-600 text-sm">{project.duration}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
              <Building className="h-5 w-5 text-orange-700 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">المساحة الإجمالية</h4>
                <p className="text-gray-600 text-sm">{project.totalArea}</p>
              </div>
            </div>
          </div>

          <Separator />

          {/* Scope of Work */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3 text-lg">نطاق العمل</h4>
            <p className="text-gray-600 leading-relaxed">{project.scope}</p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3 text-lg">المميزات الرئيسية</h4>
            <div className="grid md:grid-cols-2 gap-3">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-700 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* CTA Button */}
          <div className="flex gap-4">
            <a href="#contact" className="flex-1">
              <Button 
                className="w-full bg-gradient-to-r from-orange-700 to-amber-700 hover:from-orange-800 hover:to-amber-800 text-white"
                onClick={onClose}
              >
                طلب مشروع مماثل
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