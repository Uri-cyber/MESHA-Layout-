import React from 'react';
import { MobileLayout, Header, Button } from '../components/Common';
import { ScreenName } from '../types';
import { GripVertical, Plus, Type, Hash, Calendar } from 'lucide-react';

interface Props {
  onNavigate: (screen: ScreenName) => void;
}

export const FormBuilderScreen: React.FC<Props> = ({ onNavigate }) => {
  return (
    <MobileLayout>
      <Header title="Form Builder" showBack onBack={() => onNavigate('admin-dashboard')} />
      
      <div className="px-6 py-4 bg-stone-50 border-b border-stone-100">
        <h2 className="font-bold text-stone-800">New Inspection Form</h2>
        <p className="text-xs text-stone-400">Drag fields to rearrange</p>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
         <div className="p-4 bg-white border border-brand-200 rounded-xl flex items-center gap-3 shadow-sm">
            <GripVertical className="text-stone-300" size={20} />
            <Type size={18} className="text-stone-400" />
            <div className="flex-1">
                <p className="font-bold text-sm text-stone-800">Damage Description</p>
                <p className="text-[10px] text-stone-400">Text Area • Required</p>
            </div>
         </div>
         
         <div className="p-4 bg-white border border-stone-100 rounded-xl flex items-center gap-3">
            <GripVertical className="text-stone-300" size={20} />
            <Calendar size={18} className="text-stone-400" />
            <div className="flex-1">
                <p className="font-bold text-sm text-stone-800">Incident Date</p>
                <p className="text-[10px] text-stone-400">Date Picker</p>
            </div>
         </div>

         <button className="w-full py-3 border-2 border-dashed border-stone-200 rounded-xl text-stone-400 font-bold text-sm flex items-center justify-center gap-2 hover:border-brand-300 hover:text-brand-500 transition-colors">
            <Plus size={18} /> Add Field
         </button>
      </div>

      <div className="p-6 border-t border-stone-100">
        <Button onClick={() => onNavigate('admin-dashboard')}>Save Form</Button>
      </div>
    </MobileLayout>
  );
};