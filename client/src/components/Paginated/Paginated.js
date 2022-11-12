import React from "react";

export default function Paginated ({recipesPerPage, allRecipes, paginated}) {
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
              <a onClick={() => paginated(n)}>{n}</a>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}