
export default class Service {
    baseUrlApi = 'http://rallycoding.herokuapp.com/asdasdasd/music_albums';

    async getList(){
        return [
            {
              "key": "1",
              "title": "First object",
              "thumbnail_image": "",
              "totalPrice": 1000000000.3,
              "date": "2018-04-12",
              "isHistiry": false,
              "isReturned" : false
            },
            {
              "key": "2",
              "title": "2 object",
              "thumbnail_image": "",
              "totalPrice": 20.45,
              "date": "2018-09-12",
              "isHistiry": false,
              "isReturned" : false
            },
            {
              "key": "3",
              "title": "3 object",
              "thumbnail_image": "http://lorempixel.com/50/50/sports/",
              "totalPrice": 45.3,
              "date": "2018-09-12",
              "isHistiry": false,
              "isReturned" : true
            },
            {
              "key": "4",
              "title": "4 object",
              "thumbnail_image": "http://i.imgur.com/K3KJ3w4h.jpg",
              "totalPrice": 20.45,
              "date": "2018-09-12",
              "isHistiry": false
            },
            {
              "key": "5",
              "title": "5 object",
              "thumbnail_image": "http://lorempixel.com/50/50/sports/",
              "totalPrice": 45.3,
              "date": "2018-09-12",
              "isHistiry": false
            },
            {
              "key": "6",
              "title": "6 object",
              "thumbnail_image": "http://lorempixel.com/50/50/sports/",
              "totalPrice": 20.45,
              "date": "2018-09-12",
              "isHistiry": false
            },
            {
              "key": "7",
              "title": "7 object",
              "thumbnail_image": "http://lorempixel.com/50/50/sports/",
              "totalPrice": 45.3,
              "date": "2018-09-12",
              "isHistiry": false
            },
            {
              "key": "8",
              "title": "8 object",
              "thumbnail_image": "http://lorempixel.com/50/50/sports/",
              "totalPrice": 20.45,
              "date": "2018-09-12",
              "isHistiry": false
            },
            {
              "key": "9",
              "title": "9 object",
              "thumbnail_image": "http://lorempixel.com/50/50/sports/",
              "totalPrice": 20.45,
              "date": "2018-09-12",
              "isHistiry": false
            },
            {
              "key": "10",
              "title": "10 object",
              "thumbnail_image": "http://lorempixel.com/50/50/sports/",
              "totalPrice": 45.3,
              "date": "2018-09-12",
              "isHistiry": false
            },
            {
              "key": "11",
              "title": "11 object",
              "thumbnail_image": "http://lorempixel.com/50/50/sports/",
              "totalPrice": 20.45,
              "date": "2018-09-12",
              "isHistiry": false
            }
          ];
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
            console.log(error);
        }
        return [];
    }
    
    async getResponse(url, content){
        console.log('start API');
        const response = await fetch(url, content);
        console.log('result = ' + response);
        const json = await response.json();
        return json;      
    }   
}