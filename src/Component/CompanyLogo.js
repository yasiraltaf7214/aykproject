import * as React from 'react';

import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import { Rerousel } from 'rerousel';


const images = [
    {
        label: 'Ethan J.Cooper',
      imgPath:
        'https://wp.xpeedstudio.com/sassico/wp-content/uploads/2019/10/partner-img-2.png',
    },
    {
        label: 'Ethan J.Cooper',
      imgPath:
        'https://wp.xpeedstudio.com/sassico/wp-content/uploads/2019/10/partner-img.png',
    },
    {
        label: 'Ethan J.Cooper',
      imgPath:
        'https://wp.xpeedstudio.com/sassico/wp-content/uploads/2019/10/partner-img-5.png',
    },
    {
        label: 'Ethan J.Cooper',
      imgPath:
        'https://wp.xpeedstudio.com/sassico/wp-content/uploads/2019/10/partner-img-4.png',
    },
    {
        label: 'Ethan J.Cooper',
      imgPath:
        'https://wp.xpeedstudio.com/sassico/wp-content/uploads/2019/10/partner-img-3.png',
    },
    {
        label: 'Ethan J.Cooper',
      imgPath:
        'https://wp.xpeedstudio.com/sassico/wp-content/uploads/2019/10/partner-img-2.png',
    },
    {
        label: 'Ethan J.Cooper',
      imgPath:
        'https://wp.xpeedstudio.com/sassico/wp-content/uploads/2019/10/partner-img.png',
    },
    {
        label: 'Ethan J.Cooper',
      imgPath:
        'https://wp.xpeedstudio.com/sassico/wp-content/uploads/2019/10/partner-img-5.png',
    },
    {
        label: 'Ethan J.Cooper',
      imgPath:
        'https://wp.xpeedstudio.com/sassico/wp-content/uploads/2019/10/partner-img-4.png',
    },
    {
        label: 'Ethan J.Cooper',
      imgPath:
        'https://wp.xpeedstudio.com/sassico/wp-content/uploads/2019/10/partner-img-3.png',
    },
  ];
const CompanyLogo = () => {
    const wordsCarouselRef = React.useRef(null); 
  
    return (
        <Box sx={{margin:'100px'}}>
            <Grid container>
            <Rerousel itemRef={wordsCarouselRef} interval={3000}>
              {images.map((item, idx) => {
                  return (
                    <Grid item lg={2}>
                          <Box ref={wordsCarouselRef} key={idx}>
                              <img src={item.imgPath} />
                          </Box>
                      </Grid>
                  );
              })}
          </Rerousel>
          </Grid>
        </Box>
    );
}

export default CompanyLogo;