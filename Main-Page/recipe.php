<!DOCTYPE html>
<?php
   session_start();

   if(isset($_SESSION['use'])) 
    {
        header("Location:home.php"); 
    }

    if(isset($_POST['login'])) 
{
     $user = $_POST['user'];
     $pass = $_POST['pass'];

      if($user == "Ank" && $pass == "1234")
         {                                      

          $_SESSION['use']=$user;


         echo '<script type="text/javascript"> window.open("../Forgot-Password/forgot-password.php","_self");</script>';            //  On Successful Login redirects to home.php

        }

        else
        {
            echo "invalid UserName or Password";        
        }
}


?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Invalid Request</title>
</head>
<body>
    <script src="recipe.js"></script>
    <form action="" method="post" onsubmit="forgotPas()">
        <input type="text" id="user" name="user"><br><br>
        <input type="text" id="pass" name="pass"><br><br>
        <input type="submit" value="Submit">
        <br>
        <br>
        <input type="submit" value="Forgot Password">
    </form>
</body>
</html>
