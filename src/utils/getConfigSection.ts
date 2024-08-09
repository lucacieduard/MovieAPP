import { SectionsType } from "../types";

export const getConfig = (type: "movies" | "series") => {
    const config: SectionsType = {
        genres: {
            url: ``,
            title: "Our Genres",
            section: "genres",
        },
        trending_now: {
            url: `/trending/${type === "movies" ? "movie" : "tv"
                }/day?language=en-US`,
            title: "Trending Now",
            section: "trending_now",
        },
        new_releases: {
            url: `${type === "movies" ? "/movie/now_playing" : "/tv/popular"}`,
            title: `${type === "movies" ? "Now in theatres" : "Popular"}`,
            section: "new_releases",
        },
        must_watch: {
            url: `/${type === "movies" ? "movie" : "tv"}/top_rated`,
            title: `Must - Watch`,
            section: "must_watch",
        },
    };

    return config
}

