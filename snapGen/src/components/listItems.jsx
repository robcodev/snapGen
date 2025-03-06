import React, { useEffect, useState } from 'react';
import { getItems, createItem, updateItem, deleteItem } from './api';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const data = await getItems();
      setItems(data);
    };
    fetchItems();
  }, []);

  const handleCreate = async (newItem) => {
    const data = await createItem(newItem);
    setItems([...items, data]);
  };

  const handleUpdate = async (id, updates) => {
    const data = await updateItem(id, updates);
    setItems(items.map(item => (item.id === id ? data : item)));
  handleDelete = async (id) => {
    await deleteItem(id);
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div>
      <h1>Item List</h1>
      {/* Aquí puedes agregar tus formularios y lógica para crear, actualizar y eliminar items */}
      <p>Aqui van los items</p>
    </div>
  );
};
}
export default ItemList;
