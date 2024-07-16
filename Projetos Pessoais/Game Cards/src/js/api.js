import { getConquestsList } from './conquest.js';
import { getPlatformList } from './platforms.js';

import {api_key} from '../keys/key.js';

const API_KEY = `${api_key}`;

const dataOBJ = new Date();
const year = dataOBJ.getFullYear();

export async function getInfos(){
    try{
        const request = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}`);
        const response = await request.json();
        return response;
    }catch(error){
        throw new Error(error);
    }
} 

export async function getNewGames(){
    try{
        const request = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&dates=${year}-07-15,${year}-12-31&ordering=-added`);
        const response = await request.json();
        return response;
    }catch(error){
        throw new Error(error);
    }
} 

export async function getAllPlatforms(){
    try{
        const request = await fetch(`https://api.rawg.io/api/platforms?key=${API_KEY}`);
        const response = await request.json();
        getPlatformList(response);
        return response;
    }catch(error){
        throw new Error(error);
    }
} 

export async function getConquests(){
    try{
        const request = await fetch(`https://api.rawg.io/api/games/4200/achievements?key=${API_KEY}`);
        const response = await request.json();
        getConquestsList(response)
        return response;
    }catch(error){
        throw new Error(error);
    }
} 

export async function getAllDlc(){
    try{
        const request = await fetch(`https://api.rawg.io/api/games/4200/additions?key=${API_KEY}`);
        const response = await request.json();
        return response;
    }catch(error){
        throw new Error(error);
    }
} 