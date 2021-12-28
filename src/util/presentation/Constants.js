module.exports.MODULES = ["paypal"];

module.exports.BASE_URIS = {
  paypal: {
    production: "https://api-m.paypal.com/",
    sandbox: "https://api-m.sandbox.paypal.com/",
    version: "v2",
  },
  mercadopago: {
    production: "https://api.mercadopago.com/",
    sandbox: "",
    version: "v1",
  },
};

module.exports.AUTHORIZATIONS = {
  paypal: {
    "Content-Type": "application/json",
    Authorization: "Bearer {{token}}",
  },
  mercadopago: {},
};

module.exports.interpolate = function (key = "{{ }}", context, scope) {
  return context.replace(
    new RegExp(key.split(" ")[0] + "\\w+" + key.split(" ")[1], "g"),
    (ctx) =>
      scope[
        ctx.replace(key.split(" ")[0], "").replace(key.split(" ")[1], "")
      ] || ctx
  );
};
