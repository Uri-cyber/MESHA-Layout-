
import React from 'react';
import { MobileLayout, Header, Button, Input } from '../components/Common';
import { ScreenName } from '../types';
import { Briefcase, DollarSign, Phone, Mail, ShieldCheck } from 'lucide-react';

interface Props {
  onNavigate: (screen: ScreenName) => void;
}

export const AddContractorScreen: React.FC<Props> = ({ onNavigate }) => {
  return (
    <MobileLayout className="bg-white">
      <Header 
        title="Add Contractor" 
        showBack 
        onBack={() => onNavigate('contractors')} 
      />
      
      <div className="flex-1 overflow-y-auto px-6 pb-8 pt-2">
        <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-4">Company Info</h3>
        <div className="space-y-4 mb-8">
            <Input 
                label="Company Name" 
                placeholder="e.g. Acme Roofing" 
                icon={<Briefcase size={20}/>} 
                autoFocus
            />
            <div className="space-y-2">
                <label className="text-sm font-bold text-stone-600 ml-1">Specialty</label>
                <select className="w-full px-4 py-4 bg-white border-2 border-stone-100 rounded-2xl text-stone-800 outline-none font-medium appearance-none">
                    <option>General Contractor</option>
                    <option>Roofing</option>
                    <option>Water Mitigation</option>
                    <option>Plumbing</option>
                    <option>Electrical</option>
                </select>
            </div>
            <Input 
                label="License Number" 
                placeholder="e.g. CGC1500000" 
                icon={<ShieldCheck size={20}/>} 
            />
        </div>

        <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-4">Bid Details</h3>
        <div className="space-y-4 mb-8">
            <Input 
                label="Bid Amount" 
                type="number"
                placeholder="0.00" 
                icon={<DollarSign size={20}/>} 
            />
        </div>

        <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-4">Contact Info</h3>
        <div className="space-y-4">
             <Input 
                label="Phone" 
                type="tel"
                placeholder="(555) 000-0000" 
                icon={<Phone size={20}/>} 
            />
             <Input 
                label="Email" 
                type="email"
                placeholder="contact@company.com" 
                icon={<Mail size={20}/>} 
            />
        </div>
      </div>

      <div className="p-6 border-t border-stone-100">
        <Button onClick={() => onNavigate('contractors')}>Save Contractor</Button>
      </div>
    </MobileLayout>
  );
};
