import express from  'express';

const router = express.Router();


let userData = [];

// Get All Users

router.get('/', (req,res)=> {
    res.send(userData);
});

// Post Users

router.post('/', (req,res)=> {
    const adduser = req.body;
    userData.push(adduser);
    res.send(`Email Added ${userData.Email}`);
});

// View User Data Using Specific Id

router.get('/:Id',(req, res)=> {
    const { Id } = req.params;
    const foundUser = userData.find((user)=> user.Id == Id);
    res.send(foundUser);
});

// Delete User Data Using Specific Id

router.delete('/:Id',(req, res)=> {
    const { Id } = req.params;
   userData = userData.filter((user)=> user.Id != Id);  
});

// Update User Data Using Specific Id

router.patch('/:Id',(req, res)=> {
    const { Id } = req.params;
    const { Username } = req.body;
   const editUser = userData.find((user)=> user.Id == Id);
   if(Username) editUser.Username = Username;
});

// View User Data Using ShortMail

router.get('/:ShortMail',(req, res)=> {
    const { ShortMail } = req.params;
    const foundUserShort = userData.find((user)=> user.ShortMail == ShortMail);
    res.send(foundUserShort);
});

//

export default router;