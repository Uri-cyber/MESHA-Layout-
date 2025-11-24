import React from 'react';
import { MobileLayout, Button, Input } from '../components/Common';
import { ScreenName } from '../types';
import { Mail, Lock, ArrowRight, Sun } from 'lucide-react';

interface Props {
  onNavigate: (screen: ScreenName) => void;
}

export const LoginScreen: React.FC<Props> = ({ onNavigate }) => {
  return (
    <MobileLayout className="bg-stone-50">
      <div className="flex-1 flex flex-col px-8 pt-12 pb-8 animate-fade-in">
        
        {/* Branding Section */}
        <div className="mt-8 mb-12 text-center">
          <div className="w-16 h-16 bg-brand-100 rounded-3xl flex items-center justify-center mx-auto mb-6 text-brand-500 shadow-glow transform rotate-3">
             <Sun size={32} strokeWidth={2.5} />
          </div>
          <h1 className="text-4xl font-extrabold text-stone-800 tracking-tight mb-2">MESHA</h1>
          <p className="text-brand-600 font-medium text-lg">Weather Damage Recovery</p>
        </div>

        {/* Form Section */}
        <div className="flex-1 space-y-6">
           <div className="text-left mb-4">
              <h2 className="text-xl font-bold text-stone-800">Welcome back</h2>
              <p className="text-stone-500">Sign in to continue your recovery journey.</p>
           </div>

           <Input 
              label="Email"
              icon={<Mail size={20} />}
              placeholder="sarah@example.com"
           />
           <Input 
              label="Password"
              type="password"
              icon={<Lock size={20} />}
              placeholder="••••••••"
           />

           <div className="flex justify-end">
              <button className="text-sm font-bold text-stone-400 hover:text-stone-600">Forgot password?</button>
           </div>

           <Button 
              onClick={() => onNavigate('dashboard')}
              icon={<ArrowRight size={20} />}
              className="mt-4 shadow-xl shadow-brand-500/20"
           >
              Sign In
           </Button>

           <div className="grid grid-cols-2 gap-4 mt-4">
              <Button variant="secondary" fullWidth={false} className="w-full" icon={<span className="text-lg">G</span>}>Google</Button>
              <Button variant="secondary" fullWidth={false} className="w-full" icon={<span className="text-lg"></span>}>Apple</Button>
           </div>
        </div>

        {/* Footer */}
        <div className="mt-auto text-center">
           <p className="text-stone-400 font-medium">
             Don't have an account? <button onClick={() => onNavigate('register')} className="text-brand-600 font-bold hover:underline">Register</button>
           </p>
        </div>
      </div>
    </MobileLayout>
  );
};