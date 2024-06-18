import React from 'react';

export default function Contacto() {
  return (
    <div>
      <h1>Contacto</h1>
      <form>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Mensaje:</label>
        <textarea id="message" name="message" required />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
