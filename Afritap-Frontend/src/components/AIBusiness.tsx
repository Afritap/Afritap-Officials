
import React from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  TrendingUp, 
  FileChartLine, 
  FileText, 
  Activity,
  Calendar
} from "lucide-react";
import { ChartContainer } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const chartData = [
  { name: 'Jan', sent: 4000, received: 2400 },
  { name: 'Feb', sent: 3000, received: 1398 },
  { name: 'Mar', sent: 2000, received: 9800 },
  { name: 'Apr', sent: 2780, received: 3908 },
  { name: 'May', sent: 1890, received: 4800 },
  { name: 'Jun', sent: 2390, received: 3800 },
];

const businessNews = [
  {
    type: "Grant",
    title: "SME Growth Fund Now Accepting Applications",
    deadline: "June 30, 2025",
    relevance: "High"
  },
  {
    type: "Loan Offer",
    title: "Micro-Enterprise Low Interest Financing",
    deadline: "August 15, 2025",
    relevance: "Medium"
  },
  {
    type: "Exhibition",
    title: "Pan-African FinTech Expo 2025",
    deadline: "July 10, 2025",
    relevance: "High"
  }
];

const AIBusiness = () => {
  const config = {
    sent: {
      label: "Money Sent",
      theme: { light: "#2E7D32", dark: "#4ade80" }
    },
    received: {
      label: "Money Received", 
      theme: { light: "#FFD700", dark: "#FFD700" }
    }
  };

  return (
    <section className="py-16 bg-[#FFF8F0] dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">AI-Powered</span> Business Tools
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Let our AI assistant help grow your business with personalized insights and intelligent financial reporting.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Business Insights Card */}
          <div className="rounded-xl bg-white dark:bg-gray-800 shadow-lg p-6 transition-all hover:shadow-xl animate-fade-in">
            <div className="flex items-center mb-5">
              <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-3 mr-4">
                <FileText className="h-6 w-6 text-[#2E7D32]" />
              </div>
              <h3 className="text-2xl font-bold">Business Insights</h3>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Stay informed about relevant business opportunities tailored to your specific needs.
            </p>
            
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead>Opportunity</TableHead>
                    <TableHead>Deadline</TableHead>
                    <TableHead>Relevance</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {businessNews.map((item, index) => (
                    <TableRow key={index} className="hover:bg-green-50 dark:hover:bg-green-900/10">
                      <TableCell className="font-medium">{item.type}</TableCell>
                      <TableCell>{item.title}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1 text-[#2E7D32]" />
                          {item.deadline}
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          item.relevance === "High" ? 
                            "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" : 
                            "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                        }`}>
                          {item.relevance}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <Button className="mt-6 bg-[#2E7D32] hover:bg-green-700 text-white">
              View All Opportunities
            </Button>
          </div>
          
          {/* Financial Reporting Card */}
          <div className="rounded-xl bg-white dark:bg-gray-800 shadow-lg p-6 transition-all hover:shadow-xl animate-fade-in">
            <div className="flex items-center mb-5">
              <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-3 mr-4">
                <FileChartLine className="h-6 w-6 text-[#2E7D32]" />
              </div>
              <h3 className="text-2xl font-bold">Financial Reporting</h3>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Track your financial health with intelligent transaction analysis and trend insights.
            </p>
            
            <div className="h-64 mb-4">
              <ChartContainer config={config}>
                <LineChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="sent" 
                    name="Money Sent" 
                    stroke="var(--color-sent)" 
                    activeDot={{ r: 8 }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="received" 
                    name="Money Received" 
                    stroke="var(--color-received)" 
                  />
                </LineChart>
              </ChartContainer>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Spending Trend</span>
                  <TrendingUp className="h-5 w-5 text-[#2E7D32]" />
                </div>
                <p className="text-lg font-bold mt-1">Decreasing 12%</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Activity Score</span>
                  <Activity className="h-5 w-5 text-[#2E7D32]" />
                </div>
                <p className="text-lg font-bold mt-1">86 / 100</p>
              </div>
            </div>
            
            <Button className="mt-2 bg-[#2E7D32] hover:bg-green-700 text-white">
              View Detailed Reports
            </Button>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <Button variant="outline" className="border-[#2E7D32] text-[#2E7D32] hover:bg-green-50 hover:text-green-700 dark:hover:bg-green-900/20 mx-auto px-8 py-6 text-lg rounded-full">
            Discover More AI Features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AIBusiness;
