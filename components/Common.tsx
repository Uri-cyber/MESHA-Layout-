
import React, { ReactNode } from 'react';
import { 
  ChevronLeft, Home, FileText, User, Clock, Loader2, MessageCircle, Users
} from 'lucide-react';
import { ScreenName } from '../types';

// --- Layout Wrapper ---
export const MobileLayout: React.FC<{ children: ReactNode; className?: string }> = ({ children, className = "" }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-0 sm:p-4 font-sans text-stone-800 bg-stone-200">
      <div className={`w-full max-w-[400px] h-[100dvh] sm:h-[844px] bg-stone-50 sm:rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col relative border-[8px] border-white ${className}`}>
        {children}
      </div>
    </div>
  );
};

// --- Buttons ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'soft' | 'danger';
  icon?: ReactNode;
  fullWidth?: boolean;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, variant = 'primary', className = "", icon, fullWidth = true, loading, ...props 
}) => {
  const baseStyles = `py-4 px-6 rounded-full font-bold text-[15px] transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.98] ${fullWidth ? 'w-full' : ''}`;
  
  const variants = {
    primary: "bg-brand-500 hover:bg-brand-600 text-white shadow-soft hover:shadow-lg hover:shadow-brand-500/20",
    secondary: "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50 shadow-sm",
    ghost: "bg-transparent text-brand-600 hover:bg-brand-50",
    outline: "border-2 border-brand-200 text-brand-600 hover:bg-brand-50",
    soft: "bg-brand-100 text-brand-700 hover:bg-brand-200",
    danger: "bg-red-50 text-red-600 hover:bg-red-100",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} disabled={loading} {...props}>
      {loading ? <Loader2 size={20} className="animate-spin" /> : icon && <span>{icon}</span>}
      {children}
    </button>
  );
};

