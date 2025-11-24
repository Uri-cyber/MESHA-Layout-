
import React, { useState } from 'react';
import { MobileLayout, BottomNav, Header, Tabs } from '../components/Common';
import { ForumPostCard } from '../components/ForumPostCard';
import { ScreenName, ForumPost } from '../types';
import { Search, Plus, Filter } from 'lucide-react';

interface Props {
  onNavigate: (screen: ScreenName) => void;
  posts: ForumPost[];
  onSelectPost: (post: ForumPost) => void;
}

export const ForumFeedScreen: React.FC<Props> = ({ onNavigate, posts, onSelectPost }) => {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = ['All', 'Support', 'Insurance', 'Repairs', 'General'];
  
  const filteredPosts = posts.filter(post => {
    const matchesTab = activeTab === 'All' || post.category === activeTab;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <MobileLayout>
      <Header 
        title="Community" 
        subtitle="Share, learn, and recover together."
        rightAction={
            <button className="p-2 bg-white rounded-full text-stone-500 hover:text-brand-500 shadow-sm transition-colors border border-stone-100">
                <Filter size={20} />
            </button>
        }
      />

      <div className="px-6 mb-4 space-y-4">
        <div className="relative group">
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-brand-500 transition-colors" />
            <input 
                type="text" 
                placeholder="Search discussions..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-stone-100 rounded-2xl focus:border-brand-300 focus:ring-4 focus:ring-brand-50 outline-none transition-all font-medium text-stone-800 placeholder:text-stone-400"
            />
        </div>
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} className="overflow-x-auto" />
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-28 space-y-4">
        {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
                <ForumPostCard 
                    key={post.id} 
                    post={post} 
                    onClick={() => onSelectPost(post)}
                    onLike={() => {
                        // Handle like logic
                    }}
                    onComment={() => onSelectPost(post)}
                />
            ))
        ) : (
            <div className="flex flex-col items-center justify-center py-16 opacity-60">
                <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mb-4 text-stone-400">
                    <Search size={32} />
                </div>
                <h3 className="text-stone-600 font-bold text-lg mb-1">No posts found</h3>
                <p className="text-stone-400 text-sm text-center max-w-[200px]">Try adjusting your search or filters to find what you're looking for.</p>
                <button onClick={() => {setSearchQuery(''); setActiveTab('All');}} className="mt-4 text-brand-600 font-bold text-sm hover:underline">
                    Clear filters
                </button>
            </div>
        )}
      </div>

      {/* FAB */}
      <div className="absolute bottom-24 right-6 z-30">
         <button 
            onClick={() => onNavigate('forum-create-post')}
            className="w-14 h-14 bg-brand-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-brand-500/30 hover:bg-brand-600 hover:scale-105 active:scale-95 transition-all"
            aria-label="Create new post"
         >
            <Plus size={28} strokeWidth={2.5} />
         </button>
      </div>

      <BottomNav currentScreen="forum-feed" onNavigate={onNavigate} />
    </MobileLayout>
  );
};
