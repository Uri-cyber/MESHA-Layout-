
import React, { useState } from 'react';
import { MobileLayout, Header, Tabs, Card, Badge, ProgressBar, Button } from '../components/Common';
import { ScreenName, Deadline, Contractor } from '../types';
import { 
  CheckCircle, Circle, FileText, Building, Phone, Mail, Plus,
  AlertCircle, Clock, Shield, Star, MapPin, ShieldCheck
} from 'lucide-react';

interface Props {
  onNavigate: (screen: ScreenName) => void;
}

export const ClaimDetailScreen: React.FC<Props> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('Overview');
  const phases = [1, 2, 3, 4, 5, 6, 7, 8];
  const currentPhase = 3;

  // Mock Data
  const deadlines: Deadline[] = [
      { id: '1', title: 'Submit Photos to Adjuster', dueDate: 'In 2 days', priority: 'high', isCompleted: false },
      { id: '2', title: 'Sign Contractor Agreement', dueDate: 'Oct 25', priority: 'medium', isCompleted: false },
      { id: '3', title: 'Review Policy', dueDate: 'Oct 10', priority: 'low', isCompleted: true },
  ];

  const contractors: Contractor[] = [
      { id: '1', name: "Mike's Roofing", specialty: 'Roofing & Siding', phone: '(555) 123-4567', email: 'mike@example.com', status: 'selected', rating: 4.8, bidAmount: 12500, licenseNumber: 'LIC-99283' },
      { id: '2', name: "Elite Restoration", specialty: 'General', phone: '(555) 987-6543', email: 'elite@example.com', status: 'pending', rating: 4.5, bidAmount: 14200 }
  ];

  const renderOverview = () => (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Financial Summary */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="!p-5">
          <p className="text-xs font-bold text-stone-400 uppercase mb-1">Est. Damage</p>
          <p className="text-xl font-extrabold text-stone-800">$45,000</p>
        </Card>
        <Card className="!p-5">
           <p className="text-xs font-bold text-stone-400 uppercase mb-1">Approved</p>
           <p className="text-xl font-extrabold text-emerald-600">$38,000</p>
        </Card>
      </div>

      {/* Current Phase Tasks */}
      <Card>
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-stone-800">Phase 3 Tasks</h3>
            <span className="text-xs font-bold text-stone-400">50% Done</span>
        </div>
        <div className="space-y-3">
          {[
            { id: 1, title: "File First Notice of Loss", done: true },
            { id: 2, title: "Submit initial documentation", done: true },
            { id: 3, title: "Schedule adjuster visit", done: false },
            { id: 4, title: "Confirm claim receipt", done: false },
          ].map((task) => (
            <div key={task.id} className="flex items-center p-3 rounded-xl bg-stone-50 border border-stone-100 transition-colors">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${task.done ? 'bg-emerald-500 text-white' : 'border-2 border-stone-300'}`}>
                {task.done && <CheckCircle size={14} strokeWidth={3} />}
              </div>
              <span className={`text-sm ${task.done ? 'text-stone-400 line-through font-medium' : 'text-stone-700 font-bold'}`}>{task.title}</span>
            </div>
          ))}
        </div>
        <div className="mt-6">
            <ProgressBar progress={50} />
        </div>
      </Card>
    </div>
  );

  return (
    <MobileLayout>
      <Header 
        title="123 Maple Ave" 
        subtitle="Miami, FL" 
        showBack 
        onBack={() => onNavigate('dashboard')}
        rightAction={<Badge label="Active" variant="success" />}
      />

      <div className="bg-white border-b border-stone-100 px-6 py-4">
         <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-4">Recovery Timeline</p>
         <div className="relative flex justify-between items-center px-2">
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-stone-100 -z-0 rounded-full"></div>
            <div className="absolute left-0 top-1/2 h-1 bg-brand-500 -z-0 rounded-full transition-all duration-1000" style={{ width: '35%' }}></div>
            
            {phases.map((p) => {
                const isCompleted = p < currentPhase;
                const isCurrent = p === currentPhase;
                return (
                    <div key={p} className="relative z-10 flex flex-col items-center gap-1">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center border-[3px] transition-all ${
                            isCompleted ? 'bg-brand-500 border-brand-500' : 
                            isCurrent ? 'bg-white border-brand-500 ring-4 ring-brand-100 scale-125' : 
                            'bg-white border-stone-200'
                        }`}>
                            {isCompleted && <CheckCircle size={10} className="text-white" strokeWidth={4} />}
                            {isCurrent && <div className="w-1.5 h-1.5 bg-brand-500 rounded-full" />}
                        </div>
                        {isCurrent && <span className="absolute -bottom-6 text-[10px] font-bold text-brand-600 bg-brand-50 px-2 py-0.5 rounded-full whitespace-nowrap">Phase {p}</span>}
                    </div>
                );
            })}
         </div>
         <div className="mt-8"></div>
      </div>

      <div className="px-2 pt-2">
        <Tabs 
            tabs={['Overview', 'Documents', 'Deadlines', 'Insurance', 'Contractors']} 
            activeTab={activeTab} 
            onTabChange={setActiveTab} 
            className="mx-4 overflow-x-auto"
        />
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6 pb-24">
        {activeTab === 'Overview' && renderOverview()}
        
        {activeTab === 'Documents' && (
            <div className="flex flex-col items-center text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center text-stone-400">
                    <FileText size={32} />
                </div>
                <div>
                    <p className="text-stone-800 font-bold text-lg">Manage Documents</p>
                    <p className="text-stone-500 text-sm">Keep everything safe in one place.</p>
                </div>
                <Button variant="secondary" onClick={() => onNavigate('documents')}>View All Documents</Button>
            </div>
        )}

        {activeTab === 'Deadlines' && (
            <div className="space-y-4 animate-in fade-in">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-stone-800">Upcoming Tasks</h3>
                    <button onClick={() => onNavigate('add-deadline')} className="text-brand-600 text-sm font-bold flex items-center gap-1"><Plus size={16}/> Add</button>
                </div>
                {deadlines.map(task => (
                    <div key={task.id} className={`p-4 rounded-2xl border flex items-start gap-3 ${task.isCompleted ? 'bg-stone-50 border-stone-100 opacity-60' : 'bg-white border-stone-200'}`}>
                        <div className={`mt-1 ${task.priority === 'high' || task.priority === 'critical' ? 'text-red-500' : 'text-stone-400'}`}>
                            {task.priority === 'high' ? <AlertCircle size={20}/> : <Circle size={20}/>}
                        </div>
                        <div className="flex-1">
                            <h4 className={`font-bold text-sm ${task.isCompleted ? 'line-through text-stone-500' : 'text-stone-800'}`}>{task.title}</h4>
                            {!task.isCompleted && (
                                <div className="flex items-center gap-2 mt-2">
                                    <span className={`text-xs font-bold px-2 py-0.5 rounded-md uppercase ${
                                        task.priority === 'high' ? 'bg-red-100 text-red-700' : 
                                        task.priority === 'medium' ? 'bg-brand-100 text-brand-700' : 
                                        'bg-stone-100 text-stone-500'
                                    }`}>
                                        {task.priority}
                                    </span>
                                    <span className="text-xs text-stone-500 font-medium flex items-center gap-1"><Clock size={12}/> Due: {task.dueDate}</span>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        )}
        
        {activeTab === 'Insurance' && (
             <Card>
                <div className="flex justify-between items-start mb-6">
                    <h3 className="text-lg font-bold text-stone-800">Policy Details</h3>
                    <Button variant="ghost" className="!p-2 h-8 text-xs">Edit</Button>
                </div>
                <div className="space-y-4">
                    <div className="p-4 bg-stone-50 rounded-xl flex items-center gap-3">
                        <Building size={24} className="text-brand-500" />
                        <div>
                            <p className="text-xs text-stone-400 font-bold uppercase">Provider</p>
                            <p className="font-bold text-stone-800">State Farm</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 border border-stone-100 rounded-xl">
                            <p className="text-xs text-stone-400 font-bold uppercase mb-1">Policy #</p>
                            <p className="font-bold text-stone-800 text-sm">SF-123456789</p>
                        </div>
                        <div className="p-3 border border-stone-100 rounded-xl">
                             <p className="text-xs text-stone-400 font-bold uppercase mb-1">Claim #</p>
                            <p className="font-bold text-stone-800 text-sm">CLM-2024-001</p>
                        </div>
                    </div>
                    <div className="pt-4 border-t border-stone-100">
                        <p className="text-xs font-bold text-stone-400 uppercase mb-3">Adjuster Information</p>
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center text-stone-500 font-bold">JS</div>
                            <div>
                                <p className="font-bold text-stone-800">John Smith</p>
                                <p className="text-xs text-stone-400">Senior Adjuster</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                             <button className="flex-1 py-2 bg-stone-50 rounded-lg text-sm font-bold text-stone-600 flex items-center justify-center gap-2 hover:bg-stone-100"><Phone size={16}/> Call</button>
                             <button className="flex-1 py-2 bg-stone-50 rounded-lg text-sm font-bold text-stone-600 flex items-center justify-center gap-2 hover:bg-stone-100"><Mail size={16}/> Email</button>
                        </div>
                    </div>
                </div>
             </Card>
        )}

        {activeTab === 'Contractors' && (
            <div className="space-y-4 animate-in fade-in">
                 <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-stone-800">Contractor Bids</h3>
                    <button className="text-brand-600 text-sm font-bold flex items-center gap-1" onClick={() => onNavigate('contractor-detail')}><Plus size={16}/> Add Bid</button>
                </div>
                {contractors.map(contractor => (
                    <Card key={contractor.id} className="!p-4">
                         <div className="flex justify-between items-start mb-2">
                            <div>
                                <h4 className="font-bold text-stone-800">{contractor.name}</h4>
                                <p className="text-xs text-stone-500">{contractor.specialty}</p>
                            </div>
                            <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                                <Star size={14} fill="currentColor" /> {contractor.rating}
                            </div>
                         </div>
                         <div className="flex gap-2 mb-4">
                            {contractor.licenseNumber && (
                                <span className="px-2 py-0.5 bg-stone-100 text-stone-500 text-[10px] font-bold uppercase rounded flex items-center gap-1">
                                    <ShieldCheck size={10}/> Lic: {contractor.licenseNumber}
                                </span>
                            )}
                             <Badge 
                                label={contractor.status} 
                                variant={contractor.status === 'selected' ? 'success' : 'neutral'} 
                            />
                         </div>
                         <div className="flex items-center justify-between pt-3 border-t border-stone-100">
                            <div>
                                <p className="text-[10px] text-stone-400 font-bold uppercase">Bid Amount</p>
                                <p className="text-lg font-bold text-stone-800">${contractor.bidAmount?.toLocaleString()}</p>
                            </div>
                            <div className="flex gap-2">
                                <button className="w-9 h-9 rounded-full bg-stone-50 flex items-center justify-center text-stone-600"><Phone size={18}/></button>
                                <button className="w-9 h-9 rounded-full bg-brand-50 flex items-center justify-center text-brand-600"><Mail size={18}/></button>
                            </div>
                         </div>
                    </Card>
                ))}
            </div>
        )}
      </div>
    </MobileLayout>
  );
};
