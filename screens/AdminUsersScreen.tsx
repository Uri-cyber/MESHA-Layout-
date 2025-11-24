import React from 'react';
import { MobileLayout, Header, Badge } from '../components/Common';
import { ScreenName } from '../types';
import { Search } from 'lucide-react';

interface Props {
  onNavigate: (screen: ScreenName) => void;
}

export const AdminUsersScreen: React.FC<Props> = ({ onNavigate }) => {
  return (
    <MobileLayout>
      <Header title="Users" showBack onBack={() => onNavigate('admin-dashboard')} />
      <div className="px-6 mb-4">
         <div className="flex items-center gap-2 bg-stone-100 p-3 rounded-xl">
            <Search size={18} className="text-stone-400"/>
            <input type="text" placeholder="Search users..." className="bg-transparent outline-none flex-1" />
         </div>
      </div>
      <div className="flex-1 px-6 overflow-y-auto space-y-3">
        <div className="p-4 bg-white rounded-2xl border border-stone-100 flex items-center justify-between">
            <div>
                <p className="font-bold text-stone-800">Sarah Johnson</p>
                <p className="text-xs text-stone-400">sarah.j@example.com</p>
            </div>
            <Badge label="Active" variant="success" />
        </div>
      </div>
    </MobileLayout>
  );
};