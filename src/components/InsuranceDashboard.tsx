"use client"

import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Car, AlertCircle, Award, TrendingUp, Users, Shield, Brain, Lightbulb, BatteryCharging, Navigation, Clock, Calendar } from 'lucide-react';

// Enhanced sample data
const drivingData = [
  { month: 'Jan', overspeeding: 5, harshBraking: 3, claims: 0, reputation: 85, ecoScore: 78 },
  { month: 'Feb', overspeeding: 3, harshBraking: 2, claims: 0, reputation: 88, ecoScore: 82 },
  { month: 'Mar', overspeeding: 4, harshBraking: 4, claims: 1, reputation: 82, ecoScore: 75 },
  { month: 'Apr', overspeeding: 2, harshBraking: 1, claims: 0, reputation: 90, ecoScore: 88 },
];

const drivingSkills = [
  { subject: 'Speed Control', score: 80 },
  { subject: 'Braking', score: 85 },
  { subject: 'Cornering', score: 70 },
  { subject: 'Acceleration', score: 75 },
  { subject: 'Night Driving', score: 90 },
  { subject: 'Weather Handling', score: 85 },
];

const aiSuggestions = [
  "Consider taking defensive driving courses to improve your cornering techniques.",
  "Your night driving skills are exceptional! Keep maintaining safe distances.",
  "Try to reduce harsh accelerations to improve fuel efficiency and reduce wear.",
  "Your consistent speed control on highways is improving your safety score.",
  "Weather adaptation is good, but consider increasing following distance in rain.",
];

