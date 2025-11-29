
import React from 'react';
import { MobileLayout, Header, Button, Input } from '../components/Common';
import { ScreenName } from '../types';
import { Calendar, DollarSign, MapPin } from 'lucide-react';

interface Props {
  onNavigate: (screen: ScreenName) => void;
}

export const EditClaimScreen: React.FC<Props> = ({ onNavigate }) => {
  return (
    <MobileLayout className="bg-white">
      <Header 
        title="Edit Claim" 
        showBack 
        onBack={() => onNavigate('claim-detail')} 
      />
      
      <div className="flex-1 overflow-y-auto px-6 pb-8 pt-2">
        <div className="space-y-6">
            <div className="opacity-50">
                <Input 
                    label="Property Address" 
                    defaultValue="123 Maple Ave, Miami, FL" 
                    icon={<MapPin size={20}/>} 
                    readOnly
                />
                <p className="text-xs text-stone-400 mt-1 ml-1">Contact support to change property address.</p>
            </div>

            <Input 
                label="Date of Incident" 
                type="date"
                defaultValue="2023-10-12"
                icon={<Calendar size={20}/>} 
            />

            <div>
                <label className="text-sm font-bold text-stone-600 uppercase tracking-wider mb-2 block ml-1">Damage Description</label>
                <textarea 
                    rows={5} 
                    className="w-full px-4 py-4 bg-white border-2 border-stone-100 rounded-2xl text-stone-800 focus:border-brand-300 focus:ring-4 focus:ring-brand-50 outline-none font-medium leading-relaxed" 
                    defaultValue="Roof damage from falling branch during hurricane. Water intrusion in master bedroom ceiling and drywall damage."
                />
            </div>

            <Input 
                label="Estimated Cost" 
                defaultValue="45000" 
                type="number"
                icon={<DollarSign size={20}/>} 
            />
        </div>
      </div>

      <div className="p-6 border-t border-stone-100">
        <Button onClick={() => onNavigate('claim-detail')}>Update Claim</Button>
      </div>
    </MobileLayout>
  );
};
