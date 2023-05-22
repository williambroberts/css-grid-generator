import IconLoading3Quarters from "@/components/icons/loading/loading";

const LoadingPage = () => {
    return (
      <div className='loader'>
        {/*<div className="half-circle-one">
          <div className="half-circle-two">
            <div className="half-circle-three">
              <IconLoading3Quarters/>
            </div>
                
          </div>
        
        </div>*/}
       <div className='sq-flex'>
        <span className='sq-1'></span>
        <span className='sq-2'></span>
        <span className='sq-3'></span>
        <span className='sq-4'></span>
      </div>
      </div>
    );
  };
  
  export default LoadingPage;