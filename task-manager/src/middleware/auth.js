
const auth =  async  (req,res, next) =>{
     console.log('hi')
     res.send('middleware test!')
 }

module.exports=auth