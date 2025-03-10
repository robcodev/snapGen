import { supabase } from '../supabaseClient.js';

const deleteItem = async (id) => {
  const { data, error } = await supabase
    .from('menuDiario')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting item:', error);
  } else {
    console.log('Item deleted successfully:', data);
  }
};

export default deleteItem;

/* export const deleteItem = async (id) => {
  const { data, error } = await supabase
    .from('items2')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting item:', error);
    return null;
  }
  return data;
}; */