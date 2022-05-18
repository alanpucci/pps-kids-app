import { LANGS, THEMES } from '../consts/consts';
import {tigreEsp, perroEsp, ranaEsp, cangrejoEsp, cerdoEsp, tigreIng, perroIng, ranaIng, cangrejoIng, 
        cerdoIng, tigrePor, perroPor, ranaPor, cangrejoPor, cerdoPor, gallinaEsp, gallinaIng, gallinaPor} from './sounds/animals';
import {azulEsp, rojoEsp, naranjaEsp, amarilloEsp, verdeEsp, azulIng, rojoIng, naranjaIng, amarilloIng,
        verdeIng, azulPor, rojoPor, naranjaPor, amarilloPor, verdePor, negroEsp, negroIng, negroPor} from './sounds/colors';
import {unoEsp, dosEsp, tresEsp, cuatroEsp, cincoEsp, unoIng, dosIng, tresIng, cuatroIng, cincoIng, unoPor, dosPor, tresPor, cuatroPor, cincoPor, seisEsp, seisIng, seisPor} from './sounds/numbers';

export const soundHandler = (theme:THEMES, lang:LANGS):any => {
    switch(lang){
        case LANGS.ESPANA:
            switch(theme){
                case THEMES.ANIMALS:
                    return [cerdoEsp, perroEsp, ranaEsp, cangrejoEsp, tigreEsp, gallinaEsp];
                case THEMES.COLORS:
                    return [rojoEsp, azulEsp, amarilloEsp, verdeEsp, naranjaEsp, negroEsp];
                case THEMES.NUMBERS:
                    return [unoEsp, dosEsp, tresEsp, cuatroEsp, cincoEsp, seisEsp];
        }
        case LANGS.ESTADOSUNIDOS:
            switch(theme){
                case THEMES.ANIMALS:
                    return [cerdoIng, perroIng, ranaIng, cangrejoIng, tigreIng, gallinaIng];
                case THEMES.COLORS:
                    return [rojoIng, azulIng, amarilloIng, verdeIng, naranjaIng, negroIng];
                case THEMES.NUMBERS:
                    return [unoIng, dosIng, tresIng, cuatroIng, cincoIng, seisIng];
            }
        case LANGS.BRASIL:
            switch(theme){
                case THEMES.ANIMALS:
                    return [cerdoPor, perroPor, ranaPor, cangrejoPor, tigrePor, gallinaPor];
                case THEMES.COLORS:
                    return [rojoPor, azulPor, amarilloPor, verdePor, naranjaPor, negroPor];
                case THEMES.NUMBERS:
                    return [unoPor, dosPor, tresPor, cuatroPor, cincoPor, seisPor];
            }
        default:
            return;
    }
}