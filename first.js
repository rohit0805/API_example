var request=require("request");

request('https://jsonplaceholder.typicode.com/users/1',function(error,response,body){
//eval(require("locus"));//will stop the code here 
if(error){
        console.log("Something went wrong");
        console.log(error);
    }
    else{
        if(response.statusCode==200){
            console.log(typeof(body));
            //console.log(body);
            //since body is string->we need to convert
            //it to object and we can achieve it by
            //
            var parseddata=JSON.parse(body);
            console.log(typeof(parseddata));
            console.log(parseddata['name']+" lives in "+parseddata.address.city);
            console.log("Phone no: "+parseddata.phone+" and Company name is "+parseddata.company.name);
        }
    }
});

