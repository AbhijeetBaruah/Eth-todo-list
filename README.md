## Requirements
1) Node must be installed
2) Ganache must be installed for creating a local blockchain network and for testing the contract
3) truffle must be installed, its a framework, below is the command for downloading this.


## Commands used
1) npm install -g truffle@5.0.2
2) truffle version : this gives version of Solidity, truffle and node
3) truffle init : after creating the Project folder, cd into it and then use this command to create the initial project setup
4) npm install : this is used to install the packages defined in the package.json (this file is created and not comes-up with the initial project setup.)
5) truffle migrate : this is used to deploy the contract on the block chain
6) truffle migrate --reset : this is used to reset the previous contract on the blockchain network of truffle
7) truffle console : this is used to open the truffle console where we can extract contract from the truffle blockchain network and read the contract's public parameters.
    i) todolist = await TodoList.deployed() : Inside truffle console we can assign contract to a variable
