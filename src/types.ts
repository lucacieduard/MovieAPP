export type MovieType = {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    media_type: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean
    , vote_average: number,
    vote_count: number,
    first_air_date: string,
    origin_country: string,
    name: string,
}

export type HeroDataType = {
    page: number;
    results: MovieType[];
    total_pages: number;
    total_results: number;
};

export type SectionType = {
    title: string;
    section: string;
    url: string;
};

export type SectionsType = {
    [genres: string]: SectionType;
    trending_now: SectionType;
    new_releases: SectionType;
    must_watch: SectionType;
};