import React, { createContext, useState, useEffect } from "react";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [activeChatId, setActiveChatId] = useState(null);

  // Cargar desde localStorage solo en cliente
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("contacts"));
      if (saved) setContacts(saved);
      else {
        // Si no hay nada guardado, poner contactos por defecto
        setContacts([
          {
            id: "1",
            name: "Martín",
            img: "https://i.pravatar.cc/150?img=12",
            messages: [
              { text: "Hola!", time: "10:00" },
              { text: "Cómo estás?", time: "10:01" },
              { text: "Todo bien?", time: "10:02" },
              { text: "Genial 😎", time: "10:03" },
            ],
          },
          {
            id: "2",
            name: "Lucía",
            img: "https://i.pravatar.cc/150?img=24",
            messages: [
              { text: "Hola Martín", time: "09:00" },
              { text: "Qué tal tu día?", time: "09:05" },
              { text: "Todo en orden", time: "09:06" },
              { text: "Perfecto!", time: "09:07" },
            ],
          },
          {
            id: "3",
            name: "Carlos",
            img: "https://i.pravatar.cc/150?img=32",
            messages: [
              { text: "Ey!", time: "11:00" },
              { text: "Vamos a la reunión?", time: "11:02" },
              { text: "Sí, voy llegando", time: "11:03" },
              { text: "Ok, te espero", time: "11:04" },
            ],
          },
          {
            id: "4",
            name: "Ana",
            img: "https://i.pravatar.cc/150?img=44",
            messages: [
              { text: "Hola!", time: "12:00" },
              { text: "Qué haces?", time: "12:01" },
              { text: "Nada especial", time: "12:02" },
              { text: "Genial", time: "12:03" },
            ],
          },
        ]);
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  // Guardar en localStorage cada vez que cambian los contactos
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => setContacts((prev) => [contact, ...prev]);

  return (
    <ChatContext.Provider value={{ contacts, addContact, activeChatId, setActiveChatId }}>
      {children}
    </ChatContext.Provider>
  );
};
