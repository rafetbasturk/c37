import Country from "./Country";

const Countries = ({countries}) => {

   return (
      <section className="main__cards">
         {countries.length < 1 && <h2>No matched countries</h2>}
         {countries.map((country, i) => <Country key={i} {...country} />)}
      </section>
   )
}

export default Countries
