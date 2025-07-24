
import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaEdit } from 'react-icons/fa';

const userData = {
  name: 'Kabir Dharshaan',
  username: 'kabir_fitness',
  email: 'kabir@example.com',
  location: 'Madurai, India',
  bio: 'Fitness lover | Meal Planner | Helping people stay healthy 🥗💪',
  profilePic: 'https://source.unsplash.com/150x150/?face,man',
  posts: [
    {
      id: 1,
      title: 'High Protein Breakfast',
      image: 'https://source.unsplash.com/400x200/?healthy-breakfast',
      description: 'Try this energizing high-protein morning bowl.',
    },
    {
      id: 2,
      title: 'Hydration Challenge',
      image: 'https://source.unsplash.com/400x200/?water,bottle',
      description: 'Completed 30 days of hydration challenge 💧',
    },
  ],
  achievements: ['Lost 5kg in 2 months', '30-day clean eating streak'],
};

export default function Profile() {
  const handleNewPost = () => {
    alert('Open New Post Form or Modal');
    // You can replace this alert with a modal or redirect later
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 relative">
      {/* Profile Header */}
      <div className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row items-center">
        <img
          src={userData.profilePic}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-orange-400"
        />
        <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-800">{userData.name}</h2>
          <p className="text-orange-500 font-medium">@{userData.username}</p>
          <p className="text-gray-600 mt-2">{userData.bio}</p>
          <div className="flex items-center text-sm text-gray-500 mt-2 gap-4 justify-center md:justify-start">
            <p className="flex items-center"><FaEnvelope className="mr-1" /> {userData.email}</p>
            <p className="flex items-center"><FaMapMarkerAlt className="ml-4 mr-1" /> {userData.location}</p>
          </div>
          <button className="mt-3 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 flex items-center mx-auto md:mx-0">
            <FaEdit className="mr-2" /> Edit Profile
          </button>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-700 mb-3">🏆 Your Progress</h3>
        <ul className="list-disc ml-6 text-gray-600 space-y-1">
          {userData.achievements.map((ach, idx) => (
            <li key={idx}>{ach}</li>
          ))}
        </ul>
      </div>

      {/* Posts Section */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">📌 Your Posts</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {userData.posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-bold text-gray-800">{post.title}</h4>
                <p className="text-gray-600 mt-1">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating New Post Button */}
      <button
        onClick={handleNewPost}
        className="fixed bottom-6 right-6 bg-orange-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-orange-600 transition duration-200"
      >
        ➕ New Post
      </button>
    </div>
  );
}
