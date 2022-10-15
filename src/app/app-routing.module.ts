import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// imprtamos los Auth activation guards:
import { 
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  canActivate, // tanto para login como para home            
} from '@angular/fire/auth-guard'

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);
const redirectLoggedInToLogin = () => redirectLoggedInTo(['login'])
const redirectLoggedInToRecuperar = () => redirectLoggedInTo(['recuperar-usuario'])



// Se cambia el login a la primera posición para que la app arranque allí.
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    // Si se llega al Home y no se está logueado, te lleva a Login
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule),
  },

 
  {
    path: 'recuperar-usuario',
    loadChildren: () => import('./recuperar-usuario/recuperar-usuario.module').then( m => m.RecuperarUsuarioPageModule),
    
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
