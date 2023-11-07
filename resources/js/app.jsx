import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import Navbar from './Components/Navbar';


createInertiaApp({
    title: (title) => `${title}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <div>
                <div className='h-12 bg-zinc-400 flex justify-end px-12'>
                    <Navbar />
                </div>
                <div>
                    <App {...props} />
                </div>
            </div>

            );
    },
    progress: {
        color: '#4B5563',
    },
});
