# How to Develop in DUtchX-interface repository

## Environment setup

It is recommended to develop on UNIX-based system or WSL for Windows.

You need

- `^node14`
- `yarn`

### Environment file

You can create a `.env.local` file to override defaults with your own credentials. Possible variables are

- `THE_GRAPH_MV_MAINNET_URL`: TheGraph endpoint for mainnet Basket Vault subgraph
- `THE_GRAPH_MV_GOERLI_URL`: TheGraph endpoint for goerli Meta Vault subgraph
- `ALCHEMY_GOERLI_PRIVATE_KEY`: use your own alchemy api key (goerli)
- `REACT_APP_ALCHEMY_API_KEY`: use your own alchemy api key (mainnet)
- `REACT_APP_CHAIN_ID`: config chain id for init
- `REACT_APP_ETHERSCAN_API_KEY`: use your own etherscan api key

## Linting and Code Style

This repository has been set up to use ESLint along with a selection of plugins and configs which it and/or overrides certain rules for our use cases. For the most part these rules allow for automatic warning (or errors) when writing code in a way that strays from the intended code style. Many of these rules have fixers which help with cleaning up any issues that are reported, but there may be some more complex cases
where you need to manually fix the offending code.

### Run lint

```bash
yarn lint
```

### Fix lint

```bash
yarn lint:fix
```
