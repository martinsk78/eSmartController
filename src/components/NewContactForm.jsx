import React, { useState, useContext } from "react";
import { ChatContext } from "../contexts/ChatContext";
import { v4 as uuidv4 } from "uuid";

export default function NewContactForm() {
  const { addContact } = useContext(ChatContext);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const submit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    addContact({
      id: uuidv4(),
      name: name.trim(),
      avatar,
      messages: [],
    });
    setName("");
    setAvatar(null);
  };

  return (
    <form
      onSubmit={submit}
      className="flex flex-col gap-4 p-5 bg-white border border-gray-200 rounded-xl shadow-sm"
    >
      <div className="flex flex-col items-center">
        <label
          htmlFor="avatar"
          className="cursor-pointer relative group"
        >
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-300 bg-gray-100 flex items-center justify-center">
            {avatar ? (
              <img
                src={avatar}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-gray-400 text-sm">+ Imagen</span>
            )}
          </div>
          <input
            id="avatar"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </label>
      </div>
      <label className="flex flex-col text-gray-700 font-medium">
        Nombre:
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ej. Martín"
          className="mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-shadow text-gray-800"
        />
      </label>
      <button
        type="submit"
        className="w-full bg-indigo-500 text-white py-2 rounded-lg font-medium hover:bg-indigo-600 active:scale-95 transition-transform"
      >
        Agregar
      </button>
    </form>
  );
}
