module.exports ={
  getAll: (req, res) => {
    const db = req.app.get('db')
    db.get_all().then(response => {
      res.status(200).send(response)
    })
  },
  createPunch: (req,res) => {
    const db = req.app.get('db')
    const {date, day, time, punch_type} = req.body

    db.create_punch({date, day, time, punch_type}).then(response => {
      res.status(200).send(response)
    })
  },
  deletePunch: (req,res) => {
    const db = req.app.get('db')
    const {id} = req.params

    db.delete_punch({id}).then(response => {
      res.status(200).send(response)
    })
  },
  updatePunch: (req,res) => {
    const db = req.app.get('db')
    const {id} = req.params
    const {date, day, time, punch_type} = req.body

    db.update_punch({id, date, day, time, punch_type}).then(response => {
      res.status(200).send(response)
    }).catch(err => console.log(err))
  }
}


