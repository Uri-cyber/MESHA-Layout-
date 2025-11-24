import React, { useState } from 'react';
import { MobileLayout, Header, Button, Input, ProgressBar, Card } from '../components/Common';
import { ScreenName } from '../types';
import { ArrowRight, UploadCloud, Info, CheckCircle, DollarSign } from 'lucide-react';

interface Props {
  onNavigate: (screen: ScreenName) => void;
}

export const NewClaimScreen: React.FC<Props> = ({ onNavigate }) => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  return (
    <MobileLayout>
      <Header 
        title="Start Your Claim" 
        subtitle="We're here to guide you."
        showBack 
        onBack={() => step > 1 ? setStep(step - 1) : onNavigate('dashboard')} 
      />

      <div className="px-6 py-4 bg-white border-b border-stone-100">
        <div className="flex justify-between text-xs font-bold text-stone-400 mb-2 uppercase tracking-wider">
           <span>Step {step} of {totalSteps}</span>
           <span>{Math.round((step / totalSteps) * 100)}%</span>
        </div>
        <ProgressBar progress={(step / totalSteps) * 100} />
      </div>

      <div className="flex-1 px-6 py-6 overflow-y-auto">
        {step === 1 && (
            <div className="space-y-6 animate-fade-in">
                <div className="space-y-2">
                    <h2 className="text-xl font-bold text-stone-800">Property Information</h2>
                    <p className="text-stone-500 text-sm">Where did the damage occur?</p>
                </div>
                <Input label="Property Address" placeholder="123 Main St" />
                <div className="grid grid-cols-2 gap-4">
                    <Input label="City" placeholder="Miami" />
                    <Input label="Zip Code" placeholder="33101" />
                </div>
                <div className="bg-brand-50 border-l-4 border-brand-500 p-4 rounded-r-lg">
                    <div className="flex items-start gap-3">
                        <Info size={20} className="text-brand-600 shrink-0 mt-0.5" />
                        <p className="text-sm text-brand-900 font-medium">We'll use this to pull local weather reports to support your claim.</p>
                    </div>
                </div>
            </div>
        )}

        {step === 2 && (
            <div className="space-y-6 animate-fade-in">
                <div className="space-y-2">
                     <h2 className="text-xl font-bold text-stone-800">Incident Details</h2>
                     <p className="text-stone-500 text-sm">Tell us what happened.</p>
                </div>
                <Input label="Date of Incident" type="date" />
                <div>
                    <label className="text-sm font-bold text-stone-600 uppercase tracking-wider mb-2 block ml-1">Damage Type</label>
                    <select className="w-full px-4 py-4 bg-white border-2 border-stone-100 rounded-2xl text-stone-800 focus:border-brand-300 focus:ring-4 focus:ring-brand-50 outline-none font-medium">
                        <option>Select type...</option>
                        <option>Hurricane</option>
                        <option>Flood</option>
                        <option>Fire</option>
                        <option>Wind</option>
                        <option>Hail</option>
                    </select>
                </div>
                <div>
                    <label className="text-sm font-bold text-stone-600 uppercase tracking-wider mb-2 block ml-1">Description</label>
                    <textarea rows={4} className="w-full px-4 py-4 bg-white border-2 border-stone-100 rounded-2xl text-stone-800 focus:border-brand-300 focus:ring-4 focus:ring-brand-50 outline-none font-medium" placeholder="Describe the damage in your own words..."></textarea>
                </div>
            </div>
        )}

        {step === 3 && (
            <div className="space-y-6 animate-fade-in">
                <div className="space-y-2">
                     <h2 className="text-xl font-bold text-stone-800">Estimated Cost</h2>
                     <p className="text-stone-500 text-sm">A rough estimate helps us prioritize.</p>
                </div>
                
                <Input 
                    label="Estimated Damage Value" 
                    placeholder="0.00" 
                    type="number" 
                    icon={<DollarSign size={20}/>} 
                />
                
                <div className="p-4 bg-stone-50 rounded-2xl border border-stone-100">
                    <p className="text-xs text-stone-500 font-medium">
                        Don't worry if you're not sure. You can update this later after getting professional estimates in Phase 5.
                    </p>
                </div>
            </div>
        )}

        {step === 4 && (
            <div className="space-y-6 animate-fade-in">
                <div className="space-y-2">
                     <h2 className="text-xl font-bold text-stone-800">Initial Photos</h2>
                     <p className="text-stone-500 text-sm">Upload any photos you have now.</p>
                </div>
                
                <div className="border-3 border-dashed border-stone-200 rounded-[2rem] p-8 text-center bg-stone-50 hover:bg-brand-50 hover:border-brand-300 transition-colors cursor-pointer group">
                    <div className="w-16 h-16 bg-white rounded-full shadow-soft flex items-center justify-center text-stone-400 mx-auto mb-4 group-hover:text-brand-500 group-hover:scale-110 transition-all">
                        <UploadCloud size={32} strokeWidth={2} />
                    </div>
                    <p className="font-bold text-stone-800">Tap to upload photos</p>
                    <p className="text-xs text-stone-400 mt-2 font-medium">JPG, PNG up to 10MB</p>
                </div>

                <Card className="!bg-brand-50 !border-brand-100">
                    <h3 className="font-bold text-brand-900 mb-3 flex items-center text-sm uppercase tracking-wide"><Info size={16} className="mr-2 text-brand-600"/> What Happens Next</h3>
                    <ul className="space-y-3 text-sm text-brand-800 font-medium">
                        <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-brand-500 rounded-full mt-1.5"/> Phase 1: Initial Assessment</li>
                        <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-brand-400 rounded-full mt-1.5"/> Phase 2: Mitigation</li>
                        <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-brand-300 rounded-full mt-1.5"/> 8-Step Guided Recovery</li>
                    </ul>
                </Card>
            </div>
        )}
      </div>

      <div className="p-6 bg-white border-t border-stone-100">
        <Button onClick={() => {
            if (step < totalSteps) setStep(step + 1);
            else onNavigate('claim-detail');
        }}>
            {step === totalSteps ? 'Begin My Claim' : 'Next Step'} <ArrowRight size={18} />
        </Button>
      </div>
    </MobileLayout>
  );
};