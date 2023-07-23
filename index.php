<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>landing page</title>
</head>

<body>
<script src="./lib/toast.js"></script>
<link rel="stylesheet" href="./lib/toast.css">
    <script>
    NolertNotify.setConfig({position: ('bottom-right'), closeIn: 5000});
    </script>
    <?php 
    if (isset($_COOKIE['data'])) {
    ?>
	<script>NolertNotify.trigger({type: 'success',iconType: 'success',message: '<?php echo$_COOKIE['data']?>'});</script>
	<?php
	}?>
    <form action="logic.php" method="post">
        name: <input type="text" name="name">
        <br>
        <input type="submit" name="submit" value="submit">
    </form>
</body>
</html>