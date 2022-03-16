<!DOCTYPE html>
<?php
    if(isset($_POST['logout'])) 
    {
        echo "Logout Successfully ";
        session_destroy(); 
        echo '<script type="text/javascript"> window.open("../Main-Page/recipe.php","_self");</script>';
    }
?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php   
        if(!isset($_SESSION['use'])) // If session is not set then redirect to Login Page
        {
            header("Location:Login.php");  
        }
 
        echo $_SESSION['use'];
    ?>
    <h1>Forgot Password</h1>
    <h3>Every Level Builds Off Of Another</h3>
    <h5>Please input the correct code for each to get a temporary password for account number <strong>21342394031	</strong></h5>
    <p><strong>Level 1:</strong> 104 105 115 32 111 110 101 32 119 115 32 114 101 97 108 108 121 32 101 97 115 121 44 32 116 104 101 32 110 101 120 116 32 109 97 121 32 110 111 116 32 98 101 46</p>
    <input type="text">
    <p><strong>Level 2:</strong> 104 105 115 32 111 110 101 32 119 115 32 114 101 97 108 108 121 32 101 97 115 121 44 32 116 104 101 32 110 101 120 116 32 109 97 121 32 110 111 116 32 98 101 46</p>
    <input type="text">
    <p><strong>Level 3:</strong> 104 105 115 32 111 110 101 32 119 115 32 114 101 97 108 108 121 32 101 97 115 121 44 32 116 104 101 32 110 101 120 116 32 109 97 121 32 110 111 116 32 98 101 46</p>
    <input type="text">
    <p><strong>Level 4:</strong> 104 105 115 32 111 110 101 32 119 115 32 114 101 97 108 108 121 32 101 97 115 121 44 32 116 104 101 32 110 101 120 116 32 109 97 121 32 110 111 116 32 98 101 46</p>
    <input type="text">
    <p><strong>Level 5:</strong> 104 105 115 32 111 110 101 32 119 115 32 114 101 97 108 108 121 32 101 97 115 121 44 32 116 104 101 32 110 101 120 116 32 109 97 121 32 110 111 116 32 98 101 46</p>
    <input type="text">
    <form action="" method="post">
        <input type="submit" name = "logout">
    </form>
</body>
</html>