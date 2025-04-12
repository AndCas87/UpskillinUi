sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.up.project1.controller.Update", {
            onInit: async function () {
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.getRoute("UpdateBook").attachPatternMatched(this.onObjectMatched, this);
            },

            onObjectMatched: function (oEvent) {
                this._setVisible();
            },

            _setVisible: function () {
                this.getView().byId("id_author").setVisible(false);
                this.getView().byId("idAuthor").setVisible(false);
            },

            onSave: function () {
                var oModel = this.getOwnerComponent().getModel("modelBffV2");

            },

            onNavBack: function () {
                window.history.go(-1);
            },
        });
    });
