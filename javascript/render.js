class Component {
    _data = {};
    constructor() {
        this.data = new Proxy(this._data, {
            set: (target, key, value) => {
                target[key] = value;
                if (this.isPending) return;
                this.isPending = true;
                Promise.resolve().then(() => {
                    this.render();
                    this.isPending = false;
                });
            },
        });
    }
    render() {
        console.log('render ', this._data.name);
    }
}

const component = new Component();
component.data.name = 'a';
component.data.name = 'b';
component.data.name = 'c';

setTimeout(() => {
    component.data.name = 'd';
});
