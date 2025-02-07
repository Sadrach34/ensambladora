import React, { useState } from 'react';
import { Geist, Geist_Mono } from "next/font/google";
import {Archivo} from './menu/Archivo';
import { PantallaPrincipal } from "./PantallaPrincipal";
import { Reportes } from './menu/Reportes';
import { Preferencias } from './menu/Preferencias';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [activeComponent, setActiveComponent] = useState(null);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'archivo':
        return <Archivo />;

      case 'reportes':
        return <Reportes />;

      case 'preferencias':
        return <Preferencias />;

      default:
          return <PantallaPrincipal />;
    }
  };

  return (
    <>
      <div class="Titulo">
        <h1><a onClick={() => setActiveComponent('index')}>Ensambladora</a></h1>

        <nav class="menu">
          <div class="dropdown">
            <a href="#" onClick={() => setActiveComponent('archivo')}>Archivo</a>
          </div>


          <div class="dropdown">
            <a href="#" onClick={() => setActiveComponent('reportes')}>Reportes</a>
          </div>


          <div class="dropdown">
            <a href="#" onClick={() => setActiveComponent('preferencias')}>Preferencias</a>
          </div>
        </nav>
      </div>

      <section class="main">
        {renderComponent()}
      </section>
    </>
  );
}
