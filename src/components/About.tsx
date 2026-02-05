import { Card, CardContent } from "./ui/card";
import { Building2, Users, Award, Target } from "lucide-react";

export function About() {
  const stats = [
    {
      icon: Building2,
      number: "150+",
      title: "مشروع مكتمل",
      description: "مشاريع متنوعة في جميع القطاعات"
    },
    {
      icon: Users,
      number: "15+",
      title: "سنة خبرة",
      description: "في مجال المقاولات والتشييد"
    },
    {
      icon: Award,
      number: "98%",
      title: "رضا العملاء",
      description: "التزام بالجودة والمواعيد"
    },
    {
      icon: Target,
      number: "50+",
      title: "فريق متخصص",
      description: "مهندسين وخبراء في التشييد"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-6 text-gray-800">
            من نحن
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-700 to-amber-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            شركة الآفاق العمرانية للمقاولات والتطوير العقاري هي واحدة من الشركات الرائدة في مجال البناء والتطوير العقاري. 
            نتميز بخبرتنا الواسعة وفريقنا المتخصص في تقديم حلول شاملة ومبتكرة لجميع احتياجات البناء والتطوير العقاري، مع رؤية واسعة تفتح آفاقاً جديدة للنمو والتطور.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow border-2 hover:border-orange-200">
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-orange-700" />
                </div>
                <p className="text-3xl text-orange-700 mb-2 font-bold">{stat.number}</p>
                <h3 className="text-lg text-gray-800 mb-2 font-semibold">{stat.title}</h3>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl lg:text-3xl mb-6 text-gray-800">
              رؤيتنا ورسالتنا
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl mb-3 text-orange-700">الرؤية</h4>
                <p className="text-gray-600 leading-relaxed">
                  أن نكون الشركة الرائدة في مجال المقاولات والتطوير العقاري، معروفة بالجودة العالية والابتكار والالتزام بالمواعيد، وأن نفتح آفاقاً جديدة للتطوير العمراني المستدام.
                </p>
              </div>
              <div>
                <h4 className="text-xl mb-3 text-orange-700">الرسالة</h4>
                <p className="text-gray-600 leading-relaxed">
                  نقدم خدمات متميزة في البناء والتطوير العقاري باستخدام أحدث التقنيات والمعايير العالمية، 
                  مع الحرص على تحقيق رضا العملاء وتجاوز توقعاتهم من خلال رؤية شاملة تستشرق المستقبل.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-orange-100 to-amber-100 p-6 rounded-lg">
                <h5 className="text-orange-800 mb-2 font-semibold">الجودة</h5>
                <p className="text-sm text-gray-700">معايير عالية في جميع مراحل العمل</p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-6 rounded-lg">
                <h5 className="text-blue-800 mb-2 font-semibold">الابتكار</h5>
                <p className="text-sm text-gray-700">حلول مبتكرة وتقنيات متطورة</p>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-6 rounded-lg">
                <h5 className="text-green-800 mb-2 font-semibold">الالتزام</h5>
                <p className="text-sm text-gray-700">تسليم المشاريع في المواعيد المحددة</p>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-violet-100 p-6 rounded-lg">
                <h5 className="text-purple-800 mb-2 font-semibold">الثقة</h5>
                <p className="text-sm text-gray-700">شراكة مبنية على الثقة والشفافية</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}