import { LANGS, THEMES } from '../consts/consts';
import {tigreEsp, perroEsp, ranaEsp, cangrejoEsp, cerdoEsp, tigreIng, perroIng, ranaIng, cangrejoIng, 
        cerdoIng, tigrePor, perroPor, ranaPor, cangrejoPor, cerdoPor} from './sounds/animals';
import {azulEsp, rojoEsp, naranjaEsp, amarilloEsp, verdeEsp, azulIng, rojoIng, naranjaIng, amarilloIng,
        verdeIng, azulPor, rojoPor, naranjaPor, amarilloPor, verdePor} from './sounds/colors';
import {unoEsp, dosEsp, tresEsp, cuatroEsp, cincoEsp, unoIng, dosIng, tresIng, cuatroIng, cincoIng, unoPor, dosPor, tresPor, cuatroPor, cincoPor} from './sounds/numbers';

export const soundHandler = (theme:THEMES, lang:LANGS):any => {
    switch(lang){
        case LANGS.ESPANA:
            switch(theme){
                case THEMES.ANIMALS:
                    return [cerdoEsp, perroEsp, ranaEsp, cangrejoEsp, tigreEsp];
                case THEMES.COLORS:
                    return [rojoEsp, azulEsp, amarilloEsp, verdeEsp, naranjaEsp];
                case THEMES.NUMBERS:
                    return [unoEsp, dosEsp, tresEsp, cuatroEsp, cincoEsp];
        }
        case LANGS.ESTADOSUNIDOS:
            switch(theme){
                case THEMES.ANIMALS:
                    return [cerdoIng, perroIng, ranaIng, cangrejoIng, tigreIng];
                case THEMES.COLORS:
                    return [rojoIng, azulIng, amarilloIng, verdeIng, naranjaIng];
                case THEMES.NUMBERS:
                    return [unoIng, dosIng, tresIng, cuatroIng, cincoIng];
            }
        case LANGS.BRASIL:
            switch(theme){
                case THEMES.ANIMALS:
                    return [cerdoPor, perroPor, ranaPor, cangrejoPor, tigrePor];
                case THEMES.COLORS:
                    return [rojoPor, azulPor, amarilloPor, verdePor, naranjaPor];
                case THEMES.NUMBERS:
                    return [unoPor, dosPor, tresPor, cuatroPor, cincoPor];
            }
        default:
            return;
    }
}