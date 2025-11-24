import React from 'react';
import { MobileLayout, Header, Tabs } from '../components/Common';
import { ScreenName } from '../types';
import { AlertCircle, CheckCircle2, Circle } from 'lucide-react';

interface Props {
  onNavigate: (screen: ScreenName) => void;
}

export const DeadlinesScreen: React.FC<Props> = ({ onNavigate }) => {
  return (
    <MobileLayout>
      <Header title="Tasks" showBack onBack={() => onNavigate('dashboard')} />
      
      <div className="px-6 mb-4">
        <Tabs tabs={['All', 'Urgent', 'Upcoming']} activeTab="Urgent" onTabChange={() => {}} />
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-6 space-y-3">
        <div className="p-4 bg-rose-50 rounded-2xl border border-rose-100 flex gap-4 items-start">
            <div className="mt-1 text-rose-500">
                <AlertCircle size={20} />
            </div>
            <div>
                <h4 className="font-bold text-stone-800">Submit Photos</h4>
                <p className="text-xs text-rose-600 font-bold mt-1">Due in 2 Days</p>
                <p className="text-sm text-stone-500 mt-2">Adjuster needs these before Friday.</p>
            </div>
        </div>

         <div className="p-4 bg-white rounded-2xl border border-stone-100 flex gap-4 items-start">
            <div className="mt-1 text-stone-300">
                <Circle size={20} />
            </div>
            <div>
                <h4 className="font-bold text-stone-800">Sign Contract</h4>
                <p className="text-xs text-stone-400 font-bold mt-1">Due Oct 25</p>
            </div>
        </div>
      </div>
    </MobileLayout>
  );
};