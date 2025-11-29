
import React, { useState, useRef, useEffect } from 'react';
import { MobileLayout, Header } from '../components/Common';
import { ScreenName } from '../types';
import { Send, Phone, MoreVertical, Sparkles, Loader2, X } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface Props {
  onNavigate: (screen: ScreenName) => void;
}

export const ChatScreen: React.FC<Props> = ({ onNavigate }) => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi Sarah, I've reviewed the photos you sent.", sender: 'them', time: '10:30 AM' },
    { id: 2, text: "The damage looks extensive but repairable. I can stop by tomorrow for a full inspection.", sender: 'them', time: '10:31 AM' },
    { id: 3, text: "That would be great! What time works for you?", sender: 'me', time: '10:35 AM' },
    { id: 4, text: "I can be there between 8 AM and 10 AM. Does that work?", sender: 'them', time: '10:36 AM' },
  ]);
  const [inputText, setInputText] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, suggestions]);

  const handleSend = () => {
    if (!inputText.trim()) return;
    setMessages([...messages, { id: Date.now(), text: inputText, sender: 'me', time: 'Just now' }]);
    setInputText('');
    setSuggestions([]); // Clear suggestions after sending
  };

  const handleGenerateReplies = async () => {
    setIsGenerating(true);
    setSuggestions([]);
    
    try {
        // Construct conversation history for context
        const history = messages.map(m => `${m.sender === 'me' ? 'Homeowner' : 'Contractor'}: ${m.text}`).join('\n');
        
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `Based on this conversation between a homeowner and a contractor, suggest 3 distinct, professional, and concise short replies for the homeowner.
            
            Conversation:
            ${history}
            
            Output format: Just the 3 replies separated by pipes (|). No numbering or extra text.
            Example: Yes, that works.|Could we do later?|Please send the estimate first.`,
        });

        if (response.text) {
            const replies = response.text.split('|').map(s => s.trim()).filter(s => s.length > 0);
            setSuggestions(replies.slice(0, 3));
        }
    } catch (e) {
        console.error("AI Error:", e);
    } finally {
        setIsGenerating(false);
    }
  };

  return (
    <MobileLayout>
      <Header 
        title="Mike's Roofing" 
        subtitle="Online"
        showBack 
        onBack={() => onNavigate('contractors')}
        rightAction={
          <div className="flex gap-2 text-stone-400">
            <button className="p-2 hover:bg-stone-100 rounded-full transition-colors"><Phone size={20} /></button>
            <button className="p-2 hover:bg-stone-100 rounded-full transition-colors"><MoreVertical size={20} /></button>
          </div>
        }
      />
      
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-stone-50">
        <div className="text-center text-xs text-stone-400 font-bold uppercase tracking-wider my-4">Today</div>
        
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-4 rounded-2xl shadow-sm ${
              msg.sender === 'me' 
                ? 'bg-brand-500 text-white rounded-tr-none' 
                : 'bg-white text-stone-800 rounded-tl-none border border-stone-100'
            }`}>
              <p className="text-sm font-medium leading-relaxed">{msg.text}</p>
              <p className={`text-[10px] mt-1 font-bold text-right ${msg.sender === 'me' ? 'text-brand-200' : 'text-stone-400'}`}>{msg.time}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Smart Suggestions Area */}
      {suggestions.length > 0 && (
          <div className="bg-stone-50 px-4 py-2 flex gap-2 overflow-x-auto scrollbar-hide border-t border-stone-100">
              <button onClick={() => setSuggestions([])} className="p-1.5 bg-stone-200 rounded-full text-stone-500 shrink-0">
                  <X size={14} />
              </button>
              {suggestions.map((suggestion, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setInputText(suggestion)}
                    className="px-4 py-2 bg-white border border-brand-200 text-brand-700 text-xs font-bold rounded-xl whitespace-nowrap shadow-sm hover:bg-brand-50 active:scale-95 transition-all"
                  >
                    {suggestion}
                  </button>
              ))}
          </div>
      )}

      <div className="p-4 bg-white border-t border-stone-100 relative">
        <div className="flex items-center gap-2">
          <button 
             onClick={handleGenerateReplies}
             disabled={isGenerating}
             className={`p-3 rounded-full transition-all ${isGenerating ? 'bg-stone-100 text-stone-400' : 'bg-brand-50 text-brand-600 hover:bg-brand-100'}`}
             title="Generate AI Suggestions"
          >
             {isGenerating ? <Loader2 size={20} className="animate-spin" /> : <Sparkles size={20} />}
          </button>
          
          <input 
            type="text" 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type a message..." 
            className="flex-1 bg-stone-50 border border-transparent rounded-full px-4 py-3 text-sm font-medium outline-none focus:bg-white focus:border-brand-300 transition-all"
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button 
            onClick={handleSend}
            className={`w-11 h-11 rounded-full flex items-center justify-center text-white shadow-lg transition-all ${
              inputText.trim() ? 'bg-brand-500 hover:scale-105 shadow-brand-500/20' : 'bg-stone-300 cursor-not-allowed'
            }`}
            disabled={!inputText.trim()}
          >
            <Send size={20} className="ml-0.5" />
          </button>
        </div>
      </div>
    </MobileLayout>
  );
};
