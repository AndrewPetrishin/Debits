
export default class Service {
    baseUrlApi = 'http://rallycoding.herokuapp.com/api/music_albums';

    async getList(){
        try{
            let header = {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            };
            let response = await this.getResponse(this.baseUrlApi, {headers: header}); 
            console.log(response);
            return response;
        }
        catch (error){
            alert("result = ERROR" + error);
            console.log(error);
        }
        return [];
    }
    
    async getResponse(url, content){
        const response = await fetch(url, content);
        const json = await response.json();
        return json;      
    }   
}