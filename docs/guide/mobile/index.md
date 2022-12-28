# Mobile Guide

For mobile app development, we should consider following factors:

1. Hot patch

`Hot patch` is a technology which used to release new version without through AppStore. But this is also have some limitation by manufacture and may cause messy when there're multiple patch versions.

The popular solutions:

* `Webview` using webview to download new patch (`ionic`)
* `Code Push` using Microsoft's code push to manage new patches which support `ENV`, `Patch`, `Rollback` etc. (`ReactNative`)
* `Bin Replace` which download patched bin file to local and dynamic reload and restart app to update. (`flutter` with tinker)

2. Performance

The application needs high interactivity and low latency, then native is best choice. But if we also needs to support different platform like: Android, IOS, PC etc. Then we should consider `flutter` as a trade off for better balancing.

3. Complexity

If the application include many features and components, also should support multiple platform. Then we should consider `ReactNative` as it's ecosystem is rich.

### Conclusion

There's no best solution for every sceneries. The golden rule is: `Use less efforts to meet more current and future requirements.`



