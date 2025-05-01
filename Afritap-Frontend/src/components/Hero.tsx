
import React from "react";
import { Button } from "@/components/ui/button";
import { Smartphone, Wifi, Nfc } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-40 right-0 w-72 h-72 bg-green-300/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-green-400/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Hero Content */}
          <div className="flex-1 space-y-6 text-center md:text-left animate-fade-in-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tighter">
              Banking Without <span className="gradient-text">Boundaries</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
              Access essential banking services with just a phone number. No internet, no smartphone, no problem.
            </p>
            <div className="flex flex-row gap-4 justify-center md:justify-start flex-wrap">
              <Button className="bg-[#2E7D32] hover:bg-green-700 text-white rounded-full px-8 py-6 text-lg">
                <Smartphone className="mr-2 h-5 w-5" />
                Try USSD Banking
              </Button>
              <Button variant="outline" className="rounded-full px-8 py-6 text-lg border-[#2E7D32] text-[#2E7D32] hover:bg-green-50 dark:hover:bg-green-900/20">
                <Nfc className="mr-2 h-5 w-5" />
                Learn About Tap-to-Pay
              </Button>
            </div>
            
            <div className="pt-6 flex items-center justify-center md:justify-start">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 bg-green-${i*100} flex items-center justify-center`}>
                    <span className="text-white text-xs">{i}</span>
                  </div>
                ))}
              </div>
              <p className="ml-3 text-sm text-gray-600 dark:text-gray-300">
                <span className="font-semibold">350+ million</span> unbanked Africans can now access financial services
              </p>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="flex-1 animate-fade-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2E7D32]/20 to-[#2E7D32]/20 rounded-2xl transform rotate-3"></div>
              <img 
                src="https://res.cloudinary.com/detc4yjdi/image/upload/v1746115284/6f3038b9-ecbd-4d6f-bcf1-2f34266dc1dd_j4tq7e.jpg" 
                alt="Person using AfriTap mobile banking" 
                className="relative z-10 rounded-2xl shadow-xl animate-bounce-subtle"
              />
              <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-[#2E7D32] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">No WiFi<br />Needed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
