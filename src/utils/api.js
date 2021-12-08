import { of } from "rxjs";
import { fromFetch } from "rxjs/fetch";
import { switchMap, catchError, retry } from "rxjs/operators";

const url = new URL("https://hn.algolia.com/api/v1/search");

export function fetchStories(title) {
  const params = {
    query: title,
    tags: "story",
    restrictSearchableAttributes: "title",
    typoTolerance: "false",
  };
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );

  const data$ = fromFetch(url).pipe(
    switchMap((response) => {
      if (response.ok) {
        // OK return data
        return response.json();
      } else {
        // Server is returning a status requiring the client to try something else.
        return of({ error: true, message: `Error ${response.status}` });
      }
    }),
    // In case of error retry 2 times
    retry(2),
    catchError((err) => {
      // Network or other error, handle appropriately
      console.error(err);
      return of({ error: true, message: err.message });
    })
  );
  return data$;
}
