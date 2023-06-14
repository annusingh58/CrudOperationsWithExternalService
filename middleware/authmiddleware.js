import Users from '../modals/user.js';
import encrypt from 'encryptjs';



export const checksregister=async(req,res,next)=>{

try{

const {name,email,password,pin,role} =req.body;
if(!name) return res.send("Name is required in middleware");
if(!email) return res.send("email is required in middleware");
if(!password) return res.send("password is required in middleware");
if(!pin) return res.send("pin is required in middleware");
if(!role) return res.send("role is required in middleware");

if(password.length<=8("password should be 8 digit")){
    return res.send("password should be 8 digit");

}

const response=await Users.find({email}).exec();
console.log(response,"find email")


if(response.length){
    return res.send("email already registered");
}
next();

 }
 catch(error){
    return res.send(error);
 }


}


export const checkseller =async(req,res,next)=>{
    try{
        const{_id,pin} =req.body;
        if(!_id)return res.send("id is required in middlewarer");
        if(pin)return res.send("pin is required in middlewarer");


    }
    catch(error){
        return res.send(error);
    }
}