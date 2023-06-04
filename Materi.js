var toastTrigger = document.getElementById('Pelajari')
var toastLiveExample = document.getElementById('notifPelajari')
if (toastTrigger) {
    toastTrigger.addEventListener('click', function () {
        var toast = new bootstrap.Toast(toastLiveExample)

        toast.show()
    })
}
var toastTrigger = document.getElementById('Pelajari1')
var toastLiveExample = document.getElementById('notifPelajari1')
if (toastTrigger) {
    toastTrigger.addEventListener('click', function () {
        var toast = new bootstrap.Toast(toastLiveExample)

        toast.show()
    })
}