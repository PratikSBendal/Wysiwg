
window.onblur= function () {
    var fileUpload = document.getElementById("fileupload");
    fileUpload.onchange = function () {
        if (typeof (FileReader) != "undefined") {
            var fake_textarea = document.getElementById("fake_textarea");
            fake_textarea.value = "";
            var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.gif|.png|.bmp)$/;
            var width = document.getElementById("width").value;
            var height = document.getElementById("height").value;
            if(width==null || width==''|| height==null || height == '')
            {
                alert("Please Select Width Or Height")
            }
            else
            {
                
                for (var i = 0; i < fileUpload.files.length; i++) {
                    var file = fileUpload.files[i];
                    if (regex.test(file.name.toLowerCase())) {
                        var reader = new FileReader();
                        reader.onload = function (e) {
                            var img = document.createElement("IMG");
                            img.height = height;
                            img.width = width;
                            img.src = e.target.result;
                            fake_textarea.appendChild(img);   
                        }
                        reader.readAsDataURL(file);
                    } else {
                        alert(file.name + " is not a valid image file.");
                        fake_textarea.value = "";
                        return false;
                    }
                }
            }
           
        } else {
            alert("This browser does not support HTML5 FileReader.");
        }
    }

};

