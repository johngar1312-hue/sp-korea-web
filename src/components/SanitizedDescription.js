import React from 'react';

// Простая функция для очистки описания без внешних зависимостей
const sanitizeDescription = (html) => {
  if (!html) return '';
  
  // Удаляем HTML-теги
  let text = html.replace(/<[^>]*>/g, '');
  
  // Заменяем HTML-сущности
  text = text.replace(/&nbsp;/g, ' ');
  text = text.replace(/&amp;/g, '&');
  text = text.replace(/&lt;/g, '<');
  text = text.replace(/&gt;/g, '>');
  text = text.replace(/&quot;/g, '"');
  text = text.replace(/&#39;/g, "'");
  
  // Убираем лишние пробелы
  text = text.replace(/\s+/g, ' ').trim();
  
  return text;
};

const SanitizedDescription = ({ html }) => {
  const cleanText = sanitizeDescription(html);
  return <p className="text-gray-700 mb-6">{cleanText}</p>;
};

export default SanitizedDescription;