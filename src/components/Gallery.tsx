import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Play, Image as ImageIcon, MapPin, Calendar } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ProjectDetailModal, ProjectDetailData } from "./ProjectDetailModal";
import { Skeleton } from "./ui/skeleton";

export function Gallery() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState<ProjectDetailData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageLoading, setImageLoading] = useState<Record<number, boolean>>({});

  const projects: ProjectDetailData[] = [
    {
      id: 1,
      title: "برج الأعمال المركزي",
      category: "commercial",
      type: "image",
      image: "https://images.unsplash.com/photo-1629818571588-65407f9dd1a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaXwxfHxjb21tZXJjaWFsJTIwb2ZmaWNlJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzU3ODM5OTAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      location: "عدن، المنصورة",
      year: "2023",
      description: "مركز إداري وتجاري متطور يمثل أيقونة معمارية في قلب المنطقة التجارية بالمنصورة",
      client: "مجموعة الموارد الاستثمارية",
      budget: "18 مليون دولار",
      duration: "24 شهر (2021 - 2023)",
      scope: "إدارة المشروع، التصميم الإنشائي، أعمال الخرسانة المسلحة، والواجهات الزجاجية الحديثة",
      totalArea: "45,000 متر مربع",
      features: [
        "10 طوابق إدارية",
        "مركز تسوق في الدور الأرضي",
        "مواقف سيارات ذكية",
        "أنظمة تكييف مركزي",
        "واجهات زجاجية مقاومة للحرارة"
      ]
    },
    {
      id: 2,
      title: "مجمع النخبة السكني",
      category: "residential",
      type: "video",
      image: "https://images.unsplash.com/photo-1710706488826-6d527c0e95ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBidWlsZGluZyUyMG1vZGVybnxlbnwxfHx8fDE3NTc4OTMxMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      location: "صنعاء، فج عطان",
      year: "2024",
      description: "مشروع سكني فاخر يجمع بين الأصالة المعمارية وسبل الراحة العصرية",
      client: "شركة الأفق للتطوير العقاري",
      budget: "25 مليون دولار",
      duration: "30 شهر (2021 - 2024)",
      scope: "التخطيط العمراني، تنفيذ الهياكل الإنشائية، التشطيبات الفاخرة، وتنسيق المواقع",
      totalArea: "60,000 متر مربع",
      features: [
        "4 أبراج سكنية",
        "120 شقة بنظام الدوبلكس",
        "نادي صحي متكامل",
        "مساحات خضراء واسعة",
        "نظام مراقبة أمني شامل"
      ]
    },
    {
      id: 3,
      title: "المنطقة اللوجستية الحديثة",
      category: "industrial",
      type: "image",
      image: "https://images.unsplash.com/photo-1738528575208-b9ccdca8acaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY29uc3RydWN0aW9uJTIwc2l0ZXxlbnwxfHx8fDE3NTc4OTMxMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      location: "الحديدة، المنطقة الحرة",
      year: "2023",
      description: "مجموعة مستودعات ومنشآت تخزين صناعية مجهزة بأحدث معايير السلامة العالمية",
      client: "الشركة الوطنية للنقل واللوجستيات",
      budget: "12 مليون دولار",
      duration: "18 شهر (2022 - 2023)",
      scope: "بناء الهياكل المعدنية، صب الأرضيات الصناعية، وتأسيس شبكات مكافحة الحريق",
      totalArea: "100,000 متر مربع",
      features: [
        "مستودعات مبردة وجافة",
        "أرصفة تحميل هيدروليكية",
        "مكاتب إشراف جمركي",
        "أنظمة إنذار مبكر",
        "طرق داخلية مخصصة للشاحنات"
      ]
    },
    {
      id: 4,
      title: "ضاحية الريان السكنية",
      category: "residential",
      type: "image",
      image: "https://images.unsplash.com/photo-1728496120856-b2e920dc6f05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxyZXNpZGVudGlhbCUyMGFwYXJ0bWVudCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc1Nzg5MzEzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      location: "المكلا، فوة",
      year: "2024",
      description: "حي سكني متكامل الخدمات يوفر بيئة هادئة للعائلات بإطلالة بحرية",
      client: "مجموعة الشرق للاستثمار",
      budget: "14 مليون دولار",
      duration: "20 شهر (2022 - 2024)",
      scope: "تصميم وتنفيذ البنية التحتية، بناء الوحدات السكنية، وأعمال الإنارة الخارجية",
      totalArea: "35,000 متر مربع",
      features: [
        "80 فيلا بتصاميم موحدة",
        "حديقة مركزية وممشى",
        "جامع ومدرسة ابتدائية",
        "شبكة مياه وصرف مستقلة",
        "إنارة شوارع بالطاقة الشمسية"
      ]
    },
    {
      id: 5,
      title: "واحة الأمل المستدامة",
      category: "residential",
      type: "video",
      image: "https://images.unsplash.com/photo-1741105820127-97dd1aaafe87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBwcm9qZWN0JTIwZ2FsbGVyeXxlbnwxfHx8fDE3NTc4OTMxNDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      location: "مأرب، الروضة",
      year: "2024",
      description: "مشروع رائد للمباني الخضراء التي تعتمد كلياً على الطاقة الشمسية وأنظمة تدوير المياه",
      client: "هيئة التطوير العمراني الجديدة",
      budget: "38 مليون دولار",
      duration: "40 شهر (2021 - 2024)",
      scope: "تخطيط المدن الذكية، بناء المنشآت العامة والخاصة، وتركيب محطة طاقة شمسية مركزية",
      totalArea: "150,000 متر مربع",
      features: [
        "منزل ذكي بالكامل",
        "محطة تنقية مياه رمادية",
        "مساحات للزراعة الحضرية",
        "مركز أبحاث الطاقة المتجددة",
        "تغطية واي فاي مجانية للمجمع"
      ]
    },
    {
      id: 6,
      title: "فيلا الزمرد الخاصة",
      category: "private",
      type: "image",
      image: "https://images.unsplash.com/photo-1744627049760-f22f045992fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMGRlc2lnbiUyMGJsdWVwcmludHN8ZW58MXx8fHwxNzU3ODkzMTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      location: "عدن، جبل حديد",
      year: "2023",
      description: "تصميم وتنفيذ سكن خاص بمواصفات ملكية يجمع بين الخصوصية والإطلالة البانورامية",
      client: "عميل خاص",
      budget: "10 مليون دولار",
      duration: "15 شهر (2022 - 2023)",
      scope: "التصميم المعماري الداخلي، التنفيذ الإنشائي، توريد الرخام الإيطالي، وتنسيق الحدائق المعلقة",
      totalArea: "5,000 متر مربع",
      features: [
        "إطلالة بانورامية على ميناء عدن",
        "مسبح خارجي متماهي مع الأفق",
        "نظام سينما منزلي متطور",
        "صالة استقبال ملكية",
        "جناح خاص للضيوف"
      ]
    }
  ];

  const categories = [
    { id: "all", label: "جميع المشاريع" },
    { id: "commercial", label: "تجاري" },
    { id: "industrial", label: "صناعي" },
    { id: "residential", label: "سكني" },
    { id: "private", label: "خاص" }
  ];

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  const handleProjectClick = (project: ProjectDetailData) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="gallery" className="py-20 bg-white" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-6 text-gray-800 font-bold">
            معرض أعمالنا
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-700 to-amber-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            استعرض مجموعة من أهم مشاريعنا المنجزة في مختلف القطاعات والتي تعكس جودة عملنا وتميزنا في التنفيذ
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeTab === category.id ? "default" : "outline"}
              onClick={() => setActiveTab(category.id)}
              className={`
                ${activeTab === category.id 
                  ? "bg-gradient-to-r from-orange-700 to-amber-700 text-white shadow-md" 
                  : "border-orange-700 text-orange-700 hover:bg-orange-50"
                }
              `}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="col-span-full text-center py-20">
            <p className="text-gray-500 text-xl mb-4">لا توجد مشاريع في هذا القسم حالياً</p>
            <Button 
              variant="outline" 
              onClick={() => setActiveTab("all")} 
              className="border-orange-700 text-orange-700 hover:bg-orange-50"
            >
              عرض جميع المشاريع
            </Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-2 hover:border-orange-200">
                <div className="relative h-64 overflow-hidden">
                  {imageLoading[project.id] !== false && (
                    <Skeleton className="absolute inset-0 w-full h-full" />
                  )}
                  <ImageWithFallback
                    src={project.image}
                    alt={`${project.title} - ${project.location} ${project.year}`}
                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                      imageLoading[project.id] !== false ? 'opacity-0' : 'opacity-100'
                    }`}
                    onLoad={() => setImageLoading(prev => ({ ...prev, [project.id]: false }))}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Media Type Indicator - Fixed to right */}
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-gray-700">
                      {project.type === "video" ? (
                        <><Play className="h-3 w-3 ml-1" /> فيديو</>
                      ) : (
                        <><ImageIcon className="h-3 w-3 ml-1" /> صورة</>
                      )}
                    </Badge>
                  </div>

                  {/* Play Button for Videos */}
                  {project.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full group-hover:bg-orange-700 group-hover:text-white transition-all shadow-lg">
                        <Play className="h-8 w-8" />
                      </div>
                    </div>
                  )}

                  {/* Project Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-bold mb-1 group-hover:text-amber-200 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm opacity-90">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {project.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {project.year}
                      </div>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <p className="text-sm text-orange-700 font-bold mb-4">
                    العميل: {project.client}
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-orange-700 text-orange-700 hover:bg-orange-700 hover:text-white transition-all font-bold"
                    onClick={() => handleProjectClick(project)}
                  >
                    عرض التفاصيل الفنية
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </section>
  );
}