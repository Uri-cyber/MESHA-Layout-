import React from 'react';
import { MobileLayout, Button, Header } from '../components/Common';
import { ScreenName } from '../types';
import { HeartHandshake } from 'lucide-react';

interface Props {
  onNavigate: (screen: ScreenName) => void;
}

export const RegisterScreen: React.FC<Props> = ({ onNavigate }) => {
  return (
    <MobileLayout className="bg-white">
      <Header showBack onBack={() => onNavigate('login')} transparent />
      
      <div className="flex-1 flex flex-col px-8 pb-8 overflow-y-auto">
        <div className="mb-6 mt-2">
          <div className="inline-flex p-3 bg-brand-100 text-brand-600 rounded-2xl mb-4">
            <HeartHandshake size={32} />
          </div>
          <h1 className="text-3xl font-extrabold text-stone-800 mb-2 tracking-tight">Start Your Journey</h1>
          <p className="text-stone-500 font-medium leading-relaxed">
            Create an account to begin managing your property damage claim.
          </p>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
             <div className="space-y-2">
                <label className="text-xs font-bold text-stone-400 uppercase tracking-wider ml-1">First Name</label>
                <input type="text" className="w-full p-4 bg-stone-50 rounded-2xl border-2 border-transparent focus:border-brand-200 focus:bg-white outline-none transition-all font-medium" placeholder="Jane" />
             </div>
             <div className="space-y-2">
                <label className="text-xs font-bold text-stone-400 uppercase tracking-wider ml-1">Last Name</label>
                <input type="text" className="w-full p-4 bg-stone-50 rounded-2xl border-2 border-transparent focus:border-brand-200 focus:bg-white outline-none transition-all font-medium" placeholder="Doe" />
             </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-xs font-bold text-stone-400 uppercase tracking-wider ml-1">Phone</label>
            <input type="tel" className="w-full p-4 bg-stone-50 rounded-2xl border-2 border-transparent focus:border-brand-200 focus:bg-white outline-none transition-all font-medium" placeholder="(555) 123-4567" />
          </div>
          
          <div className="space-y-2">
            <label className="text-xs font-bold text-stone-400 uppercase tracking-wider ml-1">Email Address</label>
            <input type="email" className="w-full p-4 bg-stone-50 rounded-2xl border-2 border-transparent focus:border-brand-200 focus:bg-white outline-none transition-all font-medium" placeholder="jane@example.com" />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-stone-400 uppercase tracking-wider ml-1">Password</label>
            <input type="password" className="w-full p-4 bg-stone-50 rounded-2xl border-2 border-transparent focus:border-brand-200 focus:bg-white outline-none transition-all font-medium" />
          </div>

          <div className="flex items-start gap-3 py-2">
            <input type="checkbox" className="mt-1 w-5 h-5 rounded border-stone-300 text-brand-500 focus:ring-brand-500" />
            <p className="text-xs text-stone-500">
              I agree to the <span className="font-bold text-stone-700">Terms of Service</span> and <span className="font-bold text-stone-700">Privacy Policy</span>.
            </p>
          </div>

          <Button onClick={() => onNavigate('onboarding')}>
            Create Account
          </Button>
          
          <div className="text-center mt-4">
            <p className="text-stone-400 text-sm">Already have an account? <button onClick={() => onNavigate('login')} className="text-brand-600 font-bold">Sign In</button></p>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};