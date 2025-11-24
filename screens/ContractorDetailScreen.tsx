import React from 'react';
import { MobileLayout, Header, Button } from '../components/Common';
import { ScreenName } from '../types';
import { Star, MapPin, ShieldCheck, Clock } from 'lucide-react';

interface Props {
  onNavigate: (screen: ScreenName) => void;
}

export const ContractorDetailScreen: React.FC<Props> = ({ onNavigate }) => {
  return (
    <MobileLayout>
      <Header title="Contractor Details" showBack onBack={() => onNavigate('contractors')} />
      
      <div className="flex-1 overflow-y-auto px-6 pb-6">
         <div className="flex flex-col items-center mb-6">
            <div className="w-24 h-24 rounded-full bg-stone-200 mb-4 overflow-hidden">
                <img src="https://picsum.photos/200" alt="Contractor" className="w-full h-full object-cover"/>
            </div>
            <h2 className="text-xl font-bold text-stone-800">Mike's Roofing</h2>
            <div className="flex items-center gap-1 text-amber-500 font-bold mt-1">
                <Star size={16} fill="currentColor" /> 4.8 (124 reviews)
            </div>
         </div>

         <div className="grid grid-cols-3 gap-3 mb-8">
            <div className="text-center p-3 bg-stone-50 rounded-2xl">
                <ShieldCheck size={20} className="mx-auto text-emerald-500 mb-1" />
                <span className="text-[10px] font-bold text-stone-500 uppercase">Licensed</span>
            </div>
             <div className="text-center p-3 bg-stone-50 rounded-2xl">
                <Clock size={20} className="mx-auto text-brand-500 mb-1" />
                <span className="text-[10px] font-bold text-stone-500 uppercase">Fast</span>
            </div>
             <div className="text-center p-3 bg-stone-50 rounded-2xl">
                <MapPin size={20} className="mx-auto text-rose-500 mb-1" />
                <span className="text-[10px] font-bold text-stone-500 uppercase">Local</span>
            </div>
         </div>

         <h3 className="font-bold text-stone-800 mb-2">About</h3>
         <p className="text-stone-500 text-sm leading-relaxed mb-6">
            Specializing in storm damage repair for over 15 years. We handle insurance claims directly and ensure your home is restored to better than before.
         </p>

         <Button onClick={() => {}}>Request Estimate</Button>
      </div>
    </MobileLayout>
  );
};