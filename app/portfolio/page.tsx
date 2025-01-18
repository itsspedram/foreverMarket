'use client'

import { motion } from 'framer-motion'

const mockPortfolio = [
  { id: 1, market: "US Presidential Election 2024", position: "Long", amount: 100, currentValue: 120, profitLoss: 20 },
  { id: 2, market: "Bitcoin Price EOY", position: "Short", amount: 50, currentValue: 45, profitLoss: -5 },
  { id: 3, market: "Oscar Best Picture", position: "Long", amount: 75, currentValue: 90, profitLoss: 15 },
]

export default function Portfolio() {
  const totalValue = mockPortfolio.reduce((sum, position) => sum + position.currentValue, 0)
  const totalProfitLoss = mockPortfolio.reduce((sum, position) => sum + position.profitLoss, 0)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Your Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4">Portfolio Summary</h2>
          <p className="text-lg">Total Value: ${totalValue.toFixed(2)}</p>
          <p className={`text-lg ${totalProfitLoss >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            Total Profit/Loss: ${totalProfitLoss.toFixed(2)}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 ease-in-out shadow-lg hover:shadow-blue-500/50"
            >
              Deposit Funds
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-200 ease-in-out shadow-lg hover:shadow-green-500/50"
            >
              Withdraw Funds
            </motion.button>
          </div>
        </motion.div>
      </div>
      <h2 className="text-2xl font-semibold mb-4">Your Positions</h2>
      <div className="space-y-4">
        {mockPortfolio.map((position) => (
          <motion.div
            key={position.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-4 rounded-md"
          >
            <h3 className="text-lg font-semibold mb-2">{position.market}</h3>
            <p>Position: {position.position}</p>
            <p>Amount: ${position.amount}</p>
            <p>Current Value: ${position.currentValue}</p>
            <p className={position.profitLoss >= 0 ? 'text-green-500' : 'text-red-500'}>
              Profit/Loss: ${position.profitLoss}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

