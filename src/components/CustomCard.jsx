import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CustomCard = ({image, title, description, website, repository}) => {
  
    return (
      <Card sx={{ maxWidth: 705 }}>
        <CardMedia
          sx={{ 
            height: 500,
            width: 700,
        }}
          image={image}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small"><a href={website} target='_blank'>Ver página</a></Button>
          <Button size="small"><a href={repository} target='_blank'>Ver más</a></Button>
        </CardActions>
      </Card>
    );
    }
export default CustomCard;