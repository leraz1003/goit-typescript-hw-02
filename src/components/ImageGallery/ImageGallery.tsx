import { Article, ModalImage } from "../../types/types";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

interface ImageGalleryProps {
  items: Article[];
  onImageClick: (image: ModalImage) => void;
}
const ImageGallery: React.FC<ImageGalleryProps> = ({ items, onImageClick }) => {
  return (
    <ul className={s.gallery}>
      {items.map((item, index) => (
        <ImageCard
          key={index}
          items={item}
          onImageClick={() =>
            onImageClick({
              regularUrl: item.urls.regular,
              alt_description: item.alt_description,
              likes: item.likes,
              userName: item.user.name,
            })
          }
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
