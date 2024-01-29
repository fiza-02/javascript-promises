const p1= new Promise((resolve, reject)=>{
setTimeout(()=>resolve("P1 resolved"),3000);
});

const p2= new Promise((resolve, reject)=>{
    setTimeout(()=>resolve("P1 resolved"),1000);
    });
    

const p3= new Promise((resolve, reject)=>{
    setTimeout(()=>resolve("P3 resolved"),2000);
});
        
        
Promise.allSettled([p1,p2,p3])
.then(res => console.log(res)).catch((err)=> console.error(err))
;