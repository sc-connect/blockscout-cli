import globalAxios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
} from 'axios'

import { BASE_PATH } from '../base'
import { Configuration } from '../configuration'
import { DefaultApiAxiosParamCreator } from './axiosParams'

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
} from '../types/api/address'
import type { LogsResponseAddress, LogsResponseTx } from '../types/api/log'
import type { AddressesResponse } from '../types/api/addresses'
import type {
  Block,
  BlocksResponse,
  BlockTransactionsResponse,
  BlockWithdrawalsItem,
} from '../types/api/block'
import type { IndexingStatus } from '../types/api/indexingStatus'
import type { InternalTransactionsResponse } from '../types/api/internalTransaction'
import type { JsonRpcUrlResponse } from '../types/api/jsonRpc'
import type {
  Transaction,
  TransactionsResponse,
} from '../types/api/transaction'
import type {
  ChartMarketResponse,
  ChartTransactionResponse,
} from '../types/api/charts'
import type {
  AddressNftCollectionsResponse,
  AddressNftResponse,
  NftInstance,
  NftInstanceHoldersResponse,
  NftInstancesResponse,
  NftTransfersCountResponse,
} from '../types/api/nft'
import type { TokenTransferResponse } from '../types/api/tokenTransfer'
import type { RawTracesResponse } from '../types/api/rawTrace'
import type {
  SmartContract,
  SmartContractQueryMethodRead,
  SmartContractReadMethod,
  SmartContractWriteMethod,
} from '../types/api/contract'
import type { SmartContractReadQueryMethodBody } from '../types/api/readMethodQueryBody'
import type {
  VerifiedContractsCounters,
  VerifiedContractsResponse,
} from '../types/api/contracts'
import type { TxStateChangesResponse } from '../types/api/txStateChanges'
import type { HomeStats } from '../types/api/stats'
import type {
  TokenCounters,
  TokenHoldersResponse,
  TokenInfo,
} from '../types/api/token'
import type { TxsTokenTransferResponse } from '../types/api/txTokenTransfer'
import type { TokensResponse } from '../types/api/tokens'
import type { WithdrawalsResponse } from '../types/api/withdrawals'
import type { SearchRedirectResult, SearchResult } from '../types/api/search'

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function (configuration?: Configuration) {
  return {
    async getAddress(
      address_hash: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<Address>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getAddress(address_hash, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getAddressNft(
      address_hash: string,
      type?: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<AddressNftResponse>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getAddressNft(address_hash, type, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getAddressNftCollections(
      address_hash: string,
      type?: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<AddressNftCollectionsResponse>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getAddressNftCollections(address_hash, type, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getAddressBlocksValidated(
      address_hash: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<AddressBlocksValidatedResponse>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getAddressBlocksValidated(address_hash, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getAddressCoinBalanceHistory(
      address_hash: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<AddressCoinBalanceHistoryResponse>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getAddressCoinBalanceHistory(address_hash, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getAddressCoinBalanceHistoryByDay(
      address_hash: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<AddressCoinBalanceHistoryChart>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getAddressCoinBalanceHistoryByDay(address_hash, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getAddressCounters(
      address_hash: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<AddressCounters>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getAddressCounters(address_hash, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getAddressInternalTxs(
      address_hash: string,
      filter?: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<AddressInternalTxsResponse>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getAddressInternalTxs(address_hash, filter, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getAddressLogs(
      address_hash: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<LogsResponseAddress>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getAddressLogs(address_hash, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getAddressTokenBalances(
      address_hash: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<Array<AddressTokenBalance>>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getAddressTokenBalances(address_hash, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getAddressTokenTransfers(
      address_hash: string,
      type?: string,
      filter?: string,
      token?: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<AddressTokenTransferResponse>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getAddressTokenTransfers(address_hash, type, filter, token, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getAddressTokens(
      address_hash: string,
      type?: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<AddressTokensResponse>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getAddressTokens(address_hash, type, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getAddressTxs(
      address_hash: string,
      filter?: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<AddressTransactionsResponse>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getAddressTxs(address_hash, filter, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getAddressWithdrawals(
      address_hash: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<AddressWithdrawalsResponse>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getAddressWithdrawals(address_hash, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getAddresses(
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<AddressesResponse>>
    > {
      const localVarAxiosArgs =
        await DefaultApiAxiosParamCreator(configuration).getAddresses(options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getBlock(
      blockNumberOrHash: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<Block>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getBlock(blockNumberOrHash, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getBlockTxs(
      blockNumberOrHash: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<BlockTransactionsResponse>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getBlockTxs(blockNumberOrHash, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getBlockWithdrawals(
      blockNumberOrHash: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<BlockWithdrawalsItem>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getBlockWithdrawals(blockNumberOrHash, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getBlocks(
      type?: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<BlocksResponse>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getBlocks(type, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getIndexingStatus(
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<IndexingStatus>>
    > {
      const localVarAxiosArgs =
        await DefaultApiAxiosParamCreator(configuration).getIndexingStatus(
          options,
        )
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getInternalTxs(
      transaction_hash: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<InternalTransactionsResponse>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getInternalTxs(transaction_hash, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getJsonRpcUrl(
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<JsonRpcUrlResponse>>
    > {
      const localVarAxiosArgs =
        await DefaultApiAxiosParamCreator(configuration).getJsonRpcUrl(options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getLogs(
      transaction_hash: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<LogsResponseTx>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getLogs(transaction_hash, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getMainPageBlocks(
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<Array<Block>>>
    > {
      const localVarAxiosArgs =
        await DefaultApiAxiosParamCreator(configuration).getMainPageBlocks(
          options,
        )
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getMainPageTxs(
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<Array<Transaction>>>
    > {
      const localVarAxiosArgs =
        await DefaultApiAxiosParamCreator(configuration).getMainPageTxs(options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getMarketChart(
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<ChartMarketResponse>>
    > {
      const localVarAxiosArgs =
        await DefaultApiAxiosParamCreator(configuration).getMarketChart(options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getNftInstanceById(
      address_hash: string,
      id: number,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<NftInstance>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getNftInstanceById(address_hash, id, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getNftInstanceTransfers(
      address_hash: string,
      id: number,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<TokenTransferResponse>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getNftInstanceTransfers(address_hash, id, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getNftInstanceTransfersCount(
      address_hash: string,
      id: number,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<NftTransfersCountResponse>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getNftInstanceTransfersCount(address_hash, id, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getNftInstances(
      address_hash: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<NftInstancesResponse>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getNftInstances(address_hash, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getTxRawTrace(
      transaction_hash: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<RawTracesResponse>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getTxRawTrace(transaction_hash, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getContractReadMethods(
      address_hash: string,
      isCustomAbi?: string,
      from?: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<Array<SmartContractReadMethod>>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getContractReadMethods(address_hash, isCustomAbi, from, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getContractReadMethodsProxy(
      address_hash: string,
      isCustomAbi?: string,
      from?: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<Array<SmartContractReadMethod>>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getContractReadMethodsProxy(address_hash, isCustomAbi, from, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getSmartContract(
      address_hash: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<SmartContract>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getSmartContract(address_hash, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getSmartContracts(
      q?: string,
      filter?: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<VerifiedContractsResponse>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getSmartContracts(q, filter, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getSmartContractsCounters(
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<VerifiedContractsCounters>>
    > {
      const localVarAxiosArgs =
        await DefaultApiAxiosParamCreator(
          configuration,
        ).getSmartContractsCounters(options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getTxsStateChanges(
      transaction_hash: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<TxStateChangesResponse>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getTxsStateChanges(transaction_hash, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getStats(
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<HomeStats>>
    > {
      const localVarAxiosArgs =
        await DefaultApiAxiosParamCreator(configuration).getStats(options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getToken(
      address_hash: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<TokenInfo>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getToken(address_hash, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getTokenCounters(
      address_hash: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<TokenCounters>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getTokenCounters(address_hash, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getTokenHolders(
      address_hash: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<TokenHoldersResponse>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getTokenHolders(address_hash, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getTokenInstanceHolders(
      address_hash: string,
      id: number,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<NftInstanceHoldersResponse>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getTokenInstanceHolders(address_hash, id, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getTokenTokenTransfers(
      address_hash: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<TokenTransferResponse>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getTokenTokenTransfers(address_hash, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getTxsTokenTransfers(
      transaction_hash: string,
      type?: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<TxsTokenTransferResponse>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getTxsTokenTransfers(transaction_hash, type, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getTokensList(
      q?: string,
      type?: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<TokensResponse>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getTokensList(q, type, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getTx(
      transaction_hash: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<Transaction>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getTx(transaction_hash, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getTxs(
      filter?: string,
      type?: string,
      method?: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<TransactionsResponse>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getTxs(filter, type, method, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getTxsChart(
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<ChartTransactionResponse>>
    > {
      const localVarAxiosArgs =
        await DefaultApiAxiosParamCreator(configuration).getTxsChart(options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getWithdrawals(
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<WithdrawalsResponse>>
    > {
      const localVarAxiosArgs =
        await DefaultApiAxiosParamCreator(configuration).getWithdrawals(options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getContractWriteMethods(
      address_hash: string,
      isCustomAbi?: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<Array<SmartContractWriteMethod>>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getContractWriteMethods(address_hash, isCustomAbi, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async getContractWriteMethodsProxy(
      address_hash: string,
      isCustomAbi?: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<Array<SmartContractWriteMethod>>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).getContractWriteMethodsProxy(address_hash, isCustomAbi, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async queryReadMethod(
      body: SmartContractReadQueryMethodBody,
      address_hash: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<Array<SmartContractQueryMethodRead>>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).queryReadMethod(body, address_hash, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async search(
      q?: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<SearchResult>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).search(q, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },

    async searchRedirect(
      q?: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => Promise<AxiosResponse<SearchRedirectResult>>
    > {
      const localVarAxiosArgs = await DefaultApiAxiosParamCreator(
        configuration,
      ).searchRedirect(q, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH,
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        }
        return axios.request(axiosRequestArgs)
      }
    },
  }
}
