import useFetch from "../useFetch";

const Movies = () => {

    const { data, loading, error } = useFetch(`${import.meta.env.VITE_API_URL}/movies`);

    console.log(data);

    return(
        <div>
            <ul>
            {data?.map((movie) => (
                <li>{movie.title}</li>
            ))}

            </ul>
        </div>
    )

};

export default Movies;