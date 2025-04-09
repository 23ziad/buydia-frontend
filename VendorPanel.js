
import React from 'react';
import './VendorPanel.css';

const vendorProducts = [
  { id: 1, name: 'T-Shirt', stock: 20, price: '200 EGP' },
  { id: 2, name: 'Dress', stock: 15, price: '450 EGP' },
  { id: 3, name: 'Jacket', stock: 10, price: '600 EGP' }
];

function VendorPanel() {
  return (
    <div className="vendor-panel">
      <h2>Vendor Dashboard</h2>
      <button className="add-product">+ Add Product</button>
      <table className="vendor-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          {vendorProducts.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.stock}</td>
              <td>{item.price}</td>
              <td><button className="edit-btn">Edit</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VendorPanel;
