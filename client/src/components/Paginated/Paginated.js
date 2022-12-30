import React from "react";
import './Paginated.css';
import { useSelector } from 'react-redux';

export default function Paginated ({currentPage, recipesPerPage, allRecipes, paginated}) {
  const actualPage = useSelector(state => state.currentPage);   
  const pageNumber = []

  for (let i = 1; i <= Math.ceil(allRecipes/recipesPerPage); i++) {
    pageNumber.push(i)
  } 

  return (
    <nav>
      <ul className="paginated">
        {
          pageNumber.length > 0 && actualPage !== 1 ? <button className="paginated-buttons" onClick={() => paginated(actualPage-1)}>Back</button> : <></>
        }
        {
          pageNumber && pageNumber.map(n => (
            <li className="number" key={n}>
              {
                currentPage === n ? <a className="active" onClick={() => paginated(n)}>{n}</a> : <a onClick={() => paginated(n)}>{n}</a>
              }
            </li>
          ))
        }
        {
          pageNumber.length > 0 && actualPage !== Math.ceil(allRecipes/recipesPerPage) ? <button className="paginated-buttons" onClick={() => paginated(actualPage+1)} >Next</button> : <></>
        }
      </ul>
    </nav>
  )
}