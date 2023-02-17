import { LayoutComponent } from '../layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { LuisCordovaComponent } from './pages/CV/Luis.cordova/Luis.cordova.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoverComponent } from './pages/recover/recover.component';
import { LockComponent } from './pages/lock/lock.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { Error404Component } from './pages/error404/error404.component';
import { Error500Component } from './pages/error500/error500.component';

export const routes = [

    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'Home', pathMatch: 'full' },
            { path: 'Home', loadChildren: './home/home.module#HomeModule' },
            { path: 'Equipo', loadChildren: './Equipo/Equipo.module#EquipoModule' },
            { path: 'Portafolio', loadChildren: './Portafolio/Portafolio.module#PortafolioModule' },
            { path: 'Servicios', loadChildren: './Servicios/Servicios.module#ServiciosModule' },
            { path: 'Contacto', loadChildren: './Contacto/Contacto.module#ContactoModule' },            
/*            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'widgets', loadChildren: './widgets/widgets.module#WidgetsModule' },
            { path: 'elements', loadChildren: './elements/elements.module#ElementsModule' },
            { path: 'forms', loadChildren: './forms/forms.module#FormsModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'maps', loadChildren: './maps/maps.module#MapsModule' },
            { path: 'blog', loadChildren: './blog/blog.module#BlogModule' },
            { path: 'ecommerce', loadChildren: './ecommerce/ecommerce.module#EcommerceModule' },
            { path: 'extras', loadChildren: './extras/extras.module#ExtrasModule' }*/
        ]
    },

    // Not lazy-loaded routes
    { path: 'login', component: LoginComponent },
    { path: 'Curriculum/Luis_cordova', component: LuisCordovaComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'recover', component: RecoverComponent },
    { path: 'lock', component: LockComponent },
    { path: 'maintenance', component: MaintenanceComponent },
    { path: '404', component: Error404Component },
    { path: '500', component: Error500Component },

    // Not found
    { path: '**', redirectTo: 'Home' }

];
