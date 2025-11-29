
import React, { useState } from 'react';
import { MobileLayout, Button, Header, Input } from '../components/Common';
import { ScreenName } from '../types';
import { HeartHandshake, Lock, AlertCircle } from 'lucide-react';

interface Props {
  onNavigate: (screen: ScreenName) => void;
}

export const RegisterScreen: React.FC<Props> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (error) setError('');
  };

  const handleRegister = () => {
    if (!formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all required fields.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match. Please try again.');
      return;
    }

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    // Proceed to onboarding
    onNavigate('onboarding');
  };

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
             <Input 
                label="First Name" 
                placeholder="Jane" 
                value={formData.firstName}
                onChange={(e) => handleChange('firstName', e.target.value)}
             />
             <Input 
                label="Last Name" 
                placeholder="Doe"
                value={formData.lastName}
                onChange={(e) => handleChange('lastName', e.target.value)}
             />
          </div>
          
          <Input 
            label="Phone" 
            type="tel" 
            placeholder="(555) 123-4567"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
          />
          
          <Input 
            label="Email Address" 
            type="email" 
            placeholder="jane@example.com"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
          />

          <div className="space-y-4 pt-2">
            <Input 
              label="Password" 
              type="password" 
              icon={<Lock size={20}/>}
              placeholder="Min. 8 characters"
              value={formData.password}
              onChange={(e) => handleChange('password', e.target.value)}
              className={error && formData.password !== formData.confirmPassword ? 'border-red-300 bg-red-50' : ''}
            />
            
            <Input 
              label="Confirm Password" 
              type="password" 
              icon={<Lock size={20}/>}
              placeholder="Re-type password"
              value={formData.confirmPassword}
              onChange={(e) => handleChange('confirmPassword', e.target.value)}
              className={error && formData.password !== formData.confirmPassword ? 'border-red-300 bg-red-50' : ''}
            />
          </div>

          {error && (
            <div className="flex items-center gap-2 text-red-500 bg-red-50 p-3 rounded-xl text-sm font-bold animate-fade-in">
              <AlertCircle size={18} />
              {error}
            </div>
          )}

          <div className="flex items-start gap-3 py-2">
            <input type="checkbox" className="mt-1 w-5 h-5 rounded border-stone-300 text-brand-500 focus:ring-brand-500" />
            <p className="text-xs text-stone-500">
              I agree to the <span className="font-bold text-stone-700">Terms of Service</span> and <span className="font-bold text-stone-700">Privacy Policy</span>.
            </p>
          </div>

          <Button onClick={handleRegister}>
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
