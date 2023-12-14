import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material'
import React, { useEffect } from 'react'
import { getAllRegisteredUsers } from '../../services/UserAPI'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../store'
import User from '../../models/user'
import { setChefs } from '../../store/slice/user-slice'
import chef from '../../models/chef'
import { useTranslation } from 'react-i18next';

interface ChefGridProps {
  chefs : chef[]
}
const ChefsGrid = ( props: ChefGridProps ) => {
    const { t } = useTranslation('common');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const chefs =props.chefs;//  useSelector((state: AppState) => state.users.chefs);
    const searchTerm = useSelector((state: AppState) => state.users.searchTerm);
    let filteredChefs = chefs.filter((chef) =>
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
      {Array.isArray(filteredChefs) && filteredChefs.map((chef: chef) => (
        <Grid item xs={12} sm={6} md={4} key={chef._id}>
          <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
            <CardMedia
              component="img"
              height="200"
              image={chef?.imageUrl}
              alt={chef.name}
              sx={{ objectFit: 'cover' }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" mb={1}>{chef.name}</Typography>
              {/* View Recipe Button */}
              <Button variant="contained" color="primary" onClick={() => handleChefView(chef._id)} sx={{ width: '100%', marginTop: 'auto' }}>
                {t("searchchef.viewchefbutton")}
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

