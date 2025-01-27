import React from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Homepage = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
        <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', p: 3 }}>
        {data.map((blog) => (
            <Card key={blog.id} sx={{ minWidth: 275, boxShadow: 3 }}>
            <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                {blog.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {blog.body}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">More Details</Button>
            </CardActions>
            </Card>
        ))}
        </Box>
    </div>
  );
};

export default Homepage;
