const { response } = require("express")
const db = require("../db/connect")

class Diary {
    constructor({post_id, post, date, category}) {
        this.post_id = post_id
        this.post = post
        this.date = date
        this.category = category
    }

    static async getAll() {
        const response = await db.query("SELECT * FROM diary;");
    
        if (response.rows.length === 0) {
          throw new Error("No posts available.")
        }
    
        return response.rows.map(c => new Diary(c));
      }

    static async getPostById(post_id) {
        const response = await db.query("SELECT * FROM diary WHERE post_id = $1", [post_id]);
   
        if (response.rows.length != 1) {
          throw new Error("Unable to locate post.")
        }
        
        return new Snack(response.rows[0]);
      }
    
      static async getPostByDate(date) {
        const response = await db.query("SELECT * FROM diary WHERE date = $1", [date]);
   
        if (response.rows.length != 1) {
          throw new Error("Unable to locate post.")
        }
        
        return new Snack(response.rows[0]);
      }

      static async getPostByCategory(category) {
        const response = await db.query("SELECT * FROM diary WHERE category = $1", [category]);
   
        if (response.rows.length != 1) {
          throw new Error("Unable to locate post.")
        }
        
        return new Snack(response.rows[0]);
      }

    static async create(data) {
        const {post, date, category} = data
        if(existing_brand.rows.length === 0){
            let response = await db.query("INSERT INTO diary (post, date, category) VALUES ($1, $2, $3) RETURNING *;", 
                [post, date, category])
                return new Diary(response.rows[0])
        }
    }

    async destroy() {
        const response = await db.query("DELETE FROM diary WHERE post_id = $1 RETURNING *;", [this.post_id])
        return new Diary(response.rows[0])
    }
}

module.exports = Diary