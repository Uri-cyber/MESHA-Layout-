
import React, { useState } from 'react';
import { MobileLayout, Header, Button, Input } from '../components/Common';
import { ScreenName, FormField } from '../types';
import { GripVertical, Plus, Type, Hash, Calendar, Trash2, CheckSquare, AlignLeft, List } from 'lucide-react';

interface Props {
  onNavigate: (screen: ScreenName) => void;
}

export const FormBuilderScreen: React.FC<Props> = ({ onNavigate }) => {
  const [fields, setFields] = useState<FormField[]>([
      { id: '1', type: 'text', label: 'Damage Description', placeholder: 'Describe damage', required: true },
      { id: '2', type: 'date', label: 'Incident Date', required: true }
  ]);
  const [formTitle, setFormTitle] = useState('New Inspection Form');

  const addField = (type: FormField['type']) => {
      const newField: FormField = {
          id: Date.now().toString(),
          type,
          label: 'New Field',
          required: false,
          placeholder: 'Enter details'
      };
      setFields([...fields, newField]);
  };

  const removeField = (id: string) => {
      setFields(fields.filter(f => f.id !== id));
  };

  const updateField = (id: string, updates: Partial<FormField>) => {
      setFields(fields.map(f => f.id === id ? { ...f, ...updates } : f));
  };

  const getIcon = (type: string) => {
      switch(type) {
          case 'text': return <Type size={18} />;
          case 'number': return <Hash size={18} />;
          case 'date': return <Calendar size={18} />;
          case 'textarea': return <AlignLeft size={18} />;
          case 'select': return <List size={18} />;
          default: return <Type size={18} />;
      }
  };

  return (
    <MobileLayout>
      <Header 
        title="Form Builder" 
        showBack 
        onBack={() => onNavigate('admin-dashboard')} 
      />
      
      <div className="px-6 py-4 bg-stone-50 border-b border-stone-100 space-y-3">
        <input 
            value={formTitle}
            onChange={(e) => setFormTitle(e.target.value)}
            className="w-full bg-transparent text-xl font-extrabold text-stone-800 outline-none placeholder-stone-300"
            placeholder="Form Title"
        />
        <p className="text-xs text-stone-400 font-medium">Build a custom form for your users.</p>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
         {fields.map((field) => (
             <div key={field.id} className="p-4 bg-white border border-stone-200 rounded-xl shadow-sm animate-fade-in group">
                <div className="flex items-center gap-3 mb-3">
                    <GripVertical className="text-stone-300 cursor-move" size={20} />
                    <div className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center text-stone-500">
                        {getIcon(field.type)}
                    </div>
                    <input 
                        value={field.label}
                        onChange={(e) => updateField(field.id, { label: e.target.value })}
                        className="flex-1 font-bold text-sm text-stone-800 outline-none border-b border-transparent focus:border-brand-300"
                    />
                    <button onClick={() => removeField(field.id)} className="text-stone-300 hover:text-red-500 transition-colors">
                        <Trash2 size={18} />
                    </button>
                </div>
                
                <div className="pl-11 pr-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                         <button 
                            onClick={() => updateField(field.id, { required: !field.required })}
                            className={`text-xs font-bold px-2 py-1 rounded-md transition-colors ${field.required ? 'bg-brand-100 text-brand-700' : 'bg-stone-50 text-stone-400'}`}
                         >
                            Required
                         </button>
                    </div>
                    <span className="text-[10px] uppercase font-bold text-stone-300">{field.type} Input</span>
                </div>
             </div>
         ))}

         <div className="grid grid-cols-4 gap-2 pt-2">
            {[
                { type: 'text', label: 'Text', icon: Type },
                { type: 'number', label: 'Number', icon: Hash },
                { type: 'textarea', label: 'Long', icon: AlignLeft },
                { type: 'date', label: 'Date', icon: Calendar },
            ].map((item) => (
                <button 
                    key={item.type}
                    onClick={() => addField(item.type as any)}
                    className="flex flex-col items-center justify-center gap-1 p-3 bg-stone-50 border border-stone-200 rounded-xl hover:bg-brand-50 hover:border-brand-200 hover:text-brand-600 transition-all text-stone-500"
                >
                    <item.icon size={20} />
                    <span className="text-[10px] font-bold">{item.label}</span>
                </button>
            ))}
         </div>
      </div>

      <div className="p-6 border-t border-stone-100 bg-white">
        <Button onClick={() => onNavigate('admin-dashboard')}>Save Template</Button>
      </div>
    </MobileLayout>
  );
};
