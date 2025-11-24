import React from 'react';
import { MobileLayout, Header, Tabs } from '../components/Common';
import { ScreenName } from '../types';
import { Bell, Clock, FileText } from 'lucide-react';

interface Props {
  onNavigate: (screen: ScreenName) => void;
}

export const NotificationsScreen: React.FC<Props> = ({ onNavigate }) => {
  return (
    <MobileLayout>
      <Header title="Notifications" showBack onBack={() => onNavigate('dashboard')} />
      <div className="px-6 mb-4"><Tabs tabs={['All', 'Alerts', 'Updates']} activeTab='All' onTabChange={()=>{}} /></div>
      <div className="flex-1 px-6 overflow-y-auto space-y-2">
        <div className="p-4 bg-white rounded-2xl border border-stone-100 flex gap-3 relative">
            <div className="w-2 h-2 bg-rose-500 rounded-full absolute top-4 right-4"></div>
            <div className="w-10 h-10 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center shrink-0"><Clock size={20}/></div>
            <div>
                <p className="font-bold text-stone-800 text-sm">Photo Deadline Approaching</p>
                <p className="text-xs text-stone-500">2 hours ago</p>
            </div>
        </div>
      </div>
    </MobileLayout>
  );
};