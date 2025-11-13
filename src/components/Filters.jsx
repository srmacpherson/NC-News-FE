function Filters({ setSearchParams }) {
  function handleChange(e) {
    setSearchParams((prev) => {
      const params = Object.fromEntries(prev.entries());

      switch (e.target.value) {
        case "Date (oldest-newest)":
          return { ...params, sort_by: "created_at", order: "asc" };
        case "Date (newest-oldest)":
          return { ...params, sort_by: "created_at", order: "desc" };
        case "Most Comments":
          return { ...params, sort_by: "comment_count", order: "desc" };
        case "Least Votes":
          return { ...params, sort_by: "votes", order: "asc" };
        case "Most Votes":
          return { ...params, sort_by: "votes", order: "desc" };
        default:
          return params;
      }
    });
  }

  // function handleChangeOrder(e) {
  //   setSearchParams((prev) => {
  //     const params = Object.fromEntries(prev.entries());
  //     return { ...params, order: e.target.value };
  //   });
  // }

  return (
    <>
      <h2>Filters</h2>
      <label htmlFor="sortBy">Sort By:</label>
      <section>
        <select name="sortBy" id="sortBy" onChange={handleChange}>
          <option value="">--Sort By--</option>
          <option value="Date (newest-oldest)">Date (newest-oldest)</option>
          <option value="Date (oldest-newest)">Date (oldest-newest)</option>
          <option value="Most Votes">Most Votes</option>
          <option value="Least Votes">Least Votes</option>
          <option value="Most Comments">Most Comments</option>
        </select>

        {/* <p>Order By:</p>
        <input
          type="radio"
          id="order1"
          name="order"
          value="desc"
          onChange={handleChangeOrder}
        />
        <label htmlFor="order1">descending</label>

        <input
          type="radio"
          id="order2"
          name="order"
          value="asc"
          onChange={handleChangeOrder}
        />
        <label htmlFor="order2">ascending</label> */}
      </section>
    </>
  );
}

export default Filters;
