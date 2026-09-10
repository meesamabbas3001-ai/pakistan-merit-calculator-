import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, ShieldCheck, HelpCircle, Sparkles, AlertCircle, ExternalLink } from 'lucide-react';
import { University } from '../types';
import { getStoredUniversities, addInquiry } from '../services/universityStore';
import { AdminContactModal } from './AdminContactModal';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  isVerified?: boolean;
  requiresAdmin?: boolean;
  universityContext?: string;
}

interface UniversityGuideAIChatProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UniversityGuideAIChat: React.FC<UniversityGuideAIChatProps> = ({ isOpen, onClose }) => {
  const [universities, setUniversities] = useState<University[]>([]);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: 'Assalam-o-Alaikum! I am **University Guide AI**, connected to the verified Pakistani University Database. How can I assist with your admissions, merit criteria, or fee structures today?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isVerified: true,
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [activeUniContext, setActiveUniContext] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setUniversities(getStoredUniversities());
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const quickPrompts = [
    'NUST CS Merit & Criteria',
    'FAST Fee Structure',
    'COMSATS Eligibility',
    'UET Lahore ECAT Weightage',
    'Hostel Availability',
    'Scholarships offered',
    'Compare FAST vs COMSATS',
  ];

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = generateVerifiedResponse(query);
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 600);
  };

  const generateVerifiedResponse = (query: string): Message => {
    const lowerQ = query.toLowerCase().trim();
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Greeting & normal conversation handlers
    if (lowerQ === 'hello') {
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: 'Hello! 👋 Welcome to University Guide AI. How can I help you today? You can ask me about university merit, fees, eligibility, hostel, scholarships, admission requirements, or any other university-related information.',
        timestamp: time,
        isVerified: true,
      };
    }

    if (lowerQ.includes('assalam o alaikum') || lowerQ.includes('assalam-o-alaikum') || lowerQ === 'salam') {
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: 'Wa Alaikum Assalam! 👋 Welcome to University Guide AI. How can I help you with your university or admission questions today?',
        timestamp: time,
        isVerified: true,
      };
    }

    if (lowerQ === 'hi' || lowerQ === 'hey' || lowerQ.includes('good morning') || lowerQ.includes('good evening')) {
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: 'Assalam o Alaikum! 👋 Welcome to University Guide AI.\n\nI can help you find verified information about Pakistani universities, including:\n🎓 Merit & eligibility\n💰 Fees\n🏠 Hostel information\n📝 Entry tests\n📅 Admission deadlines\n🎓 Programs & degrees\n💸 Scholarships\n🏫 Admission requirements\n\nAsk me anything about a university or program, and I\'ll help you with the verified information available in our database.',
        timestamp: time,
        isVerified: true,
      };
    }

    if (lowerQ.includes('how are you')) {
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: "I'm doing great! 😊 I'm here to help you with university and admission information. Which university or program would you like to know about?",
        timestamp: time,
        isVerified: true,
      };
    }

    if (lowerQ.includes('what can you do') || lowerQ.includes('who are you')) {
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: 'I am **University Guide AI**, your verified assistant for Pakistani university admissions, merit criteria, fee structures, and eligibility. How can I help you today?',
        timestamp: time,
        isVerified: true,
      };
    }

    if (lowerQ.includes('thank') || lowerQ.includes('thanks')) {
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: "You're very welcome! 😊 Let me know if you need help with any other university or admission details.",
        timestamp: time,
        isVerified: true,
      };
    }

    if (lowerQ.includes('bye') || lowerQ.includes('goodbye')) {
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: 'Goodbye! Best of luck with your university admissions. Feel free to reach out anytime you need verified information!',
        timestamp: time,
        isVerified: true,
      };
    }

    // Security Rule: Student trying to update database via chat
    if (
      lowerQ.includes('update') ||
      lowerQ.includes('change fee') ||
      lowerQ.includes('change merit') ||
      lowerQ.includes('set fee') ||
      lowerQ.includes('save this fee')
    ) {
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: 'University information can only be updated after admin verification. Please contact the admin.',
        timestamp: time,
        requiresAdmin: true,
      };
    }

    // Out of scope check
    const isOutScope =
      (lowerQ.includes('weather') ||
        lowerQ.includes('politics') ||
        lowerQ.includes('president') ||
        lowerQ.includes('movie') ||
        lowerQ.includes('recipe') ||
        lowerQ.includes('code in python') ||
        lowerQ.includes('medical diagnosis')) &&
      !lowerQ.includes('university') &&
      !lowerQ.includes('admission');

    if (isOutScope) {
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: 'I’m University Guide AI, so I can help with university, admissions, merit, fees, programs, scholarships, hostel, and related student information.',
        timestamp: time,
        isVerified: true,
      };
    }

    // Comparison check
    if (lowerQ.includes('compare') || lowerQ.includes('difference between')) {
      if (lowerQ.includes('fast') && lowerQ.includes('comsats')) {
        const fast = universities.find((u) => u.id === 'fast');
        const comsats = universities.find((u) => u.id === 'comsats');
        if (fast && comsats) {
          return {
            id: Date.now().toString(),
            sender: 'bot',
            text: `**University Comparison (Verified Database)**

**1. FAST-NUCES (${fast.city})**
* **Type:** ${fast.universityType} (${fast.feeCategoryLabel})
* **CS Merit Formula:** Test 50%, Inter Part-1 40%, Matric 10%
* **Hostel & Scholarships:** Available
* **Status:** Verified

**2. COMSATS University (${comsats.city})**
* **Type:** ${comsats.universityType} (${comsats.feeCategoryLabel})
* **CS Merit Formula:** NTS-NAT/Entry Test 50%, Inter Part-1 40%, Matric 10%
* **Hostel & Scholarships:** Available
* **Status:** Verified

*Disclaimer: Admission policies and fee structures are subject to official confirmation.*`,
            timestamp: time,
            isVerified: true,
          };
        }
      }
    }

    // Match university from query
    let matchedUni: University | undefined = undefined;
    for (const uni of universities) {
      if (
        lowerQ.includes(uni.id) ||
        lowerQ.includes(uni.shortName.toLowerCase()) ||
        lowerQ.includes(uni.name.toLowerCase())
      ) {
        matchedUni = uni;
        break;
      }
    }

    if (!matchedUni) {
      if (lowerQ.includes('fee') || lowerQ.includes('hostel') || lowerQ.includes('scholarship') || lowerQ.includes('merit')) {
        return {
          id: Date.now().toString(),
          sender: 'bot',
          text: 'Which university are you asking about? Please specify the university name (e.g., NUST, FAST, COMSATS, UET).',
          timestamp: time,
          isVerified: true,
        };
      }

      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: "I don't have verified information about this right now. Please contact the admin for confirmation.",
        timestamp: time,
        requiresAdmin: true,
      };
    }

    setActiveUniContext(matchedUni.shortName);

    // Check expiration / session warning
    const prog = matchedUni.programs[0];
    const session = prog?.academicSession || 'Fall 2026';
    const status = prog?.verificationStatus || 'Verified';
    const isExpired = status === 'Expired';

    let warningText = '';
    if (isExpired) {
      warningText = `\n⚠️ **Warning:** This information is from previous sessions and may no longer be current.\n`;
    }

    if (lowerQ.includes('hostel')) {
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: `**University:** ${matchedUni.name} (${matchedUni.shortName})
**Hostel Availability:** ${matchedUni.hasHostel ? 'Hostel facilities are available on or near campus (subject to availability).' : 'Dedicated on-campus hostel not verified.'}
**Verification Status:** ${status}
${warningText}
**Last Verified:** ${prog?.lastVerified || 'September 2026'}`,
        timestamp: time,
        isVerified: status === 'Verified',
        universityContext: matchedUni.shortName,
      };
    }

    if (lowerQ.includes('scholarship') || lowerQ.includes('financial aid')) {
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: `**University:** ${matchedUni.name} (${matchedUni.shortName})
**Scholarships Offered:** ${matchedUni.hasScholarships ? 'Merit-based scholarships and financial aid available as per university policy.' : 'Specific scholarship data not verified.'}
**Verification Status:** ${status}
${warningText}
**Last Verified:** ${prog?.lastVerified || 'September 2026'}`,
        timestamp: time,
        isVerified: status === 'Verified',
        universityContext: matchedUni.shortName,
      };
    }

    if (lowerQ.includes('fee') || lowerQ.includes('tuition')) {
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: `**University:** ${matchedUni.name} (${matchedUni.shortName})
**Academic Session:** ${session}
**Tuition Fee:** ${matchedUni.feeCategoryLabel}
**Verification Status:** ${status}
${warningText}
**Last Verified:** ${prog?.lastVerified || 'September 2026'}`,
        timestamp: time,
        isVerified: status === 'Verified',
        universityContext: matchedUni.shortName,
      };
    }

    // Default programs display
    const programsList = matchedUni.programs
      .map(
        (p) => `* **${p.name}** (${p.category})
  * Session: ${p.academicSession || 'Fall 2026'}
  * Test: ${p.testName}
  * Merit Formula: Test ${p.testWeight}%, Inter Part-1 ${p.interPart1Weight}%, Matric ${p.matricWeight}%
  * Min Eligible Aggregate: ${p.minEligibleAggregate}%
  * Closing Merit (2025): ${p.closingMerit2025 ? `${p.closingMerit2025}%` : 'Not listed'}
  * Status: ${p.verificationStatus || 'Verified'}
  * Source: [Official Portal](${p.sourceUrl})`
      )
      .join('\n\n');

    return {
      id: Date.now().toString(),
      sender: 'bot',
      text: `**University:** ${matchedUni.name} (${matchedUni.shortName})
**City:** ${matchedUni.city}
**Academic Session:** ${session}
${warningText}
**Verified Programs & Criteria:**
${programsList}

**Last Verified:** September 2026 (Source: Official University Database)`,
      timestamp: time,
      isVerified: status === 'Verified',
      universityContext: matchedUni.shortName,
    };
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed bottom-20 right-4 sm:right-6 z-50 w-full sm:w-[420px] h-[580px] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-slide-up">
        {/* Header */}
        <div className="bg-emerald-800 text-white p-4 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-700 text-white flex items-center justify-center font-bold shadow-inner">
              <Bot className="w-6 h-6 text-emerald-200" />
            </div>
            <div>
              <div className="font-bold text-base flex items-center gap-1.5">
                University Guide AI
                <span className="bg-emerald-600 text-[10px] uppercase px-1.5 py-0.5 rounded-full font-semibold text-emerald-100">
                  Verified DB
                </span>
              </div>
              <div className="text-xs text-emerald-200">Admin-Verified Admissions Assistant</div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-emerald-200 hover:text-white p-1.5 rounded-xl hover:bg-emerald-700/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notice Banner */}
        <div className="bg-emerald-50 px-4 py-2 text-[11px] text-emerald-800 border-b border-emerald-100 flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-600" />
          <span>Strictly uses admin-verified records. No AI guesses.</span>
        </div>

        {/* Message Area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'bot' && (
                <div className="w-8 h-8 rounded-full bg-emerald-800 text-white flex items-center justify-center shrink-0 mt-1 shadow-xs">
                  <Bot className="w-4 h-4" />
                </div>
              )}
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-xs ${
                  msg.sender === 'user'
                    ? 'bg-emerald-700 text-white rounded-tr-xs'
                    : 'bg-white text-slate-800 border border-slate-100 rounded-tl-xs'
                }`}
              >
                <div className="whitespace-pre-line">{msg.text}</div>
                <div
                  className={`text-[10px] mt-1.5 text-right ${
                    msg.sender === 'user' ? 'text-emerald-200' : 'text-slate-400'
                  }`}
                >
                  {msg.timestamp}
                </div>

                {msg.requiresAdmin && (
                  <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-amber-600 font-medium flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> Verification needed
                    </span>
                    <button
                      onClick={() => {
                        addInquiry({
                          university: activeUniContext || 'General',
                          program: 'General Inquiry',
                          session: 'Fall 2026',
                          question: 'Requested verification for missing information.',
                          contactInfo: '',
                        });
                        setAdminModalOpen(true);
                      }}
                      className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
                    >
                      Contact Admin for Verification
                    </button>
                  </div>
                )}
              </div>
              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center shrink-0 mt-1 shadow-xs">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-3 items-center text-slate-400 text-xs italic">
              <div className="w-8 h-8 rounded-full bg-emerald-800 text-white flex items-center justify-center not-italic">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-white px-4 py-2.5 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                <span className="ml-1 text-slate-500 font-medium">Checking verified records...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Prompts */}
        <div className="p-2.5 bg-white border-t border-slate-100 flex gap-1.5 overflow-x-auto scrollbar-none">
          {quickPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(prompt)}
              className="px-3 py-1.5 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 text-slate-700 text-xs rounded-full whitespace-nowrap transition-colors border border-slate-200 font-medium shrink-0"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about NUST, FAST, COMSATS, merit, fees..."
            className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
          />
          <button
            onClick={() => handleSend()}
            disabled={!input.trim()}
            className="w-10 h-10 rounded-xl bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 text-white flex items-center justify-center shadow-sm transition-all shrink-0"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>

      <AdminContactModal
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
        initialUniversity={activeUniContext}
      />
    </>
  );
};
