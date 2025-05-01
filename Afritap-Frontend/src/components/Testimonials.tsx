
import React from "react";

const testimonials = [
  {
    quote: "AfriTap changed how I run my market stall. I can now accept payments and save money without walking to a bank.",
    author: "Grace Otieno",
    role: "Market Vendor, Kenya",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    quote: "The USSD service works everywhere I travel to sell my goods. No more carrying cash means more security for my business.",
    author: "Emmanuel Adeyemi",
    role: "Traveling Merchant, Nigeria",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150"
  },
  {
    quote: "Our community savings group now uses AfriTap for all our Susu collections. The transparency has increased trust among members.",
    author: "Fatima Diallo",
    role: "Savings Group Leader, Ghana",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Voices From <span className="gradient-text">The Community</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Real stories from people whose lives have been transformed by accessible banking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex-1">
                <div className="text-4xl text-green-500 mb-4">"</div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                  {testimonial.quote}
                </p>
              </div>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
