        var link = document.querySelector(".map-btn");
        var popup = document.querySelector(".modal-write-us");
        var close = document.querySelector(".modal-close");
        var user_name = popup.querySelector("[name=first-name]");
        var form = popup.querySelector("form");
        var user_email = popup.querySelector("[name=email]");
        var storage_name = localStorage.getItem("user_name");
        var storage_email = localStorage.getItem("user_email");
        var message = popup.querySelector("[name=user-message]");
          
          
        link.addEventListener("click", function (evt) {
            evt.preventDefault();
            popup.classList.add("modal-show");
            
          if (storage_name) {
                user_name.value = storage_name;
                user_email.focus();
          } else {
                user_name.focus();
            }
            
          if (storage_email) {
                user_email.value = storage_email;
                user_name.focus();
          } else {
                user_email.focus();
            }
            
          if (storage_name || storage_email) {
                user_name.value = storage_name;
                user_email.value = storage_email;
                message.focus();
          }   
        });  
          
        close.addEventListener("click", function(evt) {
            evt.preventDefault();
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        });
          
        window.addEventListener("keydown", function(evt){
          if (evt.keyCode === 27) {
            if(popup.classList.contains("modal-show")) {
                popup.classList.remove("modal-show");
            } 
          }
        });
          
        form.addEventListener("submit", function(evt) {
          if (!user_name.value || !user_email.value) {    
            evt.preventDefault();
            popup.classList.remove("modal-error");
            popup.offsetWidth = popup.offsetWidth;
            popup.classList.add("modal-error");
              
          } else {
                localStorage.setItem("user_name", user_name.value);
                localStorage.setItem("user_email", user_email.value);

            } 
        });