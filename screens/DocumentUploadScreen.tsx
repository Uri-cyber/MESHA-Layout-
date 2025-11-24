import React from 'react';
import { MobileLayout, Header, Button, Card } from '../components/Common';
import { ScreenName } from '../types';
import { UploadCloud, Camera, FileText, ChevronRight, CheckCircle2 } from 'lucide-react';

interface Props {
  onNavigate: (screen: ScreenName) => void;
}

export const DocumentUploadScreen: React.FC<Props> = ({ onNavigate }) => {
  const categories = [
    { 
        id: 'photos', 
        title: 'Damage Photos', 
        count: 12, 
        icon: Camera, 
        color: 'text-brand-500', 
        bg: 'bg-brand-50' 
    },
    { 
        id: 'insurance', 
        title: 'Insurance Documents', 
        count: 3, 
        icon: ShieldIcon, 
        color: 'text-calm-600', 
        bg: 'bg-calm-50' 
    },
    { 
        id: 'estimates', 
        title: 'Contractor Estimates', 
        count: 0, 
        icon: FileText, 
        color: 'text-stone-500', 
        bg: 'bg-stone-100',
        empty: true
    },
  ];

  function ShieldIcon(props: any) { return <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> }

  return (
    <MobileLayout>
      <Header title="Upload Documents" showBack onBack={() => onNavigate('documents')} />
      
      <div className="flex-1 overflow-y-auto px-6 pt-4 pb-8">
         
         {/* Main Dropzone */}
         <div className="border-3 border-dashed border-brand-200 bg-brand-50/50 rounded-[2rem] h-64 flex flex-col items-center justify-center text-center p-8 mb-8 transition-colors hover:bg-brand-50 hover:border-brand-300 cursor-pointer group">
            <div className="w-20 h-20 bg-white rounded-full shadow-soft flex items-center justify-center text-brand-500 mb-4 group-hover:scale-110 transition-transform">
                <UploadCloud size={36} strokeWidth={2} />
            </div>
            <h3 className="font-bold text-stone-800 text-xl mb-1">Tap to upload</h3>
            <p className="text-stone-500 text-sm">We accept JPG, PNG, and PDF<br/>up to 10MB</p>
         </div>

         <h3 className="font-bold text-stone-800 mb-4 px-2">Select a Category</h3>
         <div className="space-y-4">
            {categories.map(cat => (
                <div key={cat.id} className="bg-white p-4 rounded-3xl border border-stone-100 shadow-sm flex items-center gap-4 cursor-pointer hover:border-brand-200 transition-colors">
                    <div className={`w-14 h-14 rounded-2xl ${cat.bg} ${cat.color} flex items-center justify-center shrink-0`}>
                        <cat.icon size={24} />
                    </div>
                    <div className="flex-1">
                        <h4 className="font-bold text-stone-800">{cat.title}</h4>
                        <p className={`text-xs font-bold ${cat.empty ? 'text-brand-500' : 'text-stone-400'}`}>
                            {cat.empty ? 'Needs files' : `${cat.count} files uploaded`}
                        </p>
                    </div>
                    {cat.empty ? (
                        <div className="w-8 h-8 rounded-full border-2 border-stone-100 flex items-center justify-center">
                             <div className="w-2 h-2 bg-stone-300 rounded-full"></div>
                        </div>
                    ) : (
                        <CheckCircle2 size={24} className="text-calm-500" />
                    )}
                </div>
            ))}
         </div>
      </div>

      <div className="p-6 bg-white border-t border-stone-100">
         <Button onClick={() => onNavigate('documents')}>Done</Button>
      </div>
    </MobileLayout>
  );
};