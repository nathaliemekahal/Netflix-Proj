const url='https://striveschool.herokuapp.com/api/movies/'
const url2='https://striveschool.herokuapp.com/api/movies/id/'
let givenstring='user20:Y2cJZ38UPMmnPdAW'
let encoded=window.btoa(givenstring)

const saveMovie= async (movieObj)=>{
    let response= await fetch(url,{
        method:"POST",
        body:JSON.stringify(movieObj),
        headers: new Headers({
            'Content-Type':'application/json',
            'Authorization':'Basic '+encoded
        }),
    })
    return response
}
const getMovies=async()=>{
    let response= await fetch(url,{
        method:'GET',
        headers: new Headers({
            'Content-Type':'application/json',
            'Authorization':'Basic '+encoded
        })
    })
    return await response.json();
}
const getMovie=async(id)=>{
    let response= await fetch(url2+id,{
        method:'GET',
        headers: new Headers({
            'Content-Type':'application/json',
            'Authorization':'Basic '+encoded
        })
    })
    return await response.json();
}
// GET https://striveschool.herokuapp.com/api/movies/{category}
const getCategoryMovies=async(Category)=>{
    let response= await fetch(url+Category,{
        method:'GET',
        headers: new Headers({
            'Content-Type':'application/json',
            'Authorization':'Basic '+encoded
        })
    })
   
    return await response.json();
}
const editMovie = async (id, movieObj) => {
    let response = await fetch(url + id, {
      method: "PUT",
      body: JSON.stringify(movieObj),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });
    return response;
  };