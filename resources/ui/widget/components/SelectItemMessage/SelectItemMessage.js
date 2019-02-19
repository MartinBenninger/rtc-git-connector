define([
    "dojo/_base/declare",
    "dojo/dom-style",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./SelectItemMessage.html",
    "jazz/css!./SelectItemMessage.css"
], function (declare, domStyle,
    _WidgetBase, _TemplatedMixin,
    template) {
    return declare("com.siemens.bt.jazz.workitemeditor.rtcGitConnector.ui.widget.selectItemMessage",
        [_WidgetBase, _TemplatedMixin,],
    {
        templateString: template,

        hidden: true,
        _setHiddenAttr: function (hidden) {
            domStyle.set(this.domNode, "display", hidden ? "none" : "block");
            this._set("hidden", hidden);
        },

        message: "Click the colorful icon on the left to select an item to be saved.",
        _setMessageAttr: { node: "messageNode", type: "innerHTML" }
    });
});