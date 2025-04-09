
import React from 'react';
import './Orders.css';

const orders = [
  { id: 101, date: '2025-04-05', total: '450 EGP', status: 'Delivered' },
  { id: 102, date: '2025-04-06', total: '300 EGP', status: 'Processing' },
  { id: 103, date: '2025-04-08', total: '700 EGP', status: 'Shipped' }
];

function Orders() {
  return (
    <div className="orders-container">
      <h2>Your Orders</h2>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Order #</th>
            <th>Date</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>#{order.id}</td>
              <td>{order.date}</td>
              <td>{order.total}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
