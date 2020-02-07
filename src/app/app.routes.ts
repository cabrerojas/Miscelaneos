import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { USUARIO_ROUTES } from './components/usuario/usuario.routes';




const routes: Routes = [
    { path: 'home', component: HomeComponent },
    {
        path: 'usuario/:d',
        component: UsuarioComponent,
        children: USUARIO_ROUTES
    },

    { path: '**', pathMatch: 'full', redirectTo: 'home' },

];

export const app_routing = RouterModule.forRoot(routes);
