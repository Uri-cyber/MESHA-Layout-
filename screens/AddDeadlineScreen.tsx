
import React, { useState } from 'react';
import { MobileLayout, Header, Button, Input } from '../components/Common';
import { ScreenName } from '../types';
import { Calendar, AlertCircle } from 'lucide-react';

interface Props {
  onNavigate: (screen: ScreenName) => void;
}

export const AddDeadlineScreen: React.FC<Props> = ({ onNavigate }) => {
  const [priority, setPriority] = useState('Medium');

  return (
    <MobileLayout>
      <Header 
        title="New Task" 
        showBack 
        onBack={() => onNavigate('claim-detail')}
      />
      
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
        <Input label="Task Title" placeholder="e.g., Submit receipts" autoFocus />
        
        <Input 
          label="Due Date" 
          type="date" 
          icon={<Calendar size={20} />} 
        />

        <div className="space-y-2">
          <label className="text-sm font-bold text-stone-600 ml-1">Priority Level</label>
          <div className="flex gap-2">
            {['Low', 'Medium', 'High'].map((p) => (
              <button
                key={p}
                onClick={() => setPriority(p)}
                className={`flex-1 py-3 rounded-xl font-bold text-sm border-2 transition-all ${
                  priority === p
                    ? p === 'High' ? 'bg-red-50 border-red-500 text-red-600'
                    : p === 'Medium' ? 'bg-brand-50 border-brand-500 text-brand-600'
                    : 'bg-stone-50 border-stone-500 text-stone-600'
                    : 'bg-white border-stone-100 text-stone-400 hover:border-stone-200'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 bg-brand-50 rounded-2xl border border-brand-100 flex gap-3">
          <div className="text-brand-500 mt-0.5"><AlertCircle size={20}/></div>
          <div>
            <h4 className="font-bold text-brand-900 text-sm">Why set deadlines?</h4>
            <p className="text-xs text-brand-700 mt-1">Keeping track of dates helps avoid delays with insurance adjusters and keeps your recovery on schedule.</p>
          </div>
        </div>
      </div>

      <div className="p-6 bg-white border-t border-stone-100">
        <Button onClick={() => onNavigate('claim-detail')}>Create Task</Button>
      </div>
    </MobileLayout>
  );
};
