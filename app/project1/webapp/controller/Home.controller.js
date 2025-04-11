sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.up.project1.controller.Home", {
        onInit() {
            // const rootPath = jQuery.sap.getModulePath("cap/ex/capexampleui");
            // var oModel = new JSONModel();
            // this.getView().byId("idTable").setModel(oModel);

            // oModel = new sap.ui.model.odata.v4.ODataModel({
            //     serviceUrl: constants.destBff,
            //     synchronizationMode: "None",
            //     operationMode: "Server",
            //     updateGroupId: "groupIdCatalogService",
            // });
            // oModel.setDefaultBindingMode("TwoWay");
            // this.getView().byId("idTable").setModel(oModel);
            // // bind project entity directly to the table 
            // this.oTemplate = this.getView().byId("idTable").getBindingInfo("items").template;
            // this.getView().byId("idTable").unbindAggregation("items");

            // this.getView().byId("idTable").bindAggregation("items", {
            //     path: "/Books",
            //     template: this.oTemplate,
            // });
            // this.updateDetailModel(sInitCode);
        }
    });
});