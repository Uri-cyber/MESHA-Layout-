
import React, { useState } from 'react';
import { MobileLayout, Header, Button, Input } from '../components/Common';
import { ScreenName, FormTemplate } from '../types';
import { CheckCircle2, AlertCircle } from 'lucide-react';

interface Props {
  onNavigate: (screen: ScreenName) => void;
}

// Mock Template that would come from the Admin Builder
const MOCK_INVENTORY_FORM: FormTemplate = {
    id: '1',
    title: 'Personal Property Inventory',
    description: 'List items damaged in the specific room. Be as detailed as possible.',
    status: 'active',
    fields: [
        { id: 'f1', type: 'text', label: 'Room Name', placeholder: 'e.g. Master Bedroom', required: true },
        { id: 'f2', type: 'date', label: 'Date Purchased', required: false },
        { id: 'f3', type: 'text', label: 'Item Description', placeholder: 'Brand, Model, Color', required: true },
        { id: 'f4', type: 'number', label: 'Original Cost ($)', placeholder: '0.00', required: true },
        { id: 'f5', type: 'select', label: 'Condition', options: ['New', 'Good', 'Fair', 'Poor'], required: true },
        { id: 'f6', type: 'textarea', label: 'Damage Details', placeholder: 'Describe the specific damage...', required: false },
    ]
};

export const UserFormScreen: React.FC<Props> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (fieldId: string, value: any) => {
      setFormData(prev => ({ ...prev, [fieldId]: value }));
  };

  const handleSubmit = () => {
      // Basic validation check
      const missingRequired = MOCK_INVENTORY_FORM.fields.filter(f => f.required && !formData[f.id]);
      if (missingRequired.length > 0) {
          alert(`Please fill out: ${missingRequired.map(f => f.label).join(', ')}`);
          return;
      }

      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
          setIsSubmitting(false);
          setShowSuccess(true);
      }, 1000);
  };

  if (showSuccess) {
      return (
          <MobileLayout className="bg-white">
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center animate-fade-in">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-soft">
                      <CheckCircle2 size={40} />
                  </div>
                  <h2 className="text-2xl font-extrabold text-stone-800 mb-2">Form Submitted</h2>
                  <p className="text-stone-500 font-medium mb-8">
                      Your inventory list has been saved to your documents.
                  </p>
                  <Button onClick={() => onNavigate('documents')}>Return to Documents</Button>
              </div>
          </MobileLayout>
      );
  }

  return (
    <MobileLayout className="bg-white">
      <Header 
        title={MOCK_INVENTORY_FORM.title} 
        showBack 
        onBack={() => onNavigate('documents')} 
      />
      
      <div className="flex-1 overflow-y-auto px-6 py-6 pb-24">
        <div className="bg-brand-50 border border-brand-100 p-4 rounded-2xl mb-6 flex gap-3">
            <div className="text-brand-600 mt-0.5"><AlertCircle size={20}/></div>
            <p className="text-sm text-brand-800 font-medium leading-relaxed">
                {MOCK_INVENTORY_FORM.description}
            </p>
        </div>

        <div className="space-y-6">
            {MOCK_INVENTORY_FORM.fields.map((field) => (
                <div key={field.id} className="animate-slide-up">
                    {field.type === 'textarea' ? (
                        <div className="space-y-2">
                             <label className="text-sm font-bold text-stone-600 ml-1">
                                {field.label} {field.required && <span className="text-red-400">*</span>}
                             </label>
                             <textarea 
                                className="w-full px-4 py-4 bg-white border-2 border-stone-100 rounded-2xl text-stone-800 focus:border-brand-300 focus:ring-4 focus:ring-brand-50 outline-none font-medium resize-none"
                                rows={4}
                                placeholder={field.placeholder}
                                value={formData[field.id] || ''}
                                onChange={(e) => handleInputChange(field.id, e.target.value)}
                             />
                        </div>
                    ) : field.type === 'select' ? (
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-stone-600 ml-1">
                                {field.label} {field.required && <span className="text-red-400">*</span>}
                            </label>
                            <div className="relative">
                                <select 
                                    className="w-full px-4 py-4 bg-white border-2 border-stone-100 rounded-2xl text-stone-800 outline-none font-medium appearance-none"
                                    value={formData[field.id] || ''}
                                    onChange={(e) => handleInputChange(field.id, e.target.value)}
                                >
                                    <option value="">Select an option...</option>
                                    {field.options?.map(opt => (
                                        <option key={opt} value={opt}>{opt}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    ) : (
                        <Input 
                            label={`${field.label} ${field.required ? '*' : ''}`}
                            type={field.type}
                            placeholder={field.placeholder}
                            value={formData[field.id] || ''}
                            onChange={(e) => handleInputChange(field.id, e.target.value)}
                        />
                    )}
                </div>
            ))}
        </div>
      </div>

      <div className="p-6 border-t border-stone-100 bg-white">
        <Button onClick={handleSubmit} loading={isSubmitting}>
            Submit Form
        </Button>
      </div>
    </MobileLayout>
  );
};
