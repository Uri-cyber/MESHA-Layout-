
import React, { useState } from 'react';
import { MobileLayout, Header, Button, Input } from '../components/Common';
import { ScreenName } from '../types';
import { KeyRound, Mail, ArrowRight, CheckCircle2, MailCheck } from 'lucide-react';

interface Props {
  onNavigate: (screen: ScreenName) => void;
}

export const ForgotPasswordScreen: React.FC<Props> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!email) return;
    // Simulate API call
    setTimeout(() => {
        setIsSubmitted(true);
    }, 800);
  };

  return (
    <MobileLayout className="bg-white">
      <Header showBack onBack={() => onNavigate('login')} transparent />
      
      <div className="flex-1 flex flex-col px-8 pt-4 pb-8 animate-fade-in">
        {!isSubmitted ? (
            <>
                <div className="mb-8">
                    <div className="w-16 h-16 bg-brand-50 text-brand-500 rounded-3xl flex items-center justify-center mb-6 shadow-sm">
                        <KeyRound size={32} />
                    </div>
                    <h1 className="text-3xl font-extrabold text-stone-800 mb-2 tracking-tight">Forgot Password?</h1>
                    <p className="text-stone-500 font-medium leading-relaxed">
                        Don't worry! It happens. Please enter the email associated with your account.
                    </p>
                </div>

                <div className="space-y-6">
                    <Input 
                        label="Email Address"
                        icon={<Mail size={20} />}
                        placeholder="sarah@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoFocus
                    />

                    <Button 
                        onClick={handleSubmit}
                        disabled={!email}
                        className={!email ? 'opacity-50' : ''}
                    >
                        Send Reset Code
                    </Button>
                </div>
            </>
        ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center animate-slide-up pb-20">
                <div className="w-24 h-24 bg-calm-50 text-calm-600 rounded-full flex items-center justify-center mb-6 shadow-glow">
                    <MailCheck size={48} strokeWidth={1.5} />
                </div>
                <h2 className="text-2xl font-extrabold text-stone-800 mb-3">Check your mail</h2>
                <p className="text-stone-500 font-medium mb-8 leading-relaxed max-w-xs">
                    We have sent password recovery instructions to <span className="text-stone-800 font-bold">{email}</span>.
                </p>

                <Button onClick={() => onNavigate('login')} fullWidth>
                    Back to Sign In
                </Button>

                <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-sm font-bold text-stone-400 hover:text-stone-600"
                >
                    Did not receive the email? <span className="text-brand-600">Resend</span>
                </button>
            </div>
        )}
      </div>
    </MobileLayout>
  );
};
