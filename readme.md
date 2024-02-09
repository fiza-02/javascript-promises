
Promise.allSetteled([p1,p2,p3]) success case

(3) [{…}, {…}, {…}]
0
: 
{status: 'fulfilled', value: 'P1 resolved'}
1
: 
{status: 'fulfilled', value: 'P1 resolved'}
2
: 
{status: 'fulfilled', value: 'P3 resolved'}
length
: 
3
[[Prototype]]
: 
Array(0)



-----------------------

Promise.allSetteled([p1,p2,p3]) failed case


(3) [{…}, {…}, {…}]
0
: 
{status: 'fulfilled', value: 'P1 resolved'}
1
: 
{status: 'fulfilled', value: 'P1 resolved'}
2
: 
{status: 'rejected', reason: 'P3 failed'}
length
: 
3
[[Prototype]]
: 
Array(0)

it does not throw an error it will collect as list of promises 

wait for all promises to be setteled
