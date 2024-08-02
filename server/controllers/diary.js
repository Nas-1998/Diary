const Diary = require("../models/Diary")

async function index(req, res) {
    try {
      const posts = await Diary.getAll();
      console.log(posts)
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json({error: err.message})
    }
  }

async function showId(req, res) {
    try {
      const post_id = parseInt(req.params.post_id);
      const post = await Diary.getPostById(post_id);
      res.status(200).json(post);
    } catch (err) {
      res.status(404).json({error: err.message})
    }
  }

  async function showDate(req, res) {
    try {
      const date = parseInt(req.params.date);
      const post = await Diary.getPostById(date);
      res.status(200).json(post);
    } catch (err) {
      res.status(404).json({error: err.message})
    }
  }

  async function showCategory(req, res) {
    try {
      const category = parseInt(req.params.category);
      const post = await Diary.getPostById(category);
      res.status(200).json(post);
    } catch (err) {
      res.status(404).json({error: err.message})
    }
  }
 

async function create(req, res) {
    try{
        const data = req.body
        const newPost = await Diary.create(data)
        res.status(201).json({newPost})
    } catch(err) {
        res.status(400).json({error: err.message})
    }
}

async function destroy(req, res) {
    try {
        const post_id = req.params.post_id
        const post = await Diary.getPostById(post_id)
        const remove = await post.destroy()
        res.sendStatus(204)
    } catch(err) {
        res.status(404).json({error: err.message})
    }
}

module.exports = {index, showId, showDate, showCategory, create, destroy}