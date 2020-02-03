var PRICE = 10;

new Vue({
    el: '#app',
    data: {
        total: 0,
        items: [
            {id:1, title:'Item 1', price:10}, {id:2, title:'Item 2', price: 20 }, {id:3, title:'Item 3', price: 30}
        ],
        cart: []
    },
    methods: {
        addItem: function(index) {
            this.total += this.items[index].price;
            var item = this.items[index];
            var found = false;
            for (var i=0; i < this.cart.length; i++) {
                if (this.cart[i].id === item.id) {
                    found = true;
                    this.cart[i].qty++;
                    break;
                }
            }
            if (!found) {
                this.cart.push({
                    id: item.id,
                    title: item.title,
                    qty: 1,
                    price: item.price
                });
            }
        },
        inc: function(item) {
            item.qty++;
            this.total +=item.price;
        },
        dec: function(item) {
            item.qty--;
            this.total -= item.price;
            if (item.qty <= 0) {
                for (var i=0; i < this.cart.length; i++) {
                    if (this.cart[i].id === item.id) {
                        this.cart.splice(i, 1);
                        break;
                    }
                }
            }
        }
    },
    filters : {
        currency: function(price) {
            return '$'+(price.toFixed(2));
        }
    }
});

