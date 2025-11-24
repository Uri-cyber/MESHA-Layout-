import React from 'react';
import { MobileLayout, BottomNav, Header, Button } from '../components/Common';
import { ScreenName } from '../types';
import { Check, Clock, ArrowRight, Shield, Circle, AlertCircle } from 'lucide-react';

interface Props {
  onNavigate: (screen: ScreenName) => void;
}

export const PhaseDetailsScreen: React.FC<Props> = ({ onNavigate }) => {
  // Tasks updated to match System Instructions for Phase 3: INSURANCE_CLAIM
  const tasks = [
    { id: 1, title: "File First Notice of Loss (FNOL)", status: "completed" },
    { id: 2, title: "Complete Claim Forms", status: "completed" },
    { id: 3, title: "Submit to Insurance Company", status: "completed" },
    { id: 4, title: "Provide Initial Documentation", status: "in-progress", due: "3 days" },
    { id: 5, title: "Schedule Adjuster Visit", status: "not-started" },
    { id: 6, title: "Review Policy Declarations", status: "not-started" },
    { id: 7, title: "Track Claim Number", status: "not-started" },
  ];

  return (
    <MobileLayout>
      <Header 
        title="Phase 3: Insurance Claim" 
        showBack 
        onBack={() => onNavigate('dashboard')}
      />
      
      <div className="flex-1 overflow-y-auto px-6 pb-28 pt-2">
        {/* Phase Context Card */}
        <div className="bg-stone-800 rounded-3xl p-6 text-white mb-8 shadow-lg relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-32 h-32 bg-stone-700 rounded-full opacity-50 blur-2xl"></div>
            
            <div className="flex items-start gap-4 relative z-10">
                <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <Shield size={24} className="text-brand-300" />
                </div>
                <div>
                    <h2 className="font-bold text-lg mb-1">Insurance Filing</h2>
                    <p className="text-stone-300 text-sm leading-relaxed">
                        We'll help you ensure every form is accurate and submitted on time to get your claim moving.
                    </p>
                    <div className="flex items-center gap-2 mt-4 text-xs font-bold text-brand-200 bg-brand-900/30 inline-flex px-3 py-1.5 rounded-full">
                        <Clock size={12} />
                        <span>Typically takes 1-3 days</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex items-center justify-between mb-4 px-2">
           <h3 className="font-bold text-stone-800">Your Checklist</h3>
           <span className="text-xs font-bold text-stone-400">3 of 7 Completed</span>
        </div>

        {/* Task List */}
        <div className="space-y-3">
            {tasks.map((task, index) => {
                const isCompleted = task.status === 'completed';
                const isInProgress = task.status === 'in-progress';
                
                return (
                    <div 
                        key={task.id}
                        className={`p-4 rounded-3xl border transition-all duration-300 flex items-center gap-4 ${
                            isInProgress 
                            ? 'bg-white border-brand-200 shadow-md scale-[1.02]' 
                            : isCompleted
                            ? 'bg-calm-50/50 border-transparent opacity-80'
                            : 'bg-white border-stone-100'
                        }`}
                    >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                            isCompleted ? 'bg-calm-500 text-white' :
                            isInProgress ? 'bg-brand-100 text-brand-600 ring-4 ring-brand-50' :
                            'bg-stone-100 text-stone-300'
                        }`}>
                            {isCompleted ? <Check size={14} strokeWidth={3} /> : 
                             isInProgress ? <div className="w-2.5 h-2.5 bg-brand-500 rounded-full animate-pulse" /> :
                             <div className="w-2.5 h-2.5 bg-stone-300 rounded-full" />}
                        </div>

                        <div className="flex-1">
                            <p className={`font-bold text-sm ${isCompleted ? 'text-stone-500 line-through' : 'text-stone-800'}`}>
                                {task.title}
                            </p>
                            {isInProgress && task.due && (
                                <p className="text-xs text-brand-600 font-bold mt-0.5 flex items-center gap-1">
                                    Due in {task.due}
                                </p>
                            )}
                        </div>

                        {isInProgress && (
                            <button onClick={() => onNavigate('documents')} className="w-10 h-10 rounded-full bg-brand-500 text-white flex items-center justify-center shadow-lg shadow-brand-500/30 hover:scale-105 transition-transform">
                                <ArrowRight size={18} />
                            </button>
                        )}
                    </div>
                );
            })}
        </div>
        
        <div className="mt-8 text-center">
           <Button variant="soft" onClick={() => onNavigate('documents')} icon={<Shield size={18} />}>
              Access Claim Documents
           </Button>
        </div>

      </div>
      <BottomNav currentScreen="phase-details" onNavigate={onNavigate} />
    </MobileLayout>
  );
};