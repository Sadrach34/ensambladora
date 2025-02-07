import React from 'react';
import Image from 'next/image';
import Logo from '../public/Logo.jpg'; 

export const PantallaPrincipal = () => {
    return (
        <div class="image-container">
            <Image src={Logo} alt="Descripción de la imagen" class='img'/>
        </div>
    );
};