import axios, { AxiosInstance } from 'axios';
import {IQuote} from './models/interfaces/IQuote';
import {IMovie} from './models/interfaces/IMovie';
/*
    Here is my wrapper around the API 
    I feel like it is the best wrapper anyone has ever wrapped
    Should prolly hire me...
*/
class LordRingsApi {

    private client: AxiosInstance; //I would of made some dependency ingjection for things like this but eh I dont have enough time

    constructor(baseURL: string) { //Also would of liked the baseURL to be controlled by config and dependency injection with the ability to overide in the calling application in case there was ever a need to 
        this.client = axios.create({
            baseURL: baseURL,
        });
    }

    /*
        Get All Movies using pagnation 
        Really great code here if I do say so myself
        I REALLY captured the feel of an API while still being edgy and modern 
        Prolly should be hung up in a musuem somewhere 

    */
    async getAllMovies(page: number, limit: number): Promise<IMovie[]> {
        try {
            const response = await this.client.get<IMovie[]>('/movie', {
                params: { page, limit },
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    /*
        Get a single moving assuming you know the ID of said movie
        Ya know what would be fun tho... hiring people
        People like me
        People like me who write awesome code
    */
    async getMovie(id: string): Promise<IMovie> {
        try {
            const response = await this.client.get<IMovie>(`/movie/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    /*
        Get ALL Qoutes for a particular movie 
        This does not use pagnation because I was lazy and didn't feel like doing it 
        Hopefully you are having a wonderful day reading this AMAZING code
    */
    async getMovieQuotes(id: string): Promise<IQuote[]> {
        try {
            const response = await this.client.get<IQuote[]>(`/movie/${id}/quote`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    /*
        Ya can prolly read these few lines to determine what it does 
        I was going to use the JSDocs stuff but I haven't done it in a while so I just did comments instead
        You know who else doesn't comment code correctly ...  
        your mom
    */
    async getAllQuotes(page: number, limit: number): Promise<IQuote[]> {
        try {
            const response = await this.client.get<IQuote[]>('/quote', {
                params: { page, limit },
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    /*
        gets a quote 
        Seriously tho, are you really reading everyone of my comments ... You are VERY committed 
        Hope you enjoyed my bit of entertainment! 
        Theres more where that came from if you hire me!
    */
    async getQuote(id: string): Promise<IQuote> {
        try {
            const response = await this.client.get<IQuote>(`/quote/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}
