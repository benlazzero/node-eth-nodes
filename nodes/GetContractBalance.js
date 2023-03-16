module.exports = function (RED) {
  function GetContractBalanceNode(config) {
    RED.nodes.createNode(this, config);
    this.contract = RED.nodes.getNode(config.contract);
    this.provider = RED.nodes.getNode(config.provider);

    this.on('input', function (msg, send) {
      console.log(msg)
      console.log(this.contract)
      console.log(this.provider)
      send(true)
    });
  }
  RED.nodes.registerType("GetContractBalance", GetContractBalanceNode);
}