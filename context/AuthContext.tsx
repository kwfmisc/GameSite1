"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type User = {
  name?: string;
  subscriptionTier?: 'free' | 'pro' | 'enterprise';
};

type AuthContextValue = {
  user: User | null;
  signIn: (name: string) => void;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>({ name: 'PlayerOne', subscriptionTier: 'free' });

  const signIn = (name: string) => setUser({ name, subscriptionTier: 'free' });
  const signOut = () => setUser(null);

  return <AuthContext.Provider value={{ user, signIn, signOut }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
