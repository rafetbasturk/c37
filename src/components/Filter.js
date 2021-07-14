const Filter = ({ filter }) => {
   return (
      <section className="filter">
         <input
            list="region"
            placeholder="Filter by Region"
            className="filter__input"
            onChange={(e) => {filter(e.target.value)}}
         />
         <datalist id="region">
            <option value="Africa"></option>
            <option value="Americas"></option>
            <option value="Asia"></option>
            <option value="Europe"></option>
            <option value="Oceania"></option>
         </datalist>
      </section>
   )
}

export default Filter
