import React, { useState, useEffect, useRef } from "react";
import { ACADEMY_CONFIG } from "../data/academyData";
import { ChatMessage } from "../types";
import { LogoMark } from "./Logo";
import { X, Send, Phone, User, CornerDownLeft, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface AIAssistantWidgetProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const AIAssistantWidget: React.FC<AIAssistantWidgetProps> = ({
  isOpen,
  onToggle,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome-msg",
      sender: "bot",
      text: `Welcome to Stars Academy! 🌟 I'm Nova, your AI Creative Advisor. Whether you're exploring Premiere Pro, After Effects, DaVinci Resolve, or viral short-form editing, ask me anything about our tracks, 1-on-1 critiques, and enrollment!`,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    "Which course is best for beginners?",
    "How does the 1-on-1 critique work?",
    "What raw footage & assets do I get?",
    "I want to speak with an admissions advisor",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const messageText = (textToSend || inputValue).trim();
    if (!messageText || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: messageText,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userMessage: messageText,
          messages: messages.slice(-6).map((m) => ({
            sender: m.sender,
            text: m.text,
          })),
        }),
      });

      const data = await res.json();
      const replyText = data.reply || "Thank you for asking! For immediate custom admission advice, message us on Telegram at @starsacadamey21 or call +251 96 787 6067.";

      const isHandoff =
        messageText.toLowerCase().includes("human") ||
        messageText.toLowerCase().includes("advisor") ||
        messageText.toLowerCase().includes("person") ||
        messageText.toLowerCase().includes("talk") ||
        messageText.toLowerCase().includes("call") ||
        messageText.toLowerCase().includes("phone") ||
        messageText.toLowerCase().includes("telegram");

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        isHumanHandoff: isHandoff,
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error("Chat error:", err);
      const fallbackMsg: ChatMessage = {
        id: `bot-fallback-${Date.now()}`,
        sender: "bot",
        text: `I'm currently assisting multiple students! You can reach our lead admissions director directly on Telegram at **@starsacadamey21** or call **+251 96 787 6067** for instant 1-on-1 consultation.`,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        isHumanHandoff: true,
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-14 right-4 sm:right-6 z-50">
      {/* Floating Widget Trigger Button */}
      {!isOpen && (
        <motion.button
          onClick={onToggle}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          id="floating-ai-assistant-toggle"
          aria-label="Open Stars AI Assistant"
          className="relative flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-zinc-950 text-white border-2 border-cyan-400 shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-500/60 transition-all duration-300 group select-none"
        >
          {/* Pulsing indicator */}
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
          </span>

          <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center">
            <LogoMark className="w-5 h-5" />
          </div>

          <div className="text-left hidden sm:block pr-1">
            <span className="text-xs font-black uppercase tracking-wider block font-display text-white">
              Stars AI Advisor
            </span>
            <span className="text-[10px] text-cyan-300 font-medium">
              Curriculum & Admissions
            </span>
          </div>
        </motion.button>
      )}

      {/* Expanded Chat Dialog Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            id="ai-assistant-panel"
            className="w-[92vw] sm:w-[420px] h-[560px] max-h-[82vh] rounded-3xl bg-zinc-950 border-2 border-zinc-700/80 shadow-2xl flex flex-col overflow-hidden text-zinc-200"
          >
            {/* Chat Header */}
            <div className="p-4 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center">
                  <LogoMark className="w-6 h-6" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full ring-2 ring-black" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-1.5 font-display">
                    <span>Nova • Stars AI Advisor</span>
                    <span className="text-[10px] font-mono font-normal px-1.5 py-0.5 rounded bg-zinc-800 text-cyan-400">
                      Active
                    </span>
                  </h3>
                  <p className="text-[11px] text-zinc-400">
                    Online • Real-time Academy Guidance
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() =>
                    setMessages([
                      {
                        id: "welcome-msg",
                        sender: "bot",
                        text: "Welcome back! What can I help you discover about Stars Academy?",
                        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                      },
                    ])
                  }
                  className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
                  title="Reset conversation"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={onToggle}
                  className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
                  aria-label="Close Chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Human Handoff Banner in Header */}
            <div className="bg-zinc-900/50 px-4 py-2 border-b border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400">
              <span>Need human admissions?</span>
              <div className="flex items-center gap-2">
                <a
                  href={ACADEMY_CONFIG.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:underline font-bold flex items-center gap-1"
                >
                  <Send className="w-3 h-3" /> Telegram
                </a>
                <span>•</span>
                <a
                  href={ACADEMY_CONFIG.phoneTelLink}
                  className="text-emerald-400 hover:underline font-bold flex items-center gap-1"
                >
                  <Phone className="w-3 h-3" /> Call
                </a>
              </div>
            </div>

            {/* Chat Message Scroll Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] p-3.5 rounded-2xl leading-relaxed whitespace-pre-wrap ${
                      msg.sender === "user"
                        ? "bg-cyan-500 text-black font-medium rounded-tr-none shadow-md"
                        : "bg-zinc-900 text-zinc-200 border border-zinc-800 rounded-tl-none shadow-sm"
                    }`}
                  >
                    {msg.text}
                  </div>

                  <span className="text-[10px] text-zinc-500 mt-1 px-1">
                    {msg.timestamp}
                  </span>

                  {/* Surface Human Handoff buttons inside message if relevant */}
                  {msg.isHumanHandoff && (
                    <div className="mt-2.5 p-3 rounded-xl bg-zinc-900/90 border border-cyan-500/40 w-full space-y-2">
                      <span className="text-[11px] font-bold text-white block">
                        Direct Admissions Contacts:
                      </span>
                      <div className="grid grid-cols-2 gap-2">
                        <a
                          href={ACADEMY_CONFIG.telegramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1.5 py-2 rounded-lg bg-sky-950 text-sky-300 border border-sky-800 text-[11px] font-bold"
                        >
                          <Send className="w-3 h-3" /> @starsacadamey21
                        </a>
                        <a
                          href={ACADEMY_CONFIG.phoneTelLink}
                          className="flex items-center justify-center gap-1.5 py-2 rounded-lg bg-emerald-950 text-emerald-300 border border-emerald-800 text-[11px] font-bold"
                        >
                          <Phone className="w-3 h-3" /> +251 96 787 6067
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Typing indicator */}
              {isLoading && (
                <div className="flex items-center gap-2 p-3 bg-zinc-900 border border-zinc-800 rounded-2xl rounded-tl-none w-24">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestion Chips */}
            <div className="px-3 py-2 bg-zinc-900/40 border-t border-zinc-900 flex gap-2 overflow-x-auto select-none no-scrollbar">
              {quickPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSendMessage(prompt)}
                  className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-300 hover:text-cyan-300 hover:border-cyan-500/40 whitespace-nowrap flex-shrink-0 transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 bg-zinc-900 border-t border-zinc-800 flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask Nova about courses, software, fees..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 px-4 py-2.5 rounded-full bg-zinc-950 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
              />

              <button
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                className="w-9 h-9 rounded-full bg-cyan-400 text-black disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-all hover:bg-cyan-300 flex-shrink-0"
              >
                <CornerDownLeft className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
