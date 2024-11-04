import s from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}
const LoadMoreBtn = ({ onClick }: LoadMoreBtnProps) => {
  return (
    <button type="button" onClick={onClick} className={s.button}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;
