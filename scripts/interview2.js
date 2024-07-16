const output = document.querySelector("#output");

document.querySelector("#load").addEventListener("click", async () => {
  try {
      let products = await fetchProducts();
      output.value = products[0].name;
      console.log(products[0].name);
  }
  catch (error) {
      output.value = `Error: ${error}`;
      console.error(error);
  }
});

document.querySelector("#reset").addEventListener("click", () => {
    document.location.reload();
});

async function fetchProducts() {
    try {
      const response = await fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
      );

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const data = await response.json();
      return data;
    }
    catch (error) {
      console.error(`Could not get products: ${error}`);
      throw error;
    }
}
