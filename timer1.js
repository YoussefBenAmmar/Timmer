let arg = process.argv.slice(2);
let time = arg.filter(time => { return time > 0 })
console.log(time)

const timer = () => {
  for (let t of time){
    setTimeout(() => {
      console.log('blop');
      process.stdout.write('\x07');
    }, t*1000);
  }  
}

timer(time)
