import React from 'react';
import { MobileLayout, Header } from '../components/Common';
import { ScreenName } from '../types';

interface Props {
  onNavigate: (screen: ScreenName) => void;
}

export const FormSubmissionScreen: React.FC<Props> = ({ onNavigate }) => {
  return (
    <MobileLayout>
      <Header title="Submission #123" showBack onBack={() => onNavigate('admin-dashboard')} />
      <div className="flex-1 px-6 pt-4">
        <div className="bg-stone-50 p-4 rounded-xl mb-4">
            <p className="text-xs font-bold text-stone-400 uppercase">Submitted By</p>
            <p className="font-bold text-stone-800">Sarah Johnson</p>
        </div>
        {/* Form Content Preview */}
      </div>
    </MobileLayout>
  );
};