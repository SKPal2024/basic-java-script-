const Users=[
    {
        name1:"surya",
        gender:"male",
    },
    {
        name1:"qwert",
        gender:"male",
    },
    {
        name1:"asdf",
        gender:"female",

    }
]
for(i=0;i<Users.length;i++)
{
    if(Users[i]["gender"]=="male")
    {
        console.log(Users[i]["name1"]);
    }
}