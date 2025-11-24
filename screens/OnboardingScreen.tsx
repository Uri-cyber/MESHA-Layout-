import React, { useState } from 'react';
import { MobileLayout, Button } from '../components/Common';
import { ScreenName } from '../types';
import { CloudSun, ShieldCheck, FolderHeart, Users } from 'lucide-react';

interface Props {
  onNavigate: (screen: ScreenName) => void;
}

export const OnboardingScreen: React.FC<Props> = ({ onNavigate }) => {
  const [step, setStep] = useState(0);

  const steps = [
    {
      icon: CloudSun,
      title: "Your Recovery Companion",
      desc: "MESHA guides you through every step of recovering from weather damage, from chaos to calm."
    },
    {
      icon: ShieldCheck,
      title: "The 8-Phase Method",
      desc: "We break down the overwhelming process into 8 clear, manageable phases so you always know what's next."
    },
    {
      icon: FolderHeart,
      title: "Document Everything",
      desc: "Securely store photos, estimates, and insurance documents in one safe place."
    },
    {
      icon: Users,
      title: "Professional Support",
      desc: "Connect with trusted contractors and get expert advice when you need it most."
    }
  ];

  const CurrentIcon = steps[step].icon;

  return (
    <MobileLayout className="bg-white">
      <div className="flex-1 flex flex-col items-center justify-center px-8 relative z-10">
        <div className="w-full max-w-xs text-center mb-12">
          <div className="w-20 h-20 bg-brand-100 text-brand-600 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-xl shadow-brand-500/20 transform rotate-3">
            <CurrentIcon size={40} />
          </div>
          <h2 className="text-3xl font-extrabold text-stone-800 mb-4">{steps[step].title}</h2>
          <p className="text-stone-500 font-medium leading-relaxed">{steps[step].desc}</p>
        </div>

        <div className="flex gap-2 mb-12">
          {steps.map((_, i) => (
            <div 
              key={i} 
              className={`h-2 rounded-full transition-all duration-300 ${i === step ? 'w-8 bg-brand-500' : 'w-2 bg-stone-200'}`} 
            />
          ))}
        </div>

        <div className="w-full space-y-4">
            <Button onClick={() => {
              if (step < steps.length - 1) setStep(step + 1);
              else onNavigate('login');
            }}>
              {step < steps.length - 1 ? 'Next' : 'Get Started'}
            </Button>
            {step < steps.length - 1 && (
              <button 
                onClick={() => onNavigate('login')}
                className="w-full py-4 text-stone-400 font-bold text-sm hover:text-stone-600"
              >
                Skip Intro
              </button>
            )}
        </div>
      </div>
    </MobileLayout>
  );
};