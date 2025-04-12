sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";,

    return Controller.extend("com.up.project1.controller.Home", {
        onInit: async function () {
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("RouteHome").attachPatternMatched(this.onObjectMatched, this);
        },

        onObjectMatched: function (oEvent) {
            this.getView().byId("idTable").getBinding("items").refresh()
            // var oModel = this.getOwnerComponent().getModel("modelBffV2");
            // var that = this;
            // var model = oModel.read("/Books", {
            //     success: function (oData) {
            //         that.getView().setModel(new JSONModel(oData.results), "modelBffV2");
            //         var t = "";
            //     },
            //     error: function (e) {
            //         var t = "";
            //     }
            // });
        },


        onNavToCreate: async function (oEvent) {
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("CreateBook");
        },

        onSelRow: async function (oEvent) {
            let index = parseInt(oEvent.getSource().getBindingContextPath("modelBffV2").slice(1));
            // let model = this.getView().getModel("modelBffV2").getData()[index];
            // let oRouter = this.getOwnerComponent().getRouter();
            // oRouter.navTo("UpdateBook", {
            //     bookId: model.ID
            // });
        }
    });
});