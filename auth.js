const authorize =(req,res,next)=>{
    const user = req.query;
    console.log(user.name);
    if(user.name==="fayaz"){
        req.user = {name:"fayaz",id:3,logged:true}; 
    }else{
        req.user={logged:false}
    }
    if(req.user.logged){
        next()
    }else{
        res.status(401).send('Please log in to access this page')
    }
}

module.exports = authorize