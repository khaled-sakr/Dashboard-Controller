function ErrorInput({ message }) {
  return (
    <div
      className={`text-sm md:text-base text-red-700 font-semibold xl:w-[20%] xs:w-[50%] w-[30%] sm:pt-0 pt-2 ml-3 
       `}
    >
      {message}
    </div>
  );
}

export default ErrorInput;
