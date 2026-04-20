import React, { useState, useRef, useEffect, useCallback } from "react";

const WHATSAPP_URL = "https://wa.me/917339596165";
const WHATSAPP_TEXT = encodeURIComponent(
  "Hi Legendary One! I'd like to discuss a project with your team.",
);

const QUICK_SUGGESTIONS = [
  {
    label: "🌐 What services do you offer?",
    msg: "What IT services does Legendary One provide?",
  },
  {
    label: "🗂️ Show me previous projects",
    msg: "Can you share some of your previous project links and portfolio?",
  },
  {
    label: "💰 How much does a website cost?",
    msg: "What is the approximate cost for building a website or mobile app?",
  },
  {
    label: "🎓 Help with college project",
    msg: "Do you help with college final year projects? What do you provide?",
  },
  {
    label: "📍 Where are you located?",
    msg: "Where is Legendary One located and do you work with international clients?",
  },
  {
    label: "🚀 How fast can you deliver?",
    msg: "What are your typical project timelines and how do you ensure on-time delivery?",
  },
];

// ── Helpers ──────────────────────────────────────────────────────────
function formatTime(date) {
  return new Date(date).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

// Simple markdown renderer: **bold**, newlines → <br>
function RichText({ text }) {
  const lines = text.split("\n");
  return (
    <>
      {lines.map((line, li) => {
        const parts = line.split(/(\*\*[^*]+\*\*)/g);
        return (
          <React.Fragment key={li}>
            {parts.map((p, pi) =>
              p.startsWith("**") && p.endsWith("**") ? (
                <strong key={pi}>{p.slice(2, -2)}</strong>
              ) : (
                <span key={pi}>{p}</span>
              ),
            )}
            {li < lines.length - 1 && <br />}
          </React.Fragment>
        );
      })}
    </>
  );
}

// ── Sub-components ────────────────────────────────────────────────────
const TypingDots = () => (
  <div className="flex items-end gap-1 px-4 py-3">
    {[0, 1, 2].map((i) => (
      <span
        key={i}
        style={{ animationDelay: `${i * 0.18}s` }}
        className="w-2 h-2 rounded-full bg-azure/70 animate-bounce"
      />
    ))}
  </div>
);

const BotAvatar = ({ size = "sm" }) => (
  <img
    src="/logo.png"
    alt="Legendary One"
    className={`flex-shrink-0 rounded-full shadow-md object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] ${
      size === "sm" ? "w-7 h-7" : "w-9 h-9"
    }`}
    style={{ filter: "brightness(1.05)" }}
  />
);

const WhatsAppCard = ({ slim = false }) => (
  <a
    href={`${WHATSAPP_URL}?text=${WHATSAPP_TEXT}`}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center gap-3 bg-gradient-to-r from-[#1DAA61] to-[#128C7E] rounded-xl text-white font-medium shadow-lg hover:shadow-green-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group ${
      slim ? "px-3 py-2.5 text-xs" : "px-4 py-3 text-sm mt-2"
    }`}
  >
    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
      <svg
        className="w-4.5 h-4.5 w-[18px] h-[18px]"
        fill="white"
        viewBox="0 0 24 24"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </div>
    <div className="flex-1 min-w-0">
      <div className="font-semibold leading-tight">
        Chat with our expert team
      </div>
      <div className="opacity-80 font-normal leading-tight mt-0.5">
        +91 7339596165 · Replies in minutes
      </div>
    </div>
    <svg
      className="w-4 h-4 opacity-60 group-hover:translate-x-0.5 transition-transform flex-shrink-0"
      fill="none"
      stroke="white"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M9 5l7 7-7 7"
      />
    </svg>
  </a>
);

const MessageBubble = ({ msg }) => {
  const isBot = msg.role === "bot";

  if (isBot) {
    return (
      <div className="flex items-end gap-2 max-w-[88%]">
        <BotAvatar />
        <div>
          <div className="bg-slate-100 text-navy rounded-2xl rounded-bl-sm px-4 py-2.5 text-sm leading-relaxed shadow-sm">
            <RichText text={msg.text} />
          </div>
          {msg.showWhatsApp && <WhatsAppCard />}
          <div className="text-[10px] text-slate-400 mt-1 ml-1">
            {formatTime(msg.time)}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-end gap-2 max-w-[84%] ml-auto flex-row-reverse">
      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-azure to-llime flex-shrink-0 flex items-center justify-center">
        <svg
          className="w-3 h-3 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
        </svg>
      </div>
      <div>
        <div className="bg-gradient-to-br from-azure to-blue-600 text-white rounded-2xl rounded-br-sm px-4 py-2.5 text-sm leading-relaxed shadow-md">
          <RichText text={msg.text} />
        </div>
        <div className="text-[10px] text-slate-400 mt-1 mr-1 text-right">
          {formatTime(msg.time)}
        </div>
      </div>
    </div>
  );
};

// ── Main ChatBot Component ────────────────────────────────────────────
const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [unread, setUnread] = useState(1);
  const [hasOpened, setHasOpened] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const conversationRef = useRef([]); // track messages for API

  // Initial greeting
  useEffect(() => {
    const greeting = {
      id: "init",
      role: "bot",
      text: "👋 Hey! I'm **Leo**, your AI guide to Legendary One!\n\nWe build websites, mobile apps, software, e-commerce stores, and much more — for startups, businesses, and students across India & globally. 🌍\n\nHow can I help you today?",
      time: new Date(),
      showWhatsApp: false,
    };
    setMessages([greeting]);
  }, []);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Focus input & clear unread when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 320);
      setUnread(0);
    }
  }, [isOpen]);

  const openChat = useCallback(() => {
    setIsOpen(true);
    setHasOpened(true);
    requestAnimationFrame(() => {
      setTimeout(() => setIsVisible(true), 10);
    });
  }, []);

  const closeChat = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => setIsOpen(false), 300);
  }, []);

  const toggleChat = useCallback(() => {
    if (isOpen) closeChat();
    else openChat();
  }, [isOpen, openChat, closeChat]);

  const sendMessage = useCallback(
    async (text) => {
      if (!text.trim() || isTyping) return;

      const userMsg = {
        id: Date.now(),
        role: "user",
        text: text.trim(),
        time: new Date(),
      };

      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setShowSuggestions(false);
      setIsTyping(true);

      // Build conversation history for API
      const history = conversationRef.current.slice(-8).map((m) => ({
        role: m.role === "bot" ? "assistant" : "user",
        content: m.text,
      }));

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: [...history, { role: "user", content: text.trim() }],
          }),
        });

        if (!res.ok) throw new Error("API error");

        const data = await res.json();

        const botMsg = {
          id: Date.now() + 1,
          role: "bot",
          text: data.reply,
          time: new Date(),
          showWhatsApp: data.needsWhatsApp,
        };

        setMessages((prev) => [...prev, botMsg]);
        conversationRef.current = [
          ...conversationRef.current,
          { role: "user", text: text.trim() },
          { role: "bot", text: data.reply },
        ];
      } catch {
        const errMsg = {
          id: Date.now() + 1,
          role: "bot",
          text: "I hit a little snag 😅 But our expert team is available right now on WhatsApp and would love to help you directly!",
          time: new Date(),
          showWhatsApp: true,
        };
        setMessages((prev) => [...prev, errMsg]);
      } finally {
        setIsTyping(false);
      }
    },
    [isTyping],
  );

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const handleSuggestion = (msg) => {
    setInput("");
    sendMessage(msg);
  };

  return (
    <>
      {/* ── Chat Window ──────────────────────────────────────────── */}
      {isOpen && (
        <div
          style={{
            height: "clamp(420px, 60vh, 520px)",
            transform: isVisible
              ? "translateY(0) scale(1)"
              : "translateY(24px) scale(0.95)",
            opacity: isVisible ? 1 : 0,
            transition:
              "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), opacity 0.25s ease",
          }}
          className="fixed bottom-[156px] right-5 z-[1200] w-[370px] max-w-[calc(100vw-24px)] rounded-2xl shadow-[0_20px_70px_rgba(15,23,42,0.22),0_0_0_1px_rgba(42,127,255,0.12)] overflow-hidden flex flex-col bg-white"
        >
          {/* Header */}
          <div className="flex-shrink-0 bg-gradient-to-r from-[#0F172A] via-[#1e3a5f] to-[#0F172A] px-4 py-3 flex items-center gap-3 relative overflow-hidden">
            {/* Decorative glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-azure/10 via-transparent to-llime/10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-azure/40 via-llime/40 to-azure/40" />

            <div className="flex-1 min-w-0">
              <div className="text-white font-bold text-sm leading-tight">
                Leo — AI Assistant
              </div>
              <div className="text-slate-400 text-[11px] leading-tight mt-0.5 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-llime animate-pulse inline-block" />
                Online now
              </div>
            </div>

            {/* Header actions */}
            <div className="flex items-center gap-1">
              <a
                href={`${WHATSAPP_URL}?text=${WHATSAPP_TEXT}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Chat on WhatsApp"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#25D366]/20 flex items-center justify-center transition-colors duration-150"
              >
                <svg className="w-4 h-4" fill="#25D366" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <button
                onClick={closeChat}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-red-500/20 text-slate-400 hover:text-red-400 flex items-center justify-center transition-all duration-150"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div
            className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-4 scroll-smooth"
            style={{
              background: "linear-gradient(180deg, #f8faff 0%, #ffffff 100%)",
            }}
          >
            {messages.map((msg) => (
              <MessageBubble key={msg.id} msg={msg} />
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex items-end gap-2">
                <BotAvatar />
                <div className="bg-slate-100 rounded-2xl rounded-bl-sm shadow-sm">
                  <TypingDots />
                </div>
              </div>
            )}

            {/* Quick suggestions */}
            {showSuggestions && messages.length <= 1 && !isTyping && (
              <div className="mt-2">
                <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wide mb-2 ml-1">
                  Quick questions
                </p>
                <div className="flex flex-col gap-2">
                  {QUICK_SUGGESTIONS.map((s) => (
                    <button
                      key={s.label}
                      onClick={() => handleSuggestion(s.msg)}
                      className="text-left px-3.5 py-2.5 rounded-xl border border-azure/20 bg-white hover:bg-azure/5 hover:border-azure/40 text-sm text-navy font-medium transition-all duration-150 hover:-translate-y-0.5 hover:shadow-sm active:translate-y-0 shadow-sm"
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Bar */}
          <div className="flex-shrink-0 px-3 py-3 bg-white border-t border-slate-100 shadow-[0_-4px_20px_rgba(0,0,0,0.04)]">
            <div className="flex items-end gap-2 bg-slate-50 border border-slate-200 rounded-2xl px-4 py-2 focus-within:border-azure/50 focus-within:shadow-[0_0_0_3px_rgba(42,127,255,0.1)] transition-all duration-200">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about our IT services…"
                rows={1}
                maxLength={400}
                disabled={isTyping}
                className="flex-1 bg-transparent text-navy text-sm placeholder-slate-400 focus:outline-none resize-none py-1.5 max-h-[80px] leading-snug disabled:opacity-50"
                style={{ height: "auto" }}
                onInput={(e) => {
                  e.target.style.height = "auto";
                  e.target.style.height =
                    Math.min(e.target.scrollHeight, 80) + "px";
                }}
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={!input.trim() || isTyping}
                className="w-9 h-9 rounded-xl bg-gradient-to-br from-azure to-blue-600 text-white flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:from-azure-dark hover:to-blue-700 hover:shadow-md hover:shadow-azure/30 active:scale-95 transition-all duration-150 flex-shrink-0 mb-0.5"
              >
                {isTyping ? (
                  <svg
                    className="w-4 h-4 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 translate-x-px"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="flex items-center justify-between mt-2 px-1">
              <span className="text-[10px] text-slate-400">
                Powered by{" "}
                <span className="font-semibold text-slate-500">
                  Legendary One AI
                </span>
              </span>
              <a
                href={`${WHATSAPP_URL}?text=${WHATSAPP_TEXT}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-[#25D366] font-semibold hover:underline flex items-center gap-1"
              >
                <svg
                  className="w-2.5 h-2.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Talk to a human
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ── Floating Trigger Button ───────────────────────────────── */}
      <div className="fixed bottom-[88px] right-5 z-[1201] flex flex-col items-end gap-2">
        {/* Tooltip label — shown before first open */}
        {!hasOpened && (
          <div
            style={{
              animation: "slideInRight 0.4s ease 1s both",
            }}
            className="bg-navy text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap pointer-events-none select-none border border-azure/30"
          >
            👋 Ask Leo anything!
          </div>
        )}

        {/* Main button */}
        <button
          onClick={toggleChat}
          aria-label={isOpen ? "Close AI chat" : "Open AI chat"}
          className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-[0_8px_28px_rgba(42,127,255,0.45)] hover:shadow-[0_12px_40px_rgba(42,127,255,0.6)] hover:-translate-y-1 active:translate-y-0 active:scale-95 transition-all duration-200 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0F172A 0%, #2A7FFF 100%)",
          }}
        >
          {/* Animated ring */}
          {!isOpen && (
            <span
              className="absolute inset-0 rounded-full animate-ping"
              style={{
                background: "rgba(42,127,255,0.3)",
                animationDuration: "2.5s",
              }}
            />
          )}

          {/* Gradient overlay */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-azure/20 via-transparent to-llime/10 pointer-events-none" />

          {/* Icon — toggles between logo and close */}
          <span
            style={{
              transform: isOpen
                ? "rotate(0deg) scale(1)"
                : "rotate(0deg) scale(1)",
              transition: "transform 0.25s ease",
            }}
            className="relative flex items-center justify-center"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <img
                src="/logo.png"
                alt="Legendary One"
                className="w-8 h-8 object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
                style={{ filter: "brightness(1.1)" }}
              />
            )}
          </span>

          {/* Unread badge */}
          {unread > 0 && !isOpen && (
            <span className="absolute top-0.5 right-0.5 w-5 h-5 rounded-full bg-llime text-navy text-[10px] font-black flex items-center justify-center shadow-md border-2 border-navy">
              {unread}
            </span>
          )}
        </button>
      </div>

      {/* Keyframe for tooltip slide-in */}
      <style>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(12px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </>
  );
};

export default ChatBot;
