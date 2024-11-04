import Modal from "react-modal";
import s from "./ImageModal.module.css";
import { ModalImage } from "../../types/types";

interface ImageModalProps {
  image: ModalImage | null;
  isOpen: boolean;
  onClose: () => void;
}
const ImageModal = ({ image, isOpen, onClose }: ImageModalProps) => {
  Modal.setAppElement("#root");
  if (!image) return;

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        className={s.modalContent}
        overlayClassName={s.modalOverlay}
      >
        <img
          src={image.regularUrl}
          alt={image.alt_description}
          className={s.modalImage}
        />
        <div className={s.wrap}>
          <p className={s.description}>{image.alt_description}</p>
          <p>❤️ {image.likes}</p>
        </div>
      </Modal>
    </>
  );
};

export default ImageModal;
