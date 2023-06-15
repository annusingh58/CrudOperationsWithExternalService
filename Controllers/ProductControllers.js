import Users from '../modals/user.js';
import encrypt from 'encryptjs';

export const addproduct = async(req, res) =>{
    try{
        const{title,price,image,catergory,description}=req.body;
        fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify({
                    title,
                    price,
                    description,
                    image,
                    catergory
                })
            
        })
            .then(res=>res.json())
            .then(json=>console.log(json));
            res.send(json);
    }
    catch(error){
        return res.send(error);
    }
}