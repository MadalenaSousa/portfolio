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

    <!-- Libraries
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
</head>

<body>
  <div class="container"> <!-- Begin Container -->
    <header>
        <?php include 'header.php' ?>
    </header>

    <main>
        <div class="row space-mid"></div>
        <div class="row">
          <div class="two columns">
            <img src="" alt="">
          </div>
          <div class="eight columns">
            <h2>Reach Out!</h2>
          </div>
          <div class="two columns">
            <img src="" alt="">
          </div>
        </div>

        <div class="row">
          <div class="two columns">
            <img src="" alt="">
          </div>
          <div class="eight columns">
            <form class="contactForm" action="php/sendmail.php" method="post">
                <label for="name">Your Name</label>
                <input id="name" type="text" name="name" required>

                <label for="subject">Subject</label>
                <input id="subject" type="text" name="subject" required>

                <label for="email">Your Email</label>
                <input id="email" type="email" name="email" required>

                <label for="message">Message</label>
                <textarea id="message" name="message" required></textarea>

                <div class="buttonwithhover">
                    <input class="button-primary" type="submit" value="Send" />
                    <svg class="displayNone contactHover" width="80" height="50" viewBox="0 0 102 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.68198 9.72892C25.7791 7.27259 47.3001 0.270245 69.7774 1.06205C80.5623 1.44197 96.8897 6.35046 100.339 18.2353C106.832 40.6117 63.7206 50.7466 49.4836 53.3843C41.8068 54.8065 -2.28583 59.6997 1.19539 40.5445C3.29039 29.0168 19.7549 22.6747 29.671 19.8403" stroke="black" stroke-linecap="round"/>
                    </svg>
                </div>
            </form>
          </div>
          <div class="two columns">
            <img src="" alt="">
          </div>
        </div>
    </main>
  </div> <!-- End Container -->

  <script src="javascript/main.js" type="module"></script>
  <script src="javascript/contact.js" type="module"></script>

<!-- End Document
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
</body>
</html>
