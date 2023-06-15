import Users from '../modals/user.js';
import encrypt from 'encryptjs';



export const checksregister=async(req,res,next)=>{

try{

const {_id,pin} =req.body;
if(!_id) return res.send("_id is required in middleware");
if(!pin) return res.send("pin is required in middleware");


const response=await Users.find({_id}).exec();
console.log(response,"find -id")


if(response.length)
    return res.send("id not found in middleware");

    var secretkeypin ="pin";
    var decipher =encrypt.decrypt(response[0].pin.secretkeypin,256);
        if(decipher==pin){
            if(response[0].role=="seller"|| response[0].role=="admin"){
                next();

            }else{
                return res.send("you are not allowed to  buyer to added product")
            }
            
        }
        else{
            return res.send("invalid pin ")

        }
    console.log(role);

 }
 catch(error){
    return res.send(error);
 }


}


// export const checkseller =async(req,res,next)=>{
//     try{
//         const{_id,pin} =req.body;
//         if(!_id)return res.send("id is required in middlewarer");
//         if(pin)return res.send("pin is required in middlewarer");


//     }
//     catch(error){
//         return res.send(error);
//     }
// }