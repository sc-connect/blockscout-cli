import type { AxiosRequestConfig, AxiosResponse } from 'axios'

import { BaseAPI } from '../base'
import { DefaultApiFp } from './defaultApiFn'

import type {
  Address,
  AddressBlocksValidatedResponse,
  AddressCoinBalanceHistoryChart,
  AddressCoinBalanceHistoryResponse,
  AddressCounters,
  AddressInternalTxsResponse,
  AddressTokenBalance,
  AddressTokensResponse,
  AddressTokenTransferResponse,
  AddressTransactionsResponse,
  AddressWithdrawalsResponse,
} from '../types'
import type { LogsResponseAddress, LogsResponseTx } from '../types'
import type { AddressesResponse } from '../types'
import type {
  Block,
  BlocksResponse,
  BlockTransactionsResponse,
  BlockWithdrawalsItem,
} from '../types'
import type { IndexingStatus } from '../types'
import type { InternalTransactionsResponse } from '../types'
import type { JsonRpcUrlResponse } from '../types'
import type { Transaction, TransactionsResponse } from '../types'
import type { ChartMarketResponse, ChartTransactionResponse } from '../types'
import type {
  AddressNftCollectionsResponse,
  AddressNftResponse,
  NftInstance,
  NftInstanceHoldersResponse,
  NftInstancesResponse,
  NftTransfersCountResponse,
} from '../types'
import type { TokenTransferResponse } from '../types'
import type { RawTracesResponse } from '../types'
import type {
  SmartContract,
  SmartContractQueryMethodRead,
  SmartContractReadMethod,
  SmartContractWriteMethod,
} from '../types'
import type { SmartContractReadQueryMethodBody } from '../types'
import type {
  VerifiedContractsCounters,
  VerifiedContractsResponse,
} from '../types'
import type { TxStateChangesResponse } from '../types'
import type { HomeStats } from '../types'
import type {
  NFTTokenType,
  TokenCounters,
  TokenHoldersResponse,
  TokenInfo,
} from '../types'
import type { TxsTokenTransferResponse } from '../types'
import type { TokensResponse } from '../types'
import type { WithdrawalsResponse } from '../types'
import type { SearchRedirectResult, SearchResult } from '../types'

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
  /**
   *
   * @summary get address info
   * @param {string} address_hash Address hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getAddress(
    address_hash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<Address>> {
    return DefaultApiFp(this.configuration)
      .getAddress(address_hash, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get address nft
   * @param {string} address_hash Address hash
   * @param {string} type NFT type
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getAddressNft(
    address_hash: string,
    type?: NFTTokenType,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<AddressNftResponse>> {
    return DefaultApiFp(this.configuration)
      .getAddressNft(address_hash, type, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get list of NFT owned by address, grouped by collection
   * @param {string} address_hash Address hash
   * @param {string} type NFT type
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getAddressNftCollections(
    address_hash: string,
    type?: NFTTokenType,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<AddressNftCollectionsResponse>> {
    return DefaultApiFp(this.configuration)
      .getAddressNftCollections(address_hash, type, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get blocks validated by address
   * @param {string} address_hash Address hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getAddressBlocksValidated(
    address_hash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<AddressBlocksValidatedResponse>> {
    return DefaultApiFp(this.configuration)
      .getAddressBlocksValidated(address_hash, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get address coin balance history
   * @param {string} address_hash Address hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getAddressCoinBalanceHistory(
    address_hash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<AddressCoinBalanceHistoryResponse>> {
    return DefaultApiFp(this.configuration)
      .getAddressCoinBalanceHistory(address_hash, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get address coin balance history by day
   * @param {string} address_hash Address hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getAddressCoinBalanceHistoryByDay(
    address_hash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<AddressCoinBalanceHistoryChart>> {
    return DefaultApiFp(this.configuration)
      .getAddressCoinBalanceHistoryByDay(address_hash, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get address counters
   * @param {string} address_hash Address hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getAddressCounters(
    address_hash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<AddressCounters>> {
    return DefaultApiFp(this.configuration)
      .getAddressCounters(address_hash, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get address internal txs
   * @param {string} address_hash Address hash
   * @param {string} [filter]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getAddressInternalTxs(
    address_hash: string,
    filter?: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<AddressInternalTxsResponse>> {
    return DefaultApiFp(this.configuration)
      .getAddressInternalTxs(address_hash, filter, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get address logs
   * @param {string} address_hash Address hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getAddressLogs(
    address_hash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<LogsResponseAddress>> {
    return DefaultApiFp(this.configuration)
      .getAddressLogs(address_hash, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get blocks validated by address
   * @param {string} address_hash Address hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getAddressTokenBalances(
    address_hash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<Array<AddressTokenBalance>>> {
    return DefaultApiFp(this.configuration)
      .getAddressTokenBalances(address_hash, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get address token transfers
   * @param {string} address_hash Address hash
   * @param {string} [type]
   * @param {string} [filter]
   * @param {string} [token]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getAddressTokenTransfers(
    address_hash: string,
    type?: string,
    filter?: string,
    token?: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<AddressTokenTransferResponse>> {
    return DefaultApiFp(this.configuration)
      .getAddressTokenTransfers(address_hash, type, filter, token, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get blocks validated by address
   * @param {string} address_hash Address hash
   * @param {string} [type]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getAddressTokens(
    address_hash: string,
    type?: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<AddressTokensResponse>> {
    return DefaultApiFp(this.configuration)
      .getAddressTokens(address_hash, type, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get address txs
   * @param {string} address_hash Address hash
   * @param {string} [filter]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getAddressTxs(
    address_hash: string,
    filter?: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<AddressTransactionsResponse>> {
    return DefaultApiFp(this.configuration)
      .getAddressTxs(address_hash, filter, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get address withdrawals
   * @param {string} address_hash Address hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getAddressWithdrawals(
    address_hash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<AddressWithdrawalsResponse>> {
    return DefaultApiFp(this.configuration)
      .getAddressWithdrawals(address_hash, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get native coin holders list
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getAddresses(
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<AddressesResponse>> {
    return DefaultApiFp(this.configuration)
      .getAddresses(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get block info
   * @param {string} blockNumberOrHash Block number or hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getBlock(
    blockNumberOrHash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<Block>> {
    return DefaultApiFp(this.configuration)
      .getBlock(blockNumberOrHash, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get block txs
   * @param {string} blockNumberOrHash Block number or hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getBlockTxs(
    blockNumberOrHash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<BlockTransactionsResponse>> {
    return DefaultApiFp(this.configuration)
      .getBlockTxs(blockNumberOrHash, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get block withdrawals
   * @param {string} blockNumberOrHash Block number or hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getBlockWithdrawals(
    blockNumberOrHash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<BlockWithdrawalsItem>> {
    return DefaultApiFp(this.configuration)
      .getBlockWithdrawals(blockNumberOrHash, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get blocks
   * @param {string} [type]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getBlocks(
    type?: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<BlocksResponse>> {
    return DefaultApiFp(this.configuration)
      .getBlocks(type, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get indexing status
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getIndexingStatus(
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<IndexingStatus>> {
    return DefaultApiFp(this.configuration)
      .getIndexingStatus(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get internal txs
   * @param {string} transaction_hash Transaction hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getInternalTxs(
    transaction_hash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<InternalTransactionsResponse>> {
    return DefaultApiFp(this.configuration)
      .getInternalTxs(transaction_hash, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get json rpc url
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getJsonRpcUrl(
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<JsonRpcUrlResponse>> {
    return DefaultApiFp(this.configuration)
      .getJsonRpcUrl(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get logs
   * @param {string} transaction_hash Transaction hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getLogs(
    transaction_hash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<LogsResponseTx>> {
    return DefaultApiFp(this.configuration)
      .getLogs(transaction_hash, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get main page blocks
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getMainPageBlocks(
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<Array<Block>>> {
    return DefaultApiFp(this.configuration)
      .getMainPageBlocks(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get main page txs
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getMainPageTxs(
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<Array<Transaction>>> {
    return DefaultApiFp(this.configuration)
      .getMainPageTxs(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get market chart
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getMarketChart(
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<ChartMarketResponse>> {
    return DefaultApiFp(this.configuration)
      .getMarketChart(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get NFT instance by id
   * @param {string} address_hash Address hash
   * @param {number} id integer id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getNftInstanceById(
    address_hash: string,
    id: number,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<NftInstance>> {
    return DefaultApiFp(this.configuration)
      .getNftInstanceById(address_hash, id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get transfers of NFT instance
   * @param {string} address_hash Address hash
   * @param {number} id integer id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getNftInstanceTransfers(
    address_hash: string,
    id: number,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<TokenTransferResponse>> {
    return DefaultApiFp(this.configuration)
      .getNftInstanceTransfers(address_hash, id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get transfers count of NFT instance
   * @param {string} address_hash Address hash
   * @param {number} id integer id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getNftInstanceTransfersCount(
    address_hash: string,
    id: number,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<NftTransfersCountResponse>> {
    return DefaultApiFp(this.configuration)
      .getNftInstanceTransfersCount(address_hash, id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get NFT instances
   * @param {string} address_hash Address hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getNftInstances(
    address_hash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<NftInstancesResponse>> {
    return DefaultApiFp(this.configuration)
      .getNftInstances(address_hash, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get raw trace
   * @param {string} transaction_hash Transaction hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getTxRawTrace(
    transaction_hash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<RawTracesResponse>> {
    return DefaultApiFp(this.configuration)
      .getTxRawTrace(transaction_hash, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get read methods
   * @param {string} address_hash Address hash
   * @param {string} [isCustomAbi]
   * @param {string} [from]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getContractReadMethods(
    address_hash: string,
    isCustomAbi?: string,
    from?: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<Array<SmartContractReadMethod>>> {
    return DefaultApiFp(this.configuration)
      .getContractReadMethods(address_hash, isCustomAbi, from, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get read methods proxy
   * @param {string} address_hash Address hash
   * @param {string} [isCustomAbi]
   * @param {string} [from]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getContractReadMethodsProxy(
    address_hash: string,
    isCustomAbi?: string,
    from?: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<Array<SmartContractReadMethod>>> {
    return DefaultApiFp(this.configuration)
      .getContractReadMethodsProxy(address_hash, isCustomAbi, from, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get smart contract
   * @param {string} address_hash Address hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getSmartContract(
    address_hash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<SmartContract>> {
    return DefaultApiFp(this.configuration)
      .getSmartContract(address_hash, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get verified smart contracts
   * @param {string} [q]
   * @param {string} [filter]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getSmartContracts(
    q?: string,
    filter?: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<VerifiedContractsResponse>> {
    return DefaultApiFp(this.configuration)
      .getSmartContracts(q, filter, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get verified smart contracts counters
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getSmartContractsCounters(
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<VerifiedContractsCounters>> {
    return DefaultApiFp(this.configuration)
      .getSmartContractsCounters(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get state changes
   * @param {string} transaction_hash Transaction hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getTxsStateChanges(
    transaction_hash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<TxStateChangesResponse>> {
    return DefaultApiFp(this.configuration)
      .getTxsStateChanges(transaction_hash, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get stats counters
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getStats(
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<HomeStats>> {
    return DefaultApiFp(this.configuration)
      .getStats(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get token info
   * @param {string} address_hash Address hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getToken(
    address_hash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<TokenInfo>> {
    return DefaultApiFp(this.configuration)
      .getToken(address_hash, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get token holders
   * @param {string} address_hash Address hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getTokenCounters(
    address_hash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<TokenCounters>> {
    return DefaultApiFp(this.configuration)
      .getTokenCounters(address_hash, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get token holders
   * @param {string} address_hash Address hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getTokenHolders(
    address_hash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<TokenHoldersResponse>> {
    return DefaultApiFp(this.configuration)
      .getTokenHolders(address_hash, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get token instance holders
   * @param {string} address_hash Address hash
   * @param {number} id integer id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getTokenInstanceHolders(
    address_hash: string,
    id: number,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<NftInstanceHoldersResponse>> {
    return DefaultApiFp(this.configuration)
      .getTokenInstanceHolders(address_hash, id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get token token transfers
   * @param {string} address_hash Address hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getTokenTokenTransfers(
    address_hash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<TokenTransferResponse>> {
    return DefaultApiFp(this.configuration)
      .getTokenTokenTransfers(address_hash, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get token transfers
   * @param {string} transaction_hash Transaction hash
   * @param {string} [type]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getTxsTokenTransfers(
    transaction_hash: string,
    type?: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<TxsTokenTransferResponse>> {
    return DefaultApiFp(this.configuration)
      .getTxsTokenTransfers(transaction_hash, type, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get tokens list
   * @param {string} [q]
   * @param {string} [type]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getTokensList(
    q?: string,
    type?: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<TokensResponse>> {
    return DefaultApiFp(this.configuration)
      .getTokensList(q, type, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get tx info
   * @param {string} transaction_hash Transaction hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getTx(
    transaction_hash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<Transaction>> {
    return DefaultApiFp(this.configuration)
      .getTx(transaction_hash, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get txs
   * @param {string} [filter]
   * @param {string} [type]
   * @param {string} [method]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getTxs(
    filter?: string,
    type?: string,
    method?: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<TransactionsResponse>> {
    return DefaultApiFp(this.configuration)
      .getTxs(filter, type, method, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get txs chart
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getTxsChart(
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<ChartTransactionResponse>> {
    return DefaultApiFp(this.configuration)
      .getTxsChart(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get withdrawals
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getWithdrawals(
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<WithdrawalsResponse>> {
    return DefaultApiFp(this.configuration)
      .getWithdrawals(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get write methods
   * @param {string} address_hash Address hash
   * @param {string} [isCustomAbi]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getContractWriteMethods(
    address_hash: string,
    isCustomAbi?: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<Array<SmartContractWriteMethod>>> {
    return DefaultApiFp(this.configuration)
      .getContractWriteMethods(address_hash, isCustomAbi, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary get write methods proxy
   * @param {string} address_hash Address hash
   * @param {string} [isCustomAbi]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async getContractWriteMethodsProxy(
    address_hash: string,
    isCustomAbi?: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<Array<SmartContractWriteMethod>>> {
    return DefaultApiFp(this.configuration)
      .getContractWriteMethodsProxy(address_hash, isCustomAbi, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary query read method
   * @param {SmartContractReadQueryMethodBody} body
   * @param {string} address_hash Address hash
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async queryReadMethod(
    body: SmartContractReadQueryMethodBody,
    address_hash: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<Array<SmartContractQueryMethodRead>>> {
    return DefaultApiFp(this.configuration)
      .queryReadMethod(body, address_hash, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary search
   * @param {string} [q]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async search(
    q?: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<SearchResult>> {
    return DefaultApiFp(this.configuration)
      .search(q, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary search redirect
   * @param {string} [q]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public async searchRedirect(
    q?: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<SearchRedirectResult>> {
    return DefaultApiFp(this.configuration)
      .searchRedirect(q, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
