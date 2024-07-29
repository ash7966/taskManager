import React from 'react';

const ItemList = ({ items, updateItem, deleteItem }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map(item => (
        <div key={item._id} className="p-4 border rounded bg-white shadow-md">
          <h2 className="text-xl font-bold mb-2">{item.title}</h2>
          <p className="mb-1"><strong>Description:</strong> {item.description}</p>
          <p className="mb-1"><strong>Assignee:</strong> {item.assignee}</p>
          <p className="mb-1"><strong>Status:</strong> {item.status}</p>
          <p className="mb-1"><strong>Time Estimate:</strong> {item.timeEstimate} hrs</p>
          <p className="mb-1"><strong>Created At:</strong> {item.createdAt}</p>
          <button
            onClick={() => deleteItem(item._id)}
            className="bg-red-500 text-white p-2 rounded mt-2 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
