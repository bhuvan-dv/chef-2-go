import React, { useEffect, useState } from 'react'
import chef from '../../models/chef';
import Recipe from '../../models/Recipe';
import { getRecipesByChefId } from '../../services/recipe';
import { use } from 'i18next';
import { useParams } from 'react-router-dom';
import { getChefDetails } from '../../services/UserAPI';

const exampleChef: chef = {
    _id: "65610adc6a32a283430ca26d",
    name: "Chef Name",
    username: "chefusername",
    role: "chef",
    imageUrl: "https://images.unsplash.com/photo-1612837017391-5e8a1f8b9b0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZnMlMjBjaGVmJTIwY2hlZiUyMGNvbXB1dGVyJTIwY2hlZnMlMjBjaGVmJTIwY2hlZiUyMGNvbXB1dGVyJTIwY2hlZnMlMj"

}

const exampleRecipe: Recipe = {
    _id: "123",
    name: "Recipe Name",
    summary: "Recipe Description",
    ingredients: [{
        name: "ingredient1",
        quantity: "quantity1",
        unitType: "unitType1"
    },
    {
        name: "ingredient2",
        quantity: "quantity2",
        unitType: "unitType1"
    },
    {
        name: "ingredient3",
        quantity: "quantity3",
        unitType: "unitType1"
    }],
    instructions: ["instruction1", "instruction2", "instruction3"],
    imageUrl: "https://images.unsplash.com/photo-1612837017391-5e8a1f8b9b0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZnMlMjBjaGVmJTIwY2hlZiUyMGNvbXB1dGVyJTIwY2hlZnMlMjBjaGVmJTIwY2hlZiUyMGNvbXB1dGVyJTIwY2hlZnMlMj",
    chef: '',
    comment: null,
    chefId: "134",
}

const exampleRecipes: Recipe[] = [
    {
        _id: "123",
        name: "Recipe Name",
        summary: "Recipe Description",
        ingredients: [{
            name: "ingredient1",
            quantity: "quantity1",
            unitType: "unitType1"
        },
        {
            name: "ingredient2",
            quantity: "quantity2",
            unitType: "unitType1"
        },
        {
            name: "ingredient3",
            quantity: "quantity3",
            unitType: "unitType1"
        }],
        instructions: ["instruction1", "instruction2", "instruction3"],
        imageUrl: "https://images.unsplash.com/photo-1612837017391-5e8a1f8b9b0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZnMlMjBjaGVmJTIwY2hlZiUyMGNvbXB1dGVyJTIwY2hlZnMlMjBjaGVmJTIwY2hlZiUyMGNvbXB1dGVyJTIwY2hlZnMlMj",
        chef: '',
        comment: null,
        chefId: "134",
    },
    {
        _id: "123",
        name: "Recipe Name",
        summary: "Recipe Description",
        ingredients: [{
            name: "ingredient1",
            quantity: "quantity1",
            unitType: "unitType1"
        },
        {
            name: "ingredient2",
            quantity: "quantity2",
            unitType: "unitType1"
        },
        {
            name: "ingredient3",
            quantity: "quantity3",
            unitType: "unitType1"
        }],
        instructions: ["instruction1", "instruction2", "instruction3"],
        imageUrl: "https://images.unsplash.com/photo-1612837017391-5e8a1f8b9b0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZnMlMjBjaGVmJTIwY2hlZiUyMGNvbXB1dGVyJTIwY2hlZnMlMjBjaGVmJTIwY2hlZiUyMGNvbXB1dGVyJTIwY2hlZnMlMj",
        chef: '',
        comment: null,
        chefId: "134",
    },
    {
        _id: "123",
        name: "Recipe Name",
        summary: "Recipe Description",
        ingredients: [{
            name: "ingredient1",
            quantity: "quantity1",
            unitType: "unitType1"
        },
        {
            name: "ingredient2",
            quantity: "quantity2",
            unitType: "unitType1"
        },
        {
            name: "ingredient3",
            quantity: "quantity3",
            unitType: "unitType1"
        }],
        instructions: ["instruction1", "instruction2", "instruction3"],
        imageUrl: "https://images.unsplash.com/photo-1612837017391-5e8a1f8b9b0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZnMlMjBjaGVmJTIwY2hlZiUyMGNvbXB1dGVyJTIwY2hlZnMlMjBjaGVmJTIwY2hlZiUyMGNvbXB1dGVyJTIwY2hlZnMlMj",
        chef: '',
        comment: null,
        chefId: "134",
    },
    {
        _id: "123",
        name: "Recipe Name",
        summary: "Recipe Description",
        ingredients: [{
            name: "ingredient1",
            quantity: "quantity1",
            unitType: "unitType1"
        },
        {
            name: "ingredient2",
            quantity: "quantity2",
            unitType: "unitType1"
        },
        {
            name: "ingredient3",
            quantity: "quantity3",
            unitType: "unitType1"
        }],
        instructions: ["instruction1", "instruction2", "instruction3"],
        imageUrl: "https://images.unsplash.com/photo-1612837017391-5e8a1f8b9b0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZnMlMjBjaGVmJTIwY2hlZiUyMGNvbXB1dGVyJTIwY2hlZnMlMjBjaGVmJTIwY2hlZiUyMGNvbXB1dGVyJTIwY2hlZnMlMj",
        chef: '',
        comment: null,
        chefId: "134",
    }
    ,{
        _id: "123",
        name: "Recipe Name",
        summary: "Recipe Description",
        ingredients: [{
            name: "ingredient1",
            quantity: "quantity1",
            unitType: "unitType1"
        },
        {
            name: "ingredient2",
            quantity: "quantity2",
            unitType: "unitType1"
        },
        {
            name: "ingredient3",
            quantity: "quantity3",
            unitType: "unitType1"
        }],
        instructions: ["instruction1", "instruction2", "instruction3"],
        imageUrl: "https://images.unsplash.com/photo-1612837017391-5e8a1f8b9b0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZnMlMjBjaGVmJTIwY2hlZiUyMGNvbXB1dGVyJTIwY2hlZnMlMjBjaGVmJTIwY2hlZiUyMGNvbXB1dGVyJTIwY2hlZnMlMj",
        chef: '',
        comment: null,
        chefId: "134",
    }

]


const IndividualChefPage = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [chef, setChef] = useState<chef>(exampleChef);
    const { chefId } = useParams();
    
    const getRecipesByChef = async (chefId: string | undefined) => {
        try {
            const response:any = await getRecipesByChefId(chefId as string);
            console.log(response.data);
            setRecipes(response.data)
            return response;
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    }


    const getChefBbyId = async (chefId: string | undefined) => {
        try{
            const response:any = await getChefDetails(chefId as string);
            setChef(response.data);
        }
        catch(error){
            console.error('Error fetching chef:', error);
        }
    }

    useEffect(() => {
        // const chef: chef =
        getRecipesByChef(chefId);
        getChefBbyId(chefId);
        document.title = `${chef?.name} | Chef 2 Go`;
    }, [chefId, chef]);
  return (
    <div>
        <div>
            <img src={chef.imageUrl} alt="" />
        </div>
      <div>
        {chef.name}
        {chef.username}
      </div>
      <div>
        <p>Recipes:</p>
        {recipes.map((recipe: Recipe) => (
            <div key={recipe._id}>
                <img src={recipe.imageUrl} alt="" />
                <p>Name: {recipe.name}</p>
                <p>Summary: {recipe.summary}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default IndividualChefPage
