function Filters({setSortByDate}) {

    function handleChange(e) {
        console.log(e.target.value)
        if (e.target.value === "Date: oldest-newest") {
            setSortByDate("asc");
        }
         if (e.target.value === "Date: newest-oldest") {
            setSortByDate("desc");
        }
    }

  return (
    <>
      <h2>Filters</h2>
      <label htmlFor="sortBy">Sort By:</label>
      <section>
        <select name="sortBy" id="sortBy" onChange={handleChange}>
          <option value="">--Sort by--</option>
          <option value="Date: oldest-newest" >Date: oldest-newest</option>
          <option value="Date: newest-oldest" >Date: newest-oldest</option>
          <option value="article id" >article id</option>
        </select>
      </section>
    </>
  );
}

export default Filters;
