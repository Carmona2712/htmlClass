function calcularEdad(fecha) {
    var age = new Date();
    var ageBorn = new Date(fecha);
    var ageResponse = age.getFullYear() - ageBorn.getFullYear();
    var m = age.getMonth() - ageBorn.getMonth();

    if (m < 0 || (m === 0 && age.getDate() < ageBorn.getDate())) {
        ageResponse--;
    }
    document.getElementById("age").value = ageResponse;
    return ageResponse;
}