import { supabase } from '../supabaseClient.js';


export const updateItem = async (id, newDescription) => {
  const { data, error } = await supabase
    .from('menuDiario')
    .update({ descripcion: newDescription })
    .eq('id', id);

  if (error) {
    console.error('Error updating item:', error);
  } else {
    console.log('Item updated successfully:', data);
  }
};


/* export const updateItem = async (id, updates) => {
  const { data, error } = await supabase
    .from('items2')
    .update(updates)
    .eq('id', id);

  if (error) {
    console.error('Error updating item:', error);
    return null;
  }
  return data;
}; */