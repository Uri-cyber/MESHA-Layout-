
import React from 'react';
import { MobileLayout, Header, Button, Input } from '../components/Common';
import { ScreenName } from '../types';
import { Building, Hash, Phone, Mail, User } from 'lucide-react';

interface Props {
  onNavigate: (screen: ScreenName) => void;
}

export const EditInsuranceScreen: React.FC<Props> = ({ onNavigate }) => {
  return (
    <MobileLayout className="bg-white">
      <Header 
        title="Edit Insurance" 
        showBack 
        onBack={() => onNavigate('insurance-info')} 
      />
      
      <div className="flex-1 overflow-y-auto px-6 pb-8 pt-2">
        <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-4">Policy Details</h3>
        <div className="space-y-4 mb-8">
            <Input 
                label="Insurance Provider" 
                defaultValue="State Farm" 
                icon={<Building size={20}/>} 
            />
            <Input 
                label="Policy Number" 
                defaultValue="SF-993822" 
                icon={<Hash size={20}/>} 
            />
            <Input 
                label="Claim Number" 
                defaultValue="CLM-2024-001" 
                icon={<Hash size={20}/>} 
            />
        </div>

        <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-4">Adjuster Contact</h3>
        <div className="space-y-4">
            <Input 
                label="Adjuster Name" 
                defaultValue="John Smith" 
                icon={<User size={20}/>} 
            />
            <Input 
                label="Phone Number" 
                defaultValue="(555) 123-4567" 
                icon={<Phone size={20}/>} 
            />
            <Input 
                label="Email Address" 
                defaultValue="j.smith@statefarm.com" 
                icon={<Mail size={20}/>} 
            />
        </div>
      </div>

      <div className="p-6 border-t border-stone-100">
        <Button onClick={() => onNavigate('insurance-info')}>Save Changes</Button>
      </div>
    </MobileLayout>
  );
};
