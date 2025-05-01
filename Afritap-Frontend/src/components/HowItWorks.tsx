import React from 'react';
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Register with your phone number",
    description: "Sign up using just your mobile number. No bank account required."
  },
  {
    number: "02",
    title: "Deposit money into your account",
    description: "Add funds via mobile money, agent networks, or direct bank transfers."
  },
  {
    number: "03",
    title: "Send money by tapping phones",
    description: "Select amount, tap phones back-to-back, and confirm the transaction."
  },
  {
    number: "04",
    title: "Transactions sync when online",
    description: "All offline transactions automatically sync once internet is available."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 bg-[#FFF8F0] dark:bg-gray-900 text-gray-600 dark:text-gray-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up text-gray-600 dark:text-gray-300">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-600 dark:text-gray-300 mb-4">How AfriTap Works</h2>
          <p className="text-lg ttext-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Simple and accessible financial services tailored for African realities.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className="flex animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mr-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold">
                      {step.number}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="h-16 w-0.5 bg-primary/30 mx-auto my-2"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="relative bg-white rounded-2xl shadow-lg p-6 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full -mr-16 -mt-16"></div>
              
              <div className="mb-8 z-10 relative">
                <h3 className="text-2xl font-bold mb-4 text-gray-600 dark:text-gray-300">NFC Payment Demo</h3>
                <p className="text-gray-600 dark:text-gray-300">See how easy it is to send money with AfriTap's NFC technology.</p>
              </div>
              
              {/* Demo animation of two phones tapping */}
              <div className="flex items-center justify-center">
                <div className="relative h-64 w-full">
                  {/* First phone */}
                  <div className="absolute left-8 top-4 w-32 h-56 bg-gray-900 rounded-2xl border-4 border-gray-800 z-10 animate-pulse-nfc">
                    <div className="h-full w-full flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="font-bold">Send</div>
                        <div className="text-xs opacity-75">₦ 2,000</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Second phone */}
                  <div className="absolute right-8 top-4 w-32 h-56 bg-gray-900 rounded-2xl border-4 border-gray-800 transform rotate-3">
                    <div className="h-full w-full flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="font-bold">Receive</div>
                        <div className="text-xs opacity-75">Waiting...</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* NFC animation */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary/20 rounded-full animate-pulse-nfc"></div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <a href="#" className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
                  Watch full demo <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;