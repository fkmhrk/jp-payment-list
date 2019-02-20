import './scss/main.scss';
import Ractive from './ractive';

declare const data: any[];

const r = new Ractive({
    el: 'body',
    template: '#template',
    data: {
        items: data,
    },
})