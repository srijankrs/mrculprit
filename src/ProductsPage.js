
import './App.css';
import { Items } from './Items';
import Product from './Product';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

function ProductsPage() {
  const [state, setState] = React.useState({ filteredItems: Items, filterText: null });

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ flexDirection: 'row', display:'flex', marginTop:'1rem' }}>
          <Form.Control type="text" style={{marginRight:'2rem'}} placeholder="Search Product" onChange={(e) => {
            setState({ ...state, filterText: e.target.value });
          }} />
          <Button variant="primary" onClick={() => {
            const filteredItems = filterItems(state.filterText);
            setState({ ...state, filteredItems: filteredItems })
          }}>Search</Button>
        </div>

        <div style={{ flexWrap: 'wrap', flexDirection: 'row', display:'flex' }}>
        {
          state.filteredItems?.map((item) => (
            <Product {...item} />
          ))
        }
        </div>
        
      </header>
    </div>
  );
}

function filterItems(filterText) {
  if (filterText) {
    return Items.filter((item) => item.label.toLowerCase().includes(filterText.toLowerCase()))
  }
  return Items;
}
export default ProductsPage;
