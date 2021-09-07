export const initRouter = (onRoute) => {
  window.addEventListener("route-change", (e) => {
    const { nextUrl } = e.detail;

    if (nextUrl) {
      history.pushState(null, null, `/VanillaJS_Notion_clone/${nextUrl}`);
      onRoute();
    }
  });
};

export const pushRoute = (nextUrl) => {
  window.dispatchEvent(
    new CustomEvent("route-change", {
      detail: {
        nextUrl,
      },
    })
  );
};
