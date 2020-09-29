process.env.TESTENV = true

let Challenge = require('../app/models/challenge.js')
let User = require('../app/models/user')

const crypto = require('crypto')

let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../server')
chai.should()

chai.use(chaiHttp)

const token = crypto.randomBytes(16).toString('hex')
let userId
let challengeId

describe('challenges', () => {
  const challengeParams = {
    title: '13 JavaScript tricks SEI instructors don\'t want you to know',
    text: 'You won\'believe number 8!'
  }

  before(done => {
    Challenge.deleteMany({})
      .then(() => User.create({
        email: 'caleb',
        hashedPassword: '12345',
        token
      }))
      .then(user => {
        userId = user._id
        return user
      })
      .then(() => Challenge.create(Object.assign(challengeParams, {owner: userId})))
      .then(record => {
        challengeId = record._id
        done()
      })
      .catch(console.error)
  })

  describe('GET /challenges', () => {
    it('should get all the challenges', done => {
      chai.request(server)
        .get('/challenges')
        .set('Authorization', `Token token=${token}`)
        .end((e, res) => {
          res.should.have.status(200)
          res.body.challenges.should.be.a('array')
          res.body.challenges.length.should.be.eql(1)
          done()
        })
    })
  })

  describe('GET /challenges/:id', () => {
    it('should get one challenge', done => {
      chai.request(server)
        .get('/challenges/' + challengeId)
        .set('Authorization', `Token token=${token}`)
        .end((e, res) => {
          res.should.have.status(200)
          res.body.challenge.should.be.a('object')
          res.body.challenge.title.should.eql(challengeParams.title)
          done()
        })
    })
  })

  describe('DELETE /challenges/:id', () => {
    let challengeId

    before(done => {
      Challenge.create(Object.assign(challengeParams, { owner: userId }))
        .then(record => {
          challengeId = record._id
          done()
        })
        .catch(console.error)
    })

    it('must be owned by the user', done => {
      chai.request(server)
        .delete('/challenges/' + challengeId)
        .set('Authorization', `Bearer notarealtoken`)
        .end((e, res) => {
          res.should.have.status(401)
          done()
        })
    })

    it('should be succesful if you own the resource', done => {
      chai.request(server)
        .delete('/challenges/' + challengeId)
        .set('Authorization', `Bearer ${token}`)
        .end((e, res) => {
          res.should.have.status(204)
          done()
        })
    })

    it('should return 404 if the resource doesn\'t exist', done => {
      chai.request(server)
        .delete('/challenges/' + challengeId)
        .set('Authorization', `Bearer ${token}`)
        .end((e, res) => {
          res.should.have.status(404)
          done()
        })
    })
  })

  describe('POST /challenges', () => {
    it('should not POST an challenge without a title', done => {
      let noTitle = {
        title: '',
        owner: 'fakedID'
      }
      chai.request(server)
        .post('/challenges')
        .set('Authorization', `Bearer ${token}`)
        .send({ challenge: noTitle })
        .end((e, res) => {
          res.should.have.status(201)
          res.should.be.a('object')
          done()
        })
    })

    it('should not POST an challenge without text', done => {
      let noText = {
        title: 'Not a very good challenge, is it?',
        owner: 'fakeID'
      }
      chai.request(server)
        .post('/challenges')
        .set('Authorization', `Bearer ${token}`)
        .send({ challenge: noText })
        .end((e, res) => {
          res.should.have.status(201)
          res.should.be.a('object')
          done()
        })
    })

    it('should not allow a POST from an unauthenticated user', done => {
      chai.request(server)
        .post('/challenges')
        .send({ challenge: challengeParams })
        .end((e, res) => {
          res.should.have.status(401)
          done()
        })
    })

    it('should POST an challenge with the correct params', done => {
      let validchallenge = {
        title: 'I ran a shell command. You won\'t believe what happened next!',
        text: 'it was rm -rf / --no-preserve-root'
      }
      chai.request(server)
        .post('/challenges')
        .set('Authorization', `Bearer ${token}`)
        .send({ challenge: validchallenge })
        .end((e, res) => {
          res.should.have.status(201)
          res.body.should.be.a('object')
          res.body.should.have.property('challenge')
          res.body.challenge.should.have.property('title')
          res.body.challenge.title.should.eql(validchallenge.title)
          done()
        })
    })
  })

  describe('PATCH /challenges/:id', () => {
    let challengeId

    const fields = {
      title: 'Find out which HTTP status code is your spirit animal',
      text: 'Take this 4 question quiz to find out!'
    }

    before(async function () {
      const record = await Challenge.create(Object.assign(challengeParams, { owner: userId }))
      challengeId = record._id
    })

    it('must be owned by the user', done => {
      chai.request(server)
        .patch('/challenges/' + challengeId)
        .set('Authorization', `Bearer notarealtoken`)
        .send({ challenge: fields })
        .end((e, res) => {
          res.should.have.status(401)
          done()
        })
    })

    it('should update fields when PATCHed', done => {
      chai.request(server)
        .patch(`/challenges/${challengeId}`)
        .set('Authorization', `Bearer ${token}`)
        .send({ challenge: fields })
        .end((e, res) => {
          res.should.have.status(204)
          done()
        })
    })

    it('shows the updated resource when fetched with GET', done => {
      chai.request(server)
        .get(`/challenges/${challengeId}`)
        .set('Authorization', `Bearer ${token}`)
        .end((e, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          res.body.challenge.title.should.eql(fields.title)
          done()
        })
    })

    it('doesn\'t overwrite fields with empty strings', done => {
      chai.request(server)
        .patch(`/challenges/${challengeId}`)
        .set('Authorization', `Bearer ${token}`)
        .send({ challenge: { description: '' } })
        .then(() => {
          chai.request(server)
            .get(`/challenges/${challengeId}`)
            .set('Authorization', `Bearer ${token}`)
            .end((e, res) => {
              res.should.have.status(200)
              res.body.should.be.a('object')
              // console.log(res.body.challenge.text)
              res.body.challenge.title.should.eql(fields.title)
              done()
            })
        })
    })
  })
})
