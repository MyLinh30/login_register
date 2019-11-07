$(document).ready(function(){
    
    $('#them').click(function(){
        $('#main-kn').append("        <div class=\"kynang\">            Tên kỹ năng <input type=\"text\" name=\"tenkynang\" placeholder=\"NodeJS\"/></br>            Mức độ <input type=\"range\" name=\"mucdo\" min=\"0\" max=\"100\" step=\"10\"/></br>  </div> </br>       ");
    })
    $('input[name=submit]').on('click',function(){
        
        var hoten= $('input[name=hoten]').val();
        var nghenghiep= $('input[name=nghenghiep]').val();
        var diachi= $('input[name=diachi]').val();
        var email= $('input[name=email]').val();
        var dienthoai= $('input[name=dienthoai]').val();
        var array_kynang=[];
        var array_tenkynang=[];
        var array_mucdo=[];
        //dem so luong class kynang
        var numClassKyNang=$('.kynang').length;

        $('input[name=tenkynang]').each(function(){
            array_tenkynang.push($(this).val());
        })

        $('input[name=mucdo]').each(function(){
            array_mucdo.push($(this).val());
        })

         var page2 = window.open();
        //chen anh icon cua tung dong
        //<img src="đường dẫn đến tập tin hình ảnh mà bạn muốn chèn vào trang web">
        $(page2.document.body).append("<h1>"+hoten+"</h1>");
        $(page2.document.body).append("<p>"+nghenghiep+"</p>");
        $(page2.document.body).append("<p>"+email+"</p>");
        $(page2.document.body).append("<p>"+diachi+"</p>");
        $(page2.document.body).append("<p>"+dienthoai+"</p>");
        
        

        //create progress
        //gom tat ca vao the div nhom ky nang
        for(var i=0;i<numClassKyNang;i++){
            $(page2.document.body).append("<p>"+array_tenkynang[i]+"</p>");
            $(page2.document.body).append("<div class=\"duoi\">  <div class=\"tren\" align=\"center\" style=\"width:" +array_mucdo[i]+"%\";>"+array_mucdo[i]+"%"+"</div></div>");
        }
        //css
        $(page2.document.getElementsByClassName("duoi")).css({
            "background": "grey",
            //"width":"100%",
            "height": "15px",
            "border-radius":"25px",
            "margin-right":"70%"
        });

        $(page2.document.getElementsByClassName("tren")).css({
            "background": "green",
            "height": "15px",
            "border-radius":"25px 0px 0px 25px"
        });
    });
})