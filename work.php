<!DOCTYPE html>
<html lang="en">

<head>
    <?php include 'head.php' ?>
</head>

<body>
  <div class="container"> <!-- Begin Container -->
    <header>
      <?php include 'header.php' ?>
    </header>

    <main>
      <?php
        $string = file_get_contents("works.json");
        $json_works = json_decode($string, true);
        $work_id = $_GET['id'];
      ?>

        <div class="row space-mid"></div>

        <div class="row workcover">
          <div class="six columns">
            <img src="<?php echo $json_works[$work_id]["cover"]; ?>" alt="">
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

    </main>
  </div> <!-- End Container -->

  <script src="javascript/main.js" type="module"></script>

<!-- End Document
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
</body>
</html>
