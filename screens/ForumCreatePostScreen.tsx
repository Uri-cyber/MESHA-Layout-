
import React, { useState } from 'react';
import { MobileLayout, Header, Input } from '../components/Common';
import { ScreenName, ForumPost } from '../types';
import { UserCircle2, AlertCircle, Sparkles, Loader2, Wand2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface Props {
  onNavigate: (screen: ScreenName) => void;
  onSubmit: (post: ForumPost) => void;
}

export const ForumCreatePostScreen: React.FC<Props> = ({ onNavigate, onSubmit }) => {
  const [selectedCategory, setSelectedCategory] = useState<ForumPost['category']>('General');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [isRefining, setIsRefining] = useState(false);
  const [isGeneratingTitle, setIsGeneratingTitle] = useState(false);

  const categories: ForumPost['category'][] = ['Support', 'Insurance', 'Repairs', 'General'];

  const handleRefineWithAI = async () => {
    if (!content.trim()) {
        setError("Please write some content first to polish.");
        return;
    }
    
    setIsRefining(true);
    setError('');

    try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: content,
            config: {
                systemInstruction: "You are an empathetic, professional editor for a home damage recovery community forum. Rewrite the user's draft to be clearer, warmer, and more grammatically correct while preserving their original voice and details. Do not add conversational filler like 'Here is the rewritten text'. Just output the refined content.",
            }
        });

        if (response.text) {
            setContent(response.text.trim());
        }
    } catch (e) {
        console.error("AI Refine Error:", e);
        setError("Couldn't connect to AI assistance. Please try again.");
    } finally {
        setIsRefining(false);
    }
  };

  const handleGenerateTitle = async () => {
    if (!content.trim()) {
        setError("Please write some content so we can generate a title.");
        return;
    }

    setIsGeneratingTitle(true);
    setError('');

    try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `Based on this forum post content, generate a short, clear, and engaging title (max 10 words). Content: ${content}`,
        });

        if (response.text) {
            // Remove quotes if the model adds them
            setTitle(response.text.replace(/^"|"$/g, '').trim());
        }
    } catch (e) {
        console.error("AI Title Error:", e);
        setError("Couldn't generate title.");
    } finally {
        setIsGeneratingTitle(false);
    }
  };

  const handleSubmit = () => {
      if (!title.trim() || !content.trim()) {
          setError('Please fill out both the title and content.');
          return;
      }

      const newPost: ForumPost = {
          id: Date.now().toString(), // Simple ID generation
          author: 'Sarah Johnson', // Mock current user
          phaseTag: 'Phase 3', // Mock current phase
          title: title,
          content: content,
          likes: 0,
          comments: 0,
          timeAgo: 'Just now',
          category: selectedCategory
      };

      onSubmit(newPost);
  };

  return (
    <MobileLayout>
      <Header 
        title="New Discussion" 
        showBack 
        onBack={() => onNavigate('forum-feed')}
        rightAction={
            <button 
                onClick={handleSubmit}
                className={`px-4 py-2 rounded-full text-sm font-bold shadow-soft transition-all ${
                    title && content 
                    ? 'bg-brand-500 text-white hover:bg-brand-600 active:scale-95' 
                    : 'bg-stone-200 text-stone-400 cursor-not-allowed'
                }`}
                disabled={!title || !content}
            >
                Post
            </button>
        }
      />
      
      <div className="flex-1 overflow-y-auto px-6 pt-2 pb-8">
        {/* User Context */}
        <div className="flex items-center gap-2 mb-6 px-1">
            <UserCircle2 className="text-stone-400" size={20} />
            <span className="text-xs font-bold text-stone-400">Posting as <span className="text-stone-600">Sarah Johnson</span></span>
        </div>

        <div className="space-y-6 animate-fade-in">
            {error && (
                <div className="p-3 bg-red-50 text-red-600 text-xs font-bold rounded-xl flex items-center gap-2">
                    <AlertCircle size={16} /> {error}
                </div>
            )}

            {/* Category Selection */}
            <div className="space-y-2">
                <label className="text-xs font-bold text-stone-400 uppercase tracking-wider ml-1">Select Category</label>
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-2 px-2">
                    {categories.map(cat => (
                        <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2.5 rounded-xl font-bold text-sm whitespace-nowrap transition-all border ${
                            selectedCategory === cat
                            ? 'bg-stone-800 text-white border-stone-800 shadow-md'
                            : 'bg-white text-stone-500 border-stone-100 hover:border-stone-300'
                        }`}
                        >
                        {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Title */}
            <div className="relative">
                <Input 
                    label="Title" 
                    placeholder="What's on your mind?" 
                    autoFocus
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="!text-lg !font-bold placeholder:font-normal pr-10"
                />
                <button 
                    onClick={handleGenerateTitle}
                    disabled={isGeneratingTitle || !content}
                    className={`absolute right-2 top-[2.1rem] p-2 rounded-xl transition-colors ${!content ? 'text-stone-300' : 'text-brand-500 hover:bg-brand-50'}`}
                    title="Generate title from content"
                >
                    {isGeneratingTitle ? <Loader2 size={18} className="animate-spin" /> : <Wand2 size={18} />}
                </button>
            </div>

            {/* Content */}
            <div className="space-y-2">
                <div className="flex justify-between items-end px-1">
                    <label className="text-xs font-bold text-stone-400 uppercase tracking-wider">Content</label>
                    <button 
                        onClick={handleRefineWithAI}
                        disabled={isRefining || !content}
                        className={`flex items-center gap-1 text-xs font-bold transition-all px-2 py-1 rounded-lg ${
                            isRefining || !content
                            ? 'text-stone-300' 
                            : 'text-brand-600 bg-brand-50 hover:bg-brand-100'
                        }`}
                    >
                        {isRefining ? <Loader2 size={12} className="animate-spin" /> : <Sparkles size={12} />}
                        {isRefining ? 'Polishing...' : 'AI Polish'}
                    </button>
                </div>
                <textarea 
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full h-64 px-4 py-4 bg-white border-2 border-stone-100 rounded-2xl text-stone-800 placeholder-stone-400 focus:border-brand-300 focus:ring-4 focus:ring-brand-50 outline-none transition-all font-medium resize-none text-base leading-relaxed"
                    placeholder="Share your experience, ask for advice, or help others..."
                />
            </div>

            {/* Guidelines Hint */}
            <div className="p-4 bg-brand-50 rounded-2xl border border-brand-100">
                <p className="text-xs text-brand-800 font-medium leading-relaxed">
                    <strong>Community Tip:</strong> Be specific about your situation. Mentioning your current recovery phase helps others give better advice.
                </p>
            </div>
        </div>
      </div>
    </MobileLayout>
  );
};
