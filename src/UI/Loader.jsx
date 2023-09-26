import { ThreeDots } from "react-loader-spinner";

function Loader() {
  return (
    <div className="m-auto pt-20 w-fit p-20 h-fit">
      <ThreeDots
        height="70"
        width="70"
        radius="9"
        color="#4f566b"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
}

export default Loader;
