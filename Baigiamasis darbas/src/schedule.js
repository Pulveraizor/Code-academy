//CURRENT WEEK


//TIMETABLE

let timetable = new Timetable();
timetable.setScope(9, 22);
timetable.addLocations([
    'Pirmadienis',
    'Antradienis',
    'Trečiadienis',
    'Ketvirtadienis',
    'Penktadienis',
    'Šeštadienis',
    'Sekmadienis'
]);
timetable.addEvent(
    'Atviri važiavimai nuo 14m.',
    'Pirmadienis',
    new Date(2021,8,16,16, 00),
    new Date(2021,8,16,20, 00));

timetable.addEvent(
    'Dirbtuvės Raketė',
    'Antradienis',
    new Date(2021,8,17,15, 00),
    new Date(2021,8,17,17, 00));

timetable.addEvent(
    'Atviri važiavimai nuo 14m.',
    'Antradienis',
    new Date(2021,8,17,17, 00),
    new Date(2021,8,17,20, 00));

timetable.addEvent(
    'AJE Dirbtuvės',
    'Trečiadienis',
    new Date(2021,8,18,16, 00),
    new Date(2021,8,18,20, 00));

timetable.addEvent(
    'Dirbtuvės Raketė',
    'Ketvirtadienis',
    new Date(2021,8,19,15, 00),
    new Date(2021,8,19,17, 00));

timetable.addEvent(
    'Atviri važiavimai nuo 14m.',
    'Ketvirtadienis',
    new Date(2021,8,19,17, 00),
    new Date(2021,8,19,20, 00));

timetable.addEvent(
    'Atviri važiavimai nuo 14m.',
    'Penktadienis',
    new Date(2021,8,20,16, 00),
    new Date(2021,8,20,20, 00));

timetable.addEvent(
    'Atviri važiavimai nuo 14m.',
    'Šeštadienis',
    new Date(2021,8,16,10, 00),
    new Date(2021,8,16,22, 00));

timetable.addEvent(
    'Atviri važiavimai nuo 14m.',
    'Sekmadienis',
    new Date(2021,8,16,10, 30),
    new Date(2021,8,16,22, 00));

let renderer = new Timetable.Renderer(timetable);
renderer.draw('.timetable');

// console.log(timetable);
//CURRENT WEEK

