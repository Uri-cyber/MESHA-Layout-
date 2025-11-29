
import React, { useState } from 'react';
import { MobileLayout, BottomNav, Header, Card, Badge, Button } from '../components/Common';
import { ScreenName } from '../types';
import { Search, Filter, Grid, List, Plus, FileText, Image, Trash2, Eye, ClipboardList, ChevronRight } from 'lucide-react';

interface Props {
  onNavigate: (screen: ScreenName) => void;
}

export const DocumentsScreen: React.FC<Props> = ({ onNavigate }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');

  const docs = [
    { id: 1, title: 'Kitchen Damage', type: 'Photo', size: '2.4 MB', date: 'Oct 12', color: 'bg-blue-100 text-blue-600' },
    { id: 2, title: 'Policy Declaration', type: 'PDF', size: '1.1 MB', date: 'Oct 10', color: 'bg-red-100 text-red-600' },
    { id: 3, title: 'Roof Estimate', type: 'Spreadsheet', size: '45 KB', date: 'Oct 15', color: 'bg-green-100 text-green-600' },
  ];

  return (
    <MobileLayout>
      <Header 
        title="Documents" 
        rightAction={
            <button className="p-2 bg-white/10 rounded-full text-white hover:bg-white/20">
                <Filter size={20} />
            </button>
        }
      />

      <div className="p-4 bg-white border-b border-gray-200 space-y-4">
         <div className="relative">
            <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
                type="text" 
                placeholder="Search documents..." 
                className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-transparent rounded-lg focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
            />
         </div>
         <div className="flex justify-between items-center">
            <div className="flex gap-2">
                <Badge label="All" variant="brand" />
                <Badge label="Photos" variant="neutral" />
                <Badge label="Forms" variant="neutral" />
            </div>
            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button 
                    onClick={() => setViewMode('grid')}
                    className={`p-1.5 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
                >
                    <Grid size={18} />
                </button>
                <button 
                    onClick={() => setViewMode('list')}
                    className={`p-1.5 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
                >
                    <List size={18} />
                </button>
            </div>
         </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 pb-24">
         {/* Required Forms Section */}
         <div className="mb-6">
            <div className="flex items-center gap-2 mb-3 px-1">
                <ClipboardList size={16} className="text-brand-500" />
                <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider">Required Forms</h3>
            </div>
            <div 
                onClick={() => onNavigate('user-form')}
                className="bg-brand-50 border border-brand-100 p-4 rounded-2xl flex items-center justify-between cursor-pointer hover:bg-brand-100 transition-colors group"
            >
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-brand-500 shadow-sm">
                        <FileText size={20} />
                    </div>
                    <div>
                        <p className="font-bold text-brand-900 text-sm">Personal Property Inventory</p>
                        <p className="text-xs text-brand-700">Due: Oct 28 • Not Started</p>
                    </div>
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-brand-400 group-hover:translate-x-1 transition-transform">
                    <ChevronRight size={18} />
                </div>
            </div>
         </div>

         <div className="flex items-center gap-2 mb-3 px-1">
            <FileText size={16} className="text-stone-400" />
            <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider">My Files</h3>
         </div>

         <div className={`grid gap-4 ${viewMode === 'grid' ? 'grid-cols-2' : 'grid-cols-1'}`}>
            {docs.map((doc) => (
                <Card key={doc.id} className="!p-4 hover:border-blue-400 cursor-pointer group" onClick={() => onNavigate('document-viewer')}>
                    <div className={`${viewMode === 'grid' ? 'flex flex-col' : 'flex items-center gap-4'}`}>
                        <div className={`rounded-lg flex items-center justify-center ${viewMode === 'grid' ? 'w-full h-32 mb-3' : 'w-12 h-12 shrink-0'} ${doc.color}`}>
                             {doc.type === 'Photo' ? <Image size={viewMode === 'grid' ? 32 : 20} /> : <FileText size={viewMode === 'grid' ? 32 : 20} />}
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start">
                                <h4 className="font-semibold text-gray-900 truncate">{doc.title}</h4>
                                {viewMode === 'list' && <span className="text-xs text-gray-500">{doc.date}</span>}
                            </div>
                            <p className="text-xs text-gray-500">{doc.type} • {doc.size}</p>
                        </div>
                        {viewMode === 'list' && (
                            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="p-2 hover:bg-blue-50 rounded text-blue-600"><Eye size={18}/></button>
                                <button className="p-2 hover:bg-red-50 rounded text-red-600"><Trash2 size={18}/></button>
                            </div>
                        )}
                    </div>
                </Card>
            ))}
         </div>
         
         <div className="mt-6">
            <Button onClick={() => onNavigate('document-upload')} icon={<Plus size={20} />}>Upload New Document</Button>
         </div>
      </div>

      <BottomNav currentScreen="documents" onNavigate={onNavigate} />
    </MobileLayout>
  );
};
