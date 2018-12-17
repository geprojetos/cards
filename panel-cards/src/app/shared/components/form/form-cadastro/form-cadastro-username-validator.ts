import { Validators, FormGroup } from '@angular/forms';

export const formCadastroUsernameValidator: Validators = (formGroup: FormGroup) => {

    const userName = formGroup.get('userName').value;
    const password = formGroup.get('password').value;

    if(userName.trim() + password.trim()) {

        return userName != password
            ? null
            : { invalidLogin: true }
    } else {
        return null;
    }
    
}