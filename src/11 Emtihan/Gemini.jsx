import { useEffect, useRef, useState } from 'react';


const STORAGE_KEY = 'ai-chat-messages';


export default function ChatMessage() {
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const [input, setInput] = useState(''); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
         {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: input }] }]
        }),
      });

      const data = await response.json();
      const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Жауап табылмады.';
      setMessages([...newMessages, { sender: 'ai', text: reply }]);
    } catch (err) {
      setError("Қате болды. Қайта көріңіз.");
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="bg-white p-4 shadow-md flex justify-between items-center">
        <h1 className="text-xl font-semibold text-black">Gemini AI Сұрақ-Жауап</h1>
        <button onClick={clearChat} className="text-sm text-white">Тазалау</button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        {messages.map((msg, i) => (
          <div
            key={i}

            className={`max-w-2xl mx-auto px-4 py-3 rounded-2xl shadow-sm whitespace-pre-wrap text-sm md:text-base ${
              msg.sender === 'user'
                ? 'text-black bg-gray-400 self-end text-right'
                : 'bg-white dark:bg-gray-400 text-black self-start text-left'
            }`}
          >
            {msg.text}
          </div>
        ))}

        {loading && (
          <div className="max-w-2xl mx-auto text-center text-gray-500 dark:text-gray-400">Жүктелуде...</div>
        )}
        
        {error && (
          <div className="max-w-2xl mx-auto text-center text-red-500">{error}</div>
        )}

        <div ref={bottomRef} />
      </div>


      <div className="dark:bg-gray-400 p-4 shadow-inner">
        <div className="max-w-2xl mx-auto flex gap-2">
          <input
            className="flex-1 p-2 rounded-xl border text-black dark:text-white focus:outline-none focus:ring-2"
            placeholder="Сұрағыңызды жазыңыз..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-xl transition"
            onClick={sendMessage}
            disabled={loading}
          >
            Жіберу
          </button>
        </div>
      </div>
    </div>
  );
}
