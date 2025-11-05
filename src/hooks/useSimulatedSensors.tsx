export const simulateSensorData = (mode: string) => {
  const baseLoad = mode === "eco" ? 0.6 : mode === "vacaciones" ? 0.4 : 1.0;

  const devices = [
    { id: 1, name: "Heladera", limit: 150 },
    { id: 2, name: "PC escritorio", limit: 300 },
    { id: 3, name: "Aire acondicionado", limit: 800 },
    { id: 4, name: "TV Smart", limit: 200 },
  ];

  return devices.map((d) => {
    const power = Math.round(d.limit * baseLoad * (0.8 + Math.random() * 0.4));
    return {
      ...d,
      power,
      status: power > d.limit ? "Alto consumo" : "Normal",
    };
  });
};
