
import React from 'react';
import { MobileLayout, Header, Card, Badge, BottomNav } from '../components/Common';
import { ScreenName } from '../types';
import { Star, Phone, MessageSquare, MapPin, Plus } from 'lucide-react';

interface Props {
  onNavigate: (screen: ScreenName) => void;
}

export const ContractorsScreen: React.FC<Props> = ({ onNavigate }) => {
  return (
    <MobileLayout>
      <Header 
        title="Contractors" 
        rightAction={<button onClick={() => onNavigate('add-contractor')} className="text-brand-600 font-bold text-sm">Add</button>}
      />
      
      <div className="flex-1 overflow-y-auto px-6 pb-28 space-y-4 pt-2">
        <Card onClick={() => onNavigate('contractor-detail')}>
            <div className="flex gap-4">
                <img src="https://picsum.photos/100" className="w-14 h-14 rounded-xl object-cover bg-stone-200" alt="Pro" />
                <div className="flex-1">
                    <div className="flex justify-between items-start">
                        <h3 className="font-bold text-stone-800">Mike's Roofing</h3>
                        <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                            <Star size={12} fill="currentColor" /> 4.8
                        </div>
                    </div>
                    <p className="text-xs text-stone-500 mb-2">Roofing & Siding • Lic #99283</p>
                    <Badge label="Hired" variant="success" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-4">
                <button 
                  onClick={(e) => { e.stopPropagation(); }}
                  className="py-2 bg-stone-50 rounded-lg font-bold text-stone-600 text-xs flex items-center justify-center gap-2 hover:bg-stone-100 transition-colors"
                >
                    <Phone size={14} /> Call
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); onNavigate('chat'); }}
                  className="py-2 bg-brand-50 rounded-lg font-bold text-brand-600 text-xs flex items-center justify-center gap-2 hover:bg-brand-100 transition-colors"
                >
                    <MessageSquare size={14} /> Message
                </button>
            </div>
        </Card>
      </div>
      <BottomNav currentScreen="contractors" onNavigate={onNavigate} />
    </MobileLayout>
  );
};
