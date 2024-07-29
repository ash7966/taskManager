import React, { useState,useRef, useEffect } from 'react';
import AddItemForm from './components/AddItemForm';
import ItemList from './components/TaskList'; // Fixed import path to match file name
import axios from 'axios';



;

const baseUrl = "/api";

function App() {
  const [items, setItems] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false); // State for form visibility
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showErrorPopup, setShowErrorPopup] = useState(false); // State for error popup

  const containerRef = useRef(null);

  useEffect(() => {
    fetchItems();
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, []);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const res = await axios.get(baseUrl);
      setItems(res.data?.data || []);
    } catch (err) {
      setError('Failed to fetch items.');
      setShowErrorPopup(true);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const addItem = async (item) => {
    try {
      const res = await axios.post(`${baseUrl}`, item);
      setItems([...items, res.data?.data]);
      window.scrollTo({ bottom: 0, behavior: 'smooth' });
    } catch (err) {
      setError('Failed to add item.');
      setShowErrorPopup(true);
      console.error(err);
    }
  };

  const updateItem = async (id, updatedItem) => {
    try {
      const res = await axios.put(`${baseUrl}/${id}`, updatedItem);
      setItems(items.map(item => (item._id === id ? res.data?.data : item)));
    } catch (err) {
      setError('Failed to update item.');
      setShowErrorPopup(true);
      console.error(err);
    }
  };

  const deleteItem = async (id) => {
    try {
      await axios.delete(`${baseUrl}/${id}`);
      setItems(items.filter(item => item._id !== id));
    } catch (err) {
      setError('Failed to delete item.');
      setShowErrorPopup(true);
      console.error(err);
    }
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const closeErrorPopup = () => {
    setShowErrorPopup(false);
  };

  return (
    <div className="App container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Tasks Manager</h1>
      
      <button
        onClick={toggleFormVisibility}
        className="bg-blue-500 text-white p-2 rounded mb-4"
      >
        {isFormVisible ? 'Hide' : 'Add Task'}
      </button>

      {isFormVisible && (
        <div className="transition-all duration-300 ease-in-out">
          <AddItemForm addItem={addItem} />
        </div>
      )}

      {error && showErrorPopup && (
        <div className="fixed top-4 right-4 bg-red-500 text-white p-4 rounded shadow-md">
          <p>{error}</p>
          <button
            onClick={closeErrorPopup}
            className="mt-2 bg-red-700 p-2 rounded text-sm"
          >
            Close
          </button>
        </div>
      )}
      
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ItemList items={items} updateItem={updateItem} deleteItem={deleteItem} />
      )}
    </div>
  );
}

export default App;
