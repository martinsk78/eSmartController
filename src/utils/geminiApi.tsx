import { GoogleGenAI } from "@google/genai";

// Inicializa la IA (usa la clave API desde .env por seguridad en producción)
const ai = new GoogleGenAI({
  apiKey: "AIzaSyBfSpj55wGfrhcFI8LvOluOyr6-XUyvCI0",
});

// Definimos interfaces para tipar los datos
export interface SensorData {
  voltage: number;   // Voltaje (V)
  current: number;   // Corriente (A)
  power?: number;    // Potencia (W), opcional
  timestamp?: string;
  [key: string]: any; // Permite agregar más campos
}

export interface UserConfig {
  ecoMode?: boolean;
  maxConsumption?: number;
  vacationMode?: boolean;
  [key: string]: any;
}

export interface EnergyAnalysis {
  analysisTitle: string;
  status: string;
  anomalies: string[];
  recommendations: string[];
  autoAction: {
    enabled: boolean;
    suggestedAction?: string;
    reason?: string;
  };
  analysisTimestamp: string;
}

/**
 * Envía datos simulados de sensores a la IA y recibe un JSON de análisis.
 */
export async function getEnergyInsights(
  sensorData: SensorData,
  config: UserConfig
): Promise<EnergyAnalysis | string> {
  try {
    const prompt = `
Eres una IA que actúa como el backend de una API para fabricantes de medidores de energía y dispositivos IoT (por ejemplo, ESP32).
Tu tarea es analizar los datos eléctricos recibidos y devolver una respuesta estructurada en formato JSON que pueda ser interpretada directamente por un microcontrolador o una aplicación cliente.

Datos del sensor:
${JSON.stringify(sensorData, null, 2)}

Configuraciones del usuario:
${JSON.stringify(config, null, 2)}

Requisitos de salida:
- Devuelve SOLO un objeto JSON válido, sin explicaciones, comentarios ni texto adicional.
- La respuesta debe seguir exactamente este formato:

{
  "analysisTitle": "Análisis de Consumo Energético Doméstico",
  "status": "Descripción general del consumo actual (por ejemplo, consumo estable, alto, bajo, irregular...)",
  "anomalies": [
    "Descripción breve de cualquier anomalía detectada o valores atípicos"
  ],
  "recommendations": [
    "Consejos prácticos para mejorar la eficiencia o reducir el consumo"
  ],
  "autoAction": {
    "enabled": true,
    "suggestedAction": "Apagar el aire acondicionado por 10 minutos para estabilizar consumo",
    "reason": "El consumo excede el promedio diario en más del 20%"
  },
  "analysisTimestamp": "Fecha y hora actual"
}

- Todos los textos deben ser concretos y adecuados al contexto de los datos.
- NO uses formato de texto libre o markdown.
- NO agregues frases fuera del JSON.

Comienza directamente con el objeto JSON.
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const text = (response.text ?? '').trim();

    try {
      const parsed = JSON.parse(text);
      return parsed as EnergyAnalysis;
    } catch {
      console.warn("Respuesta no fue JSON válida, devolviendo texto crudo.");
      return text;
    }
  } catch (error) {
    console.error("Error al obtener observaciones de Gemini:", error);
    return {
      analysisTitle: "Error de comunicación con IA",
      status: "No se pudo procesar la solicitud",
      anomalies: [],
      recommendations: [],
      autoAction: { enabled: false },
      analysisTimestamp: new Date().toISOString(),
    };
  }
}
