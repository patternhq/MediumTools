/**
 * @fileoverview
 * This file provides a simple plugin for MediumEditor that makes anchor
 * elements behave as they would in google docs.
 *
 * Usage Example:
 *
 * var editor = new MediumEditor('.editable', {
 *  extensions: {
 *    anchorPreview: new GdocMediumAnchorPreview(),
 *  },
 *  targetBlank: true,
 *  anchorPreview: {
 *    hideDelay: 500
 *  }
 * });
 */

var GdocMediumAnchorPreview;

(function() {

var ClassName = {
  INNER: 'medium-editor-toolbar-anchor-preview-inner',
  INNER_CHANGE: 'medium-editor-toolbar-anchor-preview-inner-change',
  INNER_REMOVE: 'medium-editor-toolbar-anchor-preview-inner-remove'
}

var AnchorPreview = MediumEditor.extensions.anchorPreview;
GdocMediumAnchorPreview = MediumEditor.Extension.extend.call(
  AnchorPreview, {

    /** @override */
    getTemplate: function () {
      return '<div class="medium-editor-toolbar-anchor-preview">' +
        '  <a class="' + ClassName.INNER + '"></a>' +
        '  -' +
        '  <a class="' + ClassName.INNER_CHANGE + '">Change</a>' +
        '  |' +
        '  <a class="' + ClassName.INNER_REMOVE + '">Remove</a>' +
        '</div>';
    },

    /** @override */
    createPreview: function () {
      var el = this.document.createElement('div');

      el.id = 'medium-editor-anchor-preview-' + this.getEditorId();
      el.className = 'medium-editor-anchor-preview';
      el.innerHTML = this.getTemplate();

      var targetBlank =
          this.getEditorOption('targetBlank') ||
          this.getEditorOption('gdocAnchorTargetBlank');
      if (targetBlank) {
        el.querySelector('.' + ClassName.INNER).target = '_blank';
      }

      var changeEl = el.querySelector('.' + ClassName.INNER_CHANGE);
      this.on(changeEl, 'click', this.handleClick.bind(this));

      var unlinkEl = el.querySelector('.' + ClassName.INNER_REMOVE);
      this.on(unlinkEl, 'click', this.handleUnlink.bind(this));

      return el;
    },

    /** Unlink the currently active anchor. */
    handleUnlink: function() {
      var activeAnchor = this.activeAnchor;
      if (activeAnchor) {
        this.activeAnchor.outerHTML = this.activeAnchor.innerHTML;
        this.hidePreview();
      }
    }
  });

})();
