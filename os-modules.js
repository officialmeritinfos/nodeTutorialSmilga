//info about current user
const user = os.userInfo()
console.log(user)

//method returns the system's uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)

const currenctOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freemMem: os.freemem()
}

console.log(currenctOs)