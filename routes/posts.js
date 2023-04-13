const express = require('express')
const router = express.Router()
const {getPosts,getPost,addPost,deletePost,updatePost,addPost1,getPost2,addPost2,getPost3,addPost3,addCopon,getCopon,postResultForexPost,postResultBinaryPost,postResultCryptoPost,getNum,getById,getCount} = require("../controllers/post.js")

router.get("/",getPosts);
router.get("/register",getPost);
router.get("/coupon",getCopon);
router.get("/sports/tip",getPost2);
router.get("/count",getCount);
router.get("/sports/tip3",getPost3);
router.get("/sports/num",getNum);
router.post("/sports",addPost);
router.post("/forex",addPost1);
router.post("/coupon",addCopon);
router.post("/postResult",addPost2);
router.post("/postResultForex",postResultForexPost);
router.post("/postResultCrypto",postResultCryptoPost);
router.post("/postResultBinary",postResultBinaryPost);
router.post("/resultforex",addPost3);
router.delete("/:id",deletePost);
router.put("/:id",updatePost);
router.get("/:id",getById);




module.exports = router;