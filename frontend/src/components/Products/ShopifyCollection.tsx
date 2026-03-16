import { useEffect } from "react";

export default function ShopifyCollection() {

  useEffect(() => {

    const loadShopify = () => {
      const ShopifyBuy = (window as any).ShopifyBuy;

      const client = ShopifyBuy.buildClient({
        domain: "198hg9-nv.myshopify.com",
        storefrontAccessToken: "8c231c5398dd2824ee9249f753523dab",
      });

      ShopifyBuy.UI.onReady(client).then((ui: any) => {
        ui.createComponent("collection", {
          id: "452615405819",
          node: document.getElementById(
            "collection-component-1773596746370"
          ),
          moneyFormat: "Rs. {{amount}}",

          options: {
            product: {
              styles: {
                button: {
                  "background-color": "#e31414",
                  "border-radius": "40px",
                  "padding-left": "30px",
                  "padding-right": "30px",
                },
              },
              text: {
                button: "View product",
              },
            },

            modalProduct: {
              contents: {
                img: false,
                imgWithCarousel: true,
                button: false,
                buttonWithQuantity: true,
              },

              text: {
                button: "Add to cart",
              },
            },

            cart: {
              text: {
                total: "Subtotal",
                button: "Checkout",
              },
            },
          },
        });
      });
    };

    const scriptURL =
      "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";

    if ((window as any).ShopifyBuy) {
      if ((window as any).ShopifyBuy.UI) {
        loadShopify();
      } else {
        const script = document.createElement("script");
        script.async = true;
        script.src = scriptURL;
        document.body.appendChild(script);
        script.onload = loadShopify;
      }
    } else {
      const script = document.createElement("script");
      script.async = true;
      script.src = scriptURL;
      document.body.appendChild(script);
      script.onload = loadShopify;
    }

  }, []);

  return (
    <div id="collection-component-1773596746370"></div>
  );
}