## The feature of Nimbus
### PostCSS

CSS is being changed using PostCSS in Nimbus.CSS holds a used plug-in at a minimum to avoid the one of being too to will be in the original specification.

#### Plugin

- postcss-cssnext
- postcss-import
- cssnano

### Responsive & Mobile first

The grid system is flexbox based. So it's simple and excellent than the float layout! Same height box, Reverse grid, Equal spacing layout and more.

### Component which is often used was collected.

component which is often used by a corporate site was collected. It's possible to button up the favorite color and size by changing the color and the size which become a basis.

## Architecture

The architecture of CSS in Nimbus is based on FLOCSS. There is variables.css which manages a variable of CSS by a core directory. It's made compilation now using Gulp.

```
├ core/
├ foundation/
├ layout/
└ object/
  ├ component/
  ├ project/
  └ utility/
```

## How to contribute

Please make an issue if there is a problem and needs. Please don't make the new issue if the issue of the same content already exists. If you can coding, please give me a pull request. But, please do not send in the master branch. Pull request sent to the master branch doesn't merge.

## License

Nimbus licensed under MIT. Nimbus is absolutely free for personal or commercial use.

