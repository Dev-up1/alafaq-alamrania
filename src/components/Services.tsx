import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { 
  Hammer, 
  Building, 
  Package, 
  Users, 
  PenTool, 
  Zap 
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ServiceDetailModal, ServiceDetailData } from "./ServiceDetailModal";

export function Services() {
  const [selectedService, setSelectedService] = useState<ServiceDetailData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services: ServiceDetailData[] = [
    {
      icon: Hammer,
      title: "المقاولات العامة",
      description: "تنفيذ مشاريع البناء والتشييد للقطاعات التجارية والصناعية والسكنية والخاصة بأعلى معايير الجودة",
      image: "https://images.unsplash.com/photo-1710706488826-6d527c0e95ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBidWlsZGluZyUyMG1vZGVybnxlbnwxfHx8fDE3NTc4OTMxMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["البناء السكني", "المشاريع التجارية", "المنشآت الصناعية", "المشاريع الخاصة"],
      detailedDescription: "نقدم خدمات المقاولات العامة الشاملة التي تغطي جميع جوانب البناء والتشييد من البداية حتى التسليم النهائي. نمتلك فريقاً من المهندسين والفنيين ذوي الخبرة العالية والمعدات الحديثة التي تضمن تنفيذ المشاريع وفق أعلى معايير الجودة والسلامة.",
      benefits: [
        "فريق عمل متخصص ومدرب على أعلى مستوى",
        "استخدام مواد بناء عالية الجودة ومطابقة للمواصفات",
        "الالتزام الصارم بالمواعيد والجداول الزمنية",
        "ضمانات شاملة على جميع الأعمال المنفذة",
        "أسعار تنافسية مع جودة استثنائية"
      ],
      process: [
        "دراسة الموقع والمتطلبات الأولية للمشروع",
        "إعداد التصاميم والمخططات الهندسية",
        "الحصول على التراخيص والموافقات اللازمة",
        "البدء بأعمال التنفيذ حسب الجدول الزمني",
        "المراقبة المستمرة وضبط الجودة",
        "التسليم النهائي مع الضمانات"
      ]
    },
    {
      icon: Building,
      title: "التطوير العقاري والخدمات",
      description: "حلول شاملة للتطوير العقاري من التخطيط إلى التسليم مع خدمات ما بعد البيع",
      image: "https://images.unsplash.com/photo-1728496120856-b2e920dc6f05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxyZXNpZGVudGlhbCUyMGFwYXJ0bWVudCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc1Nzg5MzEzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["تطوير المشاريع السكنية", "المجمعات التجارية", "إدارة العقارات", "خدمات ما بعد البيع"],
      detailedDescription: "نختص في تطوير المشاريع العقارية المتكاملة بدءاً من اختيار الموقع المناسب وإعداد دراسات الجدوى، مروراً بالتصميم والتنفيذ، وصولاً إلى التسويق والتشغيل. نقدم حلولاً عقارية مبتكرة تلبي احتياجات السوق اليمني.",
      benefits: [
        "خبرة واسعة في تطوير المشاريع السكنية والتجارية",
        "دراسات جدوى دقيقة تضمن نجاح الاستثمار",
        "شراكات استراتيجية مع أفضل الموردين",
        "خدمات التسويق والبيع المتكاملة",
        "دعم ما بعد البيع وإدارة الممتلكات"
      ],
      process: [
        "اختيار الموقع ودراسة السوق",
        "إعداد دراسة الجدوى الاقتصادية",
        "التصميم المعماري والهندسي",
        "التنفيذ والإشراف الكامل",
        "التسويق والمبيعات",
        "التسليم وخدمات ما بعد البيع"
      ]
    },
    {
      icon: Package,
      title: "التوريد والمشتريات",
      description: "توريد مواد البناء عالية الجودة والمعدات اللازمة لجميع أنواع المشاريع",
      image: "https://images.unsplash.com/photo-1738528575208-b9ccdca8acaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY29uc3RydWN0aW9uJTIwc2l0ZXxlbnwxfHx8fDE3NTc4OTMxMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["مواد البناء", "المعدات والآلات", "الأدوات المتخصصة", "إدارة سلسلة التوريد"],
      detailedDescription: "نوفر خدمات التوريد الشاملة لجميع مواد البناء والمعدات الإنشائية من مصادر موثوقة ومعتمدة. نمتلك شبكة واسعة من الموردين المحليين والدوليين لضمان توفر المواد بأفضل الأسعار والجودة.",
      benefits: [
        "شبكة توريد واسعة محلياً ودولياً",
        "ضمان جودة المواد والمطابقة للمواصفات",
        "أسعار تنافسية مع إمكانية التفاوض",
        "التوصيل في الوقت المحدد",
        "خدمة عملاء متميزة ودعم فني"
      ],
      process: [
        "تحديد احتياجات المشروع من المواد",
        "البحث عن أفضل الموردين والأسعار",
        "التفاوض وإبرام العقود",
        "متابعة الشحن والتوصيل",
        "فحص الجودة والمطابقة",
        "التسليم في الموقع حسب الجدول"
      ]
    },
    {
      icon: Users,
      title: "الخدمات الاستشارية",
      description: "استشارات متخصصة في جميع مراحل المشروع من الدراسة إلى التنفيذ",
      image: "https://images.unsplash.com/photo-1629818571588-65407f9dd1a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwb2ZmaWNlJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzU3ODM5OTAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["دراسات الجدوى", "إدارة المشاريع", "الاستشارات التقنية", "التخطيط الاستراتيجي"],
      detailedDescription: "نقدم استشارات هندسية وإدارية متكاملة تساعد عملاءنا على اتخاذ قرارات صائبة في جميع مراحل مشاريعهم. فريقنا من الخبراء الاستشاريين يقدم رؤى عميقة وحلول عملية لتحديات البناء والتطوير.",
      benefits: [
        "فريق استشاري ذو خبرة واسعة",
        "دراسات متعمقة وتحليلات دقيقة",
        "حلول مبتكرة للتحديات المعقدة",
        "توفير التكاليف وتحسين الكفاءة",
        "مواكبة أحدث الممارسات العالمية"
      ],
      process: [
        "فهم احتياجات العميل وأهداف المشروع",
        "جمع البيانات والمعلومات اللازمة",
        "التحليل والدراسة المتعمقة",
        "تقديم التوصيات والحلول",
        "المتابعة والدعم أثناء التنفيذ",
        "التقييم النهائي والتحسين المستمر"
      ]
    },
    {
      icon: PenTool,
      title: "الهندسة وحلول التصميم",
      description: "تصاميم هندسية مبتكرة وحلول تقنية متطورة لجميع أنواع المشاريع",
      image: "https://images.unsplash.com/photo-1744627049760-f22f045992fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMGRlc2lnbiUyMGJsdWVwcmludHN8ZW58MXx8fHwxNzU3ODkzMTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["التصميم المعماري", "الهندسة الإنشائية", "التصميم الداخلي", "النمذجة ثلاثية الأبعاد"],
      detailedDescription: "نقدم خدمات التصميم المعماري والهندسي المتكاملة باستخدام أحدث البرامج والتقنيات. فريقنا من المهندسين المعماريين والإنشائيين يبدع في تحويل الأفكار إلى تصاميم واقعية تجمع بين الجمال والوظيفية.",
      benefits: [
        "تصاميم مبتكرة تلبي احتياجات العميل",
        "استخدام أحدث برامج التصميم",
        "مراعاة الجوانب الوظيفية والجمالية",
        "التوافق مع المعايير الهندسية",
        "مرونة في التعديل حسب المتطلبات"
      ],
      process: [
        "اجتماع أولي لفهم الرؤية والمتطلبات",
        "إعداد المفاهيم والتصاميم الأولية",
        "مراجعة وتعديل التصاميم",
        "إعداد الرسومات التنفيذية",
        "التنسيق مع فريق التنفيذ",
        "الإشراف على التطبيق الميداني"
      ]
    },
    {
      icon: Zap,
      title: "قدرات الخدمة الحديثة والمتطورة",
      description: "استخدام أحدث التقنيات والمعدات المتطورة لضمان أعلى مستويات الكفاءة والجودة",
      image: "https://images.unsplash.com/photo-1741105820127-97dd1aaafe87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBwcm9qZWN0JTIwZ2FsbGVyeXxlbnwxfHx8fDE3NTc4OTMxNDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["التقنيات المتطورة", "الأتمتة والرقمنة", "إدارة الجودة", "المراقبة والمتابعة"],
      detailedDescription: "نستثمر في أحدث التقنيات والمعدات لضمان تقديم خدمات بأعلى مستويات الجودة والكفاءة. من أنظمة إدارة المشاريع الرقمية إلى المعدات الثقيلة المتطورة، نحن دائماً في طليعة التطور التقني.",
      benefits: [
        "تقنيات حديثة تزيد من الإنتاجية",
        "تقليل الأخطاء والهدر في الموارد",
        "سرعة في التنفيذ مع الحفاظ على الجودة",
        "شفافية كاملة في إدارة المشاريع",
        "القدرة على تنفيذ المشاريع المعقدة"
      ],
      process: [
        "تقييم متطلبات المشروع التقنية",
        "اختيار الأدوات والتقنيات المناسبة",
        "تدريب الفريق على التقنيات الجديدة",
        "التطبيق والتنفيذ الميداني",
        "المراقبة والمتابعة المستمرة",
        "التقييم والتحسين المستمر"
      ]
    }
  ];

  const handleServiceClick = (service: ServiceDetailData) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-6 text-gray-800">
            خدماتنا
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-700 to-amber-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نقدم مجموعة شاملة من الخدمات في مجال المقاولات والتطوير العقاري للقطاعات التجارية والصناعية والسكنية والخاصة
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-2 hover:border-orange-200">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full">
                    <service.icon className="h-6 w-6 text-orange-700" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl mb-3 text-gray-800 group-hover:text-orange-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-700 rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full border-orange-700 text-orange-700 hover:bg-orange-50 group-hover:bg-orange-700 group-hover:text-white transition-all"
                  onClick={() => handleServiceClick(service)}
                >
                  اعرف المزيد
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={selectedService}
      />
    </section>
  );
}
