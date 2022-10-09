type FetcherResourceType = string;

export const config = {
  fetcher: (resource: FetcherResourceType, init: RequestInit) =>
    fetch(resource, init).then((res) => res.json()),
};
