## Angular 2 + TypeScript setup with browserify

This repo is a basic setup to get you started with Angular 2 && TypeScript.

Modules used:

- [watchify](http://npm.im/watchify) - to recompile your bundle when updating
  files during development
- [tsify](http://npm.im/tsify) - to transpile your TypeScript code
- [factor-bundle](http://npm.im/factor-bundle) - to make sure common dependencies stay in their own bundle,
  so that rebundling takes less time (since only the code you actually create
  gets rebundled)

### run it

```
npm i
npm run go
```

### benefits

Easy to understand setup, only a few npm scripts involved. You won't load 100
JavaScript files in development with HTTP 1.1 (like the SystemJS setup does) nor
will you have tens of lines of configuration just to get you started (like a
`webpack.config.js` file has).

## note

- Be sure to add your NPM dependencies in `app/vendor.ts`, even though you are
also using them in `app/main.ts`. That allows `factor-bundle` to store them (the
"common" dependencies) in a separate `common.js` file, working nicely with
`watchify` so that only the code you write is getting rebundled in development.
- Currently there is an error in the console coming from `app/vendor.ts`.
  However it doesn't seem to impact anything and it goes away if everything is
  bundled together (like you would do for production for HTTP !== 2.0), so just
  ignore it for the time being.

## faq

Q: But I really like to import html like I do in Webpack.
> A: Use [stringify](https://github.com/JohnPostlethwait/stringify) and update the
npm `build` script accordingly.

Q: Why can't you use SystemJS or Webpack like everybody else?
> A: SystemJS is a pain in development because it makes me load a ton of files,
and the development servers aren't using HTTP 2.0 so far.
Webpack is a powerful solution, but that config file can grow quite big even though my needs are simple.

### license

[MIT](http://alessioalex.mit-license.org)
