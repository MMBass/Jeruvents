import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import LaunchIcon from '@mui/icons-material/Launch';

import constants from '@/constants';
import T from './EventCardI18N';

const EventCard = ({className, ev }) => {
  return (
    <Card classes={className} dir={'rtl'} className='card-event' sx={{ display: 'flex', margin: "10px", padding: '20px', justifyContent: "space-between" }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6" color="text.secondary" fontSize={'15px'} fontWeight={700}>
            {ev.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" fontSize={'11px'} paddingTop={"10px"} fontWeight={500}>
            {ev.date}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" component="div" fontSize={'11px'} paddingTop={"10px"} fontWeight={600}>
            {ev.by}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" component="div" fontSize={'11px'} paddingTop={"10px"} fontWeight={500}>
           {T.LOCATION} {ev.location}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" fontSize={'12px'} href={ev.link} target="_blank" rel="noopener noreferrer" > <LaunchIcon /> <span>
            {T.EVENT_LINK}
            </span></Button>
        </CardActions>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: "40%" }}
        loading='lazy'
        image={ev.img || constants.jerusIcon}
        alt="event image"
        onError={(e) => { e.target.src = constants.jerusIcon; }}
      />
    </Card>
  );
};

export default EventCard; 