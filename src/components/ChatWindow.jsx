import React, { useState, useContext, useEffect } from "react";
import { ChatContext } from "../contexts/ChatContext";
import backgroundImage from '../assets/patternBG.jpg'
export default function ChatWindow({ contact }) {
  const { addMessageToContact } = useContext(ChatContext);
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMsg = {
      text: input.trim(),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      sender: "me",
    };

    addMessageToContact(contact.id, newMsg);
    setInput("");
  };

  return (
    <div className="flex flex-col pb-16 md:pb-0 h-full md:h-[40rem] overflow-hidden  shadow-sm">
      <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",      
        backgroundRepeat: "no-repeat", 
        backgroundPosition: "center", 
      }}
>
        {contact.messages.map((m, i) => (
          <div
            key={i}
            className={`flex items-end ${
              m.sender === "me" ? "justify-end" : "justify-start"
            }`}
          >
            {m.sender === "contact" && (
              <img
                src={contact.avatar}
                alt={contact.name}
                className="w-8 h-8 rounded-full mr-2"
              />
            )}

            <div
              className={`px-4 py-2 rounded-lg max-w-[70%] shadow-sm ${
                m.sender === "me"
                  ? "bg-indigo-400 text-gray-50 rounded-br-none"
                  : "bg-gray-100 text-gray-800 rounded-bl-none"
              }`}
            >
              <span>{m.text}</span>
              <small className={`block text-xs mt-1 ${m.sender == 'me' ? 'text-white' : 'text-gray-800'}  text-right`}>
                {m.time}
              </small>
            </div>
          </div>
        ))}
      </div>

      <form
        onSubmit={sendMessage}
        className="flex items-center gap-2 p-3 border-t border-gray-200 bg-gray-50 rounded-b-xl"
      >
        <input
          placeholder="Escribí un mensaje..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-1 md:px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent text-gray-800"
        />
        <button
          type="submit"
          className="px-1 md:px-4 py-2 bg-indigo-500 text-white rounded-lg font-medium hover:bg-indigo-600 active:scale-95 transition-transform"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
