import React from 'react'
import "./EmptySearchTodos.css"

const EmptySearchTodos = (props) => {
  return (
    <p className='EmptySearchTodos'>No hay resultados para <span>{props.searchText}</span> </p>
  )
}

export default EmptySearchTodos