const db = require('../../database/index.js');

module.exports = {
    getMovies: ((req, res) => {
        var queryStr = "select name from movies";
        db.query(queryStr, (err, data) => {
            if (err) {
                res.send(err)
            } else {
                res.send(data)
            }
        });
    }),
    addMovie: ((req, res) => {
        var queryStr = `insert into movies (name, watched) values('${req.body.movieName}', '${req.body.watched}')`
        db.query(queryStr, (err, data) => {
            if (err) {
                res.send(err)
            } else {
                res.send(data)
            }
        })
    })
}

// INSERT INTO movies(name, watched)
//     VALUES('my neighbor totoro', 'false'),('mean girls', 'true'),('mean girls 2', 'false'),('john mulany comeback kid', 'true'),('john mulany new in town', 'false');

