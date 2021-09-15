
      function afficheConnec(){
         var connec = document.getElementById("context-menu");
         connec.classList.toggle("active");
      }
      function toggleConnec() {
         var blur = document.getElementById("blur");
         blur.classList.toggle('active');
         var connec = document.getElementById("connec");
         connec.classList.toggle('active');
      }
      function afficherMdp() {
         var input = document.getElementById("password");
         if (input.type === "password") {
            input.type = "text";
         }
         else {
            input.type = "password";
         }
      }
