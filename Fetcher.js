`use strict`

const datas = {
    "id": 30,
    "name": "Someone"
};


const axios = require("axios");

const API = "https://httpbin.org";  

class Fetcher {
    
    async getData() {
        let restData = await axios
                            .get(`${API}/get`)
                            .catch((error) => console.log( error ));
        return restData.data;
    }

    async deleteData() {
        let restData = await axios
                            .delete(`${API}/delete`,
                                { data : datas }
                             )
                            .catch((error) => console.log( error ));
        return restData.data;
    }


    async postData() {
        let restData = await axios
                            .post(`${API}/post`,
                                { data : datas }
                             )
                            .catch((error) => console.log( error ));
        return restData.data;
    }

    async putData() {
        let restData = await axios
                            .put(`${API}/put`,
                                { data : datas }
                             )
                            .catch((error) => console.log( error ));
        return restData.data;
    }



    async patchData() {
        let restData = await axios
                            .patch(`${API}/patch`,
                                { data : datas }
                             )
                            .catch((error) => console.log( error ));
        return restData.data;
    }
    
}

const fetcher = new Fetcher();

// endPoint
async function runningEndPoint() {
    
    const getData = await fetcher.getData();
    const deleteData = await fetcher.deleteData();
    const postData = await fetcher.postData();
    const putData = await fetcher.putData();

    const patchData = await fetcher.patchData();

}

// run script
runningEndPoint();
