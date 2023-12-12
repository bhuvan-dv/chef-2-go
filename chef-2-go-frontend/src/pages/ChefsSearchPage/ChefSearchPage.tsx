import React from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import ChefsGrid from '../../components/ChefsGrid/ChefsGrid'

const ChefSearchPage = () => {
  return (
    <div className="flex flex-col gap-5">
     <div className="container mx-auto mt-8">
      {/* Rectangular Full-Width Image Section */}
      <div className="relative">
        <img
          src="https://cdn5.vectorstock.com/i/1000x1000/29/84/group-professionals-chef-cooking-vector-26812984.jpg" // Replace with your actual image URL
          alt="Full Width Image"
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black">
          <h2 className="text-4xl font-bold mb-4">Explore our Top Chef pages</h2>
          <p className="text-xl">Discover talented chefs and their signature recipes.</p>
        </div>
      </div>
      </div>
      <div className="self-center">
        <SearchBar searchCategory="chef"/>
        </div>
         {/* Top Chefs Section */}
      {/* <h1 className="text-3xl font-bold mb-4 mt-8">Top Chefs and Their Recipes</h1> */}
        <ChefsGrid />
    </div>
  )
}

export default ChefSearchPage
