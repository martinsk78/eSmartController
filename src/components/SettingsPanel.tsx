const SettingsPanel = () => (
  <div className="p-4 bg-white shadow rounded-2xl border mb-4">
    <h2 className="font-semibold mb-2">Parámetros configurables</h2>
    <ul className="list-disc list-inside text-sm text-gray-700">
      <li>Definir límites de consumo (W) por dispositivo.</li>
      <li>Ajustar sensibilidad de alertas.</li>
      <li>Activar o desactivar recomendaciones automáticas.</li>
      <li>Seleccionar modo “Normal”, “Eco” o “Vacaciones”.</li>
    </ul>
  </div>
);

export default SettingsPanel;
