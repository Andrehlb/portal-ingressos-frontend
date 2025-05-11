// src/components/ui/ImagemOtimizada.jsx
import React, { useState } from 'react';
import { PhotoIcon } from '@heroicons/react/24/outline';

export default function ImagemOtimizada({ src, alt = 'Imagem', className = '' }) {
  const [erroImagem, setErroImagem] = useState(false);

  if (erroImagem) {
    return (
      <div className={`bg-gray-100 text-gray-400 flex items-center justify-center ${className}`}>
        <PhotoIcon className="w-10 h-10" />
      </div>
    );
  }

  return (
    <picture>
      <source srcSet={`${src}.webp`} type="image/webp" />
      <source srcSet={`${src}.jpg`} type="image/jpeg" />
      <img
        src={`${src}.jpg`}
        alt={alt}
        loading="lazy"
        onError={() => setErroImagem(true)}
        className={className}
      />
    </picture>
  );
}