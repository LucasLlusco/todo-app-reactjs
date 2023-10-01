import React from 'react'
import "./EmptySearchTodos.css"

const EmptySearchTodos = ({searchText}) => {
  return (
    <p className='EmptySearchTodos'>No hay resultados para <span>{searchText}</span> </p>
  )
}

export default EmptySearchTodos