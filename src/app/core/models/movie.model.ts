/** A film returned by the public Studio Ghibli API. */
export interface Movie {
  id: string;
  title: string;
  original_title: string;
  description: string;
  director: string;
  producer: string;
  release_date?: string;
  rt_score: string;
  image: string;
  movie_banner: string;
}

/** The Ghibli API returns a JSON array of Movie objects for /films. */
export type MoviesResponse =Movie[];
