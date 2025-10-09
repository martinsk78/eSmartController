import React, { useContext } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ChatContext } from "../contexts/ChatContext";
import ContactItem from "../components/ContactItem";
import NewContactForm from "../components/NewContactForm";
import {
  Cog6ToothIcon,
  PlusCircleIcon,
  UserCircleIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  const { contacts } = useContext(ChatContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q") || "";

  const filtered = contacts.filter((c) =>
    c.name.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <main className="flex h-full bg-gray-50 text-gray-800">
      <aside className="w-full md:w-1/3 lg:w-1/4 border-r border-gray-200 bg-white flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <NewContactForm />
        </div>

        <div className="p-4 border-b border-gray-200">
          <input
            placeholder="Buscar..."
            value={q}
            onChange={(e) => setSearchParams({ q: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
          />
        </div>
{/* Barra de “categorías” falsa abajo */}
<div className="flex justify-around items-center p-3 border-y border-gray-200">
  <button className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 font-medium hover:bg-indigo-100 transition">
    Todos
  </button>
  <button className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 font-medium hover:bg-indigo-100 transition">
    Favoritos
  </button>
  <button className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 font-medium hover:bg-indigo-100 transition">
    Familia
  </button>
  <button className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 font-medium hover:bg-indigo-100 transition">
    Trabajo
  </button>
</div>

        <ul className="flex-1 overflow-y-auto p-3 space-y-2">
          {filtered.map((c) => (
            <li key={c.id}>
              <Link to={`/chat/${c.id}`}>
                <ContactItem contact={c} />
              </Link>
            </li>
          ))}
        </ul>

        {/* Barra de iconos abajo */}
        <div className="flex justify-around items-center p-3 border-t border-gray-200">
          <button className="p-2 rounded-full hover:bg-gray-100 transition">
            <PlusCircleIcon className="w-6 h-6 text-gray-600" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 transition">
            <ChatBubbleLeftRightIcon className="w-6 h-6 text-gray-600" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 transition">
            <UserCircleIcon className="w-6 h-6 text-gray-600" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 transition">
            <Cog6ToothIcon className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </aside>

      <section className="hidden md:flex flex-1 items-center justify-center bg-gray-100">
        <p className="text-gray-500 text-lg">
          Selecciona un chat al cual ingresar
        </p>
      </section>
    </main>
  );
}
