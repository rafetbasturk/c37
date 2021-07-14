import Search from "../components/Search";
import Filter from "../components/Filter";
import Countries from "../components/Countries";
import { FaSpinner } from "react-icons/fa";
import { useGlobalContext } from "../context";
import { useState } from "react";

const Home = () => {
   const { isLoading, countries } = useGlobalContext()
   const [searchTerm, setSearchTerm] = useState("")
   const [filterTerm, setFilterTerm] = useState("")

   const filtered = countries
      .filter(country => country.region.includes(filterTerm))
      .filter(country => {
         return country.name.toLowerCase().includes(searchTerm.toLowerCase())
      })

   return (
      <main className="main">
         <div className="main__filters">
            <Search search={setSearchTerm} />
            <Filter filter={setFilterTerm} />
         </div>

         {isLoading && <FaSpinner className="spinner"></FaSpinner>}
         <Countries countries={filtered} />
      </main>
   )
}

export default Home