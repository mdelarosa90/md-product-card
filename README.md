# MD-Product-Card
Este es un paquete de pruebas de despliegue en NPM

### Michel De La Rosa

## Ejemplo

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'md-product-card';
```
```
<ProductCard
  product={product}
  initialValues={{ count: 4, maxCount: 10 }}
  >
  {
    ({ reset, increaseBy, isMaxCountReached, count, maxCount }) => (
      <>
        <ProductImage />
        <ProductTitle />
        <ProductButtons />
      </>
    )
  }
</ProductCard>
```