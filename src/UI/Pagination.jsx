import Button from "./Button";

function Pagination() {
  return (
    <div className="md:text-xl text-xs float-left sm:ml-32 xs:ml-20 ml-10 md:mt-20 mt-10 mb-6 ">
      <Button type="pag">&larr;</Button>
      <span className="text-center  m-auto text-sm  sm:text-lg xs:text-base sm:px-4 xs:px-2 px-0 xs:mx-2 mx-1 sm:py-1 py-0 rounded-full sm:font-semibold font-normal ">
        page 1 from 10
      </span>
      <Button type="pag">&rarr;</Button>
    </div>
  );
}

export default Pagination;
