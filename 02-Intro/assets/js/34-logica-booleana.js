const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('Not o la negacion');
console.log( true );
console.log( !true );
console.log( !false );


// && si hay un falso hace shortcut

// || si hay un true hace shortcut

// asignaciones

const a = true && 'HOla' && 150;
// lse asigna a  su ultimo valor ya que todos son valores
// a = 150
// si toda la linea es falso se convierte en falso


const b = false || 'Ya no soy falso' || true;
// el primer true que se encuentre es el que se asgina

