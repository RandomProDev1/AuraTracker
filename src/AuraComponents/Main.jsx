
export default function Main() {
    return (
        <main className="flex flex-col items-center justify-center align-middle px-4 font-[oxanium,sans-serif]">
            <div className="my-12  rounded-2xl px-5 py-3 w-full max-w-2xl
             bg-[#141414] items-center justify-center text-center
             border border-gray-900">
                <div className="flex items-center justify-center space-x-2 flex-col md:flex-row">
                    <div className="text-4xl drop-shadow-[0_0_8px_#ec489966] animate-bounce mt-1">🔥</div>
                    <h2 className="text-2xl font-black text-center
                      my-2 animate-pulse">FLAMEBORN ASCENDANT</h2>
                </div>
                <div>
                <p className="">Day 30 — Aura Intensifying</p>
                <p className="text-[#3b82f6]">Aura Power: 34 ⚡ (27 from NoFap, +7 from Discipline Workouts)</p>
                </div>
                <div className="flex flex-col my-5 mx-5 gap-3 font-bold">
                <div className="flex gap-3">
                 <button className="flex-1 bg-black rounded-md py-3 border-none text-sm flex items-center justify-center cursor-pointer hover:bg-gray-950 hover:-translate-y-0.5 ease-in-out duration-200">
                    START ASCENSION 
                 </button>
                 <button className="flex-1 text-sm bg-black rounded-md py-3 border-none cursor-pointer hover:bg-gray-950 hover:-translate-y-0.5 ease-in-out duration-200">
                    LOG WORKOUT
                 </button>
                </div>
  
                <div className="flex gap-3">
                <button className="flex-1 text-sm bg-black rounded-md py-3 border-none cursor-pointer hover:bg-gray-950 hover:-translate-y-0.5 ease-in-out duration-200">
                  DAILY CHECK-INS
                </button>
                <button className="flex-1 text-sm bg-black rounded-md py-3 border-none cursor-pointer hover:bg-gray-950 hover:-translate-y-0.5 ease-in-out duration-200">
                  VIEW LOGS
                 </button>
                 </div>
                </div>
                <div className="overflow-hidden h-3  rounded-md mx-6 bg-gray-950">
                    <div className="h-full w-3/5 rounded-md bg-gradient-to-r from-[#C04848] to-[#480048] "></div>
                </div>
            </div>



            <div className=" mb-12 rounded-2xl px-5 py-3 w-full max-w-2xl
             bg-[#141414] items-center justify-center text-center
             border border-gray-900">
                <h1 className="font-black text-lg">AURA RANK SYSTEM</h1>
                <table className="w-full my-2  border-collapse">
                   <tr className=" border-gray-700 border-b">
                    <th className="p-2 text-left font-light text-md">Days</th>
                    <th className="p-2 text-left font-light text-md">Title</th>
                    <th className="p-2 text-left font-light text-md">Emoji</th>
                   </tr>
                   <tr className="border-gray-700 border-b">
                    <td className="className=  text-left font-light text-md p-2">0-2</td>
                    <td className="className=  text-left font-light text-md p-2">Fallen</td>
                    <td className="className=  text-left font-light text-md p-2">💀</td>
                   </tr>
                   <tr className="border-gray-700 border-b">
                    <td className="className=  text-left font-light text-md p-2">3</td>
                    <td className="className=  text-left font-light text-md p-2">Sparks of Will</td>
                    <td className="className=  text-left font-light text-md p-2">✨</td>
                   </tr>
                   <tr className="border-gray-700 border-b">
                    <td className="className=  text-left font-light text-md p-2">30 </td>
                    <td className="className=  text-left font-light text-md p-2">Flameborn Ascendant</td>
                    <td className="className=  text-left font-light text-md p-2">🔥</td>
                   </tr>
                   <tr className="border-gray-700 border-b">
                    <td className="className=  text-left font-light text-md p-2">60</td>
                    <td className="className=  text-left font-light text-md p-2">Moonblood Ascendant</td>
                    <td className="className=  text-left font-light text-md p-2">🌙</td>
                   </tr>
                   <tr className="border-gray-700 border-b">
                    <td className="className=  text-left font-light text-md p-2">90+</td>
                    <td className="className=  text-left font-light text-md p-2">Celestial Emperor</td>
                    <td className="className=  text-left font-light text-md p-2">👑</td>
                   </tr>
                </table>
             </div>
        </main>
    )
}
