// const User = require('../models/user');

exports.signup = async (req, res) => {
    try{
        const user = await User.create({ 
            firstName: "John",
            lastName: "Doe",
            email: "john.doe@mail.com",
            password: "123456"
          });

          res.status(201).json(user);
    } catch (error) {
        console.error(error);

    }
   

    // console.log(req.body)
    // res.json(req.body)
    // res.send('You are signup'); 
}



// exports.login = (req, res) => {
//     console.log(req.body)
//     res.json(req.body)
//     res.send('You are login'); 
// }




  