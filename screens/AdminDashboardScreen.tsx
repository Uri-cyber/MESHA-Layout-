import React from 'react';
import { MobileLayout, Header, Button, Card } from '../components/Common';
import { ScreenName } from '../types';
import { Users, FileText, Activity } from 'lucide-react';

interface Props {
  onNavigate: (screen: ScreenName) => void;
}

export const AdminDashboardScreen: React.FC<Props> = ({ onNavigate }) => {
  return (
    <MobileLayout>
      <Header title="Admin" showBack onBack={() => onNavigate('dashboard')} />
      
      <div className="flex-1 overflow-y-auto px-6 pb-6 space-y-6">
        <div className="grid grid-cols-2 gap-4">
             <Card className="!p-4 flex flex-col items-center justify-center text-center">
                <Users size={24} className="text-brand-500 mb-2" />
                <span className="text-2xl font-bold text-stone-800">1,284</span>
                <span className="text-xs text-stone-400 uppercase font-bold">Users</span>
             </Card>
             <Card className="!p-4 flex flex-col items-center justify-center text-center">
                <FileText size={24} className="text-emerald-500 mb-2" />
                <span className="text-2xl font-bold text-stone-800">842</span>
                <span className="text-xs text-stone-400 uppercase font-bold">Claims</span>
             </Card>
        </div>

        <div>
            <h3 className="font-bold text-stone-800 mb-3">Quick Actions</h3>
            <div className="space-y-3">
                <Button variant="secondary" onClick={() => onNavigate('admin-users')}>Manage Users</Button>
                <Button variant="secondary" onClick={() => onNavigate('form-builder')}>Form Builder</Button>
                <Button variant="secondary" onClick={() => onNavigate('form-submission')}>View Submissions</Button>
            </div>
        </div>
      </div>
    </MobileLayout>
  );
};