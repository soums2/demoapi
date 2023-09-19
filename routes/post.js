import express from  'express';

const router = express.Router();

const intro = {
    "Users" :"/users",
    "Posts" : "/post",
}

router.get('/', (req,res)=> {
    res.send(intro);
});

export default router;