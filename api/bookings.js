const { SeatsioClient } = require('seatsio');

let client = new SeatsioClient('03355033-a278-4a84-86a2-7d0b0e0e8914');
let chart = await client.charts.create()
let event = await client.events.create(chart.key)
console.log(`Created a chart with key ${chart.key} and an event with key: ${event.key}`)
