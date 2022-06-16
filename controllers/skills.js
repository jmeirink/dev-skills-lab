import { Skills } from "../data/skills.js";
// Import the Skill model for use with CRUD. Then delete the line above.

function index(req, res) {
  Skill.find({})
  .then(skills => {
    res.render('skills/index', {
      Skills: Skills
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

export {
  index
}