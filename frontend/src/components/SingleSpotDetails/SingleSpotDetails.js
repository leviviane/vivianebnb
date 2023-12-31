import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleSpotThunk } from '../../store/spots';
import { getReviewsThunk } from '../../store/reviews';
import { SpotReview } from '../SpotsReview/SpotReview';
import './SingleSpotDetails.css';

function SingleSpotDetails() {
  const dispatch = useDispatch();
  const spot = useSelector((state) => state.spots.singleSpot);
  const { spotId } = useParams();

  useEffect(() => {
    dispatch(getReviewsThunk(spotId));
    dispatch(getSingleSpotThunk(spotId));
  }, [dispatch, spotId]);

  if (!spot || Object.keys(spot).length === 0) {
    return null;
  }

  const reserveButton = (e) => {
    e.preventDefault();
    alert('Feature Coming Soon...');
  };

  return (
    <div className='spots-details-container'>
      <div className='name-location-container'>
        <h2>{spot.name}</h2>
        <h4>{`${spot.city}, ${spot.state}, ${spot.country}`}</h4>
      </div>
      <div className='spot-images-container'>
        {spot.SpotImages &&
          spot.SpotImages.map((image, index) => (
            <img src={image.url} key={image.id} className={`image${index + 1}`} alt={`Spot Image ${index + 1}`} />
          ))}
      </div>
      <div className='host-container'>
        <h3>Hosted by {spot.Owner.firstName} {spot.Owner.lastName}</h3>
        <h4>{spot.description}</h4>
      </div>
      <div className='price-reserve-container'>
        <div className='price-info-container'>
          <div className='price-container'>
            <h4>${spot.price}</h4>
          </div>
          <div className='night-container'>
            <h5>night</h5>
          </div>
          <div className='ratings-container'>
            <i className='fa-solid fa-star'></i>
            {!spot.avgStarRating ? <span>NEW</span> : spot.avgStarRating.toFixed(1)}
            {spot.numReviews ? '·' : <p></p>}
            {spot.numReviews ? (
              `${spot.numReviews} ${spot.numReviews > 1 ? 'reviews' : 'review'}`
            ) : (
              <p></p>
            )}
          </div>
        </div>
        <button className='reserve-button' onClick={reserveButton}>Reserve</button>
      </div>
      <SpotReview />
    </div>
  );
}

export default SingleSpotDetails;





// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { useParams } from 'react-router-dom/';
// import { getSingleSpotThunk } from '../../store/spots';
// import { getReviewsThunk } from '../../store/reviews';
// import './SingleSpotDetails.css';

// function SingleSpotDetails () {
//     const dispatch = useDispatch();
//     const spot = useSelector((state) => state.spots.singleSpot);
//     const { spotId } = useParams();
//     const allReviewsArr = useSelector((state) => state.spots.allReviews)

//     useEffect(() => {
//         dispatch(getSingleSpotThunk(spotId));
//     }, [dispatch, spotId])

//     if (!spot || Object.keys(spot).length === 0) {
//         return null;
//     }

//     if (!allReviewsArr) {
//         return null;
//     }
//     // console.log('spot:', spot)

//     // const noPreviewImage = spot.SpotImages.filter(image => !image.preview);

//     const reserveButton = (e) => {
//         e.preventDefault();
//         alert('Feature Coming Soon...')
//     };

//     // const checkForReviews = (reviews) => {
//     //     if (reviews === 0) {
//     //         return 'New'
//     //     } else if (reviews === 1) {
//     //         return `${reviews} Review`
//     //     } else return `${reviews} Reviews`
//     // }


//     return (
//         <div id='spots-details-container'>
//             <div className='name-location-container'>
//                 <h2>{spot.name}</h2>
//                 <h4>{`${spot.city}, ${spot.state}, ${spot.country}`}</h4>
//             </div>
//             <div className='main-image-container'>
//                 {/* <div className='image-container'>
//                 {noPreviewImage.map(image => (
//                 <img key={image.id} src={image.url} alt='main img' />
//                 ))}
//                 </div> */}
//                 <div className='image-container'>
//                 {spot.SpotImages.map(image => (
//                 <img key={image.id} src={image.url} alt='main img' />
//                 ))}
//             </div>
//             </div>
//             <div className='host-container'>
//                 <div className='host-container'>
//                     <h3>Hosted by {spot.Owner.firstName} {spot.Owner.lastName}</h3>
//                     <h4>{spot.description}</h4>
//                 </div>
//             </div>
//             <div className='price-reserve-container'>
//                 <div className='price-container'>
//                     <h4>${spot.price} </h4>
//                     <h5>night</h5>
//                 </div>
//                 <div className='reviews-container'>
//                     <h5 className='ratings'>
//                         <i className='fa-solid fa-star'></i>{!spot.avgStarRating ? <span>NEW</span> : spot.avgStarRating.toFixed(1)}
//                     </h5>
//                     {spot.numReviews ? '·' : <p></p>}
//                     <h5 className='numReviews'>
//                         {spot.numReviews ? `${spot.numReviews} ${spot.numReviews > 1 ? 'reviews' : 'review'}` : <p></p>}
//                     </h5>
//                 </div>
//                 <button className='reserve-button' onClick={reserveButton}>Reserve</button>
//             </div>
//             <div className='reviews-container'>
//                 <div className='star-review-line'>
//                     <p className='rating'><i className='fa-solid fa-star'></i>{!spot.avgStarRating ? <p>New</p> : spot.avgStarRating.toFixed(1)}
//                     </p>
//                     {spot.numReviews ?<i className='fa-solid fa-circle'></i> : <p></p>}
//                     <p className='num-reviews'>
//                     {spot.numReviews ? `${spot.numReviews} ${spot.numReviews > 1 ? 'reviews' : 'review'}` : <p></p>}
//                     </p>
//                 </div>
//             </div>
//         </div>
//     )
// }


// export default SingleSpotDetails;
