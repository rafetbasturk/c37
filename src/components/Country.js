import { Link } from "react-router-dom"

const Country = ({ name, flag, population, region, capital }) => {

   return (
      <Link to={`detail/${name.toLowerCase()}`} className="cards__link">
         <article className="cards__card" >
            <div className="cards__flag">
               <img
                  className="cards__img"
                  src={flag}
                  alt={name + " flag"}
               />
            </div>
            <div className="cards__content">
               <h3 className="cards__name">{name}</h3>
               <p className="cards__title">Population:
                  <span className="cards__text">{population.toLocaleString()}</span>
               </p>
               <p className="cards__title">Region:
                  <span className="cards__text">{region}</span>
               </p>
               <p className="cards__title">Capital:
                  <span className="cards__text">{capital}</span>
               </p>
            </div>
         </article>
      </Link>
   )
}

export default Country
