window.onload = function () {
    function checkBoxCheck(e) {
        var checkBox1 = document.getElementById("myCheck1");
        var checkBox2 = document.getElementById("myCheck2");
        var checkBox3 = document.getElementById("myCheck3");
        var checkBox4 = document.getElementById("myCheck4");

        if (!(checkBox1.checked || checkBox2.checked || checkBox3.checked || checkBox4.checked)) {
            // toggle class name "d-none" to "d-block"
            document.getElementById("check_box_error").classList.remove('d-none');
            e.preventDefault();
            e.stopPropagation();
        } else {
            document.getElementById("check_box_error").classList.add('d-none');
        }
    }
    var form = document.getElementsByTagName("form")[0];
    form.addEventListener("submit", checkBoxCheck);
}
