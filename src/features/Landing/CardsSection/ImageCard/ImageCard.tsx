export const ImageCard = ({ src }: { src: string }) => {
  return (
    <img
      style={{ userSelect: 'none', width: '100%', height: '100%', objectFit: 'cover' }}
      src={src}
      alt={src}
    />
  );
};

export default ImageCard;
