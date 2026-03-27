import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getChatResponse } from '../services/gemini';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isEmailCaptured, setIsEmailCaptured] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await getChatResponse(userMessage, history);
    setMessages(prev => [...prev, { role: 'model', text: response || '' }]);
    setIsLoading(false);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsEmailCaptured(true);
      setMessages([{ role: 'model', text: "Welcome to Red Rooster! How can I help you today?" }]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="glass rounded-[2.5rem] shadow-2xl w-80 sm:w-96 h-[550px] flex flex-col overflow-hidden mb-4"
          >
            {/* Header */}
            <div className="p-6 flex justify-between items-center border-b border-black/[0.05]">
              <div>
                <h3 className="font-serif text-xl">Rooster AI</h3>
                <p className="text-[11px] text-gray-500 font-medium uppercase tracking-widest">Always here to help</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="bg-black/5 hover:bg-black/10 p-2 rounded-full transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6" ref={scrollRef}>
              {!isEmailCaptured ? (
                <div className="h-full flex flex-col justify-center items-center text-center space-y-6">
                  <div className="bg-brand-red/10 p-6 rounded-full">
                    <MessageSquare className="text-brand-red" size={40} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-serif text-2xl">Welcome</h4>
                    <p className="text-sm text-gray-500 max-w-[200px] mx-auto">Enter your email to start a conversation with our concierge.</p>
                  </div>
                  <form onSubmit={handleEmailSubmit} className="w-full space-y-3">
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full p-4 bg-black/5 border-none rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 transition-all text-sm"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button className="apple-button w-full bg-brand-red text-white py-4 shadow-lg shadow-brand-red/20">
                      Start Chat
                    </button>
                  </form>
                </div>
              ) : (
                <>
                  {messages.map((m, i) => (
                    <div key={i} className={cn("flex", m.role === 'user' ? "justify-end" : "justify-start")}>
                      <div className={cn(
                        "max-w-[85%] p-4 rounded-[1.5rem] text-[13px] leading-relaxed",
                        m.role === 'user' 
                          ? "bg-brand-red text-white rounded-tr-none shadow-lg shadow-brand-red/10" 
                          : "bg-black/5 text-brand-black rounded-tl-none"
                      )}>
                        {m.text}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-black/5 p-4 rounded-[1.5rem] rounded-tl-none">
                        <Loader2 className="animate-spin text-brand-red" size={16} />
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Input */}
            {isEmailCaptured && (
              <form onSubmit={handleSend} className="p-6 bg-white/50 border-t border-black/[0.05] flex gap-3">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 text-sm bg-transparent focus:outline-none"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button disabled={isLoading || !input.trim()} className="bg-brand-red text-white p-2 rounded-full shadow-lg disabled:opacity-50 transition-all">
                  <Send size={16} />
                </button>
              </form>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-brand-red text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-all active:scale-95 shadow-brand-red/20"
      >
        <MessageSquare size={28} />
      </button>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
