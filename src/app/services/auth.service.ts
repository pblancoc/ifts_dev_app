import { Injectable } from '@angular/core';
// importamos para la autorización:
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // complentamos el constructor
  constructor(
    
    private auth: Auth
    
    
    ) {}

  // y las siguienets funciones
  async register({ email, password }) {
    try {
      const user = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return user;
    } catch (e){
      return null;
    }
  }
  
  async login({ email, password }) {
    try {
      const user = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return user;
    } catch (e){
      return null;
    }
  }

  logout() {
    return signOut(this.auth);
  }

  // función para moverse dentro de las paginas
  navegar(){
    console.log('Soy el Auth Service permiténdote navegar entre páginas')
    // redirect??
    return true
  }
}
