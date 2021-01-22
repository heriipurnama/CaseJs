`use strict`

const axios = require("axios");
const where = require("lodash.where");

const APIurl = "https://api.themoviedb.org/3/";  

class ApiMovie {
       
    async getData(search) {
        const API = APIurl+search;

        let restData = await axios
                            .get(API)
                            .catch((error) => console.log( error ));
        return restData.data;
    }
    
    async getDataPupular(search){
        const API = APIurl+search;

        let restData = await axios
                            .get(API)
                            .catch((error) => console.log( error ));
        

        
        return restData.data;
    }
    
}

const fetcher = new ApiMovie();

// endPoint
async function runningEndPoint() {

    // search title indonesia movie
    const searchTitleInd = 'search/movie?api_key=8edacdf50bd263c72f35033a49923666&query=indonesia&page=1&region=Indonesia';
    const getTitleData = await fetcher.getData(searchTitleInd);

    // search Keanu Reeves
    const search = 'search/person?api_key=8edacdf50bd263c72f35033a49923666&language=en-US&query=Keanu%20Reeves&page=1';
    const getData = await fetcher.getData(search);

    // search Robert Downey Jr , Tom Holland
    const searchPeople = 'search/multi?api_key=8edacdf50bd263c72f35033a49923666&language=en-US&query=Robert Downey Jr &query=Tom Holland&page=1';
    const getMultiDatas = await fetcher.getData(searchPeople);

    // Get popular movie list that released on 2016 and the votes above 7.5
    const searchPopular = 'movie/popular?api_key=8edacdf50bd263c72f35033a49923666&page=1';
    const getPularDatas = await fetcher.getDataPupular(searchPopular);

  

    // result data
    console.log('getDataTitleInd : ', JSON.stringify(getTitleData));
    // console.log('getDataKeanuReeves : ', JSON.stringify(getData));
    // console.log('getMultipleData : ', JSON.stringify(getMultiDatas));
    // console.log('getDataPopular : ', JSON.stringify(getPularDatas));

}

// run script
runningEndPoint();
