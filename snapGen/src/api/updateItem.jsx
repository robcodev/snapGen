import { supabase } from '../supabaseClient.js';

export const updateItem = async (id, updates) => {
  const { data, error } = await supabase
    .from('items')
    .update(updates)
    .eq('id', id);

  if (error) {
    console.error('Error updating item:', error);
    return null;
  }
  return data;
};