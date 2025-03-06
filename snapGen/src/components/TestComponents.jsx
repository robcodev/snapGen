import React, { useEffect } from 'react';
import { getItems } from '../api/getItems.jsx';
import { createItem } from '../api/createItem.jsx';
import { updateItem } from '../api/updateItem.jsx';
import { deleteItem } from '../api/deleteItem.jsx';

const TestComponent = () => {
  useEffect(() => {
    const testCRUDOperations = async () => {
      // Prueba de creación
      const newItem = { name: 'Test Item' };
      const createdItem = await createItem(newItem);
      console.log('Created Item:', createdItem); //esto lo hace

      // Prueba de lectura
      const items = await getItems();
      console.log('Items:', items); //esto tambien lo hace

      // Prueba de actualización
      if (createdItem && createdItem[0]) {
        const updatedItem = await updateItem(createdItem[0].id, { name: 'Updated Test Item' });
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