import React from 'react';
import { MobileLayout, BottomNav, Header, Card, Button } from '../components/Common';
import { ScreenName } from '../types';
import { Check, Lock, ArrowRight, Clock } from 'lucide-react';

interface Props {
  onNavigate: (screen: ScreenName) => void;
}

export const PhaseTimelineScreen: React.FC<Props> = ({ onNavigate }) => {
  const phases = [
    { id: 1, title: "Initial Assessment", status: "completed" },
    { id: 2, title: "Emergency Mitigation", status: "completed" },
    { id: 3, title: "Insurance Claim", status: "current", progress: 37 },
    { id: 4, title: "Documentation", status: "upcoming" },
    { id: 5, title: "Contractor Selection", status: "upcoming" },
    { id: 6, title: "Repair Execution", status: "upcoming" },
    { id: 7, title: "Inspection & Approval", status: "upcoming" },
    { id: 8, title: "Claim Settlement", status: "upcoming" },
  ];

  return (
    <MobileLayout>
      <Header title="Recovery Phases" showBack onBack={() => onNavigate('dashboard')} />
      
      <div className="flex-1 overflow-y-auto pb-24 px-6 pt-2 relative">
        {/* Connecting Line */}
        <div className="absolute top-8 bottom-0 left-[42px] w-0.5 bg-stone-200 z-0"></div>

        <div className="space-y-8 relative z-10">
            {phases.map((phase) => (
                <div key={phase.id} className="flex gap-4">
                    {/* Status Icon */}
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 border-[3px] border-stone-100 ${
                        phase.status === 'completed' ? 'bg-emerald-500 text-white' :
                        phase.status === 'current' ? 'bg-brand-500 text-white ring-4 ring-brand-100' :
                        'bg-stone-100 text-stone-300'
                    }`}>
                        {phase.status === 'completed' ? <Check size={16} strokeWidth={3} /> : 
                         phase.status === 'current' ? <span className="font-bold text-sm">{phase.id}</span> :
                         <span className="font-bold text-sm">{phase.id}</span>}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                        {phase.status === 'current' ? (
                            <div className="bg-white p-5 rounded-[1.5rem] shadow-lg shadow-brand-500/5 border border-brand-100 -mt-2">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-stone-800 text-lg">{phase.title}</h3>
                                    <span className="px-2 py-1 bg-brand-100 text-brand-700 text-[10px] font-bold rounded-lg uppercase">Current</span>
                                </div>
                                <p className="text-sm text-stone-500 mb-4">File your insurance claim and gather required documentation.</p>
                                <div className="mb-4">
                                    <div className="flex justify-between text-xs font-bold text-stone-400 mb-1">
                                        <span>Progress</span>
                                        <span>{phase.progress}%</span>
                                    </div>
                                    <div className="h-2 bg-stone-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-brand-500 w-[37%]"></div>
                                    </div>
                                </div>
                                <Button variant="soft" onClick={() => onNavigate('phase-details')} fullWidth>
                                    Continue Phase
                                </Button>
                            </div>
                        ) : (
                            <div className={`pt-1 ${phase.status === 'upcoming' ? 'opacity-50' : ''}`}>
                                <h3 className="font-bold text-stone-700">{phase.title}</h3>
                                <p className="text-xs text-stone-400 font-medium mt-0.5">
                                    {phase.status === 'completed' ? 'Completed Oct 12' : 'Est. duration: 2 weeks'}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
      </div>
      <BottomNav currentScreen="phase-timeline" onNavigate={onNavigate} />
    </MobileLayout>
  );
};