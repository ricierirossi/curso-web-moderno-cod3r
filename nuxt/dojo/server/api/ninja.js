export default defineEventHandler(async (event) => {
  // handle query params
  //   const { name } = getQuery(event);

  //handle post data
  //   const { age } = await readBody(event);

  // api call with private key
  // Do lado do servido utilizamos $fetch ao invés de useFetch()

  const { currencyKey } = useRuntimeConfig();
  const { data } = await $fetch(
    `https://api.currencyapi.com/v3/latest?apikey=${currencyKey}`
  );

  return data;
});
