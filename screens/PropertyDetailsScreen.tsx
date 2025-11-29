
import React from 'react';
import { MobileLayout, Header, Button, Input } from '../components/Common';
import { ScreenName } from '../types';
import { Home, MapPin, Building } from 'lucide-react';

interface Props {
  onNavigate: (screen: ScreenName) => void;
}

export const PropertyDetailsScreen: React.FC<Props> = ({ onNavigate }) => {
  return (
    <MobileLayout className="bg-white">
      <Header 
        title="Property Details" 
        showBack 
        onBack={() => onNavigate('profile')} 
      />
      
      <div className="flex-1 overflow-y-auto px-6 pb-8">
        <div className="mb-6 p-4 bg-brand-50 rounded-2xl flex items-start gap-4">
            <div className="p-3 bg-white rounded-xl text-brand-500 shadow-sm">
                <Home size={24} />
            </div>
            <div>
                <h3 className="font-bold text-brand-900">Primary Residence</h3>
                <p className="text-xs text-brand-700 font-medium mt-1">
                    This is the main property associated with your active claim.
                </p>
            </div>
        </div>

        <div className="space-y-6">
            <Input 
                label="Street Address" 
                defaultValue="123 Maple Ave" 
                icon={<MapPin size={20}/>} 
            />
            
            <div className="grid grid-cols-2 gap-4">
                <Input label="City" defaultValue="Miami" />
                <Input label="State" defaultValue="FL" />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <Input label="Zip Code" defaultValue="33101" />
                <div className="space-y-2">
                    <label className="text-sm font-bold text-stone-600 ml-1">Property Type</label>
                    <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400">
                            <Building size={20} />
                        </div>
                        <select className="w-full pl-12 pr-4 py-4 bg-white border-2 border-stone-100 rounded-2xl text-stone-800 outline-none font-medium appearance-none">
                            <option>Single Family</option>
                            <option>Condo</option>
                            <option>Townhouse</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="pt-8">
                <Button onClick={() => onNavigate('profile')}>Save Changes</Button>
            </div>
        </div>
      </div>
    </MobileLayout>
  );
};
