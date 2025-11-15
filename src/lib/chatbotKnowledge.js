
export const knowledgeBase = {
  greetings: {
    keywords: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'yo', 'start'],
    response: "Hi! 👋 Welcome to Terravian Landscaping. I'm your virtual assistant. How can I help you today? You can ask me about our services, pricing, or service areas!",
    quickReplies: ["What services do you offer?", "Snow Plowing Info", "Get a Free Quote", "Service Areas"]
  },
  services: {
    keywords: ['service', 'offer', 'do', 'work', 'job', 'help'],
    response: "We offer comprehensive property maintenance services including:\n\n❄️ **Snow Plowing & Salting** (24/7 Emergency Response)\n🌱 **Lawn Care & Mowing**\n🍂 **Seasonal Cleanups** (Spring/Fall)\n🧱 **Hardscaping** (Patios, Walkways)\n\nWhich service would you like to know more about?",
    quickReplies: ["Snow Plowing", "Lawn Care", "Cleanups", "Hardscaping"]
  },
  snowPlowing: {
    keywords: ['snow', 'plow', 'ice', 'salt', 'winter', 'storm'],
    response: "Our Snow Plowing services are available 24/7 for both residential and commercial properties! 🚜❄️\n\nWe offer:\n• **Plowing & Shoveling**\n• **De-icing & Salting**\n• **Walkway Clearing**\n• **Emergency Response**\n\nWe are currently booking contracts for the Winter 2025-2026 season!",
    quickReplies: ["Get a Snow Quote", "Service Areas", "Back to Services"]
  },
  lawnCare: {
    keywords: ['lawn', 'grass', 'mow', 'cut', 'fertiliz', 'weed', 'garden'],
    response: "Our Lawn Care services keep your property looking pristine! 🌿\n\nIncludes:\n• **Weekly/Bi-weekly Mowing**\n• **Edging & Trimming**\n• **Fertilization Programs**\n• **Weed Control**\n\nWould you like a quote for the upcoming season?",
    quickReplies: ["Get Lawn Quote", "See Photos", "Back to Services"]
  },
  pricing: {
    keywords: ['price', 'cost', 'quote', 'rate', 'expensive', 'cheap', 'charge', 'money'],
    response: "Our pricing depends on the size of your property and the specific services you need. 💰\n\nSince every property is unique, we offer **Free Quotes**! You can request one right here or call us at (203) 514-1452.",
    quickReplies: ["Request Free Quote", "Call Now"]
  },
  serviceAreas: {
    keywords: ['area', 'location', 'where', 'city', 'town', 'meriden', 'wallingford', 'cheshire'],
    response: "We proudly serve the following areas in Connecticut within a 20-mile radius of Meriden: 📍\n\n• **Meriden**\n• **Wallingford**\n• **Cheshire**\n• **Middletown**\n• **Durham**\n• **North Haven**\n• **Southington**",
    quickReplies: ["Are you in my town?", "Contact Us"]
  },
  hours: {
    keywords: ['hour', 'open', 'close', 'time', 'when'],
    response: "Here are our hours of operation: ⏰\n\n**Snow Plowing:** 24/7 Emergency Service during storms.\n**Landscaping:** Mon-Sun, 7:00 AM - 7:00 PM.\n\nWe are always available for inquiries via email!",
    quickReplies: ["Contact Info", "Book Service"]
  },
  contact: {
    keywords: ['contact', 'phone', 'email', 'call', 'reach', 'number', 'address'],
    response: "You can reach us directly:\n\n📞 **Phone:** (203) 514-1452\n📧 **Email:** terravianlandscaping@gmail.com\n📍 **Location:** Meriden, CT\n\nFeel free to call or text us anytime!",
    quickReplies: ["Call Now", "Email Us"]
  },
  insurance: {
    keywords: ['insur', 'license', 'safe', 'damage', 'cover'],
    response: "Yes! Terravian Landscaping is **Fully Licensed & Insured**. 🛡️\n\nWe prioritize safety and property protection in all our work. You can have peace of mind knowing your property is in professional hands.",
    quickReplies: ["See Reviews", "Get Quote"]
  },
  hardscaping: {
    keywords: ['hardscape', 'patio', 'walkway', 'stone', 'wall', 'fire', 'pit', 'paver'],
    response: "We design and install beautiful hardscaping features! 🧱\n\n• **Patios & Walkways**\n• **Retaining Walls**\n• **Fire Pits**\n• **Stone Work**\n\nLet's transform your outdoor living space!",
    quickReplies: ["Get Hardscape Quote", "View Gallery"]
  },
  farewell: {
    keywords: ['bye', 'goodbye', 'thanks', 'thank', 'later', 'cya'],
    response: "You're welcome! Thanks for chatting with Terravian Landscaping. Have a wonderful day! 🌿👋",
    quickReplies: ["Restart Chat"]
  },
  default: {
    keywords: [],
    response: "I'm not quite sure I understand that specific question. 🤔\n\nHowever, I can help you with **Services**, **Pricing**, or **Scheduling**. You can also call us directly at (203) 514-1452 for immediate assistance.",
    quickReplies: ["Show Services", "Contact Info", "Get a Quote"]
  }
};

export const getChatbotResponse = (message) => {
  const lowerMsg = message.toLowerCase();
  
  // Find matching category
  const categoryKey = Object.keys(knowledgeBase).find(key => {
    if (key === 'default') return false;
    return knowledgeBase[key].keywords.some(keyword => lowerMsg.includes(keyword));
  });

  const match = knowledgeBase[categoryKey] || knowledgeBase.default;
  
  // Calculate a "natural" delay based on response length (min 1s, max 2.5s)
  const delay = Math.min(2500, Math.max(1000, match.response.length * 20));

  return {
    response: match.response,
    quickReplies: match.quickReplies,
    delay
  };
};
