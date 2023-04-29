const {readFile,writeFile, read} = require('fs')

console.log('start')

readFile('./content/first.txt','utf-8', (err,result)=>{
    if(err){
        console.log(err);
        return;
    }

    const first = result;
    //read the second file
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        //write a new file
        writeFile(
            './content/result-async.txt',
            `Here is the result : ${first}, tou${second}`,
            (err,result)=>{
                if(err){
                    console.log(err);
                    return
                }
                console.log('Done with the task')
            }
        )
    });
    console.log('starting a new one')
})
