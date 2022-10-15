import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// imprtamos los Auth activation guards:
import { 
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  canActivate, // tanto para login como para home            
} from '@angular/fire/auth-guard'

//import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);
const redirectLoggedInToLogin = () => redirectLoggedInTo(['login'])
const redirectLoggedInToRecuperar = () => redirectLoggedInTo(['recuperar-usuario'])
// para ir a clubes de jazz
const redirectLoggedInToClubesJazz = () => redirectLoggedInTo(['clubes-jazz'])






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
    ...canActivate(redirectUnauthorizedToLogin),
    // Si se está logueado, puede redirigirte a clubes de jazz
    //...canActivate(redirectLoggedInToClubesJazz)

    
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule),
  },

 
  {
    path: 'recuperar-usuario',
    loadChildren: () => import('./recuperar-usuario/recuperar-usuario.module').then( m => m.RecuperarUsuarioPageModule),
    
  },

  // había que desactivar lo de abajo para poder navegar 
  // entre nuevas páginas
  // cada vez que se hacía click en algo
  // redirigía al login

  // {
  //   path: '**',
  //   redirectTo: '',
  //   pathMatch: 'full'
  // },
  

  {
    path: 'clubes-jazz',
    loadChildren: () => import('./clubes-jazz/clubes-jazz.module').then( m => m.ClubesJazzPageModule),

    // los logueados pueden ir a clubes de jazz
    //... canActivate(redirectLoggedInToClubesJazz)
    
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
