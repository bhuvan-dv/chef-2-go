import React from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import ChefsGrid from '../../components/ChefsGrid/ChefsGrid'

const ChefSearchPage = () => {
  return (
    <>
        <SearchBar searchCategory="chef"/>
        <ChefsGrid />
    </>
  )
}

export default ChefSearchPage
