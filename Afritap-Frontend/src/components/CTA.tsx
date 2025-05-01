
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Nfc } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#2E7D32] to-green-700 animate-fade-in">
          {/* Background design elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10 py-12 px-6 md:py-16 md:px-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Join the Financial Inclusion Revolution
              </h2>
              <p className="text-white text-opacity-90 text-lg mb-8">
                Experience banking designed for Africa's unique challenges. No internet, no smartphone, no problem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-[#2E7D32] hover:bg-gray-100 rounded-full px-8 py-6 text-lg">
                  <Smartphone className="mr-2 h-5 w-5" />
                  Try USSD Banking
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg">
                  <Nfc className="mr-2 h-5 w-5" />
                  DOWNLOAD APP
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
