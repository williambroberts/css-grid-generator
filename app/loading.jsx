import IconLoading3Quarters from "@/components/icons/loading/loading";

const LoadingPage = () => {
    return (
      <div className='loader'>
        <div className="half-circle-one">
          <div className="half-circle-two">
            <div className="half-circle-three">
              <IconLoading3Quarters/>
            </div>
                
          </div>
        
        </div>
      </div>
    );
  };
  
  export default LoadingPage;

// import React from 'react'

// const LoadingPage = () => {
  
//   return (
//     <div className='loader'>
//       <div className='loading-grid'>
//         <div className='loading-grid-item1'></div>
//         <div className='loading-grid-item2'></div>
//         <div className='loading-grid-item3'></div>
//         <div className='loading-grid-item4'></div>
//         <div className='loading-grid-item5'></div>
//         <div className='loading-grid-item6'></div>
//         <div className='loading-grid-item7'></div>
//         <div className='loading-grid-item8'></div>
//       </div>
//     </div>
//   )
// }

// export default LoadingPage