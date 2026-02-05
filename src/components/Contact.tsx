import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    details: ""
  });
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    details: ""
  });

  const validateForm = () => {
    const newErrors = {
      name: "",
      phone: "",
      email: "",
      projectType: "",
      details: ""
    };
    let isValid = true;

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = "الاسم مطلوب";
      isValid = false;
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "الاسم يجب أن يكون 3 أحرف على الأقل";
      isValid = false;
    }

    // Validate phone
    if (!formData.phone.trim()) {
      newErrors.phone = "رقم الهاتف مطلوب";
      isValid = false;
    } else if (!/^[\d\s\+\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = "رقم هاتف غير صحيح";
      isValid = false;
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "البريد الإلكتروني مطلوب";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "البريد الإلكتروني غير صحيح";
      isValid = false;
    }

    // Validate project type
    if (!formData.projectType) {
      newErrors.projectType = "يرجى اختيار نوع المشروع";
      isValid = false;
    }

    // Validate details
    if (!formData.details.trim()) {
      newErrors.details = "تفاصيل المشروع مطلوبة";
      isValid = false;
    } else if (formData.details.trim().length < 10) {
      newErrors.details = "يرجى كتابة تفاصيل أكثر (10 أحرف على الأقل)";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("يرجى تصحيح الأخطاء في النموذج");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      toast.success("تم إرسال رسالتك بنجاح!");
      
      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        projectType: "",
        details: ""
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 1500);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-6 text-gray-800">
            اتصل بنا
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-700 to-amber-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نحن هنا للإجابة على جميع استفساراتكم وتقديم الاستشارات المجانية لمشاريعكم
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 border-2 hover:border-orange-200 transition-colors relative">
            {/* Success Overlay */}
            {showSuccess && (
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-10 flex items-center justify-center rounded-lg">
                <div className="text-center p-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                    <CheckCircle2 className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl text-gray-800 mb-3">شكراً لتواصلك معنا!</h3>
                  <p className="text-gray-600 mb-4">
                    تم استلام رسالتك بنجاح. سنتواصل معك خلال 24 ساعة.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setShowSuccess(false)}
                    className="border-orange-700 text-orange-700 hover:bg-orange-50"
                  >
                    إغلاق
                  </Button>
                </div>
              </div>
            )}

            <CardContent className="p-0">
              <h3 className="text-2xl mb-6 text-gray-800">
                أرسل لنا رسالة
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2">
                      الاسم الكامل <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      placeholder="أدخل اسمك الكامل"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className={`border-gray-300 focus:border-orange-700 ${
                        errors.name ? "border-red-500" : ""
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">
                      رقم الهاتف <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      placeholder="مثال: +967 1 234 567"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className={`border-gray-300 focus:border-orange-700 ${
                        errors.phone ? "border-red-500" : ""
                      }`}
                      dir="ltr"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">
                    البريد الإلكتروني <span className="text-red-500">*</span>
                  </label>
                  <Input 
                    type="email"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className={`border-gray-300 focus:border-orange-700 ${
                      errors.email ? "border-red-500" : ""
                    }`}
                    dir="ltr"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">
                    نوع المشروع <span className="text-red-500">*</span>
                  </label>
                  <select 
                    className={`w-full p-3 border rounded-lg focus:border-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-200 ${
                      errors.projectType ? "border-red-500" : "border-gray-300"
                    }`}
                    value={formData.projectType}
                    onChange={(e) => handleChange("projectType", e.target.value)}
                  >
                    <option value="">اختر نوع المشروع</option>
                    <option value="residential">سكني</option>
                    <option value="commercial">تجاري</option>
                    <option value="industrial">صناعي</option>
                    <option value="private">خاص</option>
                    <option value="consultation">استشارة</option>
                  </select>
                  {errors.projectType && (
                    <p className="text-red-500 text-sm mt-1">{errors.projectType}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">
                    تفاصيل المشروع <span className="text-red-500">*</span>
                  </label>
                  <Textarea 
                    placeholder="اكتب تفاصيل مشروعك هنا..."
                    rows={5}
                    value={formData.details}
                    onChange={(e) => handleChange("details", e.target.value)}
                    className={`border-gray-300 focus:border-orange-700 resize-none ${
                      errors.details ? "border-red-500" : ""
                    }`}
                  />
                  {errors.details && (
                    <p className="text-red-500 text-sm mt-1">{errors.details}</p>
                  )}
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-700 to-amber-700 hover:from-orange-800 hover:to-amber-800 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>جاري الإرسال...</>
                  ) : (
                    <>
                      <Send className="h-5 w-5 ml-2" />
                      إرسال الرسالة
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-6 border-2 hover:border-orange-200 transition-colors">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-r from-orange-700 to-amber-700 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg text-gray-800">هاتف</h4>
                    <p className="text-gray-600" dir="ltr">+967 1 234 567</p>
                    <p className="text-gray-600" dir="ltr">+967 773 456 789</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 hover:border-orange-200 transition-colors">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-r from-orange-700 to-amber-700 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg text-gray-800">بريد إلكتروني</h4>
                    <p className="text-gray-600" dir="ltr">info@alafaq-dev.example</p>
                    <p className="text-gray-600" dir="ltr">projects@alafaq-dev.example</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 hover:border-orange-200 transition-colors">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-r from-orange-700 to-amber-700 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg text-gray-800">عنوان</h4>
                    <p className="text-gray-600">اليمن - عدن - خور مكسر</p>
                    <p className="text-gray-600">حي السفارات - شارع الجمهورية</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 hover:border-orange-200 transition-colors">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-r from-orange-700 to-amber-700 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg text-gray-800">ساعات العمل</h4>
                    <p className="text-gray-600">الأحد - الخميس: 8:00 ص - 6:00 م</p>
                    <p className="text-gray-600">السبت: 9:00 ص - 2:00 م</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
