Promise.race([p1,p2,p3]) success case

It does not give the list of promises but the value of promise

P2 resolved
P2 is the one which completes the race first
-----------------------

Promise.race([p1,p2,p3]) failed case
index.js:16 P2 failed

