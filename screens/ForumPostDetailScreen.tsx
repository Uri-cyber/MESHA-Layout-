
import React from 'react';
import { MobileLayout, Header } from '../components/Common';
import { ScreenName, ForumPost } from '../types';
import { Heart, MessageSquare, Share, Send } from 'lucide-react';

interface Props {
  onNavigate: (screen: ScreenName) => void;
  post: ForumPost | null;
}

export const ForumPostDetailScreen: React.FC<Props> = ({ onNavigate, post }) => {
  
  if (!post) {
      return (
          <MobileLayout>
              <Header title="Error" showBack onBack={() => onNavigate('forum-feed')} />
              <div className="flex-1 flex items-center justify-center">
                  <p className="text-stone-500">Post not found.</p>
              </div>
          </MobileLayout>
      );
  }

  const getCategoryStyles = (category: string) => {
    switch (category) {
      case 'Support': return 'bg-purple-50 text-purple-600';
      case 'Insurance': return 'bg-blue-50 text-blue-600';
      case 'Repairs': return 'bg-amber-50 text-amber-600';
      default: return 'bg-stone-100 text-stone-600';
    }
  };

  return (
    <MobileLayout>
      <Header 
        title="Discussion" 
        showBack 
        onBack={() => onNavigate('forum-feed')} 
        rightAction={<button className="text-stone-400 hover:text-brand-500"><Share size={20}/></button>}
      />
      
      <div className="flex-1 overflow-y-auto px-6 pb-20">
         {/* Main Post */}
         <div className="py-4 border-b border-stone-100 animate-fade-in">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 font-bold border border-brand-200">
                        {post.author.charAt(0)}
                    </div>
                    <div>
                        <p className="font-bold text-stone-800">{post.author}</p>
                        <p className="text-xs text-stone-400">{post.phaseTag || 'General'} • {post.timeAgo}</p>
                    </div>
                </div>
                <span className={`text-[10px] font-bold px-2 py-1 rounded-lg uppercase tracking-wide ${getCategoryStyles(post.category)}`}>
                    {post.category}
                </span>
            </div>
            
            <h2 className="text-xl font-bold text-stone-900 mb-3 leading-tight">{post.title}</h2>
            <p className="text-stone-600 leading-relaxed mb-6 whitespace-pre-line">
                {post.content}
            </p>

            <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-stone-50 rounded-full text-stone-500 text-xs font-bold hover:bg-rose-50 hover:text-rose-500 transition-colors">
                    <Heart size={16} /> {post.likes} Likes
                </button>
                <div className="flex items-center gap-2 text-stone-400 text-xs font-bold">
                    <MessageSquare size={16} /> {post.comments} Comments
                </div>
            </div>
         </div>

         {/* Replies (Mocked for now, but visually dynamic based on context) */}
         <div className="py-4 space-y-6">
            <h3 className="text-sm font-bold text-stone-400 uppercase tracking-wider">Replies</h3>
            
            {post.comments > 0 ? (
                [1, 2].map((i) => (
                    <div key={i} className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-xs font-bold text-stone-500 shrink-0">
                            {i === 1 ? 'AJ' : 'SL'}
                        </div>
                        <div className="flex-1 bg-white p-4 rounded-2xl rounded-tl-none border border-stone-100 shadow-sm">
                            <div className="flex justify-between mb-1">
                                <p className="text-sm font-bold text-stone-800">{i === 1 ? 'Alice Jenkins' : 'Steve L.'}</p>
                                <span className="text-[10px] text-stone-400">1h ago</span>
                            </div>
                            <p className="text-sm text-stone-600 leading-relaxed">
                                {i === 1 
                                ? "Thanks for sharing this. I found that documenting everything in a timeline really helps when dealing with adjusters." 
                                : "Hang in there! It gets easier once you have a plan in place."}
                            </p>
                            <div className="flex items-center gap-3 mt-3">
                                <button className="text-xs font-bold text-stone-400 hover:text-brand-500">Like</button>
                                <button className="text-xs font-bold text-stone-400 hover:text-brand-500">Reply</button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className="text-center py-8">
                    <p className="text-stone-400 text-sm italic">No replies yet. Be the first to support {post.author}!</p>
                </div>
            )}
         </div>
      </div>

      {/* Input Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white p-4 border-t border-stone-100 flex items-center gap-3 z-50">
         <input 
            type="text" 
            placeholder="Write a supportive reply..." 
            className="flex-1 bg-stone-50 border border-transparent rounded-full px-4 py-3 text-sm font-medium outline-none focus:bg-white focus:border-brand-300 transition-all"
         />
         <button className="w-11 h-11 bg-brand-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-brand-500/20 hover:scale-105 transition-transform">
            <Send size={20} className="ml-0.5" />
         </button>
      </div>
    </MobileLayout>
  );
};
