import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material'
import React, { useEffect } from 'react'
import { getAllRegisteredUsers } from '../../services/UserAPI'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../store'
import User from '../../models/User'
import { setChefs } from '../../store/slice/user-slice'

const ChefsGrid = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const chefs = useSelector((state: AppState) => state.users);
    const searchTerm = useSelector((state: AppState) => state.users.searchTerm);
    let filteredChefs = chefs.chefs.filter((chef) =>
        chef?.name?.toLowerCase().includes(searchTerm!.toLowerCase())
    );

    const getInitialRecipes = async () => {
        try {
            const response = await getAllRegisteredUsers();
            console.log('response', response.data);
            
            const chefsList = await response.data;
            
            dispatch(setChefs(chefsList));
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    }
    useEffect(() => {
        getInitialRecipes();
    }, []);

    const handleChefView = (chefId: string) => {
        if (chefId) {
            navigate(`/chefs/${chefId}`);
        }
    }

  return (
    <div>
      <Grid container spacing={3}>
      {Array.isArray(filteredChefs) && filteredChefs.map((chef: User) => (
        <Grid item xs={12} sm={6} md={4} key={chef._id}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={chef?.imageUrl}
              className="object-cover"
            />
            <CardContent>
              <Typography variant="h6">{chef.name}</Typography>
              {/* View Recipe Button */}
              <Button variant="contained" color="primary" className="mt-4" onClick={() => handleChefView(chef._id)}>
                View Chef
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    </div>
  )
}

export default ChefsGrid

