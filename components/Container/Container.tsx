import React from 'react';
import Navbar from '../Navbar/Navbar';

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}