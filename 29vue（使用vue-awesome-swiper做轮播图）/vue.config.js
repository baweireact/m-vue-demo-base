module.exports = {
  devServer: {
    open: true,
    before(app) {
      app.get('/api/getCarouselList', (req, res) => {
        res.send({
          code: 200,
          data: [{
            id: '0',
            image: 'https://b3-q.mafengwo.net/s14/M00/25/84/wKgE2l1s1MKAUWQJAArsD4Zz1WA499.jpg?imageMogr2%2Fthumbnail%2F%21750x422r%2Fgravity%2FCenter%2Fcrop%2F%21750x422%2Fquality%2F90'
          }, {
            id: '1',
            image: 'https://n4-q.mafengwo.net/s14/M00/24/E6/wKgE2l1s1IaAVzLiAAW1OYt5QcI723.jpg?imageMogr2%2Fthumbnail%2F%21750x422r%2Fgravity%2FCenter%2Fcrop%2F%21750x422%2Fquality%2F90'
          }, {
            id: '2',
            image: 'https://b2-q.mafengwo.net/s14/M00/5A/AE/wKgE2l1pF4GAK-1bAAfLOLBwax0713.jpg?imageMogr2%2Fthumbnail%2F%21750x422r%2Fgravity%2FCenter%2Fcrop%2F%21750x422%2Fquality%2F90'
          }],
          message: 'banner'
        })
      })
    }
  }
}