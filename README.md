# Incorrect use of $inc operator in MongoDB update operation
This example demonstrates an incorrect use of the `$inc` operator in a MongoDB update operation.  The `$inc` operator is designed to increment numeric values. Attempting to increment a string value will result in an error.

**Bug:** The provided code attempts to increment a string value using `$inc`.  This is incorrect and will lead to an error.

**Solution:** Ensure that the field being incremented is of numeric type (int, long, double, etc.).