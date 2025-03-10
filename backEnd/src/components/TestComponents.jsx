import React, { useEffect, useState } from 'react';
import { getItems } from '../api/getItems.jsx';
import { createItem } from '../api/createItem.jsx';
import { updateItem } from '../api/updateItem.jsx';
import { deleteItem } from '../api/deleteItem.jsx';

const TestComponent = () => {
  
    const [items, setItems] = useState([]);

  useEffect(() => {

    const testCRUDOperations = async () => {
      // Prueba de creación
      const newItem = { name: 'Item de prueba' };
      const createdItem = await createItem(newItem);
      console.log('Primer item creado:', createdItem); //esto lo hace

      // Prueba de lectura
      const items = await getItems();
      console.log('Items creados:', items); //esto tambien lo hace

      //Prueba de que se creo un item
      if (createdItem && createdItem[0]) {
        console.log('El primer ítem es:', createdItem[0]);
      } else {
        console.log('No se creó ningún ítem o el array está vacío.');
      }

      // Prueba de actualización
      if (createdItem && createdItem[0]) {
        const updatedItem = await updateItem(createdItem[0].id, { name: 'Item actualizado' });
        console.log('Updated Item:', updatedItem);
      }

      // Prueba de eliminación
      if (createdItem && createdItem[0]) {
        await deleteItem(createdItem[0].id);
        console.log('Item deleted');
      }

      // Verifica la lectura después de la eliminación
      const itemsAfterDeletion = await getItems();
      console.log('Items after deletion:', itemsAfterDeletion);
    };

    testCRUDOperations();
  }, []);

  return <div>Check the console for test results</div>;
};

export default TestComponent;

/* // Simulación de la creación de ítems
    const createdItem = [{ id: 21, created_at: '2025-03-06T15:45:04.835817+00:00', name: 'Item de prueba' }];
    console.log('Primer item creado:', createdItem[0] || 'null');

    if (createdItem && createdItem.length > 0) {
      console.log('Items creados:', createdItem);
      setItems(prevItems => [...prevItems, ...createdItem]);
    } else {
      console.log('No se creó ningún ítem o el array está vacío.');
    }
  }, []);

  const deleteItem = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    console.log('Items after deletion:', updatedItems);
    setItems(updatedItems);
  };

  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          {item.name}
          <button onClick={() => deleteItem(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TestComponent; */