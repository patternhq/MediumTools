A collection of plugins to
[Medium Editor](https://github.com/yabwe/medium-editor) for doing useful things.

## Plugins

### Google Doc Style Link Preview

[GdocMediumAnchorPreview](GdocMediumAnchorPreview/README.md)

#### Example
```javascript
var editor = new MediumEditor('.editable', {
    extensions: {
        anchorPreview: new GdocMediumAnchorPreview(),
    },
    gdocAnchorTargetBlank: true
});
```
