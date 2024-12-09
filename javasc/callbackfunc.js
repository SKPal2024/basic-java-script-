function calculate(a,b,f_ans){
    const ans=f_ans(a,b);
    return ans;
}
function sum(a,b,f_ans){
    return a+b;
}

function abs(a,b,f_ans)
{
    return a-b;
}
d=calculate(2,8,abs)
console.log(d)