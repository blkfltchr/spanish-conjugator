const protected = require('./authent/config/middleware')




// Pulls student firstname, lastname, email;
router.get("/api/info", protected, (req, res) => {
  db("info")
    .select("firstName", "lastName", "email")
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json(err);
      console.error(err);
    });
});

router.post('/api/info', protected, (request, response) => {
    let { firstName, lastName, email } = request.body;
    if (!firstName) {
        return response.status(400).json({ errorMessage: "First name field cannot be blank" })
    }
    if (!lastName) {
        return response.status(400).json({ errorMessage: "Last name field cannot be blank" })
    }

    if ( !email || (!email.includes('@') || !email.includes('.com'))); {
        return response.status(400).json({ errorMessage: "A valid email address is required" })
    }
    const newStudent = { firstName, lastName, email  };

    db.insert(newStudent)
    .into('info')
    .then( created => {
        if ( !created ) {
            return response.status(400).json({ errorMessage: "Project not created" })
        }
        response.status(201).json(`New student created`);
    })
    .catch( error => response.status(500).json(error) );
});


//DELETE student
router.delete('/api/info/:id', protected, (request, response) => {
    const { id } = request.params;
    if ( !id ) {
        return response.status(400).json({ errorMessage: "Invalid Id" })
    }
    db('info')
    .where({ id })
    .del()
    .then( deleted => {
        if (!deleted) {
            return response.json({errorMessage:"Student could not be deleted"})
        }
        response.json(deleted)
    }
    )
    .catch(error => response.status(500).json(error))
})
