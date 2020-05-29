const express=require('express')
const router=express.Router()
const Bookmark=require('../app/model/book')
const booksController=require('../app/controller/bookController')

router.get("/bookmarks", booksController.list);
router.get("/bookmarks/:id", booksController.show);
router.post("/bookmarks", booksController.create);
router.put("/bookmarks/:id", booksController.update);
router.delete("/bookmarks/:id", booksController.destroy);
router.get("/bookmarks/tags", booksController.listnames);
router.get('/bookmarks/tags/:name', booksController.listtag)

router.get('/:hash', (req, res) => {
    const hash = req.params.hash
    Bookmark.find({hashedUrl: hash})
        .then(bookmarks => {
            if (bookmarks) {
                res.json(bookmarks)
            } else {
                res.json([])
            }
        })
        .catch(err => {
            res.json(err)
        })
})



module.exports=router