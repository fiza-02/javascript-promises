Promise.any([p1,p2,p3]) success case

Promise.any() will wait for first settled success




-----------------------

Promise.all([p1,p2,p3]) failed case
index.js:17 AggregateError: All promises were rejected
index.js:18 
(3) ['P1 failed', 'P2 failed', 'P3 failed']
0
: 
"P1 failed"
1
: 
"P2 failed"
2
: 
"P3 failed"
length
: 
3