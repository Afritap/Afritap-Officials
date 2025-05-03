
import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Sun, Moon, Smartphone, WifiOff, Nfc } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const { toast } = useToast();

  useEffect(() => {
    setMounted(true);
    // Check user's preferred theme
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
    
    toast({
      title: `${theme === "light" ? "Dark" : "Light"} mode activated`,
      duration: 2000,
    });
  };

  const handleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const navLinkClass = "hover-underline text-sm font-medium cursor-pointer";

  return (
    <header className="sticky top-0 w-full px-4 sm:px-6 py-4 flex items-center justify-between bg-[#FFF8F0]/80 dark:bg-[#0B0B0F]/80 backdrop-blur-md z-50 transition-colors duration-300 animate-fade-in">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#2E7D32] to-green-600 flex items-center justify-center">
          <span className="text-white font-bold">A</span>
        </div>
        <span className="text-xl font-bold text-black dark:text-white">Afri<span className="text-[#2E7D32]">Tap</span></span>
      </div>

      {/* Navigation - Desktop */}
      <nav className="hidden md:flex items-center gap-6 text-sm text-black dark:text-white relative">
        <a href="#" className={navLinkClass}>Home</a>

        {/* Dropdowns */}
        {[
          { label: "About", items: ["Our Story", "Team", "Impact"] },
          { label: "Services", items: ["USSD Banking", "Tap-to-Pay", "Microloans"] },
          { label: "Resources", items: ["How It Works", "Documentation", "FAQs"] },
        ].map(({ label, items }) => (
          <div
            key={label}
            className="relative"
            onMouseEnter={() => handleDropdown(label)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <div className={`${navLinkClass} flex items-center gap-1`}>
              {label}
              <ChevronDown className="h-4 w-4" />
            </div>

            {openDropdown === label && (
              <div className="absolute top-full mt-2 w-48 rounded-md bg-white dark:bg-gray-800 shadow-lg py-2 z-40 animate-fade-in">
                {items.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-800 dark:text-white hover:bg-green-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}

        <a href="#" className={navLinkClass}>Contact</a>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <Button
          variant="ghost"
          size="sm"
          className="text-black dark:text-white"
          onClick={() => toast({
            title: "Mobile menu",
            description: "Mobile menu would open here",
          })}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </Button>
      </div>

      {/* Theme Toggle and CTA Button */}
      <div className="hidden md:flex items-center gap-4">
        {mounted && (
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        )}

        <Button className="bg-[#2E7D32] hover:bg-green-700 text-white rounded-full px-6">
          Connect Wallet
        </Button>
      </div>
    </header>
  );
};

export default Header;
