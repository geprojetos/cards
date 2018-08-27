import { AbstractControl } from '@angular/forms';

export function formValidatorLowerCase(control: AbstractControl) {

    const shortName :string = control.value
    
    if( control.value != shortName.toLowerCase() ) {
        
        return { lowerCase: true }
    }
    return null
}