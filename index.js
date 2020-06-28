const drivers = [
  'Niki',
  'Kimi',
  'Ken',
  'James',
  'Sebastian',
  'Charles',
  'Ayrton',
  'Roland'
]

const driversAndHometowns = [
  {
    name: 'Niki',
    hometown: 'Austria'
  },
  {
    name: 'Kimi',
    hometown: 'Finland'
  },
  {
    name: 'Ken',
    hometown: 'England'
  },
  {
    name: 'James',
    hometown: 'England'
  },
  {
    name: 'Sebastian',
    hometown: 'Germany'
  },
  {
    name: 'Charles',
    hometown: 'Monaco'
  },
  {
    name: 'Ayrton',
    hometown: 'Brazil'
  },
  {
    name: 'Roland',
    hometown: 'Austria'
  },
  {
    name: 'Sabine',
    hometown: 'Germany'
  },
  {
    name: 'Nico',
    hometown: 'Germany'
  },
  {
    name: 'Nico',
    hometown: 'Germany'
  }
]

function findMatching(arr, str) {
  return arr.filter(driver => driver.toLowerCase() == str.toLowerCase())
}

function fuzzyMatch(arr, str) {
  return arr.filter(driver => driver.substr(0, str.length).toLowerCase() == str.toLowerCase())
}

function matchName(arr, str) {
  return arr.filter(driver => driver.name.toLowerCase() == str.toLowerCase())
}

findMatching(drivers, 'niki')
fuzzyMatch(drivers, 'k')
matchName(driversAndHometowns, 'nico')

// i reject your array of drivers and subsitute my own
