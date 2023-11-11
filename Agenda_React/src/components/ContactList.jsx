import React, { useEffect, useState } from 'react';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Utiliza la función fetch para obtener el listado de contactos
    fetch('http://www.raydelto.org/agenda.php')
      .then((response) => response.json())
      .then((data) => setContacts(data));
  }, []);

  return (
    <div>
      <h2>Listado de Contactos</h2>
      <table>
            <tr><th>Nombre</th> <th>Apellido</th> <th>Telefono</th></tr>
           
        {contacts.map((contact, index) => (
           
          <tr key={index}>
            
            <td>{contact.nombre}</td> <td>{contact.apellido}</td> <td>{contact.telefono}</td>
          </tr>
        ))}
      
      </table>
    </div>
  );
};

export default ContactList;
