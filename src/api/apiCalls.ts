const apiKey: string = "58a4977899e4dbd38c7683cfb182db92";
export const nowPlayingMoviesURL: string = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;
export const upcomingMoviesURL: string = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`;
export const popularMoviesURL: string = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
export const searchMovies = (keyword: string) => {
    return `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${keyword}`;
};
export const movieDetails = (id: number) => {
    return `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
};
export const movieCastDetails = (id: number) => {
    return `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`;
}