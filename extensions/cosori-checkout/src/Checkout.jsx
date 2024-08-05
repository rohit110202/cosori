import {
  Banner,
  useApi,
  useTranslate,
  reactExtension,
  Divider,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.cart-line-item.render-after',
  () => <Extension />,
); 

function Extension() {
  const translate = useTranslate();
  const { extension } = useApi();

  return (
    <Divider />
  );
} 