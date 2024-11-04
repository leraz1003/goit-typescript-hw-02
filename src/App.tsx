import { Toaster } from "react-hot-toast";
import "./App.css";
import { useEffect, useState } from "react";
import { fetchArticles } from "./components/services/api";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { Article, ModalImage } from "./types/types";

function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState<ModalImage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (image: ModalImage) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleSubmit = (searchValue: string) => {
    setQuery(searchValue);
    setArticles([]);
    setPage(1);
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    const getData = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchArticles(page, query);
        setArticles((prev) => [...prev, ...data.results]);
        console.log(data.results);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [page, query]);

  const loadMoreBtn = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <Toaster
        position="top-right" // Розташування тостів
        reverseOrder={false}
      />

      {error ? (
        <ErrorMessage />
      ) : (
        articles.length > 0 && (
          <ImageGallery items={articles} onImageClick={handleImageClick} />
        )
      )}

      {loading && <Loader />}
      {articles.length > 0 && !loading && !error && (
        <LoadMoreBtn onClick={loadMoreBtn} />
      )}

      {articles.length > 0 && !loading && !error && (
        <ImageModal
          image={selectedImage}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </>
  );
}

export default App;
