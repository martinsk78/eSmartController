import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ChatContext } from "../contexts/ChatContext";
import ChatWindow from "../components/ChatWindow";

export default function ChatPage() {
  const { id } = useParams();
  const { contacts } = useContext(ChatContext);
  const contact = contacts.find((c) => c.id === id);

  if (!contact)
    return (
      <div className="flex items-center justify-center h-full text-gray-500">
        <p>Chat no encontrado</p>
      </div>
    );

  return (
    <div className="flex items-center justify-center flex-col h-full w-full overflow-hidden">
      <div className="w-full md:w-1/2 rounded-lg h-full  md:mt-20 ">
      <header className="flex items-center justify-between px-6 py-3 bg-gray-100 border-b border-gray-200 shadow-sm rounded-t-xl">
        <h2 className="text-lg font-semibold text-gray-800">
          {contact.name}
        </h2>
      </header>
      <div className="flex-1 h-full  overflow-hidden bg-gray-50 rounded-b-xl">
        <ChatWindow contact={contact} />
      </div>
      </div>
    </div>
  );
}
