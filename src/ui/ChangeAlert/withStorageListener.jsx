import React from 'react';

function withStorageListener(WrappedComponent) {
  return function WrappedComponentWithStorageListener(props) {

    window.addEventListener('storage', (change) => {
      if (change.key === 'TODOS_V2') { 
        props.synchronizeTodos(false);
      }
    });

    const toggleShow = () => {
      props.synchronizeTodos(true);
    };
    
    return (
      <WrappedComponent
        show={props.synchronizedTodos}
        toggleShow={toggleShow}
      />
    );
  }
}

export { withStorageListener };