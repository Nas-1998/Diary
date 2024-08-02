const { Router } = require("express")

const diaryController =  require("../controllers/diary")

const diaryRouter = Router()

diaryRouter.get("/", diaryController.index)
diaryRouter.get("/:post_id", diaryController.showId)
diaryRouter.get("/:date", diaryController.showDate)
diaryRouter.get("/:category", diaryController.showCategory)
diaryRouter.post("/", diaryController.create)
diaryRouter.delete("/:id", diaryController.destroy)
//diaryRouter.patch("/:name", diaryController.update)
 
module.exports = diaryRouter