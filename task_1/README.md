# Repair Candy Rack

The problem happens due to default selectors failing to get selected variant id in the merchant's theme.
This fix adds an implementation for Candy Rack's public window API function - CANDYRACK_VARIANT_SELECTOR_FUNCTION. Missing variant ids can be obtained from hidden select option values.
It explicitly returns undefined in case some elements are not found on the page to make sure that this code doesn't throw errors in case something changes in the client's theme in the future.

## Solution

```js
window.CANDYRACK_VARIANT_SELECTOR_FUNCTION = (button) => {
  const closestForm = button.closest("form");
  const variantIdsContainer = closestForm?.querySelector('[name="custom-id"]');

  if (!variantIdsContainer) return undefined;

  const selectedIndex = variantIdsContainer.selectedIndex;
  const selectedValue = variantIdsContainer[selectedIndex]?.value;

  if (!selectedValue) return undefined;

  const variantIdFromValue = selectedValue.split("-")[0];

  if (!isNaN(Number(variantIdFromValue))) {
    return Number(variantIdFromValue);
  } else {
    return undefined;
  }
};
```
