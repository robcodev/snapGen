import { supabase } from '../supabaseClient.js';

export const createItem = async (item) => {
  const { data, error } = await supabase
    .from('items2')
    .insert([item]);

  if (error) {
    console.error('Error creating item:', error);
    return null;
  }
  return data;
};