'use client';
import { useAuth } from '@/context/AuthContext';
import Sidebar from '@/components/layout/Sidebar';
import TopAgentCard from '@/components/common/TopAgentCard';
import MatchHistoryWidget from '@/components/common/MatchHistoryWidget';

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="flex min-h-screen bg-slate-900 text-white">
      <Sidebar />

      <main className="ml-64 flex-grow p-8 pt-20 pt-[7rem] relative">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-[3fr_1fr]">
          <section className="col-span-full lg:col-span-2 space-y-10">
            <div className="relative mb-8">
              <TopAgentCard agentName={user?.name ?? 'Clove'} winRate={62.4} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 flex flex-col space-y-6">
                <h2 className="text-xl text-gray-300 font-semibold uppercase tracking-wider border-b border-indigo-700 pb-1">Agents</h2>
                <div className="flex space-x-4 overflow-hidden py-2">
                  {['Phoenix', 'Viper', 'Sova', 'Reyna'].map((agent) => (
                    <div key={agent} className="w-36 h-48 bg-slate-800 rounded-xl shadow-lg border border-gray-700 flex-shrink-0 relative">
                      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/50 to-slate-950 opacity-70"></div>
                      <h3 className="text-2xl font-bold text-center pt-8">{agent}</h3>
                    </div>
                  ))}
                </div>

                <div className="mt-8 border-t border-gray-700 pt-6">
                  <h3 className="text-xl text-gray-300 font-semibold uppercase tracking-wider mb-4">Top Maps</h3>
                  <div className="flex space-x-4 overflow-hidden py-2">
                    {['Icebox', 'Haven', 'Ascent'].map((map) => (
                      <div key={map} className="w-36 h-32 bg-slate-800 rounded-xl shadow-lg flex-shrink-0 border border-gray-700 relative">
                        <h4 className="text-xl font-bold text-center pt-10">{map}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1"></div>
            </div>
          </section>

          <aside className="lg:sticky lg:top-[6rem] lg:self-start lg:max-h-[calc(100vh-80px)]">
            <MatchHistoryWidget />
          </aside>
        </div>
      </main>
    </div>
  );
}
