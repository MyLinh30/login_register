$(document).ready(function() {
    $('input[name=muavephim]').click(function(){
        var ngaychieu=$('input[name=ngaychieu]').val();
        var tenphim=$('.phim:selected').text();
        var giochieu=$('#suatchieu:selected').text();
        var phongchieu=$('#phongchieu:selected').text();
        var chonghe=$('#chonghe:selected').text();
        var val_chonghe=$('#chonghe').val();
        var page2=window.open();
        $(page2.document.body).before("<h2>Thông tin vé</h2>");
        $(page2.document.body).append("<table><tr><td> MSSV </td> <td>xxxxxxxx</td></tr>   <tr><td>Họ tên</td> <td>Nguyễn Văn A</td></tr>    <tr><td>Ngày chiếu</td><td>"+ngaychieu+"</td></tr>  <tr><td>Phim</td><td>"+tenphim+"</td></tr>    </table>")
       // $(page2.document.body).append("<table></table>")
    });
});