import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom'; // Import Link from react-router-dom

const ToursPage = () => {
  const [tours, setTours] = useState([]);
  const { destinationId } = useParams(); // Extract destinationId from URL params
  console.log('Destination ID:', destinationId); // Log destinationId
   

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/tours/${destinationId}`);
      
        setTours(response.data.tours);
      } catch (error) {
        console.error('Error fetching tours:', error);
      }
    };

    fetchTours();
  }, [destinationId]);

  return (
    <div className="">
      <div class="bg-primary p-4">
        <div class="overflow-hidden">
          <div class="animate-marquee flex flex-row space-x-7">
            <p class="text-lg text-white">"Limited time offer: Book now and unlock special discounts on our top-rated tours. Don't miss out</p>
            <p class="text-lg text-white">Experience luxury redefined with our VIP tour packages. Elevate your journey to extraordinary!</p>
            <p class="text-lg text-white">Embark on an adventure of a lifetime with our exclusive tours! Unforgettable memories await</p>
            <p class="text-lg text-white">Ready for an adventure? Our tours combine excitement, comfort, and authenticity for the ultimate travel experience</p>
            <p class="text-lg text-white">Indulge in the spicy flavors of Indian cuisine!</p>
          </div>
        </div>
      </div>
      <h2 className="font-Montserrat uppercase text-accent text-center justify-center font-semibold text-5xl pt-20 pb-5">Tours</h2>
      <div className="flex flex-wrap text-black w-3/4 mx-auto items-center justify-center">
  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {tours.map(tour => (
      <li key={tour.tour_id} className="card m-2 border-[2px] border-black rounded-xl overflow-hidden hover:shadow-lg transition duration-300">
        <div className="card-body text-black p-4">
          <p className="font-bold text-lg mb-2">Tour Name: {tour.tour_name}</p>
          <p><span className="font-bold">Destination:</span> {tour.destination_name}</p>
          <p><span className="font-bold">Start Date:</span> {tour.start_date}</p>
          <p><span className="font-bold">Duration:</span> {tour.duration} days</p>
          <p><span className="font-bold">Price:</span> ${tour.price}</p>
          <div className=" text-center py-2 mt-4">
            {/* Use Link component to navigate to BookNow page */}
            <Link to={`/book/${tour.tour_id}`} className="text-white font-bold hover:underlinec bg-primary rounded-md p-3">Book Now</Link>
          </div>
          <p className="mt-2 text-sm text-gray-500">Limited slots available! Book now to secure your spot and embark on an unforgettable journey.</p>
        </div>
      </li>
    ))}
  </ul>
</div>


    </div>
  );
};

export default ToursPage;
