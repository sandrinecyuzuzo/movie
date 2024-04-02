import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";
import Card from "../component/card";

const SearchInput = () => {
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    useEffect(() => {
        fetchData()
    }, [query])
    const fetchData = async () => {
        setLoading(true);

        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=54e89b04db35f4abd7d4656eb49a24e3`
            );
            const result = await response.json();
            console.log(result);
            setData(result.results);
        } catch (error) {
            console.log("error to fetch", error);
        }
        setLoading(false);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData();
    };

    return (
        <div className="flex flex-col items-center">
            <form onSubmit={handleSubmit} className="mb-4">
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="searching.."
                    className="border border-gray-400 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                />
                <button
                    type="submit"
                    className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Search
                </button>
            </form>

            <div>
                {" "}
                <div className="grid lg:grid-cols-4 bg-black">
                    {data.map((item) => {
                        return (
                            <Card
                                key={item.id}
                                title={item.title}
                                date={item.vote_average}
                                vote={item.vote_count}
                                image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                            />
                        );
                    })}
                </div>
            </div>

        </div>
    );
};

export default SearchInput;