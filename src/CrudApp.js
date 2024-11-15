import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CrudApp = () => {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState("");
  const [editData, setEditData] = useState(null);
  const [editText, setEditText] = useState("");

  // Fetch data from the backend API
  useEffect(() => {
    axios.get('http://localhost:5000/data')
      .then(response => {
        // Transform object to array
        const transformedData = Object.keys(response.data).map(key => ({
          id: key,
          ...response.data[key]
        }));
        setData(transformedData);
      })
      .catch(error => {
        console.error("There was an error fetching data!", error);
      });
  }, []);

  // Create new data
  const handleCreate = () => {
    if (newData.trim()) {
      axios.post('http://localhost:5000/data', { name: newData })
        .then(response => {
          setData([...data, { id: response.data.name, name: newData }]);
          setNewData("");
        })
        .catch(error => {
          console.error("There was an error creating data!", error);
        });
    }
  };

  // Edit data
  const handleEdit = (id) => {
    setEditData(id);
    const item = data.find(d => d.id === id);
    setEditText(item.name);
  };

  // Save edited data
  const handleSave = (id) => {
    if (editText.trim()) {
      axios.put(`http://localhost:5000/data/${id}`, { name: editText })
        .then(response => {
          const updatedData = data.map(item =>
            item.id === id ? response.data : item
          );
          setData(updatedData);
          setEditData(null);
          setEditText("");
        })
        .catch(error => {
          console.error("There was an error saving data!", error);
        });
    }
  };

  // Delete data
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/data/${id}`)
      .then(() => {
        setData(data.filter(item => item.id !== id));
      })
      .catch(error => {
        console.error("There was an error deleting data!", error);
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">CRUD Operations with Firebase</h1>
      
      {/* Add New Data */}
      <div className="mb-4">
        <input
          type="text"
          value={newData}
          onChange={(e) => setNewData(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-2"
          placeholder="Enter new data"
        />
        <button
          onClick={handleCreate}
          className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Add Data
        </button>
      </div>

      {/* Data List */}
      <div className="space-y-4">
        {data.map((item) => (
          <div key={item.id} className="flex justify-between items-center p-4 border border-gray-300 rounded-lg">
            {editData === item.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="p-2 border border-gray-300 rounded mr-4"
                />
                <button
                  onClick={() => handleSave(item.id)}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Save
                </button>
              </>
            ) : (
              <span>{item.name}</span>
            )}
            
            <div>
              <button
                onClick={() => handleEdit(item.id)}
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700 mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CrudApp;
