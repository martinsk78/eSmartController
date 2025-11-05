interface DeviceCardProps {
  device: { id: number; name: string; power: number; limit: number; status: string };
  allowControl: boolean;
}

const DeviceCard = ({ device, allowControl }: DeviceCardProps) => {
  const handleToggle = () => {
    if (!allowControl) {
      alert("El control automático está deshabilitado.");
      return;
    }
    alert(`Dispositivo ${device.name} apagado por IA (simulado).`);
  };

  return (
    <div className="p-4 bg-white shadow rounded-2xl border w-[200px]">
      <h3 className="font-semibold">{device.name}</h3>
      <p>Consumo: {device.power} W (Límite: {device.limit} W)</p>
      <p className={device.status === "Alto consumo" ? "text-red-600" : "text-green-600"}>
        Estado: {device.status}
      </p>
      {device.status === "Alto consumo" && allowControl && (
        <button
          onClick={handleToggle}
          className="mt-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
        >
          Apagar automáticamente
        </button>
      )}
    </div>
  );
};

export default DeviceCard;
