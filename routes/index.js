var express = require('express')
var GMaps = require('googlemaps')
var Menu = require('../models/menu')
var router = express.Router()
var keys = require('../apiKeys.js')
var apiKey = keys.GMAPSKEY

var publicConfig = {
  key: apiKey,
  stagger_time: 1000, // for elevationPath
  encode_polylines: false,
  secure: false // use https
  // proxy: 'http://127.0.0.1:3000' // optional, set a proxy for HTTP requests
}

var gmAPI = new GMaps(publicConfig)

// geocode API
var geocodeParams = {
  'address': '121, Curtain Road, EC2A 3AD, London UK',
  'components': 'components=country:GB',
  'bounds': '55,-1|54,1',
  'language': 'en',
  'region': 'uk'
}

// reverse geocode API //user won't need to put a dropper on the map, since you need their actual address
// var reverseGeocodeParams = {
//   'latlng': '51.1245,-0.0523',
//   'result_type': 'postal_code',
//   'language': 'en',
//   'location_type': 'APPROXIMATE'
// }

// gmAPI.reverseGeocode(reverseGeocodeParams, function (err, result) {
//  console.log('reverseGeocode')
//  console.log(result)
// })

var menuItems = setSpecialItems()
var specialItems = []

function setSpecialItems () {
  function newItem (name, price, image = '', date = 0, special = false) {
    return {
      name,
      price,
      image,
      special,
      // neverSpecial,
      date
    }
  }

  return [
    newItem('Happy Tots', 2.50),
    newItem('Churros', 2.20),
    newItem('Burger', 12.25),
    newItem('Morning Bun', 11.10),
    newItem('Chicken Sandwich', 10.75),
    newItem('Chicken Strips', 7.50),
    newItem('Grilled Cheese', 10.20)
  ]
}

(function setSpecials () {
  specialItems = [
    'Churros',
    'Burger',
    'Chicken Sandwich'
  ]
  var list = specialItems

  for (var i = 0; i < menuItems.length; i++) {
    for (var j = 0; j < list.length; j++) {
      if (menuItems[i].name === list[j]) {
        menuItems[i].special = true
        list.splice(j, 1)
        j--
      }
    }
  }
})()

function getSpecials () {
  var specialMenu = []
  for (var i = 0; i < menuItems.length; i++) {
    if (menuItems[i].special) {
      specialMenu.push(menuItems[i])
    }
  }
  console.log('get specials')
  return specialMenu
}

function getMenuItems () {
  console.log('get menu items')
  return menuItems
}

router.get('/getmap', function (req, res) {
  gmAPI.geocode(geocodeParams, function (err, result) {
    if (err != null) {
      console.log('ERROR')
      console.log(err)
    }
    console.log(result)
    res.json(result)
  })
})

router.get('/signin', function (req, res) {
  res.json({val1: 'this is signin'})
})

router.get('/popular', function (req, res) {
  res.json(Menu.getPopularMenu())
})

router.get('/order', function (req, res) {
  res.json({val1: 'this is order'})
})

router.get('/specials', function (req, res) {
  res.json(Menu.getSpecialMenu())
})

router.get('/menu', function (req, res) {
  res.json(getMenuItems())
})

router.get('/payment/', function (req, res) {
  res.json({val1: 'this is payment'})
})

module.exports = router
