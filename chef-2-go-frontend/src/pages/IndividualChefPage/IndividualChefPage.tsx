import React, { useEffect, useState } from 'react';
import chef from '../../models/chef';
import Recipe from '../../models/Recipe';
import { getRecipesByChefId } from '../../services/recipe';
import { useParams } from 'react-router-dom';
import { getChefDetails } from '../../services/UserAPI';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// Define an example chef object for initial state
const exampleChef: chef = {
  _id: "65610adc6a32a283430ca26d",
  name: "Chef Name",
  username: "chefusername",
  role: "chef",
  imageUrl: "https://images.unsplash.com/photo-1612837017391-5e8a1f8b9b0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZnMlMjBjaGVmJTIwY2hlZiUyMGNvbXB1dGVyJTIwY2hlZnMlMjBjaGVmJTIwY2hlZiUyMGNvbXB1dGVyJTIwY2hlZnMlMj"
}

const IndividualChefPage = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [chef, setChef] = useState<chef>(exampleChef);
  const { chefId } = useParams();

  const getRecipesByChef = async (chefId: string | undefined) => {
    try {
      const response: any = await getRecipesByChefId(chefId as string);
      console.log(response.data);
      setRecipes(response.data)
      return response;
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  }

  const getChefById = async (chefId: string | undefined) => {
    try {
      const response: any = await getChefDetails(chefId as string);
      setChef(response.data);
    } catch (error) {
      console.error('Error fetching chef:', error);
    }
  }

  useEffect(() => {
    getRecipesByChef(chefId);
    getChefById(chefId);
    document.title = `${chef?.name} | Chef 2 Go`;
  }, [chefId, chef]);

  return (
    <div className="flex flex-col items-center gap-5 font-morion">
      <div className="chef-details flex justify-around pt-5 px-5">
        <div className="w-1/2">
          <img src={chef.imageUrl} alt="" className="rounded-full" />
        </div>
        <div className="w-1/2 font-bold text-5xl self-center">
          <p>Name: {chef.name}</p>
          <p>UserName: {chef.username}</p>
        </div>
      </div>
      <div className="heading text-2xl">
        <p className="border-b-2"> Recipes</p>
      </div>
      <div className="recipe-details px-5">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Recipe</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Summary</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {recipes.map((recipe) => (
                <TableRow
                  key={recipe._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <img src={recipe.imageUrl} alt="" />
                  </TableCell>
                  <TableCell align="center">{recipe.name}</TableCell>
                  <TableCell align="center">{recipe.summary}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default IndividualChefPage;
