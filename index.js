const p1= new Promise((resolve, reject)=>{
setTimeout(()=>resolve("P1 resolved"),3000);
});

const p2= new Promise((resolve, reject)=>{
    setTimeout(()=>resolve("P1 resolved"),5000);
    });
    

const p3= new Promise((resolve, reject)=>{
    setTimeout(()=>resolve("P1 resolved"),2000);
});
        
        
Promise.all([p1,p2,p3]).then(res => console.log(res));