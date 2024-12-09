function getslice(str,start,end)
{
    console.log("full string: "+str);
    console.log("sliced str: "+str.slice(start,end));
}
getslice("hi there",0,7);//7th is not included
const value="Surya Kanta Pal"
console.log(value.substr(3,5));//from 2nd pos. to 5 alphabets
console.log(value.slice(3,5));//3rd to 5th