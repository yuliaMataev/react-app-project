import { useContext, useState } from "react";
import { AppContext } from "../App";

function MenuBar() {
  const context = useContext(AppContext);

  const [searchValue, setSearchValue] = useState<string>("");

  if (!context) {
    return <div>Error</div>;
  }

  const businessCards = context.businessCards || [];
  const searchBusinessCard = context.searchBusinessCard || function () {};

  function clearSearch() {
    setSearchValue("");
    handleSearch("");
  }

  function handleSearch(value: string) {
    setSearchValue(value);

    let term = value.toLowerCase();

    let result = [...businessCards];

    if (term.length > 0) {
      result = [...businessCards].filter(
        (card) =>
          card.title.toLowerCase().includes(term) ||
          card.address.toLowerCase().includes(term) ||
          card.phone.toLowerCase().includes(term) ||
          card.bizNumber.includes(term)
      );
    }

    searchBusinessCard(result);
  }

  return (
    <div className="d-flex p-4">
      <div className="d-flex align-items-center mx-auto w-50 ">
        <button
          onClick={(e) =>
            context.handleCardsDisplayMode("col-12 col-md-6 col-lg-4 d-flex")
          }
          className="btn btn-default"
        >
          <i className="bi-grid-3x3-gap"></i>
        </button>
        <button
          onClick={(e) => context.handleCardsDisplayMode("list")}
          className="btn btn-default"
        >
          <i className="bi-list-task"></i>
        </button>
        <input
          value={searchValue}
          onChange={(e) => handleSearch(e.target.value)}
          type="text"
          className="form-control ms-3"
          placeholder="Search by business name, address, phone or business number"
        ></input>
        {searchValue.length === 0 && (
          <button className="btn btn-default">
            <i className="bi bi-search"></i>
          </button>
        )}
        {searchValue.length > 0 && (
          <button onClick={clearSearch} className="btn btn-default">
            <i className="bi bi bi-x-octagon"></i>
          </button>
        )}
      </div>
    </div>
  );
}

export default MenuBar;
