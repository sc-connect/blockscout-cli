import type {
  NFTTokenType,
  TokenHolder,
  TokenHoldersPagination,
  TokenInfo,
  TokenInstance,
  TokenInventoryPagination,
  TokenType,
} from './token'

export interface NftInstance extends TokenInstance {
  token: TokenInfo | null
}

export interface NftTransfersCountResponse {
  transfers_count: number
}

export interface NftInstancesResponse {
  items: Array<NftInstance>
  next_page_params: TokenInventoryPagination | null
}

export interface NftInstanceHoldersResponse {
  items: Array<TokenHolder>
  next_page_params: TokenHoldersPagination | null
}

export type AddressNftPagination = {
  items_count: number
  token_contract_address_hash: string
  token_id: string
  token_type: NFTTokenType
}

export interface AddressNft extends TokenInstance {
  token: TokenInfo<NFTTokenType> | null
  token_type: NFTTokenType
  value: string
}

export interface AddressNftResponse {
  items: Array<AddressNft>
  next_page_params: {
    items_count: number
    token_id: string
    token_type: TokenType
    token_contract_address_hash: string
  } | null
}

export type AddressNftCollection = {
  token: TokenInfo
  amount: string
  token_instances: Array<Omit<AddressNft, 'token'>>
}

export interface AddressNftCollectionsResponse {
  items: Array<AddressNftCollection>
  next_page_params: {
    items_count: number
    token_contract_address_hash: string
    token_type: TokenType
  } | null
}
