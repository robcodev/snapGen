import { supabase } from '../supabaseClient.js';

export const createItem = async (formData) => {
  for (const category in formData) {
    // Buscar la categoría
    let { data: categoryData, error: categoryError } = await supabase
      .from('categorias')
      .select('id')
      .eq('nombreCategoria', category);

    if (categoryError) {
      console.error('Error fetching category:', categoryError);
      continue;
    }

    let categoryId;

    // Si la categoría no existe, crearla
    if (categoryData.length === 0) {
      const { data: newCategoryData, error: newCategoryError } = await supabase
        .from('categorias')
        .insert([{ nombreCategoria: category }])
        .select('id');

      if (newCategoryError) {
        console.error('Error creating category:', newCategoryError);
        continue;
      }

      categoryId = newCategoryData[0].id;
    } else {
      categoryId = categoryData[0].id;
    }

    // Insertar opciones
    for (const option of formData[category]) {
      if (option.trim() === '') continue; // Ignorar opciones vacías

      const { data, error } = await supabase
        .from('menuDiario')
        .insert([{ idCategoria: categoryId, descripcion: option }]);

      if (error) {
        console.error('Error inserting option:', error);
      } else {
        console.log('Option inserted successfully:', data);
      }
    }
  }
};


/* export const createItem = async (item) => {
  const { data, error } = await supabase
    .from('items2')
    .insert([item]);

  if (error) {
    console.error('Error creating item:', error);
    return null;
  }
  return data;
}; */