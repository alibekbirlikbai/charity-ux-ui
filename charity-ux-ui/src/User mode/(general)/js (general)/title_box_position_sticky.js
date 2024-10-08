document.addEventListener('DOMContentLoaded', function() {
    
    window.addEventListener('scroll', myFunction);

    var header = document.getElementById("title_box_position_sticky");
    // var sticky = header.offsetTop;
    
    function myFunction() {
    if (window.pageYOffset >= 335) {
        header.classList.add("sticky");
        document.querySelector(".myDonations-flex-box").style.paddingTop = "55px";
        document.querySelector(".myDonations-content-box").style.borderTopLeftRadius = "0";
        document.querySelector(".myDonations-content-box").style.borderTopRightRadius = "0";
        document.querySelector(".titles-box").style.borderTopLeftRadius = "0";
        document.querySelector(".titles-box").style.borderTopRightRadius = "0";
    } else {
        header.classList.remove("sticky");
        document.querySelector(".myDonations-flex-box").style.paddingTop = "15px";
        document.querySelector(".myDonations-content-box").style.borderTopLeftRadius = "10px";
        document.querySelector(".myDonations-content-box").style.borderTopRightRadius = "10px";
        document.querySelector(".titles-box").style.borderTopLeftRadius = "5px";
        document.querySelector(".titles-box").style.borderTopRightRadius = "5px";
    }
}
})