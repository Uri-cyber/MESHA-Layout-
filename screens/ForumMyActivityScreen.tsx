
import React from 'react';
import { MobileLayout, Header } from '../components/Common';
import { ForumPostCard } from '../components/ForumPostCard';
import { ScreenName, ForumPost } from '../types';
import { User, Heart, MessageSquare, Award } from 'lucide-react';

interface Props {
  onNavigate: (screen: ScreenName) => void;
  posts: ForumPost[];
  onSelectPost: (post: ForumPost) => void;
}

export const ForumMyActivityScreen: React.FC<Props> = ({ onNavigate, posts, onSelectPost }) => {
  // Filter posts where author matches current user (Mock: 'Sarah Johnson')
  const myPosts = posts.filter(p => p.author.includes('Sarah'));
  
  const totalLikes = myPosts.reduce((acc, curr) => acc + curr.likes, 0);
  const totalComments = myPosts.reduce((acc, curr) => acc + curr.comments, 0);

  return (
    <MobileLayout>
      <Header title="My Activity" showBack onBack={() => onNavigate('forum-feed')} />
      
      <div className="flex-1 overflow-y-auto px-6 pb-6">
        {/* Profile Header */}
        <div className="flex flex-col items-center py-6 border-b border-stone-100 mb-6">
           <div className="w-20 h-20 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mb-3 border-4 border-white shadow-soft">
              <User size={32} strokeWidth={2.5} />
           </div>
           <h2 className="text-xl font-extrabold text-stone-800">Sarah Johnson</h2>
           <p className="text-stone-400 font-bold text-xs uppercase tracking-wide">Community Member</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3 mb-8">
            <div className="p-4 bg-brand-50 rounded-2xl border border-brand-100 flex flex-col items-center">
                <div className="mb-1 text-brand-500"><Award size={20} /></div>
                <span className="text-xl font-extrabold text-brand-900">{myPosts.length}</span>
                <span className="text-[10px] font-bold text-brand-400 uppercase">Posts</span>
            </div>
            <div className="p-4 bg-rose-50 rounded-2xl border border-rose-100 flex flex-col items-center">
                <div className="mb-1 text-rose-500"><Heart size={20} /></div>
                <span className="text-xl font-extrabold text-rose-900">{totalLikes}</span>
                <span className="text-[10px] font-bold text-rose-400 uppercase">Likes</span>
            </div>
            <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 flex flex-col items-center">
                <div className="mb-1 text-blue-500"><MessageSquare size={20} /></div>
                <span className="text-xl font-extrabold text-blue-900">{totalComments}</span>
                <span className="text-[10px] font-bold text-blue-400 uppercase">Replies</span>
            </div>
        </div>

        <div className="flex items-center gap-2 mb-4">
            <h3 className="font-bold text-stone-800">Your Discussions</h3>
            <span className="px-2 py-0.5 bg-stone-100 text-stone-500 text-xs font-bold rounded-full">{myPosts.length}</span>
        </div>

        <div className="space-y-4">
            {myPosts.length > 0 ? (
                myPosts.map(post => (
                    <ForumPostCard 
                        key={post.id} 
                        post={post} 
                        onClick={() => onSelectPost(post)} 
                    />
                ))
            ) : (
                <div className="text-center py-8 bg-stone-50 rounded-2xl border border-dashed border-stone-200">
                    <p className="text-stone-400 font-bold text-sm">You haven't posted yet.</p>
                    <button 
                        onClick={() => onNavigate('forum-create-post')} 
                        className="mt-2 text-brand-600 text-xs font-bold hover:underline"
                    >
                        Start a discussion
                    </button>
                </div>
            )}
        </div>
      </div>
    </MobileLayout>
  );
};
