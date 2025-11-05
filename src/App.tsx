import { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard.js";
import SettingsPanel from "./components/SettingsPanel.js";
import IAResponse from "./components/IAResponse.js";
import { getEnergyInsights } from "./utils/geminiApi.js";

function App() {
  const [mode, setMode] = useState<"normal" | "eco" | "vacaciones">("normal");
  const [allowControl, setAllowControl] = useState(false);
  const [iaObservation, setIaObservation] = useState<string>("");
  
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Simulación IA Energética ⚡</h1>
        <div className="flex items-center gap-3">
          <select
            value={mode}
            onChange={(e) => setMode(e.target.value as any)}
            className="border rounded p-1 bg-white"
          >
            <option value="normal">Normal</option>
            <option value="eco">Eco</option>
            <option value="vacaciones">Vacaciones</option>
          </select>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={allowControl}
              onChange={(e) => setAllowControl(e.target.checked)}
            />
            <span>Permitir control automático</span>
          </label>
        </div>
      </header>

      <main className="flex gap-4">
        <div className="md:col-span-2">
          <Dashboard
            mode={mode}
            allowControl={allowControl}
            setIaObservation={setIaObservation}
          />
        </div>
        <div>
          <SettingsPanel />
          <IAResponse iaObservation={iaObservation} /> 
         </div>
      </main>
      {/* {iaObservation} */}
    </div>
  );
}

export default App;
