import Lupa from "../../assets/images/icons/lupa.svg";
import { useState } from "react";
const InputSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="search-container">
        <img src={Lupa} alt="Buscar" className="search-icon"></img>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
        placeholder="Buscar"
      />
        
    </div>
  );
};
export default InputSearch;