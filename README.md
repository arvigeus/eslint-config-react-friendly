# eslint-config-react-friendly

This package includes shareable ESLint config based on `eslint-config-react-app` and `eslint-config-airbnb`, where AirBnB rules are cherry-picked to include only useful ones. It encourages better code without enforcing opinions.

### General guidelines:

- Linting must not step in developer's way. Configuration should require minimum effort with no-frills, out of the box experience.
- Errors should only be used to eliminate potential bugs or invalid code.
- Warnings must only be for code that can be improved. Ideally fixing them will be linting tool's job.
- All formatting and stylistic choices should be done by `prettier`. This could be handled automatically by the editor itself, or the CI pipeline.
- If given code practice is discouraged, it should be warning at most.

### Install

```
npm install --save-dev eslint-config-react-friendly
```

Config:

```
// .eslintrc.json
{
  extends: "react-friendly"
}
```
