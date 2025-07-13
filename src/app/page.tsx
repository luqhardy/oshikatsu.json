import path from 'path';
import fs from 'fs/promises';
import type { Metadata } from 'next';
import Image from 'next/image';


// --- TypeScript Interface for our Oshi data ---
// This defines the shape of a single oshi object.
interface Oshi {
  order_id: number;
  oshi_name_en: string;
  oshi_name_jp: string;
  oshi_org_en: string;
  oshi_org_jp: string;
  oshi_mark: string;
  oshi_start_date: string;
}

// --- Helper function to calculate days ---
// This function calculates the number of days between a start date and today.
const calculateDays = (startDate: string): number => {
  const start = new Date(startDate);
  const today = new Date();
  // Set time to 00:00:00 to count full days
  start.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);
  const diffTime = Math.abs(today.getTime() - start.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

// --- Oshi Card Component ---
// This component displays the information for a single "oshi".
// It's typed using the Oshi interface.
const OshiCard: React.FC<{ oshi: Oshi }> = ({ oshi }) => {
  const days = calculateDays(oshi.oshi_start_date);

  return (
    <div className="bg-white/90 backdrop-blur-sm p-5 rounded-3xl shadow-lg flex items-center justify-between w-full hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out">
      <div className="flex items-center space-x-5">
        <div className="text-2xl bg-gray-200/80 w-20 h-20 flex items-center justify-center rounded-2xl">
          {oshi.oshi_mark}
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-800">{oshi.oshi_name_jp} <span className="text-lg font-normal text-gray-00">{oshi.oshi_org_jp}</span></p>
          <p className="text-lg text-gray-600">{oshi.oshi_name_en} <span className="text-base text-gray-400">{oshi.oshi_org_en}</span></p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-3xl font-bold text-pink-500">{days.toLocaleString()}</p>
        <p className="text-gray-500">days</p>
      </div>
    </div>
  );
};

export const metadata: Metadata = {
  title: 'My Oshikatsu Information',
  description: 'A list of my favorite characters and idols.',
  icons: {
    icon: 'https://fav.farm/💖',
  },
};

// --- Main Page Component ---
// This is the main page of your application.
export default async function Page() {
  // Get the full path to the JSON file
  const filePath = path.join(process.cwd(), 'public', 'oshikatsu.json');
  // Read the file content
  const jsonData = await fs.readFile(filePath, 'utf-8');
  // Parse the JSON data and cast it to our Oshi[] type
  const data: Oshi[] = JSON.parse(jsonData);
  // Sort the data based on order_id
  const oshiList = data.sort((a, b) => a.order_id - b.order_id);

  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-pink-400 to-rose-500 font-sans p-4 sm:p-8 flex flex-col items-center">
        <div className="w-full max-w-2xl mx-auto">
          
          {/* Header Section */}
          <header className="text-white text-left mb-8">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
              Luqman Hadi's
            </h1>
            <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-white/80">
              Oshikatsu Information
            </h2>
          </header>




          {/* Oshi List */}
          <div className="space-y-6 w-full">
            {oshiList.map((oshi) => (
              <OshiCard key={oshi.order_id} oshi={oshi} />
            ))}
          </div>

          {/* Footer Section */}
          <footer className="text-center mt-12 text-white/80">
                    {/* Oshikatsu JSON Logo */}
<div className="flex justify-center my-8">
            <Image src="/oshikatsujson.png" alt="Oshikatsu JSON Logo" width={200} height={200}/>
          </div>
            <p>Oshikatsu - but with JSON files.</p>
            <a 
              href="https://luqmanhadi.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Return to luqmanhadi.com
            </a>
          </footer>
        </div>
      </main>
    </>
  );
}
