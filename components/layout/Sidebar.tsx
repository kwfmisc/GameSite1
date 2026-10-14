"use client";

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { Shield, Users, TrendingUp, Zap, Sword } from 'lucide-react';

const navItems = [
  { name: 'Dashboard', icon: Shield, href: '/dashboard' },
  { name: 'Explore', icon: TrendingUp, href: '/explore' },
  { name: 'Analysis Hub', icon: Zap, href: '/analyze' },
  { name: 'Agents', icon: Users, href: '/agents' },
  { name: 'Weapons', icon: Sword, href: '/weapons' },
];

const Sidebar: React.FC = () => {
  const { user } = useAuth();

  return (
    <aside className="fixed top-0 left-0 w-64 bg-slate-950 text-white h-full p-6 flex flex-col justify-between z-30 border-r border-gray-800">
      <div className="mb-12 pl-2 pb-4 border-b border-slate-800">
        <h1 className="text-2xl font-black text-indigo-500 uppercase tracking-widest flex items-center">
          <Shield className="w-6 h-6 mr-2 text-red-500" /> VALORANT ANALYTICS HUB
        </h1>
        {user && <p className="text-xs text-gray-400 mt-2">Signed in as <span className="text-white">{user.name}</span></p>}
      </div>

      <nav className="flex flex-col space-y-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link key={item.name} href={item.href} className="flex items-center p-3 rounded-lg text-sm font-medium transition duration-150 hover:bg-slate-800 hover:text-indigo-400 group">
              <Icon className="w-5 h-5 mr-3 text-gray-400 group-hover:text-indigo-400" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-8 border-t border-slate-800">
        <h3 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Friends</h3>
        <ul className="space-y-2 text-sm">
          {['CyberCrew', 'EtherWolf', 'BlockMage'].map((name) => (
            <li key={name} className="flex items-center p-2 rounded-md hover:bg-slate-800 cursor-pointer text-gray-400 hover:text-white">
              <span className="mr-3 w-2 h-2 bg-green-500 inline-block rounded-full" /> {name}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
