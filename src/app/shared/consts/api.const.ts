import { environment } from "src/environments/environment"

const baseUrl = environment.baseUrl

export const LOGIN = `${baseUrl}/login`

export const GET_CUSTOMER_LIST = `${baseUrl}/customers`
export const GET_CUSTOMER_DETAIL = `${baseUrl}/customers/detail`

export const POST_CUSTOMER = `${baseUrl}/customers`
