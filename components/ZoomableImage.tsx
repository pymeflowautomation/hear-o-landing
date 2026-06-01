import React from 'react';

interface ZoomableImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  frameClassName?: string;
}

const ZoomableImage: React.FC<ZoomableImageProps> = ({ frameClassName = '', className = '', alt, ...props }) => (
  <div className={`group overflow-hidden rounded-2xl ${frameClassName}`}>
    <img
      {...props}
      alt={alt}
      className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 ${className}`}
    />
  </div>
);

export default ZoomableImage;
