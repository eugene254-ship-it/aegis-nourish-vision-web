import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Amara Okafor",
      role: "Community Health Worker, Nigeria",
      quote: "Aegis Nourish transformed how we track maternal nutrition in our village. The AI recommendations helped reduce malnutrition by 60% in just six months.",
      image: "👩🏿‍⚕️"
    },
    {
      id: 2,
      name: "Dr. Hassan Al-Rashid",
      role: "Nutritionist, UAE Ministry of Health",
      quote: "The blockchain transparency and ethical sourcing protocols align perfectly with Sheikh Zayed's vision of sustainable development across the region.",
      image: "👨🏽‍⚕️"
    },
    {
      id: 3,
      name: "Fatima Kone",
      role: "Farmer Cooperative Leader, Mali",
      quote: "Thanks to Aegis Nourish, our cooperative now connects directly with communities that need our crops. We're earning fair prices while fighting hunger.",
      image: "👩🏾‍🌾"
    },
    {
      id: 4,
      name: "Maria Santos",
      role: "Mother of Three, Guatemala",
      quote: "The nutrition wallet helped me access healthy food for my children during difficult times. The AI app taught me how to prepare nutritious meals with local ingredients.",
      image: "👩🏽‍🍼"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Stories from the Field
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real voices from communities, healthcare workers, and partners who are transforming nutrition worldwide
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <Card className="bg-card shadow-soft border-border/50">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Quote Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Quote className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <blockquote className="text-lg md:text-xl text-foreground mb-6 leading-relaxed">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  
                  <div className="flex items-center justify-center md:justify-start gap-4">
                    <div className="text-4xl">
                      {testimonials[currentIndex].image}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-muted-foreground">
                        {testimonials[currentIndex].role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? "bg-primary"
                    : "bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;