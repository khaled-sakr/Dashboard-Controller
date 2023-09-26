function ErrorInput({ message }) {
  return (
    <div
      className={`text-xs md:text-sm text-red-700 font-semibold w-3/12 xsm:pt-0 pt-2 ml-3 
       `}
    >
      {message}
    </div>
  );
}

export default ErrorInput;
