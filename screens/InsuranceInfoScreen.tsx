import React from 'react';
import { MobileLayout, Header, Card, Button } from '../components/Common';
import { ScreenName } from '../types';
import { Shield, Phone, Mail, Calendar, Building, Edit } from 'lucide-react';

interface Props {
  onNavigate: (screen: ScreenName) => void;
}

export const InsuranceInfoScreen: React.FC<Props> = ({ onNavigate }) => {
  return (
    <MobileLayout>
      <Header 
        title="Insurance Information" 
        showBack 
        onBack={() => onNavigate('claim-detail')}
        rightAction={<Button variant="ghost" className="!text-white !p-0">Edit</Button>}
      />

      <div className="flex-1 px-6 py-6 overflow-y-auto space-y-6">
        {/* Company Details */}
        <Card>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Company Details</h3>
            <div className="space-y-4">
                <div>
                    <p className="text-xs text-gray-400 mb-1">Insurance Company</p>
                    <div className="flex items-center gap-2">
                        <Building size={18} className="text-blue-600" />
                        <p className="text-base font-medium text-navy-900">State Farm</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Policy Number</p>
                        <p className="font-medium text-navy-900">SF-993822</p>
                    </div>
                    <div>
                         <p className="text-xs text-gray-400 mb-1">Claim Number</p>
                        <p className="font-medium text-navy-900">CLM-2024-001</p>
                    </div>
                </div>
            </div>
        </Card>

        {/* Adjuster Info */}
        <Card>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Adjuster Information</h3>
             <div className="space-y-4">
                <div>
                    <p className="text-xs text-gray-400 mb-1">Name</p>
                    <p className="font-medium text-navy-900">John Smith</p>
                </div>
                <div className="space-y-3">
                    <a href="#" className="flex items-center gap-3 text-blue-600 hover:text-blue-700 p-3 bg-blue-50 rounded-lg">
                        <Phone size={18} />
                        <span className="font-medium">(555) 123-4567</span>
                    </a>
                     <a href="#" className="flex items-center gap-3 text-blue-600 hover:text-blue-700 p-3 bg-blue-50 rounded-lg">
                        <Mail size={18} />
                        <span className="font-medium">j.smith@statefarm.com</span>
                    </a>
                </div>
             </div>
        </Card>

        {/* Settlement Status */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
             <h3 className="text-sm font-semibold text-green-800 uppercase tracking-wider mb-3">Settlement Status</h3>
             <div className="flex justify-between items-end">
                <div>
                    <p className="text-xs text-green-600 mb-1">Approved Amount</p>
                    <p className="text-3xl font-bold text-green-700">$38,000</p>
                </div>
                <span className="px-3 py-1 bg-green-200 text-green-800 rounded-full text-xs font-bold uppercase">Approved</span>
             </div>
        </div>
      </div>
    </MobileLayout>
  );
};