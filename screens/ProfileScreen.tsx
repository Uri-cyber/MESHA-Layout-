
import React from 'react';
import { MobileLayout, BottomNav, Header, Button } from '../components/Common';
import { ScreenName } from '../types';
import { User, Home, Shield, Bell, HelpCircle, LogOut, ChevronRight, Globe } from 'lucide-react';

interface Props {
  onNavigate: (screen: ScreenName) => void;
}

export const ProfileScreen: React.FC<Props> = ({ onNavigate }) => {
  const sections = [
    {
        title: "Account",
        items: [
            { icon: User, label: "Personal Information", color: "text-blue-500", bg: "bg-blue-50", action: () => onNavigate('personal-details') },
            { icon: Home, label: "Property Details", color: "text-brand-500", bg: "bg-brand-50", action: () => onNavigate('property-details') },
            { icon: Shield, label: "Insurance Information", color: "text-calm-600", bg: "bg-calm-50", action: () => onNavigate('insurance-info') },
        ]
    },
    {
        title: "Preferences",
        items: [
            { icon: Bell, label: "Notifications", color: "text-stone-600", bg: "bg-stone-100", value: "On", action: () => onNavigate('notifications') },
            { icon: Globe, label: "Language", color: "text-stone-600", bg: "bg-stone-100", value: "English", action: () => {} },
        ]
    }
  ];

  return (
    <MobileLayout className="bg-stone-50">
      <Header transparent />
      
      <div className="flex-1 overflow-y-auto px-6 pb-28">
         <div className="flex flex-col items-center mb-10">
            <div className="w-32 h-32 rounded-full p-2 bg-white shadow-soft mb-4">
                <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                    alt="Profile" 
                    className="w-full h-full rounded-full object-cover"
                />
            </div>
            <h1 className="text-2xl font-extrabold text-stone-800">Sarah Johnson</h1>
            <p className="text-stone-500 font-medium">sarah.j@example.com</p>
            <div className="mt-4 px-4 py-1.5 bg-brand-100 text-brand-700 rounded-full text-xs font-bold">
                Premium Member
            </div>
         </div>

         <div className="space-y-8">
            {sections.map((section, sIdx) => (
                <div key={sIdx}>
                    <h3 className="px-4 mb-3 text-xs font-bold text-stone-400 uppercase tracking-wider">{section.title}</h3>
                    <div className="bg-white rounded-[2rem] shadow-sm border border-stone-100 overflow-hidden">
                        {section.items.map((item, iIdx) => (
                            <button 
                                key={iIdx} 
                                onClick={item.action}
                                className={`w-full flex items-center gap-4 p-5 hover:bg-stone-50 transition-colors text-left ${iIdx !== section.items.length - 1 ? 'border-b border-stone-50' : ''}`}
                            >
                                <div className={`w-10 h-10 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center shrink-0`}>
                                    <item.icon size={20} />
                                </div>
                                <span className="flex-1 font-bold text-stone-700">{item.label}</span>
                                {item.value && <span className="text-sm font-bold text-stone-400 mr-2">{item.value}</span>}
                                <ChevronRight size={20} className="text-stone-300" />
                            </button>
                        ))}
                    </div>
                </div>
            ))}

            <div className="pt-4 pb-8 px-2">
                <button 
                    onClick={() => onNavigate('login')} 
                    className="w-full py-4 flex items-center justify-center gap-2 text-stone-400 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all font-bold text-sm"
                >
                    <LogOut size={18} /> Sign Out
                </button>
                <div className="text-center mt-6">
                    <p className="text-xs text-stone-300 font-bold">MESHA v2.4.0</p>
                    <div className="flex justify-center gap-4 mt-4 text-xs text-stone-400 font-medium">
                        <button>Privacy Policy</button> • <button>Terms of Service</button>
                    </div>
                </div>
            </div>
         </div>
      </div>
      <BottomNav currentScreen="profile" onNavigate={onNavigate} />
    </MobileLayout>
  );
};