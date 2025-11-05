import { useEffect, useState } from "react";
import DeviceCard from "./DeviceCard.js";
import { simulateSensorData } from "../hooks/useSimulatedSensors.js";
import { getEnergyInsights } from "../utils/geminiApi.js";

interface DashboardProps {
  mode: "normal" | "eco" | "vacaciones";
  allowControl: boolean;
  setIaObservation: (msg: string) => void;
}

const Dashboard = ({ mode, allowControl, setIaObservation }: DashboardProps) => {
  const [devices, setDevices] = useState<any[]>([]);

  
  useEffect(() => {
    async function fetchInsight(){
      const data = simulateSensorData(mode);
      console.log(data);
      setDevices(data);
      const sensorData = {
        voltage: 220,
        current: data.reduce((sum, device) => sum + (device.power / 220), 0),
        devices: data
      };
      const iaResponse = await getEnergyInsights(sensorData, {mode}) || '';
      const iaMessage = typeof iaResponse === 'string' ? iaResponse : JSON.stringify(iaResponse);
      setIaObservation(iaMessage);
    }
    fetchInsight();
  }, [mode, setIaObservation]);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Dispositivos conectados</h2>
      <div className="flex flex-wrap gap-4 w-[200px]">
        {devices.map((device) => (
          <DeviceCard key={device.id} device={device} allowControl={allowControl} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
