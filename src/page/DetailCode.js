import { useEffect, useState } from "react";
import { FaLongArrowAltLeft, FaSpinner } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const codeUrl = "https://restcountries.eu/rest/v2/alpha/"

const DetailCode = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [country, setCountry] = useState([])
  const { code } = useParams()

  useEffect(() => {
    setIsLoading(true)
    const fetchCountry = async () => {
      const res = await fetch(codeUrl + code.toLowerCase())
      const data = await res.json()
      setCountry([data])
      setIsLoading(false)
    }
    fetchCountry()
  }, [code])

  return (
    <div className="details">
      <Link to="/" className="details__link">
        <button className="details__btn">
          <FaLongArrowAltLeft className="details__icon"></FaLongArrowAltLeft>
          Back
        </button>
      </Link>

      {isLoading && <FaSpinner className="spinner"></FaSpinner>}
      {country &&
        country.map((item, i) => {
          const { name, flag, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages, borders } = item

          return (
            <article className="details__card" key={i}>
              <img className="details__img" src={flag} alt={name + " flag"} />
              <div className="details__content-container">
                <h3 className="details__name">{name}</h3>
                <div className="details__content">
                  <div className="details__general">
                    <p className="details--title">Native Name:
                      <span className="details--text">{nativeName}</span>
                    </p>
                    <p className="details--title">Population:
                      <span className="details--text">{population.toLocaleString()}</span>
                    </p>
                    <p className="details--title">Region:
                      <span className="details--text">{region}</span>
                    </p>
                    <p className="details--title">Sub Region:
                      <span className="details--text">{subregion}</span>
                    </p>
                    <p className="details--title">Capital:
                      <span className="details--text">{capital}</span>
                    </p>
                  </div>
                  <div className="details__special">
                    <p className="details--title">Top Level Domain:
                      <span className="details--text">{topLevelDomain}</span>
                    </p>
                    <p className="details--title">Currencies:
                      <span className="details--text">{currencies[0].name}</span>
                    </p>
                    <p className="details--title">Languages:
                      {languages.map((lang, i) =>
                        <span
                          className="details--text details--lang"
                          key={i}
                        >{lang.name}</span>
                      )}
                    </p>
                  </div>
                </div>
                <div className="details__countries-container">
                  <p className="details__border-countries">Border Countries:</p>
                  <div className="details__border">
                    {borders.map((item, i) => {
                      return (
                        <Link
                          to={`/code/${item.toLowerCase()}`}
                          key={i}
                        >
                          <span className="details__countries">{item}</span>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
            </article>
          )
        })
      }
    </div>
  )
}

export default DetailCode
