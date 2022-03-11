const TodoList = artifacts.require("TodoList");//artifact of TodoList is from "build/contracts/TodoList.json"
//the term Migration is used because, the blockchain is basically a a big database and when you are deploying this
//smart-contract on the blockchain you are changing the state of blockchain and there blockchain is migrating to a different state.

module.exports = function(deployer) {
  deployer.deploy(TodoList);
};