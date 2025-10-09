import React, { createContext, useState, useEffect } from "react";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [activeChatId, setActiveChatId] = useState(null);

  // Cargar contactos desde localStorage o usar valores por defecto
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("contacts"));
      if (saved) {
        setContacts(saved);
      } else {
        // Contactos por defecto
        setContacts([
          {
            id: "1",
            name: "Martín",
            img: "https://randomuser.me/api/portraits/men/32.jpg",
            messages: [
              { text: "Hola!", time: "10:00", sender: "contact" },
              { text: "Hola, cómo estás?", time: "10:01", sender: "me" },
              { text: "Todo bien, gracias", time: "10:02", sender: "contact" },
              { text: "Genial 😎", time: "10:03", sender: "me" },
            ],
          },
          {
            id: "2",
            name: "Lucía",
            img: "https://randomuser.me/api/portraits/women/65.jpg",
            messages: [
              { text: "Hola Martín", time: "09:00", sender: "contact" },
              { text: "Qué tal tu día?", time: "09:05", sender: "contact" },
              { text: "Todo en orden", time: "09:06", sender: "me" },
              { text: "Perfecto!", time: "09:07", sender: "contact" },
            ],
          },
          {
            id: "3",
            name: "Carlos",
            img: "https://randomuser.me/api/portraits/men/45.jpg",
            messages: [
              { text: "Ey!", time: "11:00", sender: "contact" },
              { text: "Vamos a la reunión?", time: "11:02", sender: "contact" },
              { text: "Sí, voy llegando", time: "11:03", sender: "me" },
              { text: "Ok, te espero", time: "11:04", sender: "contact" },
            ],
          },
          {
            id: "4",
            name: "Ana",
            img: "https://randomuser.me/api/portraits/women/44.jpg",
            messages: [
              { text: "Hola!", time: "12:00", sender: "contact" },
              { text: "Qué haces?", time: "12:01", sender: "contact" },
              { text: "Nada especial", time: "12:02", sender: "me" },
              { text: "Genial", time: "12:03", sender: "contact" },
            ],
          },
        ]);
      }
    } catch (err) {
      console.error("Error cargando contactos:", err);
    }
  }, []);

  // Guardar contactos en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => setContacts((prev) => [contact, ...prev]);

  return (
    <ChatContext.Provider
      value={{ contacts, addContact, activeChatId, setActiveChatId }}
    >
      {children}
    </ChatContext.Provider>
  );
};
