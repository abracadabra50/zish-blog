'use client';

import { useChat } from '@ai-sdk/react';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navigation from '@/components/navigation';
import { Send, Bot, User, ArrowLeft, Sparkles, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatAssistant() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
    initialMessages: [
      {
        id: 'welcome',
        role: 'assistant',
        content: "Hello! I'm Zish's AI assistant. I can tell you about his work at Shopify, his entrepreneurial journey, viral content creation, or anything else you'd like to know. What would you like to explore?",
      },
    ],
  });

  const [suggestedQuestions] = useState([
    "Tell me about Zish's work at Shopify",
    "How did he get 6 million views?",
    "What companies has he built?",
    "What's his approach to AI?",
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSuggestionClick = (question: string) => {
    const event = {
      preventDefault: () => {},
    } as React.FormEvent<HTMLFormElement>;
    
    handleInputChange({
      target: { value: question },
    } as React.ChangeEvent<HTMLTextAreaElement>);
    
    setTimeout(() => {
      handleSubmit(event);
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <Navigation />
      
      <main className="px-6 md:px-12 lg:px-20 pt-24 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link 
              href="/experiments"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to experiments
            </Link>
            
            <h1 className="font-serif text-4xl sm:text-5xl text-gray-900 mb-4">
              Chat with My Assistant
            </h1>
            <p className="text-lg text-gray-600">
              An AI that knows everything about me. Ask about my work, projects, or journey.
            </p>
          </div>

          {/* Chat Container */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
            {/* Messages Area */}
            <div className="h-[500px] overflow-y-auto p-6 space-y-6">
              <AnimatePresence initial={false}>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className={`flex gap-4 ${
                      message.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {message.role === 'assistant' && (
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                    )}
                    
                    <div
                      className={`max-w-[80%] rounded-lg px-4 py-3 ${
                        message.role === 'user'
                          ? 'bg-gray-900 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p className="whitespace-pre-wrap leading-relaxed">
                        {message.content}
                      </p>
                    </div>
                    
                    {message.role === 'user' && (
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                        <User className="w-4 h-4 text-gray-600" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-4 justify-start"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-gray-100 rounded-lg px-4 py-3">
                    <Loader2 className="w-4 h-4 animate-spin text-gray-600" />
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions - Only show if no user messages yet */}
            {messages.length === 1 && (
              <div className="px-6 pb-4">
                <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
                  <Sparkles className="w-4 h-4" />
                  <span>Suggested questions</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.map((question) => (
                    <button
                      key={question}
                      onClick={() => handleSuggestionClick(question)}
                      className="px-3 py-2 text-sm bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4">
              <div className="flex gap-3">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={handleInputChange}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSubmit(e as any);
                    }
                  }}
                  placeholder="Ask me anything about Zish..."
                  className="flex-1 resize-none rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  rows={1}
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span className="hidden sm:inline">Send</span>
                </button>
              </div>
            </form>
          </div>

          {/* Footer Note */}
          <div className="mt-6 text-center text-sm text-gray-500">
            Powered by Claude 3.5 Sonnet via Vercel AI SDK
          </div>
        </div>
      </main>
    </div>
  );
}
