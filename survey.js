const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('What is your names? Nickanmes are also acceptable ', (answer) => {
  rl.question('What\'s an activity you like doing? ', (answer2) => {
    rl.question('What do you listen to while doing it? ', (answer3) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)? ', (answer4) => {
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer5) => {
          rl.question('Which sport is your absolute favourite? ', (answer6) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! \n', (answer7) => {
              console.log(`Hi my name is ${answer}. My favorite kind of music to rock out to is ${answer3} and I often listen to it while im playing ${answer6}.  I love eating ${answer5} for ${answer4} dont judge me and i think ${answer7}.`)
              rl.close() 
            })   
          })  
        })
      })
    })
  })
});