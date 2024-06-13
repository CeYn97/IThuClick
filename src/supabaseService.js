// supabaseService.js
import { supabase } from './supabase';

// Функция для получения или создания пользователя
export const getOrCreateUser = async (telegramId) => {
  const { data: existingUser, error } = await supabase
    .from('users')
    .select('*')
    .eq('telegram_id', telegramId)
    .single();

  if (error && error.code !== 'PGRST116') {
    throw error;
  }

  if (existingUser) {
    return existingUser;
  } else {
    const { data: newUser, error: insertError } = await supabase
      .from('users')
      .insert([{ telegram_id: telegramId, coins: 0, level: 1 }])
      .single();

    if (insertError) {
      throw insertError;
    }

    return newUser;
  }
};

// Функция для обновления данных пользователя
export const updateUser = async (telegramId, coins, level) => {
  const { data, error } = await supabase
    .from('users')
    .update({ coins, level })
    .eq('telegram_id', telegramId);

  if (error) {
    throw error;
  }

  return data;
};
