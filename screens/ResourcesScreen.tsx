import React from 'react';
import { MobileLayout, BottomNav, Header, Card } from '../components/Common';
import { ScreenName } from '../types';
import { PlayCircle, FileText, Search } from 'lucide-react';

interface Props {
  onNavigate: (screen: ScreenName) => void;
}

export const ResourcesScreen: React.FC<Props> = ({ onNavigate }) => {
  return (
    <MobileLayout>
      <Header title="Resources" />
      
      <div className="px-6 mb-6">
        <div className="bg-white p-3 rounded-xl border border-stone-200 flex items-center gap-2 shadow-sm">
            <Search size={20} className="text-stone-400" />
            <input type="text" placeholder="How do I file a claim?" className="flex-1 outline-none text-stone-700 font-medium" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-24 space-y-6">
         <section>
            <h3 className="font-bold text-stone-800 mb-3">Recommended for Phase 3</h3>
            <Card className="!p-0 overflow-hidden group cursor-pointer">
                <div className="h-32 bg-brand-100 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <PlayCircle size={40} className="text-brand-600 bg-white rounded-full shadow-md" fill="white" />
                    </div>
                </div>
                <div className="p-4">
                    <h4 className="font-bold text-stone-800">How to Document Damage</h4>
                    <p className="text-xs text-stone-500 mt-1">5 min video guide</p>
                </div>
            </Card>
         </section>

         <section>
            <h3 className="font-bold text-stone-800 mb-3">Guides</h3>
            <div className="space-y-3">
                <div className="flex gap-4 p-4 bg-white rounded-2xl border border-stone-100 shadow-sm">
                    <FileText className="text-brand-500" />
                    <div>
                        <p className="font-bold text-stone-800">Understanding your Policy</p>
                        <p className="text-xs text-stone-400">Read time: 3 mins</p>
                    </div>
                </div>
            </div>
         </section>
      </div>
      <BottomNav currentScreen="resources" onNavigate={onNavigate} />
    </MobileLayout>
  );
};