To create a Photo Album, replace the images in img folder with the image files you want to display  (be sure to leave open-book.jpg, left.png, and right.png in img folder).  Alternatively, create a new folder for your images.  In your html file, create an array of strings containing the names of your image files.  The names must include relative or absolute path.  Pass this array as an argument to photo_album function.  

  <script type="text/javascript">
    $(document).ready(function () { 
      var images = [ "img/myimg1.jpg", "img/myimg2.jpg", "img/myimg3.jpg",... ];
      $( "myalbum" ).photo_album( images );
     });

     </script>

  
  <body>
    <div id = "myalbum" ></div>
  </body>


All .js files from js folder must be included in your html file.  For an example, see album.html file. The maximum size of each image is 420px x 620px. The images may be horizontal or vertical.