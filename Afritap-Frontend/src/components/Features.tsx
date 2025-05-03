
import React from "react";
import { Smartphone, Nfc, WifiOff, HandCoins, ShieldCheck, Users } from "lucide-react";

const features = [
  {
    icon: <Smartphone className="h-8 w-8 text-[#2E7D32]" />,
    title: "USSD Banking",
    description: "Access financial services by dialing a short code on any mobile phone, without internet."
  },
  {
    icon: <Nfc className="h-8 w-8 text-[#2E7D32]" />,
    title: "Tap-to-Pay (NFC)",
    description: "Send money instantly by tapping two phones together, even in offline environments."
  },
  {
    icon: <WifiOff className="h-8 w-8 text-[#2E7D32]" />,
    title: "Works Offline",
    description: "All essential services available without internet connectivity requirements."
  },
  {
    icon: <HandCoins className="h-8 w-8 text-[#2E7D32]" />,
    title: "Microloans",
    description: "Access small loans quickly without requiring traditional banking relationships."
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-[#2E7D32]" />,
    title: "Blockchain Security",
    description: "Transparent and secure transactions powered by blockchain technology."
  },
  {
    icon: <Users className="h-8 w-8 text-[#2E7D32]" />,
    title: "Group Savings (Susu)",
    description: "Participate in traditional group saving schemes digitally with complete transparency."
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-[#FFF8F0] dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Inclusive <span className="gradient-text">Financial Solutions</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Banking services designed for the realities of Africa, accessible to everyone with a mobile phone.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
