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

  const BASEURL = process.env.BASE_URL || 'http://localhost:3000/';
  const { entity, styles } = props;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${BASEURL}${entity.type}/${entity.id}`);
  };

  return (
    <div>
      <Card sx={{ maxWidth: 345 }} style={styles}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={entity.imageUrl}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" fontFamily={"Morion"}>
              {entity.name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="medium" color="primary" onClick={handleClick} style={{"color":"green", "fontFamily":"Morion", "fontWeight":"bold", "textAlign":"center"}}>
            Visit Profile
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CustomCard;
