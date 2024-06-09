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

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const title = "Trip to the moon"
  const data = {
    logoLetter: title.charAt(0),
    trip: {
      title,
      startDate: {
        raw: "2022-10-10",
        formatted: "10th October 2022"
      },
      endDate: {
        raw: "2022-10-20",
        formatted: "20th October 2022"
      },
    }
  }
  return (
    <Card sx={{ width: '100%' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="trip">
            {data.logoLetter}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={data.trip.title}
        subheader={`${data.trip.startDate.formatted} thru ${data.trip.endDate.formatted}`}
      />
      <CardMedia
        component="img"
        height="194"
        image="https://placekitten.com/200/300"
        alt={data.trip.title}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          View Details
        </IconButton>
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
