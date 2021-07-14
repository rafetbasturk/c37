import { FaSearch } from "react-icons/fa"

const Search = ({ search }) => {
   return (
      <section className="search">
         <form>
            <FaSearch className="search__icon" />
            <input
               name="search-input"
               className="search__input"
               id="search-input"
               type="search"
               placeholder="Search for a country..."
               onChange={(e) => search(e.target.value)}
            />
         </form>
      </section>
   )
}

export default Search
