import axios, { AxiosInstance } from 'axios';
import { Constants } from '../ consts';
import {IMovie} from './interfaces/IMovie';
import * as path from 'path';

export class Movies {//This will get movies for us
    public token:string;
    public client:any;
    

    constructor(token:string){
        this.token=token;
        
    }

    getClient():any {

        if(!this.client){//setting this up for dependecy injection later but for now this will suffice 
            this.client = axios.create({
                baseURL: Constants.API_URL_WITH_VERSION, // replace with your API's base URL
                headers: {
                Authorization: `Bearer ${this.token}`,
                },
            });
        }

          return this.client;
    }

    async getMovies(): Promise<IMovie[]> {
        const response = await this.client.get('/movie');
        return response.data;
      }
}