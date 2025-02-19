toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
};



window.showToastr = function (type, message) {
    console.log("ShowToastr volán s:", type, message);
    if (type == "success") {
        toastr.success(message);
    }
    else if (type == "error") {
        toastr.error(message);
    }
};

Swal.Fire = function (type, message) {
    if (type == "success") {
        Swal.fire({
            icon: "success",
            title: "Great!!!...",
            text: message,
            
        });
    }
    else if (type == "error") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: message,
            
        });
    }
}


