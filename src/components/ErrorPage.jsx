import ErrorImage from '../assets/images/error.webp'
const ErrorPage = () => {
  return (
    <div className="text-4xl lg:text-5xl flex flex-col items-center justify-center min-h-screen w-full">
      <img src={ErrorImage}alt="" />
    </div>
  );
};

export default ErrorPage;