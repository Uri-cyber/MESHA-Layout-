
import React from 'react';
import { MobileLayout, Button, Input } from '../components/Common';
import { ScreenName } from '../types';
import { Mail, Lock, ArrowRight, Sun } from 'lucide-react';

interface Props {
  onNavigate: (screen: ScreenName) => void;
}

// Simple SVG Icons
const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .533 5.333.533 12S5.867 24 12.48 24c3.44 0 6.04-1.133 8.16-3.293 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.133H12.48z" />
  </svg>
);

const AppleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.21-.93 3.69-.74.62.03 1.95.27 2.82 1.55-.1.08-1.52 1.1-1.22 3.8.31 2.88 2.84 3.56 2.86 3.57-.02.05-.44 1.5-1.23 2.85zm-4.34-13.7c.88-1.04 1.46-2.48 1.3-3.95-1.26.05-2.77.85-3.66 1.9-.79.88-1.51 2.32-1.3 3.7 1.4.11 2.85-.61 3.66-1.65z" />
  </svg>
);

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
              <button 
                onClick={() => onNavigate('forgot-password')}
                className="text-sm font-bold text-stone-400 hover:text-stone-600"
              >
                Forgot password?
              </button>
           </div>

           <Button 
              onClick={() => onNavigate('dashboard')}
              icon={<ArrowRight size={20} />}
              className="mt-4 shadow-xl shadow-brand-500/20"
           >
              Sign In
           </Button>

           <div className="grid grid-cols-2 gap-4 mt-4">
              <Button variant="secondary" fullWidth={false} className="w-full" icon={<GoogleIcon />}>Google</Button>
              <Button variant="secondary" fullWidth={false} className="w-full" icon={<AppleIcon />}>Apple</Button>
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
