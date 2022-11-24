sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sap.fiori.sapfiori.controller.Detail", {
            onInit: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("RouteDetail").attachMatched(this._onRouteMatched, this);
            },
            _onRouteMatched: function (oEvent) {
                var oArgs, oView;
                oArgs = oEvent.getParameter("arguments");
                oView = this.getView();
                oView.bindElement({
                    path: "/Products(" + oArgs.productId + ")",
                    events: {
                        dataRequested: function () {
                            oView.setBusy(true);
                        },
                        dataReceived: function () {
                            oView.setBusy(false);
                        }
                    }
                });
            },
            handleNavButtonPress: function (evt) {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("RouteProducts");
            }
        });
    });
