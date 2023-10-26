function generarContrasena() {
    const longitud = document.getElementById('longitud').value;
    const incluirMayusculas = document.getElementById('mayusculas').checked;
    const incluirNumeros = document.getElementById('numeros').checked;
    const incluirSimbolos = document.getElementById('simbolos').checked;

    if (longitud < 4) {
        alert('La longitud mínima de la contraseña debe ser 4 caracteres.');
        return;
    }

    const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
    const letrasMayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numeros = '0123456789';
    const simbolos = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let caracteresPermitidos = letrasMinusculas;
    if (incluirMayusculas) caracteresPermitidos += letrasMayusculas;
    if (incluirNumeros) caracteresPermitidos += numeros;
    if (incluirSimbolos) caracteresPermitidos += simbolos;

    let contrasenaGenerada = '';
    for (let i = 0; i < longitud; i++) {
        const randomIndex = Math.floor(Math.random() * caracteresPermitidos.length);
        contrasenaGenerada += caracteresPermitidos.charAt(randomIndex);
    }

    document.getElementById('contrasena-generada-input').value = contrasenaGenerada;
}
