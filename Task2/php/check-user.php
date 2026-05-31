<?php

$username=$_GET['username'];

$users=[
"admin",
"john",
"gopi",
"user123"
];

if(in_array($username,$users))
{
echo "<span style='color:red'>
Username Already Exists
</span>";
}
else
{
echo "<span style='color:green'>
Username Available
</span>";
}

?>