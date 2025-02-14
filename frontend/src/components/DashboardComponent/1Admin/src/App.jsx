import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEllipsisV } from 'react-icons/fa';

const API_URL = 'http://localhost:5000/api';

function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [menuOpen, setMenuOpen] = useState(null);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({ name: '', image: '', designation: '', task: '', status: 'Pending' });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/users`);
      setUsers(response.data);
      setError(null);
    } catch (err) {
      setError('Error fetching users');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (value) => {
    setSearchTerm(value);
    try {
      const response = await axios.get(`${API_URL}/users/search?designation=${value}`);
      setUsers(response.data);
    } catch (err) {
      setError('Error searching users');
    }
  };

  const toggleMenu = (userId) => {
    setMenuOpen(menuOpen === userId ? null : userId);
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`${API_URL}/users/${userId}`);
      fetchUsers();
    } catch (err) {
      setError('Error deleting user');
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setFormData(user);
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingUser) {
        await axios.put(`${API_URL}/users/${editingUser._id}`, formData);
      } else {
        await axios.post(`${API_URL}/users`, formData);
      }
      setShowModal(false);
      fetchUsers();
    } catch (err) {
      setError('Error saving user');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <input
            type="text"
            placeholder="Search by role..."
            className="w-full max-w-md px-4 py-2 rounded-lg border"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <button onClick={() => setShowModal(true)} className="bg-blue-500 text-white px-4 py-2 rounded-lg">Add Profile</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map(user => (
            <div key={user._id} className="bg-white p-6 rounded-lg shadow relative">
              <div className="absolute top-4 right-4 cursor-pointer" onClick={() => toggleMenu(user._id)}>
                <FaEllipsisV />
              </div>
              {menuOpen === user._id && (
                <div className="absolute top-10 right-4 bg-white shadow-lg rounded p-2 z-10">
                  <button onClick={() => handleEdit(user)} className="block px-4 py-2">Edit</button>
                  <button onClick={() => handleDelete(user._id)} className="block px-4 py-2 text-red-500">Delete</button>
                </div>
              )}
              <div className="flex items-center mb-4">
                <img src={user.image} alt={user.name} className="w-16 h-16 rounded-full mr-4" />
                <div>
                  <h3 className="text-lg font-semibold">{user.name}</h3>
                  <p>{user.designation}</p>
                </div>
              </div>
              <p><strong>Task:</strong> {user.task}</p>
              <p><strong>Status:</strong> {user.status}</p>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-4">{editingUser ? 'Edit Profile' : 'Add Profile'}</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Name" className="w-full mb-2 p-2 border" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
              <input type="text" placeholder="Image URL" className="w-full mb-2 p-2 border" value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} required />
              <input type="text" placeholder="Designation" className="w-full mb-2 p-2 border" value={formData.designation} onChange={(e) => setFormData({ ...formData, designation: e.target.value })} required />
              <input type="text" placeholder="Task" className="w-full mb-2 p-2 border" value={formData.task} onChange={(e) => setFormData({ ...formData, task: e.target.value })} required />
              <select className="w-full mb-4 p-2 border" value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })}>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
              <div className="flex justify-end">
                <button type="button" onClick={() => setShowModal(false)} className="mr-2 px-4 py-2 bg-gray-500 text-white rounded">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
