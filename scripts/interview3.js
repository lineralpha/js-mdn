$(function() {
    const output = document.querySelector("#output");

    $("#load").click(async function() {
        try {
            let products = await fetchProducts();
            output.value = products[0].name;
            console.log(products[0].name);
        }
        catch (error) {
            output.value = `Error: ${error}`;
            console.log(error);
        }
    });

    $("#reset").click(function() {
        document.location.reload();
    });
});

async function fetchProducts() {
    try {
        const products = await $.getJSON(
            "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
        );
        return products;
    }
    catch (error) {
        console.error(`Could not get products: ${error}`);
        throw error;
    }
}
