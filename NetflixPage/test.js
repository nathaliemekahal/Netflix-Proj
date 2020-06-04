

let test=async (params)=> {
    let j=0
    
    let categories=await getMovies()
    j++

    console.log('categories',categories)
   
    for (let i=0;i<categories.length;i++){
        let movies=await getCategoryMovies(categories[i])
      for(let j=0;j<movies.length;j++){
          console.log(movies[j])
      }
    }

    
    
}