// --- Cards ---
export const Card: React.FC<{ children: ReactNode; className?: string; onClick?: () => void }> = ({ children, className = "", onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`bg-white rounded-3xl p-6 shadow-soft border border-stone-100/50 transition-all duration-300 ${onClick ? 'cursor-pointer hover:shadow-md hover:-translate-y-0.5' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

// --- Navigation Bar ---
interface BottomNavProps {
  currentScreen: ScreenName;
  onNavigate: (screen: ScreenName) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, onNavigate }) => {
  const navItems = [
    { id: 'dashboard', icon: Home, label: 'Home' },
    { id: 'documents', icon: FileText, label: 'Docs' },
    { id: 'forum-feed', icon: MessageCircle, label: 'Community' },
    { id: 'contractors', icon: Users, label: 'Contractors' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="bg-white/90 backdrop-blur-md border-t border-stone-100 px-4 py-4 pb-8 flex justify-between items-center absolute bottom-0 left-0 right-0 z-50">
      {navItems.map((item) => {
        const isActive = currentScreen === item.id || 
          (item.id === 'documents' && ['document-upload', 'document-viewer'].includes(currentScreen as string)) ||
          (item.id === 'forum-feed' && ['forum-post'].includes(currentScreen as string)) ||
          (item.id === 'contractors' && ['contractor-detail'].includes(currentScreen as string));
        
        const Icon = item.icon;
        return (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id as ScreenName)}
            className={`relative flex flex-col items-center gap-1 transition-all duration-300 group flex-1 ${isActive ? 'text-brand-600 -translate-y-1' : 'text-stone-400 hover:text-stone-600'}`}
          >
            <div className={`p-2 rounded-2xl transition-colors ${isActive ? 'bg-brand-50' : 'bg-transparent group-hover:bg-stone-50'}`}>
               <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
            </div>
            {isActive && <div className="w-1 h-1 bg-brand-500 rounded-full absolute -bottom-1" />}
          </button>
        );
      })}
    </div>
  );
};

// --- Header ---
interface HeaderProps {
  title?: string;
  subtitle?: string;
  showBack?: boolean;
  onBack?: () => void;
  rightAction?: ReactNode;
  transparent?: boolean;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle, showBack, onBack, rightAction, transparent = false, className = "" }) => {
  return (
    <div className={`flex items-center justify-between px-6 py-6 z-40 transition-colors ${transparent ? 'bg-transparent' : 'bg-stone-50'} ${className}`}>
      <div className="flex items-center gap-3">
        {showBack && (
          <button 
            onClick={onBack} 
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-stone-100 text-stone-500 hover:bg-stone-50 hover:text-stone-800 transition-all shadow-sm"
          >
            <ChevronLeft size={22} />
          </button>
        )}
        <div className="flex flex-col">
          {title && <h1 className={`text-xl font-bold tracking-tight leading-none ${className.includes('text-white') ? 'text-white' : 'text-stone-800'}`}>{title}</h1>}
          {subtitle && <p className={`text-sm font-medium mt-1 ${className.includes('text-white') ? 'text-stone-300' : 'text-stone-500'}`}>{subtitle}</p>}
        </div>
      </div>
      {rightAction}
    </div>
  );
};

// --- Input ---
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: ReactNode;
}

export const Input: React.FC<InputProps> = ({ label, error, icon, className = "", ...props }) => {
  return (
    <div className="w-full space-y-2">
      {label && <label className="text-sm font-bold text-stone-600 ml-1">{label}</label>}
      <div className="relative group">
        {icon && <div className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-brand-500 transition-colors">{icon}</div>}
        <input 
          className={`w-full px-4 py-4 ${icon ? 'pl-12' : ''} bg-white border-2 border-stone-100 rounded-2xl text-stone-800 placeholder-stone-400 focus:border-brand-300 focus:ring-4 focus:ring-brand-50 outline-none transition-all duration-200 font-medium ${error ? 'border-red-200 focus:border-red-300 focus:ring-red-50' : ''} ${className}`}
          {...props}
        />
      </div>
      {error && <p className="text-xs text-red-500 font-medium ml-1">{error}</p>}
    </div>
  );
};

// --- Progress Ring (Sunrise Style) ---
export const ProgressRing: React.FC<{ percentage: number, size?: number, strokeWidth?: number, color?: string }> = ({ 
    percentage, size = 120, strokeWidth = 12, color = "text-brand-500" 
}) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
            <svg className="transform -rotate-90 w-full h-full">
                <circle
                    className="text-stone-100"
                    strokeWidth={strokeWidth}
                    stroke="currentColor"
                    fill="transparent"
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                />
                <circle
                    className={`${color} transition-all duration-1000 ease-out`}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                />
            </svg>
            <div className="absolute flex flex-col items-center">
                <span className="text-3xl font-extrabold text-stone-800">{percentage}%</span>
            </div>
        </div>
    );
};

// --- Badge ---
export const Badge: React.FC<{ label: string; variant?: 'brand' | 'success' | 'neutral' | 'warning' | 'danger'; className?: string }> = ({ label, variant = 'neutral', className = "" }) => {
    const styles = {
        brand: "bg-brand-100 text-brand-700",
        success: "bg-emerald-100 text-emerald-700",
        neutral: "bg-stone-100 text-stone-600",
        warning: "bg-amber-100 text-amber-700",
        danger: "bg-red-100 text-red-700",
    };
    return (
        <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide ${styles[variant]} ${className}`}>
            {label}
        </span>
    );
};

// --- ProgressBar ---
export const ProgressBar: React.FC<{ progress: number; className?: string }> = ({ progress, className = "" }) => {
    return (
        <div className={`h-2 bg-stone-100 rounded-full overflow-hidden ${className}`}>
            <div 
                className="h-full bg-brand-500 transition-all duration-500 ease-out" 
                style={{ width: `${Math.min(Math.max(progress, 0), 100)}%` }}
            />
        </div>
    );
};

// --- Tabs ---
export const Tabs: React.FC<{ tabs: string[]; activeTab: string; onTabChange: (tab: string) => void; className?: string }> = ({ tabs, activeTab, onTabChange, className = "" }) => {
    return (
        <div className={`flex space-x-1 bg-stone-100 p-1 rounded-xl ${className}`}>
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => onTabChange(tab)}
                    className={`flex-1 py-2 px-4 rounded-lg text-sm font-bold transition-all duration-200 ${
                        activeTab === tab 
                        ? 'bg-white text-stone-800 shadow-sm' 
                        : 'text-stone-500 hover:text-stone-600'
                    }`}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
};