// Rotating AI insights
const useRotatingInsights = () => {
  const [currentInsight, setCurrentInsight] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentInsight((prev) => (prev + 1) % aiSuggestions.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return aiSuggestions[currentInsight];
};

import { ReactNode } from 'react';

const GlassCard = ({ children, className = '' }: { children: ReactNode, className?: string }) => (
  <div className={`backdrop-blur-md bg-white/10 rounded-xl border border-white/20 shadow-lg ${className}`}>
    {children}
  </div>
);

const InsuranceDashboard = () => {
  const [activeTab, setActiveTab] = useState('user');
  const [riskScore, setRiskScore] = useState(0);
  const currentInsight = useRotatingInsights();

  useEffect(() => {
    const timer = setTimeout(() => {
      setRiskScore(72);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const UserDashboard = () => (
    <div className="space-y-6">
      {/* AI Insights Section */}
      <GlassCard className="p-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
            <Brain className="w-6 h-6 text-blue-400 animate-pulse" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2">AI Driving Insights</h3>
            <Alert className="bg-white/10 border-white/20">
              <Lightbulb className="w-4 h-4 text-blue-400" />
              <AlertTitle>Smart Suggestion</AlertTitle>
              <AlertDescription className="text-white/80 animate-fadeIn">
                {currentInsight}
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </GlassCard>

      {/* Real-time Vehicle Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <GlassCard className="p-4 hover:bg-white/20 transition-all duration-300">
          <div className="flex items-center space-x-3">
            <BatteryCharging className="w-8 h-8 text-green-400" />
            <div>
              <p className="text-sm text-green-400">Battery Health</p>
              <h4 className="text-xl font-bold text-white">95%</h4>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-4 hover:bg-white/20 transition-all duration-300">
          <div className="flex items-center space-x-3">
            <Navigation className="w-8 h-8 text-blue-400" />
            <div>
              <p className="text-sm text-blue-400">Daily Mileage</p>
              <h4 className="text-xl font-bold text-white">42 mi</h4>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-4 hover:bg-white/20 transition-all duration-300">
          <div className="flex items-center space-x-3">
            <Clock className="w-8 h-8 text-purple-400" />
            <div>
              <p className="text-sm text-purple-400">Drive Time</p>
              <h4 className="text-xl font-bold text-white">1.5 hrs</h4>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-4 hover:bg-white/20 transition-all duration-300">
          <div className="flex items-center space-x-3">
            <Calendar className="w-8 h-8 text-orange-400" />
            <div>
              <p className="text-sm text-orange-400">Next Service</p>
              <h4 className="text-xl font-bold text-white">15 days</h4>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Risk Score and Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GlassCard className="p-6">
          <h3 className="text-xl font-bold text-white mb-4">Risk Analysis</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={drivingSkills}>
                <PolarGrid stroke="rgba(255,255,255,0.1)" />
                <PolarAngleAxis dataKey="subject" stroke="#fff" />
                <PolarRadiusAxis stroke="#fff" />
                <Radar
                  name="Skills"
                  dataKey="score"
                  stroke="#8b5cf6"
                  fill="#8b5cf6"
                  fillOpacity={0.5}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <h3 className="text-xl font-bold text-white mb-4">Monthly Trends</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={drivingData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="month" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)'
                  }}
                />
                <Legend />
                <Line type="monotone" dataKey="reputation" stroke="#34d399" strokeWidth={2} />
                <Line type="monotone" dataKey="ecoScore" stroke="#60a5fa" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>
      </div>

      {/* Achievement and Rewards Section */}
      <GlassCard className="p-6">
        <h3 className="text-xl font-bold text-white mb-4">Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 p-4 rounded-lg">
            <Award className="w-8 h-8 text-yellow-400 mb-2" />
            <h4 className="text-white font-medium">Safe Driver</h4>
            <p className="text-sm text-white/70">30 days without incidents</p>
          </div>
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-4 rounded-lg">
            <Shield className="w-8 h-8 text-green-400 mb-2" />
            <h4 className="text-white font-medium">Eco Master</h4>
            <p className="text-sm text-white/70">Top 10% efficient driving</p>
          </div>
          <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 p-4 rounded-lg">
            <TrendingUp className="w-8 h-8 text-blue-400 mb-2" />
            <h4 className="text-white font-medium">Improvement Star</h4>
            <p className="text-sm text-white/70">20% better than last month</p>
          </div>
        </div>
      </GlassCard>
    </div>
  );

   const CompanyDashboard: React.FC = () => (
      <div className="space-y-6">
        {/* Company Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <GlassCard className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-400">Total Users</p>
                <h3 className="text-2xl font-bold text-white">2,543</h3>
              </div>
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
            </div>
          </GlassCard>
  
          <GlassCard className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-purple-400">Average Risk Score</p>
                <h3 className="text-2xl font-bold text-white">6.8/10</h3>
              </div>
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-purple-400" />
              </div>
            </div>
          </GlassCard>
        </div>
  
        {/* Risk Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* High Risk Drivers */}
          <GlassCard className="p-6">
            <h3 className="text-xl font-bold text-white mb-4">High Risk Drivers</h3>
            <div className="space-y-4">
              {[1, 2].map((i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-red-500/10 rounded-lg hover:bg-red-500/20 transition-all duration-300">
                  <div>
                    <h4 className="text-white font-medium">Driver {i}</h4>
                    <p className="text-sm text-red-400">8 incidents this month</p>
                  </div>
                  <div className="text-red-400 font-bold">8.5/10</div>
                </div>
              ))}
            </div>
          </GlassCard>
  
          {/* Safe Drivers */}
          <GlassCard className="p-6">
            <h3 className="text-xl font-bold text-white mb-4">Safe Drivers</h3>
            <div className="space-y-4">
              {[1, 2].map((i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-green-500/10 rounded-lg hover:bg-green-500/20 transition-all duration-300">
                  <div>
                    <h4 className="text-white font-medium">Driver {i}</h4>
                    <p className="text-sm text-green-400">45 days safe streak</p>
                  </div>
                  <div className="text-green-400 font-bold">2.1/10</div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    );
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 p-8">
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            AI Motor Insurance
          </h1>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="bg-white/10 backdrop-blur-md border border-white/20">
            <TabsTrigger value="user" className="data-[state=active]:bg-white/20">
              User Dashboard
            </TabsTrigger>
            <TabsTrigger value="company" className="data-[state=active]:bg-white/20">
              Company Dashboard
            </TabsTrigger>
          </TabsList>
          <TabsContent value="user">
            <UserDashboard />
          </TabsContent>
          <TabsContent value="company">
            <CompanyDashboard />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default InsuranceDashboard;