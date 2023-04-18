
// --------------------------HTTP REQUEST=-----------------
// const url1 = 'https://jsonplaceholder.typicode.com/todos/1';
// const request = new XMLHttpRequest();



// request.open('GET', 'data.json');
// request.send();

// request.onload = function(){
//     if(request.status === 200){
//         console.log(request.statusText);
//     } else{
//         console.log('not found...');
//     }
// }


// ------------------------CALLBACK FUNCTION AND HELL---------------------------

// const getTodos = function(url, callBack){
//     const request = new XMLHttpRequest();

//     request.open('GET', url);
//     request.send();
    
//     request.onload = function(){
//         if(request.status === 200){
//             const data = JSON.parse(request.responseText);
//             callBack(undefined, data);
//         } else {
//             callBack('not found...', undefined);
//         }
       
//     }
// }

// const url1 = 'https://jsonplaceholder.typicode.com/todos/1';
// const url2 = 'https://jsonplaceholder.typicode.com/todos/2';
// const url3 = 'https://jsonplaceholder.typicode.com/todos/3';

// getTodos(url1, function(error, data){
//     if(error){
//         console.log(error);
//     } else {
//         console.log(data);
//     }
//     getTodos(url2, function(error, data){
//         if(error){
//             console.log(error);
//         } else {
//             console.log(data);
//         }
//         getTodos(url3, function(error, data){
//             if(error){
//                 console.log(error);
//             } else {
//                 console.log(data);
//             }
//         });
//     });
// });

// -----------------------Chaining Promises----------------------------


// const getTodoos = function(){
//     return new Promise(function(resolve, reject){
//         // request done
//         if(){
//             resolve(data);
//         } else {
//             reject(Error);
//         }
//     })
// };

// getTodoos().then(function(data){
//     console.log(data);
// }).catch(function(error){
//     console.log(error);
// });

// =====for example=====

// const url1 = 'https://jsonplaceholder.typicode.com/todos/1';
// const url2 = 'https://jsonplaceholder.typicode.com/todos/2';
// const url3 = 'https://jsonplaceholder.typicode.com/todos/3';

// const getTodos = function(url){
//     return new Promise(function(resolve, reject){
//         const request = new XMLHttpRequest();

//         request.open('GET', url);
//         request.send();
        
//         request.onload = function(){
//             if(request.status === 200){
//                 const data = JSON.parse(request.responseText);
//                 resolve(data);
//             } else {
//                 reject('not found...');
//             }
           
//         }
    
//     });
// }

// getTodos(url1).then(function(data){
//     console.log(data);
//     return getTodos(url2);
// }).then(function(data){
//     console.log(data);
//     return getTodos(url3);
// }).then(function(data){  
//     console.log(data);
// }).catch(function(error){
//     console.log(error)
// }); 

// ------------------------------------FETCH API-------------------------------------
// const url = 'https://jsonplaceholder.typicode.com/todos/1';

// fetch(url)
//         .then(function(response){
//             if(response.status === 200){
//                 return response.json();
//             } else {
//                 throw new Error('not found...');
//             }
           
//         }).then(function(data){
//             console.log(data);
//         }).catch(function(error){
//             console.log(error);
//         });


// ---------------------------------- ASYNC AND AWAIT --------------------

const url = 'https://jsonplaceholder.typicode.com/todos/1';

const getTodos = async url => {
    const response = await fetch(url);
    if(response.status === 200){
       const data = await response.json();
       return data;
    } else {
        throw new Error('not found');
    }
};

getTodos(url)
    .then(data => console.log(data))
    .catch(error => console.log(error));






// fetch(url)
//         .then(function(response){
//             if(response.status === 200){
//                 return response.json();
//             } else {
//                 throw new Error('not found...');
//             
           
//         }).then(function(data){
//             console.log(data);
//         }).catch(function(error){
//             console.log(error);
//         });

