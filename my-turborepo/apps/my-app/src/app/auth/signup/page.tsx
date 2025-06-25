import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-purple-900 p-6">
      <div className="backdrop-blur-md bg-white/10 border border-white/30 rounded-2xl p-8 shadow-xl w-full max-w-md">
        <h2 className="text-white text-3xl font-bold mb-6 text-center">Create an Account</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
          <button
            type="submit"
            className="mt-4 bg-white text-purple-800 font-semibold py-2 rounded-lg hover:bg-purple-100 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default page
