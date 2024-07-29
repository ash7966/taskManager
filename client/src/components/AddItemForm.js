import React, { useState } from 'react';

const AddItemForm = ({ addItem }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [assignee, setAssignee] = useState('');
  const [timeEstimate, setTimeEstimate] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;
    addItem({ title, description, status, assignee, timeEstimate });
    setTitle('');
    setDescription('');
    setStatus('');
    setAssignee('');
    setTimeEstimate(0);
  };

  return (
    <form onSubmit={onSubmit} className="mb-4 p-4 border rounded-lg shadow-sm bg-white">
      <div className="mb-3">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full p-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Assignee"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
          className="w-full p-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-3">
        <input
          type="number"
          placeholder="Time Estimate (in hrs)"
          value={timeEstimate}
          onChange={(e) => setTimeEstimate(parseFloat(e.target.value) || 0)}
          className="w-full p-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Submit</button>
    </form>
  );
};

export default AddItemForm;
