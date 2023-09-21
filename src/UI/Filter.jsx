function Filter({ withData, addStyle }) {
  return (
    <div>
      <select
        className={` cursor-pointer float-right bg-vanilla-600 hover:bg-vanilla-700 smd:text-xl text-xs  font-semibold mt-[20px] rounded-lg py-2  text-vanilla-100 outline-none text-center shad ${
          addStyle && addStyle
        }`}
      >
        <option value={1}>filter</option>

        {withData ? (
          <option value={2}>Today</option>
        ) : (
          <>
            <option value={2}>Confirmed</option>
            <option value={3}>up 5000$</option>
          </>
        )}
      </select>
    </div>
  );
}

export default Filter;
