import React from 'react';
import './formulario.css'

const Formulario = () => {
  return (
    <div className='contenedorFormulario'>
      <form className='formulario'
        action="https://formsubmit.co/diegocolman78@hotmail.com" // Reemplaza "your-email" con tu dirección de correo electrónico o la URL de tu formulario de Formspree
        method="POST"
      >
        <div className='contenedor_titulo'>
        <h1 className='tituloFormulario'>Contáctame</h1>
        </div>
          <input type="text" name="nombre" placeholder='Nombre' />
          <input type="email" name="email" placeholder='Email' />
          <textarea name="textarea" cols="30" rows="10" placeholder='Escriba su comentario'></textarea>
          <div className='btn'>
            <button className='boton' type="submit">Enviar</button>
          </div>
        
      </form>
    </div>
  );
};

export { Formulario };
