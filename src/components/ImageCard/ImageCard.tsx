import s from "./ImageCard.module.css";

interface ImageCardProps {
  items: {
    urls: { small: string; regular: string };
    likes: number;
    user: { name: string };
    alt_description: string;
  };
  onImageClick: () => void;
}

const ImageCard = ({ items, onImageClick }: ImageCardProps) => {
  const {
    urls: { small: smallUrl },
    likes,
    user: { name: userName },
    alt_description,
  } = items;

  return (
    <li className={s.item} onClick={onImageClick}>
      <img src={smallUrl} alt={alt_description} />
      <div>
        <p>Author: {userName}</p>
        <p> ❤️ {likes}</p>
      </div>
    </li>
  );
};

export default ImageCard;
