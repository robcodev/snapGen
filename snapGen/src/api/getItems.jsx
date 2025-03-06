import { supabase } from '../supabaseClient.js';

export const getItems = async () => {
  const { data, error } = await supabase
    .from('items')
    .select('*');

  if (error) {
    console.error('Error fetching items:', error);
    return [];
  }
  return data;
};