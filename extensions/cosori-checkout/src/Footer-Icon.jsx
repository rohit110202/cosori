import {
    reactExtension,
    Text,
    BlockStack,
    Link,
    Image,
  } from '@shopify/ui-extensions-react/checkout';
  
  export default reactExtension(
    'purchase.checkout.cart-line-list.render-after', 
    () => <Extension />,
  );
  
  function Extension() {
    return (
      <Image source="https://cdn.shopify.com/s/files/1/0742/6572/3189/t/15/assets/Frame%201262.svg?v=1718257017" /> 
    );
  }
  