const CustomLoading = ({size}) => {
    return (
      <div className='h-screen flex items-center justify-center'>
        <span className={`loading loading-ring loading-${size}`}></span>
      </div>
    );
  };
  export default CustomLoading;
  