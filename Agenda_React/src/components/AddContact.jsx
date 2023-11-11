import React, { useState } from 'react';

const AddContact = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleSubmit = () => {
    // Código para agregar un nuevo contacto utilizando fetch y el método POST
    const newContact = { nombre, apellido, telefono };

    fetch('http://www.raydelto.org/agenda.php', {
      method: 'POST',
      body: JSON.stringify(newContact),
    })
      .then((response) => response.json())
      .then((data) => {
        // Actualizar la lista de contactos después de agregar uno nuevo
        // Puedes hacerlo llamando a una función que actualice el estado del componente principal.
      });

    // Limpiar los campos después de agregar el contacto
    setNombre('');
    setApellido('');
    setTelefono('');
  };

  return (
    <div>
      <h2>Agregar Nuevo Contacto</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Apellido"
        value={apellido}
        onChange={(e) => setApellido(e.target.value)}
      />
      <input
        type="text"
        placeholder="Teléfono"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
      />
      <button onClick={handleSubmit}>Agregar Contacto</button>
    </div>
  );
};

export default AddContact;
