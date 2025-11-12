import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router";

function Topic() {

    const params = useParams();
    console.log(params.topic)

    // useEffect(() => {
    //     axios.get(`https://nc-news-be-vwd3.onrender.com/api/topics?topic=${params.topic}`).then((res) => {
    //         console.log(res.data.topics)
    //     })
    // }, [])

    return (
        <>
            <p>Topic</p>
            <label htmlFor="sortBy">Sort By:</label>
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

export default Topic;