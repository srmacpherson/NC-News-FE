function Topics() {
    return (
        <>
            <section>
                <h2>Coding</h2>
                <h2>Cooking</h2>
                <h2>Football</h2>
            </section>
            <label for="topics">Choose a topic:</label>
            <section>
                <select name="topics" id="topics">
                    <option value="">--Please choose a topic--</option>
                    <option value="Coding">Coding</option>
                    <option value="Cooking">Cooking</option>
                    <option value="Football">Football</option>
                </select>
            </section>
            <label for="sortBy">Sort By:</label>
            <section>
                <select name="sortBy" id="sortBy">
                    <option value="">--Sort by--</option>
                    <option value="Date: oldest-newest">Date: oldest-newest</option>
                    <option value="Date: newest-oldest">Date: newest-oldest</option>
                    <option value="article id">article id</option>
                </select>
            </section>
        </>
    )
}

export default Topics;