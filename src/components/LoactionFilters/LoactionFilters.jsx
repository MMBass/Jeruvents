import { useState, useEffect } from 'react';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

function LoactionFilters({ className }) {
  const [filters, setFilters] = useState(JSON.parse(localStorage.getItem('locationFilters')) || []);

  useEffect(() => {
    const storedFilters = JSON.parse(localStorage.getItem('locationFilters'));
    if (storedFilters) {
      setFilters(storedFilters);
    }
  }, []);

  const handleHideLoact = (locat) => {
    const newFilters = filters.map((item) => {
      if (item.name === locat.name) {
        item.hide =!item.hide;
      }
      return item;
    });
    setFilters(newFilters);
    localStorage.setItem('locationFilters', JSON.stringify(newFilters));
  };

  return (
    <div className={className}>
      <Typography variant='h5' fontWeight={'600'} padding={'20px'}>EJLM</Typography>
      <Divider></Divider>
      <FormGroup sx={{padding: '20px'}}>
        {filters.map((locat, i) => (
          <FormControlLabel
            key={i}
            control={<Checkbox size="medium" checked={!locat.hide} />}
            label={locat.name}
            onChange={() => handleHideLoact(locat)}
          />
        ))}
      </FormGroup>
    </div>
  );
}

export default LoactionFilters;
