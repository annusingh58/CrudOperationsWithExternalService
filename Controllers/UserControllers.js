import Users from '../modals/user.js';
import encrypt from 'encryptjs';



export const register=async(req,res)=>{

    try{
const {name,email,password,pin,role} =req.body;
if(!name) return res.send("Name is required");
if(!email) return res.send("email is required");
if(!password) return res.send("password is required");
if(!pin) return res.send("pin is required");
if(!role) return res.send("role is required");

// if(password.length<=8("password should be 8 digit")){
//     return res.send

// }
const response =await Users.find({email}).exec();
if(response.length) return res.send("email already exits")

var secretkey ="crud";
var plaintext= password;
var ciphertext=encrypt.encrypt(plaintext,secretkey,256);

var secretkeypin="pin";
var plaintextpin=pin;
var ciphertextpin=encrypt.encrypt(plaintextpin,secretkeypin,256);

const user =new Users({

    name,
    email,
    password:ciphertext,
    pin:ciphertextpin,
    role,
    
});

             await user.save();
            return res.send("registeration sucessfully");

    }
    catch (error){
       return  res.send(error);
    }
}


