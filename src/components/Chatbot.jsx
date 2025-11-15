
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Minus, Bot, User, Phone } from 'lucide-react';
import { getChatbotResponse } from '@/lib/chatbotKnowledge';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [quickReplies, setQuickReplies] = useState([]);
  const [hasUnread, setHasUnread] = useState(true);
  
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Initialize chat with greeting
  useEffect(() => {
    if (messages.length === 0) {
      const { response, quickReplies } = getChatbotResponse('hi');
      setMessages([{ type: 'bot', text: response, timestamp: new Date() }]);
      setQuickReplies(quickReplies);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = async (text) => {
    if (!text.trim()) return;

    // Add user message
    const newMessages = [...messages, { type: 'user', text, timestamp: new Date() }];
    setMessages(newMessages);
    setUserInput('');
    setQuickReplies([]); // Hide quick replies while processing
    setIsTyping(true);

    // Get bot response
    const { response, quickReplies: nextReplies, delay } = getChatbotResponse(text);

    // Simulate typing delay
    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', text: response, timestamp: new Date() }]);
      setQuickReplies(nextReplies);
      setIsTyping(false);
    }, delay);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(userInput);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setHasUnread(false);
      // Focus input after opening animation
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  };

  // Helper to format text with bolding
  const formatText = (text) => {
    return text.split('\n').map((line, i) => (
      <React.Fragment key={i}>
        {line.split(/(\*\*.*?\*\*)/).map((part, j) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={j}>{part.slice(2, -2)}</strong>;
          }
          return part;
        })}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleChat}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#4ade80] rounded-full shadow-[0_4px_14px_rgba(74,222,128,0.4)] flex items-center justify-center text-[#1a4d2e] transition-colors hover:bg-[#3ecf72]"
            aria-label="Open Chat"
          >
            <MessageCircle className="w-8 h-8" />
            {hasUnread && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse" />
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[380px] h-[550px] max-h-[80vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 font-sans"
            role="dialog"
            aria-label="Chat with Terravian Assistant"
          >
            {/* Header */}
            <div className="bg-[#1a4d2e] p-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                    <Bot className="w-6 h-6 text-[#4ade80]" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#4ade80] border-2 border-[#1a4d2e] rounded-full" title="Online"></span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-base leading-tight">Terravian Assistant</h3>
                  <span className="text-green-200 text-xs">Online & Ready to Help</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-green-200 hover:text-white transition-colors p-1"
                  aria-label="Minimize Chat"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-green-200 hover:text-white transition-colors p-1"
                  aria-label="Close Chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div 
              className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4 scroll-smooth"
              aria-live="polite"
            >
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                      msg.type === 'user' 
                        ? 'bg-[#4ade80] text-[#0f2f1e] rounded-tr-none font-medium' 
                        : 'bg-white text-gray-700 rounded-tl-none border border-gray-100'
                    }`}
                  >
                    {formatText(msg.text)}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm flex gap-1.5 items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {quickReplies.length > 0 && !isTyping && (
              <div className="px-4 py-2 bg-gray-50 flex gap-2 overflow-x-auto no-scrollbar pb-3">
                {quickReplies.map((reply, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(reply)}
                    className="whitespace-nowrap px-3 py-1.5 bg-white border border-[#4ade80] text-[#1a4d2e] text-xs font-medium rounded-full hover:bg-[#4ade80] hover:text-[#0f2f1e] transition-colors shadow-sm"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100 shrink-0">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a message..."
                  className="flex-1 bg-gray-100 text-gray-800 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#4ade80] focus:bg-white transition-all placeholder:text-gray-400"
                  aria-label="Type your message"
                />
                <button
                  onClick={() => handleSendMessage(userInput)}
                  disabled={!userInput.trim() || isTyping}
                  className="w-10 h-10 bg-[#1a4d2e] text-white rounded-full flex items-center justify-center hover:bg-[#2d6a45] disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md"
                  aria-label="Send Message"
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </div>
              <div className="mt-2 text-center">
                <a href="tel:2035141452" className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-[#1a4d2e] transition-colors">
                  <Phone className="w-3 h-3" /> Need urgent help? Call (203) 514-1452
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
