define([
    "dojo/_base/declare",
    "dojo/dom-class",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./ListItem.html",
    "jazz/css!./ListItem.css"
], function (declare, domClass,
    _WidgetBase, _TemplatedMixin,
    template) {
    return declare("com.siemens.bt.jazz.workitemeditor.rtcGitConnector.ui.widget.listItem",
        [_WidgetBase, _TemplatedMixin,],
    {
        templateString: template,
        baseClass: "rtcGitConnectorViewAndSelectListItem",

        itemId: "",
        _setItemIdAttr: { node: "listItem", type: "attribute", attribute: "data-item-id" },

        title: "",
        _setTitleAttr: { node: "firstLine", type: "innerHTML" },

        details: "",
        _setDetailsAttr: { node: "secondLine", type: "innerHTML" },

        buttonType: "link",
        _setButtonTypeAttr: function (buttonName) {
            domClass.remove(this.listItem, this.buttonType + "Button");
            domClass.add(this.listItem, buttonName + "Button");
            this.itemButton.innerHTML = com_siemens_bt_jazz_rtcgitconnector_modules
                .FontAwesome.icon({ prefix: "fas", iconName: buttonName }).html[0];
            this._set("buttonType", buttonName);
        },

        selected: false,
        _setSelectedAttr: function (selected) {
            if (selected) {
                domClass.add(this.listItem, "selected");
            } else {
                domClass.remove(this.listItem, "selected");
            }

            this._set("selected", selected);
        },

        notClickable: false,
        _setNotClickableAttr: function (notClickable) {
            if (notClickable) {
                domClass.add(this.itemContent, "notClickable");
            } else {
                domClass.remove(this.itemContent, "notClickable");
            }

            this._set("notClickable", notClickable);
        },

        duplicate: false,
        _setDuplicateAttr: function (duplicate) {
            if (duplicate) {
                this.itemRightButton.innerHTML = com_siemens_bt_jazz_rtcgitconnector_modules
                    .FontAwesome.icon({ prefix: "fas", iconName: "exclamation-triangle" }).html[0];
            } else {
                this.itemRightButton.innerHtml = "";
            }

            this._set("duplicate", duplicate);
        },

        _onButtonClick: function (e) {
            this.onButtonClick(this.itemId);
        },

        onButtonClick: function (itemId) {
            // The container widget can set this function to react to the button click event.
        },

        _onContentClick: function (e) {
            this.onContentClick(this.itemId);
        },

        onContentClick: function (itemId) {
            // The container widget can set this function to react to the content click event.
        },

        constructor: function (itemId) {
            this.itemId = itemId;
        }
    });
});