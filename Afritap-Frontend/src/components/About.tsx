import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-[#FFF8F0] dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in-up">
            <div className="text-primary font-semibold mb-2">About Us</div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Building the Future of Inclusive Finance in Africa
            </h2>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                AfriTap was born from a simple observation: over 350 million Africans remain unbanked, 
                not because they don't want financial services, but because traditional banking 
                doesn't work for their realities.
              </p>
              <p>
                Our mission is to bridge this gap with innovative technology that works with Africa's 
                infrastructure challenges – poor internet connectivity, limited smartphone access, 
                and deep-rooted distrust in traditional banks.
              </p>
              <p>
                Using NFC technology and USSD banking, we've created a system that works for everyone 
                with a mobile phone, not just those with smartphones and reliable internet.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary">350M+</div>
                <div className="text-gray-600">Unbanked Africans</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24+</div>
                <div className="text-gray-600">African Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">87%</div>
                <div className="text-gray-600">Mobile Penetration</div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="w-full h-[400px] bg-gradient-to-tr from-accent/30 to-primary/30 rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[280px] h-[560px] bg-white rounded-[36px] border-8 border-gray-200 shadow-xl transform -rotate-6">
                    {/* Mock African mobile money interface */}
                    <div className="h-full w-full bg-ivory p-4 flex flex-col">
                      <div className="mb-4 flex justify-between items-center">
                        <div className="font-bold text-primary">AfriTap</div>
                        <div className="w-8 h-8 rounded-full bg-primary/20"></div>
                      </div>
                      
                      <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                        <div className="text-sm text-gray-500">Savings Group</div>
                        <div className="font-bold text-lg">Lagos Traders</div>
                        <div className="flex justify-between mt-2">
                          <div>
                            <div className="text-xs text-gray-500">Group Balance</div>
                            <div className="font-semibold">₦ 245,000</div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-500">Your Share</div>
                            <div className="font-semibold">₦ 24,500</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-lg p-4 shadow-sm mb-6">
                        <div className="flex justify-between items-center mb-3">
                          <div className="font-semibold">Recent Activity</div>
                          <div className="text-xs text-primary">View All</div>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex justify-between items-center py-2 border-b border-gray-100">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-primary/10 mr-2"></div>
                              <div>
                                <div className="text-sm font-medium">Sent to John</div>
                                <div className="text-xs text-gray-500">Today, 10:24 AM</div>
                              </div>
                            </div>
                            <div className="text-sm font-medium">-₦ 500</div>
                          </div>
                          
                          <div className="flex justify-between items-center py-2">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-green-100 mr-2"></div>
                              <div>
                                <div className="text-sm font-medium">Group Deposit</div>
                                <div className="text-xs text-gray-500">Yesterday</div>
                              </div>
                            </div>
                            <div className="text-sm font-medium text-green-600">+₦ 2,000</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-auto">
                        <div className="grid grid-cols-4 gap-2">
                          {Array.from({ length: 4 }).map((_, index) => (
                            <div key={index} className="h-16 rounded-lg bg-gray-100 flex items-center justify-center">
                              <div className="w-8 h-8 rounded-full bg-primary/20"></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;