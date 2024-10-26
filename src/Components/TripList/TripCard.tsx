import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';
import { CardActionArea } from '@mui/material';
import { TripInterface } from '../../data/trips';
import { format } from 'date-fns';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  return <IconButton {...props} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


interface TripDetailsCardProps {
  trip: TripInterface;
}

export default function TripDetailsCard(detailsProps: TripDetailsCardProps) {
  const { trip } = detailsProps;
  console.log(trip);
  const [expanded, setExpanded] = React.useState(false);
  const navigate = useNavigate();


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const logoLetter = trip.title ? trip.title.charAt(0) : 'D';
  if (!trip) return <>Loading...</>;
  return (
    <Card sx={{ width: '100%' }}>
      <CardActionArea onClick={() => {
        navigate(`/trip/${trip.id}`)
      }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="trip">
              {logoLetter}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={trip.title}
          subheader={`${format(trip.startDate, "MMM do")} thru ${format(trip.endDate, "MMM do")}`}
        />

        <CardMedia
          component="img"
          height="194"
          image="https://placekitten.com/200/300"
          alt={trip.title}
        />
      </CardActionArea>
      <CardActions disableSpacing>
        <IconButton aria-label="share">
          Share
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Detailed Trip Location...
          </Typography>
          <Typography paragraph>
            Stay at......
          </Typography>
          <Typography>
            Traveling via Car|airplane|train|bus
          </Typography>
          <Typography>
            Going with friends|family|alone
          </Typography>
          <Typography>
            Going for work|vacation|other
          </Typography>
        </CardContent>
      </Collapse>

    </Card>
  );
}
