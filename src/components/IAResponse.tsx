import React from "react";
import ReactMarkdown from "react-markdown";

interface IAResponseProps {
  iaObservation: string;
}

const IAResponse = ({ iaObservation }: IAResponseProps) => (
  <div className="mt-4 p-6  bg-white shadow-md rounded-2xl border border-gray-200">
    <h2 className="text-xl font-semibold mb-3 text-gray-800">
      Observaciones de la IA
    </h2>

    {/* Renderiza Markdown con formato */}
    <div className="prose prose-sm max-w-none text-gray-700">
      <ReactMarkdown>{iaObservation}</ReactMarkdown>
    </div>
  </div>
);

export default IAResponse;
