import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import introVideo from '../../assets/videos/intro.mp4';

const CoursePage = () => {
  const lectureTitle = 'lectureTitle';
  const [lectureNumber, setLectureNumber] = useState(0);

  const lectures = [
    {
      _id: 'id data',
      title: 'sample title',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quidem aspernatur iure.',

      video: {
        url: 'video Url',
      },
    },
    {
      _id: 'id data',
      title: 'sample title 2',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quidem aspernatur iure.',

      video: {
        url: 'video Url',
      },
    },
    {
      _id: 'id data',
      title: 'sample title 3',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quidem aspernatur iure.',

      video: {
        url: 'video Url',
      },
    },
  ];

  return (
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
      <Box>
        <video
          width={'100%'}
          controls
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={introVideo}
          // src={lectures[lectureNumber].video.url}
        ></video>

        <Heading
          m="4"
          children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}
        />

        <Heading m="4" children="Description" />
        <Text m="4" children={lectures[lectureNumber].description} />
      </Box>
      <VStack>
        {lectures.map((element, index) => (
          <button
            onClick={() => setLectureNumber(index)}
            key={element._id}
            style={{
              width: '100%',
              padding: '1rem',
              textAlign: 'center',
              margin: 0,
              borderBottom: '1px solid rgba(0,0,0,0.2)',
            }}
          >
            <Text noOfLines={1}>
              #{index + 1} {element.title}
            </Text>
          </button>
        ))}
      </VStack>
    </Grid>
  );
};
export default CoursePage;
