# Purpose

Reproduces "wrap in act" error with user-event when targeting react-datepicker

# Build

```
yarn turbo run build
```

# Tests

There are two tests written. One uses userEvent, the other uses fireEvent. The
fireEvent implementation works, the userEvent implementation emits "not wrapped
in act" warnings. As best I can tell, the warning is happening _within_ the
`type` implementation.

```
yarn test
```

# Storybook

Run Storybook locally to see how the component is used. You can do this one of three ways:

```
# Option #1: ensures the project is built first
yarn turbo run start

# Option #2: run from the root directory
yarn workspace react-datepicker-user-event-test-failure-storybook start

# Option #3: Change directories to the storybook project
cd packages/storybook
yarn start
```
