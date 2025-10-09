import React, { createContext, useState, useEffect } from "react";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const defaultContacts = [
    {
      id: "1",
      name: "Martina López",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      messages: [
        { text: "Q onda perro", time: "10:00 AM", sender: "me" },
        { text: "Todo bien jefe como andas", time: "10:01 AM", sender: "contact" },
        { text: "Lujo, total.", time: "10:02 AM", sender: "me" },
        { text: "Jajaj q tipo", time: "10:03 AM", sender: "contact" },
      ],
    },
    {
      id: "2",
      name: "Santiago Ruiz",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      messages: [
        { text: "Wep", time: "11:15 AM", sender: "me" },
        { text: "Wep", time: "11:16 AM", sender: "contact" },
        { text: "Ahre", time: "11:17 AM", sender: "me" },
        { text: "Pf", time: "11:18 AM", sender: "contact" },
      ],
    },
    {
      id: "3",
      name: "Camila Fernández",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      messages: [
        { text: "Eyeyeyey", time: "09:45 AM", sender: "me" },
        { text: "Si q paso", time: "09:46 AM", sender: "contact" },
        { text: "Prestame 5 mil", time: "09:47 AM", sender: "me" },
        { text: "...", time: "09:48 AM", sender: "contact" },
      ],
    },
    {
      id: "4",
      name: "Lucas Pereyra",
      avatar: "https://randomuser.me/api/portraits/men/21.jpg",
      messages: [
        { text: "Todo mal con vos", time: "02:30 PM", sender: "me" },
        { text: "Ahre q hice ahora", time: "02:31 PM", sender: "contact" },
        { text: "No se date cuenta.", time: "02:32 PM", sender: "me" },
        { text: "Siempre lo mismo..", time: "02:33 PM", sender: "contact" },
      ],
    },
  ];

  const [contacts, setContacts] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("contacts"));
      return saved &&  defaultContacts;
    } catch {
      return defaultContacts;
    }
  });

  const [activeChatId, setActiveChatId] = useState(null);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => setContacts((prev) => [contact, ...prev]);
const addMessageToContact = (contactId, message) => {
  setContacts((prev) =>
    prev.map((c) =>
      c.id === contactId
        ? { ...c, messages: [...c.messages, message] }
        : c
    )
  );
};

  return (
    <ChatContext.Provider
      value={{ contacts, addContact, activeChatId, addMessageToContact, setActiveChatId }}
    >
      {children}
    </ChatContext.Provider>
  );
};
