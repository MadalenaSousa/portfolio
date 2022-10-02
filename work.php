<!DOCTYPE html>
<html lang="en">
<head>

  <!-- Basic Page Needs
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <meta charset="utf-8">
  <title>Madalena Sousa | Portfolio</title>
  <meta name="description" content="">
  <meta name="author" content="">

  <!-- Mobile Specific Metas
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- FONT
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

  <!-- CSS
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/skeleton.css">
  <link rel="stylesheet" href="css/style.css">

  <!-- Favicon
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link rel="icon" type="image/png" href="images/favicon.png">

</head>
<body>


  <div class="container"> <!-- Begin Container -->
    <nav class="row">
      <div class="header two columns" id="logo">
        <a href="index.php"><img width="200vw" src="images/assinatura.png" alt=""></a>
      </div>
      <div class="header three columns">
        <a href="index.php">Work</a>
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
      </div>
    </nav>

      <?php

        $string = file_get_contents("works.json");
        $json_works = json_decode($string, true);
        $work_id = $_GET['id'];
      ?>

    <div class="row space-small"></div>

    <div class="row">
      <div class="six columns workcover">
        <img width="100%" src="<?php echo $json_works[$work_id]["cover"]; ?>" alt="">
      </div>
      <div class="six columns">
        <h2><?php echo $json_works[$work_id]["title"]; ?></h2>
        <p><?php echo $json_works[$work_id]["description"]; ?></p>
      </div>
    </div>

    <div class="row space-mid"></div>

    <?php foreach($json_works[$work_id]["images"]as $images) {
        echo '
    <div class="row">
      <div class="twelve columns">
        <img width="100%" src='. $images["src"] . ' alt="">
      </div>
    </div>

    <div class="row">
      <div class="twelve columns">
        <h5>' . $images["title"] . '</h5>
        <span>' . $images["description"] . '</span>
      </div>
    </div>

    <div class="row space-mid"></div>';

    } ?>

    <div class="row">
      <div class="twelve columns thankyou">
        <h3>Thank You!</h3>
      </div>
    </div>

    <div class="row space-large"></div>

  </div> <!-- End Container -->

  <div class="footer"></div>

<!-- End Document
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
</body>
</html>
