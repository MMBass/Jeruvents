import { useState, useEffect, lazy, Suspense } from 'react';

import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import LinearProgress from '@mui/material/LinearProgress';

import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

// import EventCard from '@components/EventCard/EventCard';

import constants from '@/constants';
import T from './HomePageI18N.js';

const EventCard = lazy(() => import('@components/EventCard/EventCard')); // Assuming a separate component for event details

function HomePage({ className }) {
  const [visibleEvents, setVisibleEvents] = useState(
    localStorage.getItem('visibleEvents') ? JSON.parse(localStorage.getItem('visibleEvents')) : []
  );

  useEffect(() => {
    fetch(`${constants.prodServerUri}/events`, {
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

      <Suspense
        fallback={<Box sx={{ height: '200px', width: '100%', textAlign: 'center', }}>
          <LinearProgress sx={{ width: '60%', margin: 'auto', marginTop: '50px' }}></LinearProgress>
        </Box>}
      >
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

                  <EventCard ev={ev} />

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
      </Suspense>

    </Box>
  );
};

export default HomePage;