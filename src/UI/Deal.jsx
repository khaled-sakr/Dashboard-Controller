import ThreeDot from "./ThreeDot";

const deal = {
  Company: "khaledCo",
  Dealer: "khaled sakr",
  packge: 200,
  penifit: "8000$",
  Phone: "0404400784",
  Date: "2023-09-12",
};

function Deal() {
  const { Company, Dealer, packge, penifit, Phone, Date } = deal;
  return (
    <div className="grid grid-cols-13 md:my-16 my-9 items-center">
      <span className="col-span-2 border-r border-vanilla-400">{Company}</span>
      <span className="col-span-2 border-r border-vanilla-400">{Date}</span>
      <span className="col-span-2 border-r border-vanilla-400">{Dealer}</span>
      <span className="col-span-2 border-r border-vanilla-400">{packge}</span>
      <span className="col-span-2 border-r border-vanilla-400">{penifit}</span>
      <span className="col-span-2 ">{Phone}</span>
      <span className="col-span-1 mx-auto ml-4 relative">
        <ThreeDot />
      </span>
    </div>
  );
}

export default Deal;
