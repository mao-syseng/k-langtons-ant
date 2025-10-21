https://mao-syseng.github.io/k-langtons-ant/


<pre>
ds  directions
i   index of the ant
v   flat vector, representing the grid
d   direction of the ant
p   position of the ant in the grid
m   grid matrix
</pre>

## v1
ds:(0 -1; 1 0; 0 1; -1 0)     / vector of direction vectors to be applied to the ant position
i:(n*p[1])+p[0]               / calculating index of the ants position, based on x,y of the matrix
v[i]:1-v[i]                   / flipping to 0 or 1 on the ants current position
d:`(d+(v[i]==0?1:-1)+4)%4`    / using js to calculate the new direction for the ant, one up or down in the directions list, using +4 and modulo 4 so that it wraps, if you go to the last index of directions and move up again, it wraps back to 0
p:p+ds[d]                     / updating ant position, using the direction vector
m:n^v                         / convert flat vector to a matrix
res.textContent:`m.map(r => r.join(' ')).join('\n').replace(/0/g, '.')` / js: map to strings and replace 0 with .


## v2, with help from ktye
ds:(0 -1; 1 0; 0 1; -1 0)         
i:(n*p[1])+p[0]                 
v[i]:1-v[i]                              
d:mod[4;d-1+2*~v[i]]                        / from ktye: "in apl/j/k modulo uses euclidean division instead of floor division, so it continues for negative numbers (no need for +4).", so this way the grid wraps automatically (did not in v1) and we avoid the js.
p:p+ds[d]           
m:n^v                                       
res.textContent:join["\n";50^("  ";". ")m]  / using join from k instead of js, also makes it simpler to map 0's and 1's to whatever strings i want