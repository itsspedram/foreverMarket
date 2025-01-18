'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const mockUser = {
  username: 'trader123',
  email: 'trader123@example.com',
  balance: 1000,
  joinDate: '2023-01-15',
}

export default function Account() {
  const [isEditing, setIsEditing] = useState(false)
  const [username, setUsername] = useState(mockUser.username)
  const [email, setEmail] = useState(mockUser.email)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement update logic here
    console.log('Profile updated:', { username, email })
    setIsEditing(false)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Your Account</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4">Profile Information</h2>
          {isEditing ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-1">Username</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 ease-in-out shadow-lg hover:shadow-blue-500/50"
                >
                  Save Changes
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors duration-200 ease-in-out shadow-lg hover:shadow-gray-500/50"
                >
                  Cancel
                </motion.button>
              </div>
            </form>
          ) : (
            <div className="space-y-2">
              <p><span className="font-semibold">Username:</span> {mockUser.username}</p>
              <p><span className="font-semibold">Email:</span> {mockUser.email}</p>
              <p><span className="font-semibold">Join Date:</span> {mockUser.joinDate}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsEditing(true)}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 ease-in-out shadow-lg hover:shadow-blue-500/50"
              >
                Edit Profile
              </motion.button>
            </div>
          )}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4">Account Balance</h2>
          <p className="text-3xl font-bold mb-4">${mockUser.balance.toFixed(2)}</p>
          <div className="space-y-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-200 ease-in-out shadow-lg hover:shadow-green-500/50"
            >
              Deposit Funds
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 ease-in-out shadow-lg hover:shadow-blue-500/50"
            >
              Withdraw Funds
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

