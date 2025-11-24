
import React from 'react';
import { MobileLayout, BottomNav, Card, Header, ProgressRing, Button } from '../components/Common';
import { ScreenName } from '../types';
import { FileText, BookOpen, Users, Clock, ChevronRight, Bell, SunMedium, ArrowRight } from 'lucide-react';

interface Props {
  onNavigate: (screen: ScreenName) => void;
}

export const DashboardScreen: React.FC<Props> = ({ onNavigate }) => {
  return (
    <MobileLayout>
      <Header 
        rightAction={
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-stone-400 shadow-sm hover:text-brand-500 transition-colors">
            <Bell size={20} />
          </button>
        }
        title="Good Morning, Sarah"
        subtitle="Let's make some progress today."
        transparent
      />

      <div className="flex-1 overflow-y-auto px-6 pb-28 animate-slide-up">
        
        {/* Hero Progress Card */}
        <div className="bg-white rounded-[2.5rem] p-8 shadow-soft border border-stone-100/50 mb-6 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-bl-full -z-0 opacity-50"></div>
           
           <div className="flex flex-col items-center text-center relative z-10">
              <div className="mb-2">
                <span className="px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-xs font-bold uppercase tracking-wide">Phase 3 of 8</span>
              </div>
              <h2 className="text-2xl font-extrabold text-stone-800 mb-6">Insurance Claim</h2>
              
              <ProgressRing percentage={37} size={160} strokeWidth={16} />
              
              <p className="mt-6 text-stone-500 font-medium max-w-[200px]">
                You're doing great! Just a few more steps to complete this phase.
              </p>
           </div>
        </div>

        {/* Action Required / Encouragement */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4 px-2">
             <Clock size={18} className="text-brand-500" />
             <h3 className="font-bold text-stone-400 text-xs uppercase tracking-wider">Up Next</h3>
          </div>
          
          <Card className="bg-gradient-to-br from-stone-800 to-stone-700 !border-none text-white mb-4" onClick={() => onNavigate('deadlines')}>
             <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-bold text-lg">Submit Photos</h4>
                  <p className="text-stone-300 text-sm">For the insurance adjuster</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-lg">
                  <span className="text-xs font-bold text-white">Due in 3 days</span>
                </div>
             </div>
             <div className="mt-4 flex items-center text-brand-200 text-sm font-bold group">
                Take action <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
             </div>
          </Card>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
           <button onClick={() => onNavigate('documents')} className="bg-white p-5 rounded-3xl shadow-sm border border-stone-100 flex flex-col items-center gap-3 hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-calm-50 text-calm-600 rounded-2xl flex items-center justify-center">
                 <FileText size={24} />
              </div>
              <span className="font-bold text-stone-700 text-sm">Documents</span>
           </button>

           <button onClick={() => onNavigate('resources')} className="bg-white p-5 rounded-3xl shadow-sm border border-stone-100 flex flex-col items-center gap-3 hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-brand-50 text-brand-500 rounded-2xl flex items-center justify-center">
                 <BookOpen size={24} />
              </div>
              <span className="font-bold text-stone-700 text-sm">Resources</span>
           </button>

           <button onClick={() => onNavigate('contractors')} className="bg-white p-5 rounded-3xl shadow-sm border border-stone-100 flex flex-col items-center gap-3 hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-stone-100 text-stone-600 rounded-2xl flex items-center justify-center">
                 <Users size={24} />
              </div>
              <span className="font-bold text-stone-700 text-sm">Contractors</span>
           </button>
           
           <button onClick={() => onNavigate('phase-timeline')} className="bg-white p-5 rounded-3xl shadow-sm border border-stone-100 flex flex-col items-center gap-3 hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-500 rounded-2xl flex items-center justify-center">
                 <SunMedium size={24} />
              </div>
              <span className="font-bold text-stone-700 text-sm">Timeline</span>
           </button>
        </div>

        {/* Recent Activity */}
        <div>
           <div className="flex items-center justify-between px-2 mb-4">
             <h3 className="font-bold text-stone-400 text-xs uppercase tracking-wider">Recent Activity</h3>
           </div>
           <div className="space-y-3">
              <div className="flex items-center gap-4 p-4 bg-white rounded-3xl border border-stone-100">
                 <div className="w-10 h-10 rounded-full bg-calm-100 text-calm-600 flex items-center justify-center shrink-0">
                    <FileText size={18} />
                 </div>
                 <div className="flex-1">
                    <p className="font-bold text-stone-800 text-sm">Policy Uploaded</p>
                    <p className="text-xs text-stone-400">Yesterday</p>
                 </div>
              </div>
           </div>
        </div>

      </div>
      <BottomNav currentScreen="dashboard" onNavigate={onNavigate} />
    </MobileLayout>
  );
};
