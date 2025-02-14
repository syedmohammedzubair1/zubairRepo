import React, { useState } from 'react';

const ContentManager = () => {
  const [content, setContent] = useState({
    about: {
      title: 'Welcome to Our Website',
      description: 'We provide the best services to our customers.',
      images: [
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
      ],
    },
    projects: [
      {
        title: 'Project One',
        description: 'This is an amazing project.',
        video: 'https://www.w3schools.com/html/mov_bbb.mp4',
      },
    ],
    services: [
      { title: 'Web Development', description: 'We build amazing websites.' },
    ],
    contactInfo: {
      email: 'contact@example.com',
      phone: '+123456789',
      address: '123 Street, City',
    },
    locations: [
      {
        address: 'Main Office, City',
        coordinates: { lat: '12.34', lng: '56.78' },
      },
    ],
  });

  const [editData, setEditData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalSection, setModalSection] = useState('');

  const handleEdit = (section, index = null) => {
    setEditData(index !== null ? { ...content[section][index] } : { ...content[section] });
    setModalSection(section);
    setShowModal(true);
  };

  const handleChange = (e, field) => {
    setEditData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleUpdate = () => {
    const updatedContent = { ...content };
    if (Array.isArray(updatedContent[modalSection])) {
      const index = updatedContent[modalSection].findIndex((item) => item.title === editData.title);
      if (index !== -1) {
        updatedContent[modalSection][index] = editData;
      }
    } else {
      updatedContent[modalSection] = editData;
    }
    setContent(updatedContent);
    setShowModal(false);
  };

  const handleAdd = (section) => {
    let newItem = {};
    if (section === 'projects') {
      newItem = {
        title: 'New Project',
        description: 'Project description here.',
        video: 'https://www.w3schools.com/html/mov_bbb.mp4',
      };
    } else if (section === 'services') {
      newItem = { title: 'New Service', description: 'Service details here.' };
    } else if (section === 'locations') {
      newItem = {
        address: 'New Location',
        coordinates: { lat: '0.00', lng: '0.00' },
      };
    }

    setContent((prev) => ({
      ...prev,
      [section]: [...prev[section], newItem],
    }));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* About Section */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h2 className="text-xl font-bold">{content.about.title}</h2>
        <p className="text-gray-600">{content.about.description}</p>
        <div className="flex space-x-2 mt-2">
          {content.about.images.map((img, index) => (
            <img key={index} src={img} alt={`About ${index + 1}`} className="w-20 h-20 rounded-lg" />
          ))}
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-lg" onClick={() => handleEdit('about')}>
          Edit
        </button>
      </div>

      {/* Projects Section */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h2 className="text-xl font-bold">Projects</h2>
        {content.projects.map((project, index) => (
          <div key={index} className="border-b pb-2 mb-2">
            <h3 className="font-semibold">{project.title}</h3>
            <p>{project.description}</p>
            <video src={project.video} controls className="w-full mt-2" />
            <button className="bg-green-500 text-white px-2 py-1 mt-2 rounded-lg" onClick={() => handleEdit('projects', index)}>
              Edit
            </button>
          </div>
        ))}
        <button className="bg-purple-500 text-white px-4 py-2 mt-2 rounded-lg" onClick={() => handleAdd('projects')}>
          Add Project
        </button>
      </div>

      {/* Services Section */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h2 className="text-xl font-bold">Services</h2>
        {content.services.map((service, index) => (
          <div key={index} className="border-b pb-2 mb-2">
            <h3 className="font-semibold">{service.title}</h3>
            <p>{service.description}</p>
            <button className="bg-green-500 text-white px-2 py-1 mt-2 rounded-lg" onClick={() => handleEdit('services', index)}>
              Edit
            </button>
          </div>
        ))}
        <button className="bg-purple-500 text-white px-4 py-2 mt-2 rounded-lg" onClick={() => handleAdd('services')}>
          Add Service
        </button>
      </div>

      {/* Locations Section */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h2 className="text-xl font-bold">Locations</h2>
        {content.locations.map((location, index) => (
          <div key={index}>
            <p>
              <strong>Address:</strong> {location.address}
            </p>
            <p>
              <strong>Coordinates:</strong> {location.coordinates.lat}, {location.coordinates.lng}
            </p>
            <button className="bg-green-500 text-white px-2 py-1 mt-2 rounded-lg" onClick={() => handleEdit('locations', index)}>
              Edit
            </button>
          </div>
        ))}
        <button className="bg-purple-500 text-white px-4 py-2 mt-2 rounded-lg" onClick={() => handleAdd('locations')}>
          Add Location
        </button>
      </div>

      {/* Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-2">Edit {modalSection}</h2>
            {Object.keys(editData).map((key) => (
              <input
                key={key}
                className="w-full border p-2 rounded mt-1"
                value={editData[key]}
                onChange={(e) => handleChange(e, key)}
                placeholder={key}
              />
            ))}
            <div className="flex justify-end mt-4 space-x-2">
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg" onClick={handleUpdate}>
                Update
              </button>
              <button className="bg-gray-500 text-white px-4 py-2 rounded-lg" onClick={() => setShowModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentManager;
