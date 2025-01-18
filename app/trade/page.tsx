'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const mockTrades = [
  { id: 1, market: "US Presidential Election 2024", position: "Long", amount: 100, price: 0.65 },
  { id: 2, market: "Bitcoin Price EOY", position: "Short", amount: 50, price: 0.75 },
  { id: 3, market: "Oscar Best Picture", position: "Long", amount: 75, price: 0.40 },
]

export default function Trade() {
  const [selectedMarket, setSelectedMarket] = useState('')
  const [position, setPosition] = useState('Long')
  const [amount, setAmount] = useState('')

  const handleTrade = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement trade logic here
    console.log('Trade submitted:', { selectedMarket, position, amount })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Trade</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Place a Trade</h2>
          <form onSubmit={handleTrade} className="space-y-4">
            <div>
              <label htmlFor="market" className="block text-sm font-medium text-gray-300 mb-1">Select Market</label>
              <select
                id="market"
                value={selectedMarket}
                onChange={(e) => setSelectedMarket(e.target.value)}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a market</option>
                {mockTrades.map((trade) => (
                  <option key={trade.id} value={trade.market}>{trade.market}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="position" className="block text-sm font-medium text-gray-300 mb-1">Position</label>
              <select
                id="position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Long">Long</option>
                <option value="Short">Short</option>
              </select>
            </div>
            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-300 mb-1">Amount</label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter amount"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 ease-in-out shadow-lg hover:shadow-blue-500/50"
            >
              Place Trade
            </motion.button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Recent Trades</h2>
          <div className="space-y-4">
            {mockTrades.map((trade) => (
              <motion.div
                key={trade.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-800 p-4 rounded-md"
              >
                <h3 className="text-lg font-semibold mb-2">{trade.market}</h3>
                <p>Position: {trade.position}</p>
                <p>Amount: ${trade.amount}</p>
                <p>Price: ${trade.price.toFixed(2)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

