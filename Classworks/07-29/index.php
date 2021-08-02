<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>
<body>
<div class="container">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Upload</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Gallery</button>
        </li>
    </ul>
    <div class="tab-content" id="myTabContent">
        <form action="upload.php" method="post" class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab" enctype="multipart/form-data">
            <div class="mt-3">
                <input class="form-control" type="text" placeholder="Default input" aria-label="default input example" name="photoName">
            </div>
            <div>

                <!--                FILE INPUT-->

                <label for="formFileLg" class="form-label">Upload image here</label>
                <input class="form-control form-control-lg" id="formFileLg" type="file" name="photoUpl">
            </div>
            <button class="btn btn-primary" type="submit" value="Upload">Upload</button>
        </form>
        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

            <!--               CAROUSEL-->

            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="<?php echo $_SESSION["images"][0] ?>" class="d-block w-100" alt="testimage1">
                    </div>
                    <div class="carousel-item">
                        <img src="<?php echo $_SESSION["images"][1] ?>" class="d-block w-100" alt="testimage2">
                    </div>
                    <div class="carousel-item">
                        <img src="<?php echo $_SESSION["images"][2] ?>" class="d-block w-100" alt="testimage3">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>
</html>