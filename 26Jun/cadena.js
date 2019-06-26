function palindromo(cadena){    
    var arr = cadena.trim().split(' ').join('');
    var cadena2=arr.split('').reverse().join('');
    if(cadena2 === arr){
        return 'es palindromo';
    }
    return 'no es palindromo';
}

function palabras(cadena){
    return cadena.split(" ").length;
}
function letras(cadena){
    return cadena.trim().split(' ').join('').split('').length;
}
function vocales(cadena){
    return cadena.trim().split(' ').join('').replace(/([^a_e_i_o_u_A_E_I_O_U_á_é_í_ó_ú_Á_É_Í_Ó_Ú_])/g,'').split('').length;
}
function consonantes(cadena){
    return cadena.trim().split(' ').join('').replace(/([a_e_i_o_u_A_E_I_O_U_á_é_í_ó_ú_Á_É_Í_Ó_Ú_])/g,'').split('').length;
}

module.exports.palindromo = palindromo;
module.exports.palabras = palabras;
module.exports.letras = letras;
module.exports.vocales = vocales;
module.exports.consonantes = consonantes;