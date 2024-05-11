import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Food } from '../components/pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurant: builder.query<Food[], void>({
      query: () => 'restaurantes'
    }),
    getFood: builder.query<Food, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantQuery, useGetFoodQuery } = api

export default api

// https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}
