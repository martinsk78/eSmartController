import React from "react";

export default function ContactItem({ contact }) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white hover:bg-gray-100 transition-colors cursor-pointer shadow-sm border border-gray-200">
      <img
        src={contact.avatar || "https://via.placeholder.com/40"}
        alt={contact.name}
        className="w-10 h-10 rounded-full object-cover border border-gray-300"
      />
      <strong className="text-gray-800 font-medium">{contact.name}</strong>
    </div>
  );
}
