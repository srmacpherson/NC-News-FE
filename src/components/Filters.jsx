
function Filters({ setSearchParams }) {

  function handleChange(e) {
    if (e.target.value === "Date (oldest-newest)") {
      setSearchParams('?sort_by=created_at&order=asc')
    }
    if (e.target.value === "Date (newest-oldest)") {
      setSearchParams('?sort_by=created_at&order=desc')
    }
    if (e.target.value === "Most Comments") {
      setSearchParams('?sort_by=comment_count&order=desc')
    }
    if (e.target.value === "Least Votes") {
      setSearchParams('?sort_by=votes&order=asc')
    }
    if (e.target.value === "Most Votes") {
      setSearchParams('?sort_by=votes&order=desc')
    }
  }

  function handleChangeOrder(e) {
    setSearchParams(`&order=${e.target.value}`)
  }

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
        <p>Order By:</p>
        <input type="radio" id="order1" name="order" value="desc" onChange={handleChangeOrder}/>
        <label htmlFor="order1">descending</label>
        <input type="radio" id="order2" name="order" value="asc" onChange={handleChangeOrder}/>
        <label htmlFor="order2">ascending</label>
      </section>
    </>
  );
}

export default Filters;
