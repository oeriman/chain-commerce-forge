
import React from 'react';
import Gallery from './Gallery';

const GalleryDemo = () => {
  const sampleImages = [
    {
      id: '1',
      src: 'photo-1649972904349-6e44c42644a7',
      alt: 'Woman using laptop',
      title: 'Remote Work'
    },
    {
      id: '2',
      src: 'photo-1488590528505-98d2b5aba04b',
      alt: 'Gray laptop computer',
      title: 'Technology'
    },
    {
      id: '3',
      src: 'photo-1518770660439-4636190af475',
      alt: 'Circuit board macro',
      title: 'Electronics'
    },
    {
      id: '4',
      src: 'photo-1461749280684-dccba630e2f6',
      alt: 'Java programming monitor',
      title: 'Programming'
    },
    {
      id: '5',
      src: 'photo-1581091226825-a6a2a5aee158',
      alt: 'Woman with laptop',
      title: 'Digital Work'
    },
    {
      id: '6',
      src: 'photo-1485827404703-89b55fcc595e',
      alt: 'White robot',
      title: 'Robotics'
    },
    {
      id: '7',
      src: 'photo-1526374965328-7f61d4dc18c5',
      alt: 'Matrix movie still',
      title: 'Digital World'
    },
    {
      id: '8',
      src: 'photo-1500673922987-e212871fec22',
      alt: 'Yellow lights between trees',
      title: 'Nature Lights'
    },
    {
      id: '9',
      src: 'photo-1501854140801-50d01698950b',
      alt: 'Green mountains aerial view',
      title: 'Mountain Vista'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">
          Image <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Gallery</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Click on any image to view it in full size. Navigate between images using the arrow keys or buttons.
        </p>
      </div>
      
      <Gallery items={sampleImages} columns={3} />
    </div>
  );
};

export default GalleryDemo;
