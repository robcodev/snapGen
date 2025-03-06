import { supabase } from '../supabaseClient.js';

export const deleteItem = async (id) => {
  const { data, error } = await supabase
    .from('items')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting item:', error);
    return null;
  }
  return data;
};