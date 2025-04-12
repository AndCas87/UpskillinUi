sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/routing/History",
    "sap/m/MessageBox",
    'sap/ui/core/Fragment'

],
    function (Controller, JSONModel, History, MessageBox, Fragment) {
        "use strict";

        return Controller.extend("com.up.project1.controller.Create", {
            onInit: async function () {
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.getRoute("CreateBook").attachPatternMatched(this.onObjectMatched, this);
            },

            onObjectMatched: function (oEvent) {
                this.getView().setModel(new JSONModel({ title: "", author_ID: "", descr: "" }), "modelBook");
                this._setVisible();
            },

            _setVisible: function () {
                this.getView().byId("id_author").setVisible(true);
                this.getView().byId("idAuthor").setVisible(true);
            },

            onMatchAuthorId: function (oEvent) {
                this._oenMatchAutorhId(oEvent);
                var oModel = this.getOwnerComponent().getModel("modelBffV2");
                var that = this;
                var model = oModel.read("/Authors", {
                    success: function (oData) {
                        that.getView().setModel(new JSONModel(oData.results), "modelAuthors");
                        var t = "";
                    },
                    error: function (e) {
                        var t = "";
                    }
                });
            },

            _oenMatchAutorhId: function (oEvent) {
                var oView = this.getView();
                this._sInputId = oEvent.getSource().getId();

                // create value help dialog
                if (!this._pValueHelpDialog) {
                    this._pValueHelpDialog = Fragment.load({
                        id: oView.getId(),
                        name: "com.up.project1.view.fragment.DialogAuthorId",
                        controller: this
                    }).then(function (oValueHelpDialog) {
                        oView.addDependent(oValueHelpDialog);
                        return oValueHelpDialog;
                    });
                }

                // open value help dialog
                this._pValueHelpDialog.then(function (oValueHelpDialog) {
                    oValueHelpDialog.open();
                });
            },

            _handleValueHelpClose: function (oEvent) {
                var oSelectedItem = oEvent.getParameter("selectedItem");
                if (oSelectedItem) {
                    this.getView().byId("id_author").setValue(oSelectedItem.getTitle());
                }
                oEvent.getSource().getBinding("items").filter([]);
            },

            onSalva: function () {
                let oModel = this.getOwnerComponent().getModel("modelBffV2");
                let model = this.getView().getModel("modelBook").getData();
                let that = this;
                model.author_ID = parseInt(this.getView().byId("id_author").getValue());
                model.title = this.getView().byId("id_title").getValue();
                model.descr = this.getView().byId("id_descr").getValue();
                oModel.create("/Books", model, {
                    success: function (oData) {
                        var t = "";
                        MessageBox.success("Creato con successo", { closeOnNavigation:false,actions: [ sap.m.MessageBox.Action.OK],emphasizedAction:sap.m.MessageBox.Action.OK,  onClose: that._closeDialog("OK") });
                    },
                    error: function (e) {
                        var t = "";
                        MessageBox.error("Il record non è stato creato", { onClose: that._closeDialog("KO") });
                    }
                });
                
            },

            _closeDialog: function(sAction){
                if (sAction !== null) {
                    this.onNavBack();
                }
            },

            onNavBack: function () {
                window.history.go(-1);
            },
        });
    });
