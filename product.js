class Product {
    constructor(id, title, price, description, category, imageUrl, rating) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.category = category;
        this.imageUrl = imageUrl;
        this.rating = rating;
    }

    getDetails() {
        return {
            id: this.id,
            title: this.title,
            price: this.price,
            description: this.description,
            category: this.category,
            imageUrl: this.imageUrl,
            rating: this.rating
        };
    }
}

module.exports = Product;