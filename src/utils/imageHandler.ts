import espana from '../../assets/banderas/espana.png';
import brasil from '../../assets/banderas/brasil.png';
import estadosunidos from '../../assets/banderas/estadosunidos.png';

import tigre from '../../assets/animals/tigre.png';
import cangrejo from '../../assets/animals/cangrejo.png';
import cerdo from '../../assets/animals/cerdo.png';
import perro from '../../assets/animals/perro.png';
import rana from '../../assets/animals/rana.png';
import gallina from '../../assets/animals/gallina.png';

import uno from '../../assets/numbers/1.png';
import dos from '../../assets/numbers/2.png';
import tres from '../../assets/numbers/3.png';
import cuatro from '../../assets/numbers/4.png';
import cinco from '../../assets/numbers/5.png';
import seis from '../../assets/numbers/6.png';

import azul from '../../assets/colors/azul.png';
import rojo from '../../assets/colors/rojo.png';
import amarillo from '../../assets/colors/amarillo.png';
import verde from '../../assets/colors/verde.png';
import naranja from '../../assets/colors/naranja.png';
import negro from '../../assets/colors/black.png';

import pink from '../../assets/pink.jpeg'

export const imageHandler = (imageName:string):any => {
    switch(imageName){
        case 'espana':
            return espana;
        case 'brasil':
            return brasil;
        case 'estadosunidos':
            return estadosunidos;
        case 'pink':
            return pink;
        case 'animals':
            return [cerdo, perro, rana, cangrejo, tigre, gallina];
        case 'numbers':
            return [uno, dos, tres, cuatro, cinco, seis];
        case 'colors':
            return [rojo, azul, amarillo, verde, naranja, negro];
    }
}