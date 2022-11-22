import React from "react";
import './Paginated.css';

export default function Paginated ({currentPage, recipesPerPage, allRecipes, paginated}) {
  const pageNumber = []

  for (let i = 1; i <= Math.ceil(allRecipes/recipesPerPage); i++) {
    pageNumber.push(i)
  } 

  return (
    <nav>
      <ul className="paginated">
        {
          pageNumber && pageNumber.map(n => (
            <li className="number" key={n}>
              {
                currentPage === n ? <a className="active" onClick={() => paginated(n)}>{n}</a> : <a onClick={() => paginated(n)}>{n}</a>
              }
            </li>
          ))
        }
      </ul>
    </nav>
  )
}