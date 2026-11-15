# Browser test plan

The portfolio should be checked at mobile, tablet and desktop breakpoints.

Recommended Python automation approach:
- pytest as the test runner
- Playwright for browser control
- Validate initial render, navigation, responsive layout, reduced-motion fallback, hero fallback and outbound links
- Capture screenshots for visual regression review

No test framework is added to the production JavaScript bundle by this folder.
