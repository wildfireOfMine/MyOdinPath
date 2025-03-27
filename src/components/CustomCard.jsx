import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

const CustomCard = ({image, title, description, website, repository}) => {
    const { t } = useTranslation();
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
          <Button size="small"><a href={website} target='_blank'>{t('seeSite')}</a></Button>
          <Button size="small"><a href={repository} target='_blank'>{t('seeMore')}</a></Button>
        </CardActions>
      </Card>
    );
    }
export default CustomCard;