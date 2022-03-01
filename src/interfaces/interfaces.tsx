// export interface MovieIterface {
//     id: number,
//     name: string,
//     overview: string,
//     release_date: Date,
//     poster_path: string,
//     backdrop_path: string
// }

// export interface TvIterface {
//     id: number,
//     name: string,
//     overview: string,
//     release_date: Date,
//     poster_path: string,
//     backdrop_path: string
// }
export interface MediaInterface {
    id: number,
    name: string,
    overview: string,
    release_date: Date,
    poster_path: string,
    backdrop_path: string
}


export interface ListInterface {
    title: string,
    items: MediaInterface[]
}