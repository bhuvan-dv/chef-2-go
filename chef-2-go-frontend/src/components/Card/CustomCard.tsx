import { type } from 'os';
import React, { CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

export type EntityDetails = {
  type: "chef" | "recipe";
  name: string;
  imageUrl: string;
  id: string;
};

type CardProps = {
  entity: EntityDetails;
  styles: CSSProperties;
};

const CustomCard = (props: CardProps) => {

  const BASEURL = 'http://localhost:3000/';
  const { entity, styles } = props;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${BASEURL}${entity.type}/${entity.id}`);
  };

  return (
    <div onClick={handleClick}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Visit Profile
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CustomCard;
