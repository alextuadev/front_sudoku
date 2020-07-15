// API base url
const URL = "http://localhost:8000/";


class API {
    async solveSudoku(data_send) {
        let response = false;
        let data = { data: data_send.data_array, name:data_send.name }
        fetch(`${URL}api/solve`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                console.log(res.data)
                response = true;
            })
            .catch((err, code) => {
                response = true;
                console.log(err);
                console.log(err.code);
            });
        return response
    }

    async getResults() {
        
        return fetch(`${URL}api/results`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            },
        })
            .then(res => {
                
            })
            .catch((err, code) => {
              
                console.log(err);
                console.log(err.code);
            });
        
    }
}
export { URL }

export default new API()