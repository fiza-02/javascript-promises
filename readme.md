Promise.all([p1,p2,p3]) success case


(3) ['P1 resolved', 'P1 resolved', 'P1 resolved']
0
: 
"P1 resolved"
1
: 
"P1 resolved"
2
: 
"P1 resolved"
length
: 
3
[[Prototype]]
: 
Array(0)


-----------------------

Promise.all([p1,p2,p3]) failed case

index.html:1 Uncaught (in promise) P1 failed
if one promise fails it throws an error and it does not wait for other promises may be fulfilled or rejected

you must have error handling
P1 failed