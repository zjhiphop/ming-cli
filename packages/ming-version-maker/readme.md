# What is This?

The npm registry does not expose `/latest` endpoints for scoped packages. Getting the full metadata for a scoped package is typically `~300ms` slower than simply getting the latest version from an unscoped package.
