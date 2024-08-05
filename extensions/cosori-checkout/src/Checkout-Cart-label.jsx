import {
  reactExtension,
  Text,
  BlockStack,
  Link,
  useApi,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.header.render-after',
  () => <Extension />,
);

function Extension() {
  const { shop } = useApi();
  console.log(shop);
  if (!shop) {
    return null; // Render nothing if the shop information is not available
  }
  
  return (
  
    <Link to={`${shop.storefrontUrl}/cart`}>
      <BlockStack inlineAlignment="end">
        <Text size="medium">Cart</Text>
      </BlockStack>
    </Link>
  );
}
