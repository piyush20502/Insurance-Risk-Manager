import React, { useState, ReactNode } from 'react';
import { 
  Users, 
  Shield, 
  Search, 
  Bell,
  Calendar,
  AlertTriangle,
  TrendingUp,
  FileText,
  Menu
} from 'lucide-react';
import { Button } from './Button'
import { Input } from './Input'

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

const GlassCard = ({ children, className = '' }: GlassCardProps) => (
  <div className={`backdrop-blur-md bg-white/10 rounded-xl border border-white/20 shadow-lg ${className}`}>
    {children}
  </div>
);



const SearchBar = () => (
  <div className="relative">
    <Input
      type="text"
      placeholder="Search drivers, policies, or incidents..."
      className="w-full bg-white/5 border-white/20 text-white placeholder:text-white/50"
    />
    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
  </div>
);

const CompanyDashboard = () => {
  const [recentIncidents] = useState([
    { id: 1, driver: "John Smith", type: "Speeding", date: "2025-02-15", severity: "High" },
    { id: 2, driver: "Sarah Johnson", type: "Sharp Breaking", date: "2025-02-14", severity: "Medium" }
  ]);

  return (
    <div className="min-h-screen">
      
      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        <SearchBar />
        
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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

          <GlassCard className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-yellow-400">Active Claims</p>
                <h3 className="text-2xl font-bold text-white">17</h3>
              </div>
              <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <FileText className="w-6 h-6 text-yellow-400" />
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-400">Risk Trend</p>
                <h3 className="text-2xl font-bold text-white">-12%</h3>
              </div>
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-400" />
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Risk Categories and Recent Incidents */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

          {/* Recent Incidents */}
          <GlassCard className="p-6">
            <h3 className="text-xl font-bold text-white mb-4">Recent Incidents</h3>
            <div className="space-y-4">
              {recentIncidents.map((incident) => (
                <div key={incident.id} className="flex items-center justify-between p-4 bg-orange-500/10 rounded-lg hover:bg-orange-500/20 transition-all duration-300">
                  <div>
                    <h4 className="text-white font-medium">{incident.driver}</h4>
                    <p className="text-sm text-orange-400">{incident.type}</p>
                    <p className="text-xs text-white/60">{incident.date}</p>
                  </div>
                  <div className="text-orange-400 font-bold">{incident.severity}</div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Upcoming Reviews */}
        <GlassCard className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white">Feedbacks</h3>
            <Button variant="ghost" className="text-white">
              <Calendar className="w-4 h-4 mr-2" />
              View Calendar
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-4 bg-white/5 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Driver Review #{i}</h4>
                    <p className="text-sm text-white/60">{i} days</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </main>
    </div>
  );
};

export default CompanyDashboard;