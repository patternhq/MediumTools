Google Doc style link preview for [Medium Editor](https://github.com/yabwe/medium-editor)

## Installing

To use the GdocAnchorPreview extension, you must include Medium Editor before
including this extension.  e.g.:

```html
<script src="https://cdn.jsdelivr.net/medium-editor/latest/js/medium-editor.min.js"></script>
<script src="/path/to/gdoc-medium-anchor-preview.js"></script>
```

## Example

Lets say you have html which looks like this:

```html
<div class='editable'>
    This editor's <a href="http://www.google.com">links</a> behave like google doc
    links.
</div>
```

To get google doc style link previews, you would just do the following:

```javascript
var editor = new MediumEditor('.editable', {
	extensions: {
		anchorPreview: new GdocMediumAnchorPreview(),
	},
    gdocAnchorTargetBlank: true
});
```

## Config Options

* __targetBlank__ : Make links open in a new tab on most devices.
* __gdocAnchorTargetBlank__ : Same as above, but does not add the `target="_blank"` to links when they are created.


## Minifying

The extension can also be minified using the `minify.py` script at the root of this
repository.

```sh
/path/to/repo/minify.py /path/to/repo/GdocAnchorPreview/js/gdoc-medium-anchor-preview.js > gdoc-medium-anchor-preview.min.js
```
