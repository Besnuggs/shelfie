module.exports={
getProduct: (req,res,then) => {
    const db = req.app.get('db');
    db.get_inventory().then(inventory =>{
        res.status(200).send(inventory)
    })
},
addProduct: (req,res,then) => {
    let {Name, Price, Image} = req.body
    const db = req.app.get('db');
    console.log(Name, Price, Image)
    db.create_product({Name, Price, Image}).then(inventory => {
        res.status(200).send(inventory)
    }).catch(err => {
        console.log(err);
        res.status(500),send(err)
    })
},
updateProduct: (req,res,then) =>{
    const db = req.app.get('db');
},
deleteProduct: (req,res,then) => {
    const db = req.app.get('db');


}
}