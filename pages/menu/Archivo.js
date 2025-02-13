import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../../public/Logo.jpg';

import { Ventas } from "../Arhcivo/Ventas";
import { Clientes } from "../Arhcivo/Clientes";
import { Componentes } from "../Arhcivo/Componentes";
import { Usuarios } from "../Arhcivo/Usuarios";

export const Archivo = () => {
    const [activeComponent, setActiveComponent] = useState(null);
    
    const renderComponent = () => {
    switch (activeComponent) {
        case 'ventas':
            return <Ventas />;
        case 'clientes':
            return <Clientes />;
        case 'componentes':
            return <Componentes />;

        case 'usuarios':
            return <Usuarios />;

        case 'ventas':
            return <Ventas />;

        case 'ventas':
            return <Ventas />;

        case 'ventas':
            return <Ventas />;
    }
    };
    return (
        <>
            <div class="menu">
                <a href="#" onClick={() => setActiveComponent('ventas')}>Ventas</a>
                <a href="#" onClick={() => setActiveComponent('clientes')}>Clientes</a>
                <a href="#" onClick={() => setActiveComponent('componentes')}>Componentes</a>
                <a href="#" onClick={() => setActiveComponent('usuarios')}>Usuarios</a>
                <a href="#">Salir</a>
            </div>
            {/* <Image src={Logo} alt="Descripción de la imagen" class='img'/> */}
            <section class="main">
                {renderComponent()}
            </section>
        </>
    );
};