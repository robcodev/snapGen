import { supabase } from '../supabaseClient.js';

const getItems = async () => {
  const { data: menuData, error: menuError } = await supabase
    .from('menuDiario')
    .select('*');

  if (menuError) {
    console.error('Error fetching menu items:', menuError);
    return [];
  }

  const { data: categoriesData, error: categoriesError } = await supabase
    .from('categorias')
    .select('*');

  if (categoriesError) {
    console.error('Error fetching categories:', categoriesError);
    return [];
  }

  return { menuData, categoriesData };
};

export default getItems;

/* 
//Esto funciona BIEN
export const getItems = async () => {
  const { data, error } = await supabase
    .from('items2')
    .select('*');

  if (error) {
    console.error('Error fetching items:', error);
    return [];
  }
  return data;
}; */