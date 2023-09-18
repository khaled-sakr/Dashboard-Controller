function Sort({ withData, addStyle }) {
  return (
    <div>
      <select
        className={` cursor-pointer float-right bg-vanilla-600 hover:bg-vanilla-700 smd:text-xl text-xs  font-semibold xs:ml-6 ml-2 xs:mr-9 mr-3 mt-[20px] rounded-lg  p-2  text-vanilla-100 outline-none text-center ${
          addStyle && addStyle
        }`}
      >
        <option value={1}>sort</option>

        {withData ? (
          <option value={2}>Date</option>
        ) : (
          <>
            <option value={2}>Salary(up)</option>
            <option value={3}>Salary(down)</option>
          </>
        )}
      </select>
    </div>
  );
}

export default Sort;
