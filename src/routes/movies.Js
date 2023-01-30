const { Router } = require("express");
const _underscore=require("underscore");
const router = Router();

const movies = require("../sample.json");

router.get("/", (req, res) => {
  res.json(movies);
});

router.post("/", (req, res) => {
  const { title, director, year } = req.body;
  if (title && director && year) {
    const id = movies.length + 1;
    const newMovie = { id, ...req.body };
    movies.push(newMovie);

    res.json(movies);
  } else {
    res.send("Wrong Massage");
  }
});

router.put("/:id",(req,res)=>{
    const {id }=req.params;
    const { title, director, year } = req.body;
    if (title && director && year){
        _underscore.each(movies,(movie,i)=>{
            if(movie.id==id){
                movie.title=title;
                movie.director=director;
                movie.year=year;
            }

        });
        res.json(movies);
    }else{
        res.status(500).json({error:"There was an error."});
    }
});

router.delete("/:id",(req,res)=>{
    const {id }=req.params;
    _underscore.each(movies,(movie,i)=>{
       if(movie.id ==id){
        movies.splice(i,1);
       } 
    });
    res.send(movies);
    res.send("deleted");
});

module.exports = router;
