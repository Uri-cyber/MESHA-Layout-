
import React from 'react';
import { MobileLayout, Header } from '../components/Common';
import { ScreenName } from '../types';
import { Share, Download, Trash2 } from 'lucide-react';

interface Props {
  onNavigate: (screen: ScreenName) => void;
}

export const DocumentViewerScreen: React.FC<Props> = ({ onNavigate }) => {
  return (
    <MobileLayout className="bg-stone-900">
      <Header 
        className="text-white"
        showBack 
        onBack={() => onNavigate('documents')}
        title="Policy_Decl.pdf"
        transparent
        rightAction={<button className="text-white p-2"><Share size={20}/></button>}
      />
      
      <div className="flex-1 bg-white/10 backdrop-blur-sm m-4 rounded-3xl flex flex-col items-center justify-center border border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
            <span className="text-9xl font-bold text-white transform -rotate-45">PDF</span>
        </div>
        <p className="text-white/70 font-medium mb-4">Preview Mode</p>
      </div>

      {/* Footer Controls */}
      <div className="px-6 pb-8 pt-2 flex justify-around">
        <button className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors">
            <div className="p-3 bg-white/10 rounded-full"><Download size={20} /></div>
            <span className="text-xs font-bold">Save</span>
        </button>
        <button className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors">
            <div className="p-3 bg-red-500/20 text-red-400 rounded-full"><Trash2 size={20} /></div>
            <span className="text-xs font-bold">Delete</span>
        </button>
      </div>
    </MobileLayout>
  );
};
