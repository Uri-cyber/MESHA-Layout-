
import React from 'react';
import { MobileLayout, Header, Button, Input } from '../components/Common';
import { ScreenName } from '../types';
import { User, Mail, Phone, Camera } from 'lucide-react';

interface Props {
  onNavigate: (screen: ScreenName) => void;
}

export const PersonalDetailsScreen: React.FC<Props> = ({ onNavigate }) => {
  return (
    <MobileLayout className="bg-white">
      <Header 
        title="Personal Info" 
        showBack 
        onBack={() => onNavigate('profile')} 
      />
      
      <div className="flex-1 overflow-y-auto px-6 pb-8">
        <div className="flex flex-col items-center mb-8 mt-2">
            <div className="relative">
                <div className="w-28 h-28 rounded-full p-1 bg-stone-100">
                    <img 
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                        alt="Profile" 
                        className="w-full h-full rounded-full object-cover"
                    />
                </div>
                <button className="absolute bottom-1 right-1 p-2 bg-brand-500 text-white rounded-full shadow-lg border-2 border-white">
                    <Camera size={16} />
                </button>
            </div>
        </div>

        <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
                <Input label="First Name" defaultValue="Sarah" icon={<User size={20}/>} />
                <Input label="Last Name" defaultValue="Johnson" />
            </div>
            
            <Input 
                label="Email Address" 
                defaultValue="sarah.j@example.com" 
                icon={<Mail size={20}/>} 
            />
            
            <Input 
                label="Phone Number" 
                defaultValue="(555) 123-4567" 
                icon={<Phone size={20}/>} 
            />

            <div className="pt-8">
                <Button onClick={() => onNavigate('profile')}>Save Changes</Button>
            </div>
        </div>
      </div>
    </MobileLayout>
  );
};
