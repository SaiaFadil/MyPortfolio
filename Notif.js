var toastTrigger = document.getElementById('liveToastBtn')
var toastNotif = document.getElementById('liveToast')
if (toastTrigger) {
    toastTrigger.addEventListener('click', function () {
        var toast = new bootstrap.Toast(toastNotif)

        toast.show()
    })
}