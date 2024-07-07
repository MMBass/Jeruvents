import { useState, useEffect } from 'react';

import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import LinearProgress from '@mui/material/LinearProgress';

import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import LaunchIcon from '@mui/icons-material/Launch';

function HomePage({ className }) {
  const [visibleEvents, setVisibleEvents] = useState( localStorage.getItem('visibleEvents') ? JSON.parse(localStorage.getItem('visibleEvents')) : []);

  const serverUri = 'https://eventim-backend.vercel.app';
  // const serverUri = 'http://localhost:5000';

  const jerusIcon = 'https://i.etsystatic.com/5559581/r/il/6d56de/1543598097/il_570xN.1543598097_sevf.jpg';

  useEffect(() => {
    fetch(`${serverUri}/events`, {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data.length > 2) {

          createFilters(data);
        }
      }
      ).catch((e) => {
        console.log(e);
      });
  }, []);

  function createFilters(data) {
    const locations = data.map(item => item.by);
    const uniqueLocations = [...new Set(locations)];
    const locationFilters = uniqueLocations.map(location => ({ name: location, hide: false }));

    const existingFilters = JSON.parse(localStorage.getItem('locationFilters')) || [];
    const mergedFilters = [...existingFilters, ...locationFilters.filter(filter => !existingFilters.some(existingFilter => existingFilter.name === filter.name))];

    localStorage.setItem('locationFilters', JSON.stringify(mergedFilters));
    filterVisibles(data);
  }

  function filterVisibles(eventsData) {
    const locationFilters = JSON.parse(localStorage.getItem('locationFilters')) || [];
    const visibleEvents = eventsData.filter(event => {
      const locationFilter = locationFilters.find(filter => filter.name === event.location);
      return locationFilter && !locationFilter.hide;
    });
    // setVisibleEvents(removeDuplicates(visibleEvents)); //Filters Not working yet
    setVisibleEvents(removeDuplicates(eventsData));
  }

  function removeDuplicates(events) {
    const uniqueEvents = [];
    const eventKeys = new Set();

    for (const ev of events) {
      const eventKey = `${ev.title}${ev.date}`;
      if (!eventKeys.has(eventKey)) {
        uniqueEvents.push(ev);
        eventKeys.add(eventKey);
      }
    }
    localStorage.setItem('visibleEvents', JSON.stringify(uniqueEvents));
    return uniqueEvents;
  }

  return (
    <Box className={className}>
      <div className='home-top-cover'>
        <Grid container spacing={1}>
          <Grid item xs={12} md={12} className='home-top-text'>
            <Typography className='h1-1' component="h1" variant="h3" fontWeight={700}>JERUVENTS</Typography>
            <Typography className='h1-2' component="h1" variant="h3" fontWeight={700}>אירועים</Typography>
            <Typography className='h1-3' component="h1" variant="h3" color="#dfe2e7" fontWeight={700}>מהפייסבוק</Typography>
            <Typography className='h1-4' component="h1" variant="h3" fontWeight={700}>בירושלים <KeyboardDoubleArrowDownIcon sx={{
              fontSize: '65px',
              color: '#dfe2e7'
            }}></KeyboardDoubleArrowDownIcon></Typography>
          </Grid>

        </Grid>
      </div>

      {
        visibleEvents[0] ?
          <Box className={'events-box'} sx={{ flexGrow: 2, height: '100%' }}>
            <Grid container spacing={1} sx={{ height: '100%' }}>
              {visibleEvents.map((ev, i) => {
                return (
                  <Grid item xs={12} md={12} key={i}>
                    {i === 0 &&
                      <Divider textAlign="center" variant="middle" sx={{ color: "#3980f358" }}>
                        <Typography padding={'20px'}>{ev.date.split(" AT ")[0]}</Typography>
                      </Divider>
                    }

                    <Card dir={'rtl'} className='card-event' sx={{ display: 'flex', margin: "10px", padding: '20px', justifyContent: "space-between" }}>
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
                            מיקום: {ev.location}
                          </Typography>
                        </CardContent>
                        {/* <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}> */}
                        <CardActions>
                          <Button size="small" fontSize={'12px'} href={ev.link} target="_blank" rel="noopener noreferrer" > <LaunchIcon /> <span>לדף האירוע</span></Button>
                        </CardActions>
                        {/* </Box> */}
                      </Box>
                      <CardMedia
                        component="img"
                        sx={{ width: "40%" }}
                        loading='lazy'

                        image={ev.img || jerusIcon}
                        alt="event image"
                        onError={(e) => { e.target.src = jerusIcon; }}
                      />
                    </Card>
                    {visibleEvents[i + 1] && ev.date.split(" AT ")[0] !== visibleEvents[i + 1].date.split(" AT ")[0] && (
                      <Divider textAlign="center" variant="middle" sx={{ color: "#3980f358" }}>
                        <Typography padding={'20px'}>{visibleEvents[i + 1].date.split(" AT ")[0]}</Typography>
                      </Divider>
                    )}
                  </Grid>
                );
              })}
            </Grid>
          </Box>

          :

          <Box sx={{ height: '200px', width: '100%', textAlign: 'center', }}>
            <LinearProgress sx={{ width: '60%', margin: 'auto', marginTop: '50px' }}></LinearProgress>
          </Box>
      }

    </Box>
  );
};

export default HomePage;