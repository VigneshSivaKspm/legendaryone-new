# AI Chatbot & Floating Buttons Configuration

## ✨ Overview

Your website now features a **world-class AI chatbot powered by Groq** and **always-visible floating action buttons** for seamless customer engagement.

---

## 🎯 What's New

### 1. **Leo — The AI Chatbot** 🤖

- **Powered by:** Groq's Llama 3.3 70B (fastest LLM inference)
- **Location:** Floating button at `bottom-[88px] right-5`
- **Icon:** Legendary One logo (displays when closed, X when open)
- **Appearance:**
  - Animated blue gradient button with pulse ring
  - Unread notification badge
  - Slides up with spring animation
  - Dark navy header with online indicator
  - Professional chat interface with rich formatting
  - Quick suggestion chips on first open

### 2. **WhatsApp Button** 💬

- **Location:** Below chatbot at `bottom-5 right-5`
- **Direct Link:** +91 7339596165
- **Always visible** on every page

### 3. **Global Visibility**

- Both buttons are **fixed positioning** so they stay visible while scrolling
- Present on **all pages** (home, services, contact, etc.)
- Z-index optimized to stay on top of all content
  - ChatBot button: `z-[1201]` (highest)
  - ChatBot window & WhatsApp: `z-[1200]`

---

## 🏗️ Architecture

### Frontend (React Component)

**File:** `src/components/ChatBot.jsx`

```
ChatBot Component
├── Chat Window (when open)
│   ├── Header (dark navy with logo)
│   ├── Messages Area (scrollable, auto-formats text)
│   ├── Quick Suggestions (shown on first open)
│   ├── Message Input (auto-resizing textarea)
│   └── WhatsApp Card (shown when bot suggests it)
└── Floating Button (always visible)
    ├── Legendary One Logo (when closed)
    ├── X Icon (when open)
    ├── Unread Badge
    ├── Animated pulse ring
    └── Tooltip "Ask Leo anything!"
```

**Features:**

- Message history tracking for multi-turn conversations
- Typing indicator with animated dots
- Time stamps on messages
- Rich text rendering (bold, newlines)
- Responsive design (mobile & desktop)
- Toast-like WhatsApp redirect card
- Input validation and auto-focus on open

### Backend (Serverless)

**File:** `api/chat.js`

```javascript
API Endpoint: POST /api/chat
├── Request body:
│   └── messages: [ { role: "user"|"assistant", content: "..." }, ... ]
├── Processing:
│   ├── System prompt (comprehensive IT company persona)
│   ├── Groq LLM inference (Llama 3.3 70B)
│   ├── WhatsApp trigger detection
│   └── Error handling with graceful fallback
└── Response:
    ├── reply: "Generated message from Leo"
    └── needsWhatsApp: true/false
```

**Behavior:**

- Keeps conversation context (last 10 messages)
- Automatically detects when to suggest WhatsApp:
  - Price/cost questions
  - Quote requests
  - Project hiring inquiries
  - Questions beyond Leo's knowledge
- 3-retry error handling
- Returns success even if Groq API fails (graceful degradation)

---

## 🎨 Visual Design

### Button Styling

**ChatBot Button (when closed):**

```
├─ Background: Navy-to-Blue gradient
├─ Icon: Legendary One Logo (32x32px)
├─ Shadow: Glow effect with Azure highlight
├─ Ring: Animated pulse ring (2.5s)
├─ Hover: Lifts up with enhanced glow
└─ Unread Badge: Lime green circle with count
```

**ChatBot Button (when open):**

```
├─ Icon: Changes to X (close icon)
├─ Ring: Stops animating
└─ Badge: Hidden
```

**WhatsApp Button:**

```
├─ Background: Green gradient (#25D366 → #128C7E)
├─ Icon: WhatsApp logo
├─ Shadow: Green glow effect
├─ Hover: Lifts up with enhanced glow
└─ Position: Stacked below chatbot
```

### Chat Window Styling

```
├─ Background: Subtle gradient (light to white)
├─ Header: Dark navy with gradient overlay
├─ Messages:
│   ├─ User: Blue gradient bubbles (right-aligned)
│   ├─ Leo: Gray bubbles with avatar (left-aligned)
│   └─ Time stamps: Subtle gray text
├─ Input: Slate-50 with focus ring
├─ Button: Azure gradient with animation
└─ Footer: Powered by Legendary One AI
```

---

## 🔧 Configuration

### Environment Variables

**File:** `.env`

### Vercel Deployment

Add to **Vercel Dashboard** → **Settings** → **Environment Variables**:

WhatsApp Link

**Current:** +91 7339596165

To change:

1. Update `WHATSAPP_URL` in `src/components/ChatBot.jsx`
2. Update href in `src/components/WhatsAppButton.jsx`

---

## 💬 AI Assistant Configuration

### System Prompt

**Location:** `api/chat.js` (lines 14-80)

**Personality:**

- Warm, friendly, and enthusiastic
- Professional yet conversational
- Confident and impressive
- Short, punchy responses (3-5 sentences max)

**Knowledge Base:**

