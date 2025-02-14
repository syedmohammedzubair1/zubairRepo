import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (value) => {
    setSearchTerm(value);
    try {
      const response = await axios.get(`${API_URL}/users/search?designation=${value}`);
      setUsers(response.data);
      setError(null);
    } catch (err) {
      setError('Error searching users');
      console.error('Error:', err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-primary text-xl">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-red-500 text-xl">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search by role..."
            className="w-full max-w-md px-4 py-2 rounded-lg border border-secondary focus:outline-none focus:ring-2 focus:ring-primary"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>

        {/* Profile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map(user => (
            <div key={user._id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-secondary"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-primary">{user.name}</h3>
                    <p className="text-secondary">{user.designation}</p>
                  </div>
                </div>
                <div className="border-t border-secondary pt-4">
                  <div className="mb-2">
                    <label className="text-sm font-medium text-primary">Today's Task:</label>
                    <p className="text-gray-800">{user.task}</p>
                  </div>
                  <div className="flex items-center">
                    <label className="text-sm font-medium text-primary mr-2">Status:</label>
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      user.status === 'Completed' ? 'bg-secondary text-primary' :
                      user.status === 'In Progress' ? 'bg-primary text-white' :
                      'bg-background text-primary'
                    }`}>
                      {user.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;