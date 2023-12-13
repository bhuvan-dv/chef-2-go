import React, { useEffect, useState } from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import ChefsGrid from '../../components/ChefsGrid/ChefsGrid'
import chef from '../../models/chef'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../store'
import { getAllRegisteredUsers } from '../../services/UserAPI'
import { setChefs } from '../../store/slice/user-slice'
import { Button } from '@mui/material'
import Header from '../../components/Header/Header'
import SidebarNav from '../../components/SideBarNav/SidebarNav'

type ChefPageProps = {
  chefs : chef[]
}

const ChefSearchPage = () => {

  document.title = 'Chef Search';

  const { t } = useTranslation('common');
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const chefsPerPage = 6;

  const chefs : chef[] = useSelector((state: AppState) => state.users.chefs)
  
  const indexOfLastChef = currentPage * chefsPerPage;
  const indexOfFirstChef = indexOfLastChef - chefsPerPage;
  const currentChefs = chefs.slice(indexOfFirstChef, indexOfLastChef);
  
  let [menuState, setMenuState] = React.useState(false);


  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    // Fetch recipes when the component mounts
    const fetchRecipes = async () => {
      try {
        const data = await getAllRegisteredUsers();
        dispatch(setChefs(data.data));
      } catch (error) {
        console.error('Error fetching recipes', error);
      }
    };

    fetchRecipes();
  }, [dispatch]);
  return (
    <div className="container mx-auto my-8 flex justify-center flex-col gap-5">
      {/* Rectangular Full-Width Image Section */}
      <Header menuState={menuState} setMenuState={setMenuState}/>
        <SidebarNav menuState={menuState} setMenuState={setMenuState}/>
      <div className="relative">
        <img 
          src="https://i.guim.co.uk/img/media/711a2a1f3c565840eae28bb27cf087c221b05bd9/0_322_5760_3456/master/5760.jpg?width=465&dpr=1&s=none" // Replace with your actual image URL
          alt="Full Width Image"
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black">
          <h2 className="text-4xl font-bold mb-4">Explore our Top Chef pages</h2>
          <p className="text-xl">Discover talented chefs and their signature recipes.</p>
        </div>
      </div>
      <div className="self-center">
        <SearchBar searchCategory="chef"/>
        </div>
         {/* Top Chefs Section */}
      {/* <h1 className="text-3xl font-bold mb-4 mt-8">Top Chefs and Their Recipes</h1> */}
        <ChefsGrid chefs={currentChefs}/>
        <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(chefs.length / chefsPerPage) }).map((_, index) => (
          <Button key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default ChefSearchPage