- Legendary One IT Services
- Web Development (React, Next.js, Node.js, PHP, Laravel, WordPress)
- Mobile App Development (React Native, Flutter)
- Software Development (Enterprise, ERP, CRM)
- UI/UX Design (Figma, Adobe XD)
- Cloud & DevOps (AWS, GCP, Azure)
- E-commerce Solutions (Shopify, WooCommerce)
- Branding & Design Services
- Technical Solutions & Integration
- College Projects Support

**Pricing Strategy:**

- Never gives specific prices in chat
- Always suggests: "Very competitive! Let me connect you with our team for a free quote."
- Encourages WhatsApp for detailed pricing

### WhatsApp Triggers

Leo automatically suggests WhatsApp when user asks about:

- Pricing, costs, quotes, budget
- Hiring, starting a project, booking
- Speaking to a human
- Questions Leo can't answer accurately
- Complex technical requirements

---

## 🚀 How It Works

### User Flow

1. User arrives on any page
2. Sees floating button with **Legendary One logo**
3. Hovers/clicks button → Chat window opens (spring animation)
4. Sees greeting message + 5 quick suggestion chips
5. User types question or clicks suggestion
6. Leo responds with helpful information
7. If price/hiring question → WhatsApp card appears inline
8. User can click WhatsApp card to talk to human
9. Or continue chatting with Leo for more info

### Message Flow

```
User Input
   ↓
[Frontend Validation]
   ↓
POST /api/chat { messages: [...] }
   ↓
[Groq LLM Processing]
   ↓
Response { reply, needsWhatsApp }
   ↓
[Frontend Renders]
   ├─ Bot message with avatar
   ├─ Time stamp
   └─ WhatsApp card (if triggered)
```

---

## 📊 Analytics & Monitoring

### Tracking Conversations

Currently, conversations are stored in browser session memory. To persist:

**Future Enhancement:**

```javascript
// In api/chat.js, add:
const conversation = {
  id: generateUUID(),
  timestamp: new Date(),
  messages: req.body.messages,
  userEmail: req.body.email, // if available
  source: "chat-bot",
};
// Save to database...
```

### WhatsApp Redirect Count

The `needsWhatsApp` flag indicates when customers are directed to WhatsApp. Monitor this to understand:

- Which topics require human intervention
- Where Leo's knowledge is limited
- Common customer needs

---

## 🎯 Best Practices

### For Business

1. **Monitor Redirects:** If many users are directed to WhatsApp, update Leo's knowledge
2. **Update Pricing:** Regularly update the system prompt with current services/prices
3. **Feedback Loop:** Have team review Leo's responses to improve accuracy
4. **Response Time:** WhatsApp team should respond within 5-10 minutes for best conversions

### For Development

1. **Test Mobile:** Ensure buttons don't overlap with other content
2. **Logo Size:** Currently 32x32px—adjust if needed via `w-8 h-8` class
3. **Color Scheme:** Logo colors should align with site theme
4. **Accessibility:** All buttons have proper aria-labels and keyboard navigation

---

## 🔄 Future Enhancements

### Phase 2

- [ ] Conversation persistence (save to database)
- [ ] Email capture before WhatsApp redirect
- [ ] Custom greeting based on user location/time
- [ ] Multi-language support
- [ ] Sentiment analysis to detect frustrated users
- [ ] Integration with CRM (Salesforce, HubSpot)

### Phase 3

- [ ] Lead qualification before human handoff
- [ ] Product recommendation engine
- [ ] FAQ knowledge base expansion
- [ ] Analytics dashboard
- [ ] A/B testing of prompts

---

## 🐛 Troubleshooting

### Chatbot not responding

1. Check `.env` has valid `GROQ_API_KEY`
2. Verify Vercel has the key in env vars
3. Check browser console for API errors
4. Ensure API endpoint `/api/chat` is accessible

### Logo not displaying

1. Verify `/public/logo.png` exists
2. Check file is accessible via browser
3. Try clearing browser cache
4. Ensure image format is PNG/WebP

### Buttons overlapping

1. Check `bottom-5` and `bottom-[88px]` values
2. Adjust spacing if needed on mobile
3. Use media queries for different screen sizes

### WhatsApp link not working

1. Verify phone number: +91 7339596165
2. Check `WHATSAPP_URL` variable
3. Ensure user has WhatsApp installed
4. Test on both desktop and mobile

---

## 📞 Support Contacts

**WhatsApp:** +91 7339596165  
**Email:** legendaryoneff@gmail.com  
**Groq API:** https://console.groq.com

---

## ✅ Production Checklist

Before deploying to production:

- [ ] Groq API key added to Vercel env vars
- [ ] WhatsApp number verified (correct phone)
- [ ] Logo displays correctly on all devices
- [ ] Chat window responsive on mobile
- [ ] Buttons don't overlap with footer
- [ ] System prompt reviewed and updated
- [ ] WhatsApp team ready to handle redirects
- [ ] Test conversations on staging
- [ ] Analytics tracking set up
- [ ] Error handling tested
- [ ] Performance verified (chat latency < 3s)

---

**Version:** 1.0  
**Last Updated:** April 2026  
**Status:** ✅ Production Ready
