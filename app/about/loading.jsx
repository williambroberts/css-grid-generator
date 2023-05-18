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