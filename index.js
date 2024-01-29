const p1= new Promise((resolve, reject)=>{
setTimeout(()=>reject("P1 failed"),3000);
});

const p2= new Promise((resolve, reject)=>{
    setTimeout(()=>reject("P2 failed"),2000);
    });
    

const p3= new Promise((resolve, reject)=>{
    setTimeout(()=>reject("P3 failed"),1000);
});
        
        
Promise.any([p1,p2,p3])
.then(res => console.log(res)).catch((err)=> {
    console.error(err);
    console.error(err.errors);
}
);