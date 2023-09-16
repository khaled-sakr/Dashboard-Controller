import { Link, useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  return (
    <div className=" mt-9 text-amber-700 text-4xl sm:text-6xl m-auto text-center md:text-7xl">
      Page Is Not Defined
      <Link to={navigate(-1)} className="text-vanilla-500 block mt-6">
        &larr;Go Back
      </Link>
    </div>
  );
}

export default Error;
