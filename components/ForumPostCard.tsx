
import React from 'react';
import { Card } from './Common';
import { ForumPost } from '../types';
import { Heart, MessageSquare } from 'lucide-react';

interface ForumPostCardProps {
  post: ForumPost;
  onClick: () => void;
  onLike?: () => void;
  onComment?: () => void;
}

export const ForumPostCard: React.FC<ForumPostCardProps> = ({ post, onClick, onLike, onComment }) => {
  const getCategoryStyles = (category: string) => {
    switch (category) {
      case 'Support': return 'bg-purple-50 text-purple-600 border border-purple-100';
      case 'Insurance': return 'bg-blue-50 text-blue-600 border border-blue-100';
      case 'Repairs': return 'bg-amber-50 text-amber-600 border border-amber-100';
      default: return 'bg-stone-100 text-stone-600 border border-stone-200';
    }
  };

  return (
    <Card onClick={onClick} className="!p-5 cursor-pointer group hover:border-brand-200 hover:shadow-md transition-all relative">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center text-sm font-bold text-stone-600 shrink-0">
            {post.author.charAt(0)}
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-bold text-stone-800 leading-tight">{post.author}</p>
            <p className="text-[10px] font-bold text-stone-400 flex items-center gap-1 mt-0.5">
              {post.timeAgo} • <span className="text-brand-600 bg-brand-50 px-1.5 py-0.5 rounded text-[9px]">{post.phaseTag || 'General'}</span>
            </p>
          </div>
        </div>
        <span className={`text-[10px] font-bold px-2 py-1 rounded-lg uppercase tracking-wide ${getCategoryStyles(post.category)}`}>
          {post.category}
        </span>
      </div>

      <h3 className="font-bold text-stone-800 text-base mb-2 group-hover:text-brand-600 transition-colors leading-tight line-clamp-2">
        {post.title}
      </h3>
      <p className="text-sm text-stone-500 line-clamp-3 leading-relaxed mb-4 font-medium">
        {post.content}
      </p>

      <div className="flex items-center gap-3 mt-auto">
        <button 
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-50 hover:bg-rose-50 text-stone-500 hover:text-rose-600 transition-all group/btn active:scale-95"
          onClick={(e) => {
            e.stopPropagation();
            onLike && onLike();
          }}
        >
          <Heart size={16} className="group-hover/btn:scale-110 transition-transform group-hover/btn:fill-rose-200" />
          <span className="text-xs font-bold">{post.likes}</span>
        </button>
        
        <button 
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-50 hover:bg-brand-50 text-stone-500 hover:text-brand-600 transition-all group/btn active:scale-95"
          onClick={(e) => {
            e.stopPropagation();
            onComment && onComment();
          }}
        >
          <MessageSquare size={16} className="group-hover/btn:scale-110 transition-transform group-hover/btn:fill-brand-200" />
          <span className="text-xs font-bold">{post.comments}</span>
        </button>
      </div>
    </Card>
  );
};
