flectra.define('website_rma.rma_tour_demo', function (require) {
'use strict';

var tour = require("web_tour.tour");
var base = require("web_editor.base");

tour.register('web_rma_demo', {
    test: true,
    url: '/my/home',
    wait_for: base.ready()
},
    [
       {
            content: "sales order list",
            trigger: 'a[href="/my/orders"]',
        },
        {
            content: "select sale order",
            trigger: 'a:contains("SO036")',
        },
        {
            content: "click on return button on order line",
            trigger: '#order_line_return a:contains("Return")',
        },
        {
            content: "click on return button",
            trigger: 'button[id="prod_return"]',
        },
        {
            content: "create rma request",
            trigger: 'form[action^="/return/request"]',
        },

    ]
);

});
