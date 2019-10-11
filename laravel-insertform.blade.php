file laravel / resouce / make new folder : layouts / make new file : insertform.blade.php

<!DOCTYPE html>
<html >
  <head>
    <meta charset="utf-8">
    <title>Insert Form</title>
    <link rel="stylesheet" href="css/master.css">
  </head>
  <body>

      <form class="box" action="/insert" method="post">
      <h1>Login</h1>
      {{csrf_field()}}
      <input type="text" name="Name" placeholder="Userame">
      <input type="text" name="Address" placeholder="Address">
      <input type="text" name="Mobile" placeholder="Mobile Number">
      <input type="submit" name="" placeholder="Login">
    </form>
  </body>
</html>
