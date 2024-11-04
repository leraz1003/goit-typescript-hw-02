import { ChangeEvent, FormEvent, useRef, useState } from "react";
import s from "./SearchBar.module.css";
import { FiSearch } from "react-icons/fi";
import toast from "react-hot-toast";

type Props = {
  onSubmit: (searchValue: string) => void;
};
const SearchBar: React.FC<Props> = ({ onSubmit }) => {
  const [value, setValues] = useState("");

  const btnRef = useRef<HTMLButtonElement>(null);

  const handleIconClick = () => {
    btnRef.current?.click();
  };

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setValues(evt.target.value);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const searchValue = (evt.target as HTMLFormElement).elements.namedItem(
      "searchImg"
    ) as HTMLInputElement;
    const value = searchValue.value;

    if (!value.trim()) {
      toast.error("Please enter a search term.");
    }
    onSubmit(value);
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <FiSearch className={s.searchLogo} onClick={handleIconClick} />
        <input
          value={value}
          className={s.searchBar}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="searchImg"
          onChange={handleChange}
        />
        <button ref={btnRef} type="submit" className={s.searchBtn}></button>
      </form>
    </header>
  );
};

export default SearchBar;
