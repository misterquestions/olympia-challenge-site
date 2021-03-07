import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import headerImage from '../assets/images/Lavasecadora_Header.png';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    margin: 'auto',
    display: 'block',
    maxWidth: '40%',
    maxHeight: '100%',
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const ItemDetails: React.FC = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="LAVARROPAS AUTOMATICO NEXTT 7-10 ECO 7"
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image={headerImage}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          EE A++. Puerta Extra grande, apertura 180 sin palanca. Bisagra
          reforzada. 1000 rpm. Capacidad de 7kg, con carga autoadaptativa. Sist.
          autobalance. Antiarrugas. Lavado Rapido. Efecto SOFT. Eco Wash.
          Control de temperatura. Display LED color.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>Ficha Técnica</Typography>
          <Typography paragraph>EAN 7795473028769</Typography>
          <Typography paragraph>Alto 85.5</Typography>
          <Typography paragraph>Ancho 59.5</Typography>
          <Typography paragraph>Color BLANCO</Typography>
          <Typography paragraph>Garantia 12</Typography>
          <Typography paragraph>Modelo NEXTt 7-10 ECO</Typography>
          <Typography paragraph>Origen ARGENTINA</Typography>
          <Typography paragraph>Peso 67.2</Typography>
          <Typography paragraph>Profundidad 55</Typography>
          <Typography paragraph>Antiarrugas SI</Typography>
          <Typography paragraph>Capacidad 7</Typography>
          <Typography paragraph>Doble entrada de agua NO</Typography>
          <Typography paragraph>Eficiencia Energetica A++</Typography>
          <Typography paragraph>Exclusion de centrifugado SI</Typography>
          <Typography paragraph>Lavado rapido SI</Typography>
          <Typography paragraph>Media carga SI</Typography>
          <Typography paragraph>Programas 35</Typography>
          <Typography paragraph>Regulador de temperatura SI</Typography>
          <Typography paragraph>Ruedas NO</Typography>
          <Typography paragraph>Sistema de lavado EUROPEO</Typography>
          <Typography paragraph>Tambor de acero SI</Typography>
          <Typography paragraph>Tipo de carga FRONTAL</Typography>
          <Typography paragraph>Tipo de controles DIGITAL</Typography>
          <Typography paragraph>Velocidad de centrifugado 1000</Typography>
          <Typography paragraph>Tecnologia AUTOMATICO</Typography>
          <Typography paragraph>Reseñas</Typography>
          <Typography>
            Este producto aún no contiene calificaciones.Sé el primero en
            opinar!
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ItemDetails;
