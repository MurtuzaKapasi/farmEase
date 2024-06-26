import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProductInfoCard.css';

const ProductInfoCard = () => {
  // Placeholder data
  const product = {
    name: 'Green Sweater',
    vendor: 'TATA',
    location: 'City, State',
    warehouse: 'A',
    price: 100.00,
    availability: true,
    description: 'Description/condition about status',
    images: [ // Placeholder images
      'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2889440/pexels-photo-2889440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  };

  const settings = {
    dots: true,                 // Show navigation dots
    infinite: true,             // Loop the slider infinitely
    speed: 100,                 // Transition speed in milliseconds
    slidesToShow: 1,            // Number of slides to show at once
    slidesToScroll: 1,          // Number of slides to scroll at a time
    autoplay: true,             // Autoplay slides
    autoplaySpeed: 2000,        // Autoplay speed in milliseconds
    pauseOnHover: true,         // Pause autoplay when hovering over the slider
    arrows: true,               // Show navigation arrows
    pauseOnFocus: true,         // Pause autoplay when slider is in focus
    draggable: true,            // Enable dragging/swiping to navigate
    fade: false,                // Enable fade effect instead of sliding
    adaptiveHeight: false,      // Adjust slider height based on the height of the current slide
    centerMode: false,          // Enable center mode (center the current slide)
    centerPadding: '50px',     // Padding on the sides when center mode is enabled
  };
  
  

  return (
    <div className="flex bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Image Display Section */}
      <div className="w-1/2 p-8">
        <Slider {...settings}>
          {product.images.map((image, index) => (
           <div key={index} className="w-64 h-96">
           <img src={image} alt={`Product ${index + 1}`} className="w-full h-full rounded-lg object-cover" />
       </div>
       
          ))}
        </Slider>
      </div>

      {/* Product Information Section */}
      <div className="w-1/2 p-4 grid gap-4">
        {/* Basic Information */}
        <div className="grid grid-cols-2">
          <h1 className="text-xl font-semibold col-span-2">Basic Information</h1>
          <div className="label">
            <p className="text-gray-600">Product Name:</p>
          </div>
          <div className="value">
            <h2 className="text-lg  col-span-2">{product.name}</h2>
          </div>
          <div className="label">
            <p className="text-gray-600">Vendor:</p>
          </div>
          <div className="value">
            <p className="col-span-2">{product.vendor}</p>
          </div>
          <div className="label">
            <p className="text-gray-600">Model:</p>
          </div>
          <div className="value">
            <p className="col-span-2">{product.model}</p>
          </div>
          <div className="label">
            <p className="text-gray-600">Location:</p>
          </div>
          <div className="value">
            <p className="col-span-2">{product.location}</p>
          </div>
          <div className="label">
            <p className="text-gray-600">Warehouse:</p>
          </div>
          <div className="value">
            <p className="col-span-2">{product.warehouse}</p>
          </div>
        </div>

        {/* Sale Information */}
        <div className="grid grid-cols-2">
          <h1 className="text-xl font-semibold col-span-2">Sale Information</h1>
          <div className="label">
            <p className="text-gray-600">Price:</p>
          </div>
          <div className="value">
            <p className="col-span-2">${product.price.toFixed(2)}</p>
          </div>
          <div className="label">
            <p className="text-gray-600 font-bold">Availability:</p>
          </div>
          <div className="value">
            <p className={`col-span-2 ${product.availability ? 'text-green-600' : 'text-red-600'}`}>
              {product.availability ? 'Available' : 'Out of Stock'}
            </p>
          </div>
        </div>

        {/* Description and Condition */}
        <div>
          <h1 className="text-xl font-semibold">Description and Condition</h1>
          <div className="label">
            <p className="text-gray-600">Description:</p>
          </div>
          <div className="value">
            <p className="text-gray-600">{product.description}</p>
          </div>
        </div>

        {/* Working Time */}
        <div>
          <h1 className="text-xl font-semibold">Working Time</h1>
          <div className="label">
            <p className="text-gray-600">Operational hours:</p>
          </div>
          <div className="value">
            <p className="text-gray-600">{product.workingTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoCard;
