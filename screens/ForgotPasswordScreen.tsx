
import React, { useState } from 'react';
import { MobileLayout, Header, Button, Input } from '../components/Common';
import { ScreenName } from '../types';
import { KeyRound, Mail, Lock, CheckCircle2, MailCheck, AlertCircle } from 'lucide-react';

interface Props {
  onNavigate: (screen: ScreenName) => void;
}

export const ForgotPasswordScreen: React.FC<Props> = ({ onNavigate }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSendCode = () => {
    if (!email.includes('@')) {
        setError('Please enter a valid email address.');
        return;
    }
    setError('');
    // Simulate API call
    setTimeout(() => {
        setStep(2);
    }, 800);
  };

  const handleResetPassword = () => {
    if (!newPassword || !confirmPassword) {
        setError('Please fill out all fields.');
        return;
    }
    if (newPassword !== confirmPassword) {
        setError('Passwords do not match.');
        return;
    }
    if (newPassword.length < 8) {
        setError('Password must be at least 8 characters.');
        return;
    }
    
    setError('');
    // Simulate API call
    setTimeout(() => {
        setStep(3);
    }, 800);
  };

  return (
    <MobileLayout className="bg-white">
      <Header showBack onBack={() => onNavigate('login')} transparent />
      
      <div className="flex-1 flex flex-col px-8 pt-4 pb-8 animate-fade-in">
        {step === 1 && (
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
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setError('');
                        }}
                        autoFocus
                    />
                    
                    {error && (
                        <div className="flex items-center gap-2 text-red-500 bg-red-50 p-3 rounded-xl text-sm font-bold">
                            <AlertCircle size={18} /> {error}
                        </div>
                    )}

                    <Button 
                        onClick={handleSendCode}
                        disabled={!email}
                        className={!email ? 'opacity-50' : ''}
                    >
                        Send Reset Code
                    </Button>
                </div>
            </>
        )}

        {step === 2 && (
            <>
                <div className="mb-8">
                    <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-3xl flex items-center justify-center mb-6 shadow-sm">
                        <Lock size={32} />
                    </div>
                    <h1 className="text-3xl font-extrabold text-stone-800 mb-2 tracking-tight">Reset Password</h1>
                    <p className="text-stone-500 font-medium leading-relaxed">
                        Please create a new password for your account.
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="p-4 bg-stone-50 rounded-2xl border border-stone-100 mb-2">
                        <p className="text-xs text-stone-400 font-bold uppercase mb-1">Resetting for</p>
                        <p className="font-bold text-stone-700 flex items-center gap-2">
                            <Mail size={14} /> {email}
                        </p>
                    </div>

                    <Input 
                        label="New Password"
                        type="password"
                        icon={<Lock size={20} />}
                        placeholder="Min. 8 characters"
                        value={newPassword}
                        onChange={(e) => {
                            setNewPassword(e.target.value);
                            setError('');
                        }}
                    />

                    <Input 
                        label="Confirm Password"
                        type="password"
                        icon={<Lock size={20} />}
                        placeholder="Re-type new password"
                        value={confirmPassword}
                        onChange={(e) => {
                            setConfirmPassword(e.target.value);
                            setError('');
                        }}
                        className={error && newPassword !== confirmPassword ? 'border-red-300 bg-red-50' : ''}
                    />

                    {error && (
                        <div className="flex items-center gap-2 text-red-500 bg-red-50 p-3 rounded-xl text-sm font-bold animate-fade-in">
                            <AlertCircle size={18} /> {error}
                        </div>
                    )}

                    <Button onClick={handleResetPassword}>
                        Update Password
                    </Button>
                </div>
            </>
        )}

        {step === 3 && (
            <div className="flex-1 flex flex-col items-center justify-center text-center animate-slide-up pb-20">
                <div className="w-24 h-24 bg-calm-50 text-calm-600 rounded-full flex items-center justify-center mb-6 shadow-glow">
                    <CheckCircle2 size={48} strokeWidth={2} />
                </div>
                <h2 className="text-2xl font-extrabold text-stone-800 mb-3">Password Updated</h2>
                <p className="text-stone-500 font-medium mb-8 leading-relaxed max-w-xs">
                    Your password has been successfully reset. You can now sign in with your new credentials.
                </p>

                <Button onClick={() => onNavigate('login')} fullWidth>
                    Back to Sign In
                </Button>
            </div>
        )}
      </div>
    </MobileLayout>
  );
};
